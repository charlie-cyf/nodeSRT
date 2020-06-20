var SRTlib = require('SRT-util');
const fs = require('fs');
const path = require('path');
const budo = require('budo');
const router = require('router');
const companion = require('../../packages/@uppy/companion');
if (!process.env.COMPANION_AWS_REGION) throw new Error('Missing Space region, please set the COMPANION_AWS_REGION environment variable (eg. "COMPANION_AWS_REGION=ams3")');
if (!process.env.COMPANION_AWS_KEY) throw new Error('Missing access key, please set the COMPANION_AWS_KEY environment variable');
if (!process.env.COMPANION_AWS_SECRET) throw new Error('Missing secret key, please set the COMPANION_AWS_SECRET environment variable');
if (!process.env.COMPANION_AWS_BUCKET) throw new Error('Missing Space name, please set the COMPANION_AWS_BUCKET environment variable');
const PORT = process.env.PORT || 3452;
const app = router();
app.use(require('cors')());
app.use(require('body-parser').json());
app.use('/companion', companion.app({
  providerOptions: {
    s3: {
      endpoint: 'https://{region}.digitaloceanspaces.com',
      getKey: (req, filename) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send("]},");

        return `uploads/${filename}`;
                SRTlib.send("]},");

      },
      key: process.env.COMPANION_AWS_KEY,
      secret: process.env.COMPANION_AWS_SECRET,
      bucket: process.env.COMPANION_AWS_BUCKET,
      region: process.env.COMPANION_AWS_REGION
    }
  },
  server: {
    serverUrl: `localhost:${PORT}`
  }
}));
app.get('/uppy.min.css', (req, res) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  res.setHeader('content-type', 'text/css');
  fs.createReadStream(path.join('../../packages/uppy/dist/uppy.min.css')).pipe(res);
    SRTlib.send("]},");

});
budo(path.join(__dirname, 'main.js'), {
  live: true,
  stream: process.stdout,
  port: PORT,
  middleware: app,
  browserify: {
    transform: ['babelify', ['aliasify', {
      aliases: {
        '@uppy': path.join(__dirname, '../../packages/@uppy')
      }
    }]]
  }
});
