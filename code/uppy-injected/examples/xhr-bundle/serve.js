var SRTlib = require('SRT-util');
var app = require('express')();
var cors = require('cors');
var multer = require('multer');
var upload = multer({
  storage: multer.memoryStorage()
});
app.use(cors());
app.post('/upload', upload.array('files'), uploadRoute);
app.listen(9967);
function uploadRoute(req, res) {
    SRTlib.send(`{ "anonymous": false, "function": "uploadRoute", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  res.json({
    files: req.files.map(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "files.req.files.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      delete file.buffer;
            SRTlib.send('], "end": "files.req.files.map"},');

      return file;
            SRTlib.send('], "end": "files.req.files.map"},');

    })
  });
    SRTlib.send('], "end": "uploadRoute"},');

}
