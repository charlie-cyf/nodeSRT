const SRTlib = require('SRT-util');

const lastCommitMessage = require('last-commit-message');
const {spawn} = require('child_process');
const {promisify} = require('util');
const once = require('events.once');
const globby = require('globby');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
async function replaceInFile(filename, replacements) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"replaceInFile","fileName":"${__filename}","paramsNumber":2},`);

  let content = await readFile(filename, 'utf8');
  for (const [rx, replacement] of replacements) {
    content = content.replace(rx, replacement);
  }
  await writeFile(filename, content, 'utf8');
    SRTlib.send('{"type":"FUNCTIONEND","function":"replaceInFile","paramsNumber":2},');

}
async function updateVersions(files, packageName) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateVersions","fileName":"${__filename}","paramsNumber":2},`);

  const {version} = require(`../packages/${packageName}/package.json`);
  const urlPart = packageName === 'uppy' ? packageName : packageName.slice(1);
  const replacements = new Map([[RegExp(`${urlPart}/v\\d+\\.\\d+\\.\\d+\\/`, 'g'), `${urlPart}/v${version}/`]]);
  console.log('replacing', replacements, 'in', files.length, 'files');
  for (const f of files) {
    await replaceInFile(f, replacements);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"updateVersions","paramsNumber":2},');

}
async function gitAdd(files) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"gitAdd","fileName":"${__filename}","paramsNumber":1},`);

  const git = spawn('git', ['add', ...files], {
    stdio: 'inherit'
  });
  const [exitCode] = await once(git, 'exit');
  if (exitCode !== 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"gitAdd"},');

    throw new Error(`git add failed with ${exitCode}`);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"gitAdd","paramsNumber":1},');

}
async function npmRunBuild() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"npmRunBuild","fileName":"${__filename}","paramsNumber":0},`);

  const npmRun = spawn('npm', ['run', 'build'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      FRESH: true,
      IS_RELEASE_BUILD: true
    }
  });
  const [exitCode] = await once(npmRun, 'exit');
  if (exitCode !== 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"npmRunBuild"},');

    throw new Error(`npm run build failed with ${exitCode}`);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"npmRunBuild","paramsNumber":0},');

}
async function main() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"main","fileName":"${__filename}","paramsNumber":0},`);

  if (process.env.ENDTOEND === '1') {
    console.log('Publishing for e2e tests, skipping version number sync.');
    process.exit(0);
  }
  const message = await lastCommitMessage();
  if (message.trim() !== 'Release') {
    console.error(`Last commit is not a release commit, but '${message}'`);
    process.exit(1);
  }
  const files = await globby(['README.md', 'examples/**/*.html', 'packages/*/README.md', 'packages/@uppy/*/README.md', 'website/src/docs/**', 'website/src/examples/**', 'website/themes/uppy/layout/**', '!**/node_modules/**']);
  await updateVersions(files, 'uppy');
  await updateVersions(files, '@uppy/robodog');
  await updateVersions(files, '@uppy/locales');
  const isIgnored = await globby.gitignore();
  await gitAdd(files.filter(filename => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"gitAdd.files.filter","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"gitAdd.files.filter"},');

    return !isIgnored(filename);
        SRTlib.send('{"type":"FUNCTIONEND","function":"gitAdd.files.filter"},');

  }));
  await npmRunBuild();
    SRTlib.send('{"type":"FUNCTIONEND","function":"main","paramsNumber":0},');

}
main().catch(function (err) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"main.catch","fileName":"${__filename}","paramsNumber":1},`);

  console.error(err.stack);
  process.exit(1);
    SRTlib.send('{"type":"FUNCTIONEND","function":"main.catch"},');

});
