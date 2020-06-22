var SRTlib = require('SRT-util');
const http = require('http');
const qs = require('querystring');
const e = require('he').encode;
const server = http.createServer(onrequest);
server.listen(9967);
function onrequest(req, res) {
    SRTlib.send(`{ "anonymous": false, "function": "onrequest", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (req.url !== '/test') {
    res.writeHead(404, {
      'content-type': 'text/html'
    });
    res.end('404');
        SRTlib.send('], "end": "onrequest"},');

    return;
  }
  let body = '';
  req.on('data', chunk => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    body += chunk;
        SRTlib.send('], "end": "emptyKey"},');

  });
  req.on('end', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    onbody(body);
        SRTlib.send('], "end": "emptyKey2"},');

  });
  function onbody(body) {
        SRTlib.send(`{ "anonymous": false, "function": "onbody", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const fields = qs.parse(body);
    const assemblies = JSON.parse(fields.transloadit);
    res.setHeader('content-type', 'text/html');
    res.write(Header());
    res.write(FormFields(fields));
    assemblies.forEach(assembly => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      res.write(AssemblyResult(assembly));
            SRTlib.send('], "end": "emptyKey3"},');

    });
    res.end(Footer());
        SRTlib.send('], "end": "onbody"},');

  }
    SRTlib.send('], "end": "onrequest"},');

}
function Header() {
    SRTlib.send(`{ "anonymous": false, "function": "Header", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "Header"},');

  return `
    <!DOCTYPE html>
    <html>
    <head>
    <style>
      body { background: #f1f1f1; }
      main {
        padding: 20px;
        font: 12pt sans-serif;
        background: white;
        width: 800px;
        margin: auto;
      }
    </style>
    </head>
    <body>
    <main>
  `;
    SRTlib.send('], "end": "Header"},');

}
function Footer() {
    SRTlib.send(`{ "anonymous": false, "function": "Footer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "Footer"},');

  return `
    </main>
    </body>
    </html>
  `;
    SRTlib.send('], "end": "Footer"},');

}
function FormFields(fields) {
    SRTlib.send(`{ "anonymous": false, "function": "FormFields", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "FormFields"},');

  return `
    <h1>Form Fields</h1>
    <dl>
      ${Object.entries(fields).map(Field).join('\n')}
    </dl>
  `;
  function Field([name, value]) {
        SRTlib.send(`{ "anonymous": false, "function": "Field", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (name === 'transloadit') {
            SRTlib.send('], "end": "Field"},');

      return '';
    }
        SRTlib.send('], "end": "Field"},');

    return `
      <dt>${e(name)}</dt>
      <dd>${e(value)}</dd>
    `;
        SRTlib.send('], "end": "Field"},');

  }
    SRTlib.send('], "end": "FormFields"},');

}
function AssemblyResult(assembly) {
    SRTlib.send(`{ "anonymous": false, "function": "AssemblyResult", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "AssemblyResult"},');

  return `
    <h1>${e(assembly.assembly_id)} (${e(assembly.ok)})</h1>
    ${UploadsList(assembly.uploads)}
    ${ResultsList(assembly.results)}
  `;
    SRTlib.send('], "end": "AssemblyResult"},');

}
function UploadsList(uploads) {
    SRTlib.send(`{ "anonymous": false, "function": "UploadsList", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "UploadsList"},');

  return `
    <ul>
      ${uploads.map(Upload).join('\n')}
    </ul>
  `;
  function Upload(upload) {
        SRTlib.send(`{ "anonymous": false, "function": "Upload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "Upload"},');

    return `<li>${e(upload.name)}</li>`;
        SRTlib.send('], "end": "Upload"},');

  }
    SRTlib.send('], "end": "UploadsList"},');

}
function ResultsList(results) {
    SRTlib.send(`{ "anonymous": false, "function": "ResultsList", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "ResultsList"},');

  return Object.keys(results).map(ResultsSection).join('\n');
  function ResultsSection(stepName) {
        SRTlib.send(`{ "anonymous": false, "function": "ResultsSection", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "ResultsSection"},');

    return `
      <h2>${e(stepName)}</h2>
      <ul>
        ${results[stepName].map(Result).join('\n')}
      </ul>
    `;
        SRTlib.send('], "end": "ResultsSection"},');

  }
  function Result(result) {
        SRTlib.send(`{ "anonymous": false, "function": "Result", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "Result"},');

    return `<li>${e(result.name)} <a href="${result.ssl_url}" target="_blank">View</a></li>`;
        SRTlib.send('], "end": "Result"},');

  }
    SRTlib.send('], "end": "ResultsList"},');

}
