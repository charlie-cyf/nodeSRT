var SRTlib = require('SRT-util');
const execa = require('execa');
const fs = require('fs');
const README_FILE_NAME = 'README.md';
async function updateContributorsListInReadme() {
    SRTlib.send(`{ "anonymous": false, "function": "updateContributorsListInReadme", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  const readme = fs.readFileSync(README_FILE_NAME, 'utf-8');
  const args = ['--owner', 'transloadit', '--repo', 'uppy', '--cols', '6', '--format', 'md', '--showlogin', 'true', '--sortOrder', 'desc'];
  if (process.env.GITHUB_TOKEN) {
    args.push('--authToken', process.env.GITHUB_TOKEN);
  }
  const {stdout} = await execa('githubcontrib', args, {
    encoding: 'utf-8'
  });
  console.log(stdout);
  if (stdout === '' || stdout === null) {
    console.log('Empty response from githubcontrib. GitHub’s rate limit?');
        SRTlib.send("]},");

    return;
  }
  const readmeWithUpdatedContributors = readme.replace(/<!--contributors-->[\s\S]+<!--\/contributors-->/, `<!--contributors-->\n${stdout}\n<!--/contributors-->`);
  fs.writeFileSync(README_FILE_NAME, readmeWithUpdatedContributors);
    SRTlib.send("]},");

}
updateContributorsListInReadme();
