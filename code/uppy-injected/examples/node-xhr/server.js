var SRTlib = require('SRT-util');
var formidable = require('formidable');
var http = require('http');
http.createServer(function (req, res) {
    SRTlib.send(`{ "anonymous": true, "function": "listen2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000
  };
  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
        SRTlib.send('], "end": "listen2"},');

    return;
  }
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    var form = new formidable.IncomingForm();
    form.uploadDir = './uploads';
    form.keepExtensions = true;
    form.parse(req, function (err, fields, files) {
            SRTlib.send(`{ "anonymous": true, "function": "listen", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err) {
        console.log('some error', err);
        res.writeHead(200, headers);
        res.write(JSON.stringify(err));
                SRTlib.send('], "end": "listen"},');

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
            SRTlib.send('], "end": "listen"},');

      return res.end();
            SRTlib.send('], "end": "listen"},');

    });
  }
    SRTlib.send('], "end": "listen2"},');

}).listen(3020, () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  console.log('server started');
    SRTlib.send('], "end": "emptyKey"},');

});
