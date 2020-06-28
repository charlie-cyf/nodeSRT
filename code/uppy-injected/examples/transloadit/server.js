/*eslint-disable compat/compat*/
const SRTlib = require('SRT-util');

const http = require('http');
const qs = require('querystring');
const e = require('he').encode;
/**
* A very haxxor server that outputs some of the data it receives in a POST form parameter.
*/
const server = http.createServer(onrequest);
server.listen(9967);
function onrequest(req, res) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onrequest","fileName":"${__filename}","paramsNumber":2},`);

  if (req.url !== '/test') {
    res.writeHead(404, {
      'content-type': 'text/html'
    });
    res.end('404');
        SRTlib.send('{"type":"FUNCTIONEND","function":"onrequest"},');

    return;
  }
  let body = '';
  req.on('data', chunk => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"req.on","fileName":"${__filename}","paramsNumber":1},`);

    body += chunk;
        SRTlib.send('{"type":"FUNCTIONEND","function":"req.on"},');

  });
  req.on('end', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"req.on2","fileName":"${__filename}","paramsNumber":0},`);

    onbody(body);
        SRTlib.send('{"type":"FUNCTIONEND","function":"req.on2"},');

  });
  function onbody(body) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onbody","fileName":"${__filename}","paramsNumber":1},`);

    const fields = qs.parse(body);
    const assemblies = JSON.parse(fields.transloadit);
    res.setHeader('content-type', 'text/html');
    res.write(Header());
    res.write(FormFields(fields));
    assemblies.forEach(assembly => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"assemblies.forEach","fileName":"${__filename}","paramsNumber":1},`);

      res.write(AssemblyResult(assembly));
            SRTlib.send('{"type":"FUNCTIONEND","function":"assemblies.forEach"},');

    });
    res.end(Footer());
        SRTlib.send('{"type":"FUNCTIONEND","function":"onbody","paramsNumber":1},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"onrequest","paramsNumber":2},');

}
function Header() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Header","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"Header"},');

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
    SRTlib.send('{"type":"FUNCTIONEND","function":"Header","paramsNumber":0},');

}
function Footer() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Footer","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"Footer"},');

  return `
    </main>
    </body>
    </html>
  `;
    SRTlib.send('{"type":"FUNCTIONEND","function":"Footer","paramsNumber":0},');

}
function FormFields(fields) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"FormFields","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"FormFields"},');

  return `
    <h1>Form Fields</h1>
    <dl>
      ${Object.entries(fields).map(Field).join('\n')}
    </dl>
  `;
  function Field([name, value]) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Field","fileName":"${__filename}","paramsNumber":1},`);

    if (name === 'transloadit') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"Field"},');

      return '';
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"Field"},');

    return `
      <dt>${e(name)}</dt>
      <dd>${e(value)}</dd>
    `;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Field","paramsNumber":1},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"FormFields","paramsNumber":1},');

}
function AssemblyResult(assembly) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"AssemblyResult","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyResult"},');

  return `
    <h1>${e(assembly.assembly_id)} (${e(assembly.ok)})</h1>
    ${UploadsList(assembly.uploads)}
    ${ResultsList(assembly.results)}
  `;
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyResult","paramsNumber":1},');

}
function UploadsList(uploads) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"UploadsList","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"UploadsList"},');

  return `
    <ul>
      ${uploads.map(Upload).join('\n')}
    </ul>
  `;
  function Upload(upload) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Upload","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload"},');

    return `<li>${e(upload.name)}</li>`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload","paramsNumber":1},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"UploadsList","paramsNumber":1},');

}
function ResultsList(results) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ResultsList","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"ResultsList"},');

  return Object.keys(results).map(ResultsSection).join('\n');
  function ResultsSection(stepName) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ResultsSection","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ResultsSection"},');

    return `
      <h2>${e(stepName)}</h2>
      <ul>
        ${results[stepName].map(Result).join('\n')}
      </ul>
    `;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ResultsSection","paramsNumber":1},');

  }
  function Result(result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Result","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"Result"},');

    return `<li>${e(result.name)} <a href="${result.ssl_url}" target="_blank">View</a></li>`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Result","paramsNumber":1},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"ResultsList","paramsNumber":1},');

}
