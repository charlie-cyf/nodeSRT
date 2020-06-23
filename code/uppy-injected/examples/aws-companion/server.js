var SRTlib = require('SRT-util');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const companion = require('../../packages/@uppy/companion');
const app = require('express')();
const DATA_DIR = path.join(__dirname, 'tmp');
app.use(require('cors')({
  origin: true,
  credentials: true
}));
app.use(require('cookie-parser')());
app.use(require('body-parser').json());
app.use(require('express-session')({
  secret: 'hello planet'
}));
const options = {
  providerOptions: {
    google: {
      key: process.env.COMPANION_GOOGLE_KEY,
      secret: process.env.COMPANION_GOOGLE_SECRET
    },
    s3: {
      getKey: (req, filename) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        return `whatever/${Math.random().toString(32).slice(2)}/${filename}`;
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      },
      key: process.env.COMPANION_AWS_KEY,
      secret: process.env.COMPANION_AWS_SECRET,
      bucket: process.env.COMPANION_AWS_BUCKET,
      region: process.env.COMPANION_AWS_REGION,
      endpoint: process.env.COMPANION_AWS_ENDPOINT
    }
  },
  server: {
    host: 'localhost:3020'
  },
  filePath: DATA_DIR,
  secret: 'blah blah',
  debug: true
};
try {
  fs.accessSync(DATA_DIR);
} catch (err) {
  fs.mkdirSync(DATA_DIR);
}
process.on('exit', function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

  rimraf.sync(DATA_DIR);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

});
app.use(companion.app(options));
const server = app.listen(3020, () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

  console.log('listening on port 3020');
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

});
companion.socket(server, options);