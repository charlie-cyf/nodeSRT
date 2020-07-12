const SRTlib = require('SRT-util');

const path = require('path');
const AWS = require('aws-sdk');
const packlist = require('npm-packlist');
const tar = require('tar');
const pacote = require('pacote');
const concat = require('concat-stream');
const mime = require('mime-types');
const {promisify} = require('util');
const readFile = promisify(require('fs').readFile);
const finished = promisify(require('stream').finished);
const AdmZip = require('adm-zip');
function delay(ms) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"delay","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"delay"},');

  return new Promise(resolve => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

    return setTimeout(resolve, ms);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"delay","paramsNumber":1},');

}
const AWS_REGION = 'us-east-1';
const AWS_BUCKET = 'crates.edgly.net';
const AWS_DIRECTORY = '756b8efaed084669b02cb99d4540d81f/default';
async function getRemoteDistFiles(packageName, version) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getRemoteDistFiles","fileName":"/bin/upload-to-cdn.js","paramsNumber":2},`);

  const files = new Map();
  const tarball = pacote.tarball.stream(`${packageName}@${version}`).pipe(new tar.Parse());
  tarball.on('entry', readEntry => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"tarball.on","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

    if (readEntry.path.startsWith('package/dist/')) {
      readEntry.pipe(concat(buf => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"readEntry.pipe.on.readEntry.pipe.concat","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

        files.set(readEntry.path.replace(/^package\/dist\//, ''), buf);
                SRTlib.send('{"type":"FUNCTIONEND","function":"readEntry.pipe.on.readEntry.pipe.concat"},');

      })).on('error', err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"readEntry.pipe.on","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

        tarball.emit('error', err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"readEntry.pipe.on"},');

      });
    } else {
      readEntry.resume();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"tarball.on"},');

  });
  await finished(tarball);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getRemoteDistFiles"},');

  return files;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getRemoteDistFiles","paramsNumber":2},');

}
async function getLocalDistFiles(packagePath) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getLocalDistFiles","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

  const files = (await packlist({
    path: packagePath
  })).filter(f => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.filter.map.filter","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"files.filter.map.filter"},');

    return f.startsWith('dist/');
        SRTlib.send('{"type":"FUNCTIONEND","function":"files.filter.map.filter"},');

  }).map(f => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.filter.map","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"files.filter.map"},');

    return f.replace(/^dist\//, '');
        SRTlib.send('{"type":"FUNCTIONEND","function":"files.filter.map"},');

  });
  const entries = await Promise.all(files.map(async f => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"entries.Promise.all.files.map","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"entries.Promise.all.files.map"},');

    return [f, await readFile(path.join(packagePath, 'dist', f))];
        SRTlib.send('{"type":"FUNCTIONEND","function":"entries.Promise.all.files.map"},');

  }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"getLocalDistFiles"},');

  return new Map(entries);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getLocalDistFiles","paramsNumber":1},');

}
async function main(packageName, version) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"main","fileName":"/bin/upload-to-cdn.js","paramsNumber":2},`);

  if (!packageName) {
    console.error('usage: upload-to-cdn <packagename> [version]');
    console.error('Must provide a package name');
    process.exit(1);
  }
  if (!process.env.EDGLY_KEY || !process.env.EDGLY_SECRET) {
    console.error('Missing EDGLY_KEY or EDGLY_SECRET env variables, bailing');
    process.exit(1);
  }
  if (version && version.startsWith('-')) version = undefined;
  const s3 = new AWS.S3({
    credentials: new AWS.Credentials({
      accessKeyId: process.env.EDGLY_KEY,
      secretAccessKey: process.env.EDGLY_SECRET
    }),
    region: AWS_REGION
  });
  const remote = !!version;
  if (!remote) {
    version = require(`../packages/${packageName}/package.json`).version;
  }
  if (!remote && !process.env.CI) {
    console.log('Warning, writing a local build to the CDN, this is usually not what you want. Sleeping 3s. Press CTRL+C!');
    await delay(3000);
  }
  const packagePath = remote ? `${packageName}@${version}` : path.join(__dirname, '..', 'packages', packageName);
  const dirName = packageName.startsWith('@uppy/') ? packageName.replace(/^@/, '') : 'uppy';
  const outputPath = path.posix.join('releases', dirName, `v${version}`);
  const {Contents: existing} = await s3.listObjects({
    Bucket: AWS_BUCKET,
    Prefix: `${AWS_DIRECTORY}/${outputPath}/`
  }).promise();
  if (existing.length > 0) {
    if (process.argv.includes('--force')) {
      console.warn(`WARN Release files for ${dirName} v${version} already exist, overwriting...`);
    } else {
      console.error(`Release files for ${dirName} v${version} already exist, exiting...`);
      process.exit(1);
    }
  }
  const files = remote ? await getRemoteDistFiles(packageName, version) : await getLocalDistFiles(packagePath);
  if (packageName === 'uppy') {
    const zip = new AdmZip();
    for (const [filename, buffer] of files.entries()) {
      zip.addFile(filename, buffer);
    }
    files.set(`uppy-v${version}.zip`, zip.toBuffer());
  }
  for (const [filename, buffer] of files.entries()) {
    const key = path.posix.join(AWS_DIRECTORY, outputPath, filename);
    console.log(`pushing s3://${AWS_BUCKET}/${key}`);
    await s3.putObject({
      Bucket: AWS_BUCKET,
      Key: key,
      ContentType: mime.lookup(filename),
      Body: buffer
    }).promise();
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"main","paramsNumber":2},');

}
main(...process.argv.slice(2)).catch(err => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"main.catch","fileName":"/bin/upload-to-cdn.js","paramsNumber":1},`);

  console.error(err.stack);
  process.exit(1);
    SRTlib.send('{"type":"FUNCTIONEND","function":"main.catch"},');

});
