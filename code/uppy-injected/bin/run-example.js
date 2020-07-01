const SRTlib = require('SRT-util');

const path = require('path');
const {execSync} = require('child_process');
const exampleName = process.argv[2];
if (!exampleName) {
  console.error('Usage: npm run example "name-of-example"');
  process.exit(1);
}
const exampleDir = path.join(__dirname, '../examples', exampleName);
const pkg = require(path.join(exampleDir, 'package.json'));
if (pkg.scripts && pkg.scripts.build) {
  execSync('npm run build', {
    cwd: exampleDir,
    stdio: 'inherit'
  });
}
execSync('npm start', {
  cwd: exampleDir,
  stdio: 'inherit'
});
