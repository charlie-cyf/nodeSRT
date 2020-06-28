const SRTlib = require('SRT-util');

var formidable = require('formidable');
var http = require('http');
http.createServer(function (req, res) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"http.createServer.listen.http.createServer","fileName":"${__filename}","paramsNumber":2},`);

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    // 30 days
    'Access-Control-Max-Age': 2592000
    /** add other headers as per requirement*/
  };
  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
        SRTlib.send('{"type":"FUNCTIONEND","function":"http.createServer.listen.http.createServer"},');

    return;
  }
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();
    form.uploadDir = './uploads';
    form.keepExtensions = true;
    form.parse(req, function (err, fields, files) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"http.createServer.listen.http.createServer.form.parse","fileName":"${__filename}","paramsNumber":3},`);

      if (err) {
        console.log('some error', err);
        res.writeHead(200, headers);
        res.write(JSON.stringify(err));
                SRTlib.send('{"type":"FUNCTIONEND","function":"http.createServer.listen.http.createServer.form.parse"},');

        return res.end();
      }
      var file = files['files[]'];
      console.log('saved file to', file.path);
      console.log('original name', file.name);
      console.log('type', file.type);
      console.log('size', file.size);
      res.writeHead(200, headers);
      res.write(JSON.stringify({
        fields,
        files
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"http.createServer.listen.http.createServer.form.parse"},');

      return res.end();
            SRTlib.send('{"type":"FUNCTIONEND","function":"http.createServer.listen.http.createServer.form.parse"},');

    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"http.createServer.listen.http.createServer"},');

}).listen(3020, () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"http.createServer.listen","fileName":"${__filename}","paramsNumber":0},`);

  console.log('server started');
    SRTlib.send('{"type":"FUNCTIONEND","function":"http.createServer.listen"},');

});
