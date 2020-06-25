const SRTlib = require('SRT-util');
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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadRoute","fileName":"${__filename}","paramsNumber":2},`);

  res.json({
    files: req.files.map(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.req.files.map","fileName":"${__filename}","paramsNumber":1},`);

      delete file.buffer;
            SRTlib.send('{"type":"FUNCTIONEND","function":"files.req.files.map"},');

      return file;
            SRTlib.send('{"type":"FUNCTIONEND","function":"files.req.files.map"},');

    })
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRoute","paramsNumber":2},');

}
