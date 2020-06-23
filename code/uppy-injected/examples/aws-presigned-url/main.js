var SRTlib = require('SRT-util');
const Uppy = require('@uppy/core');
const Dashboard = require('@uppy/dashboard');
const AwsS3 = require('@uppy/aws-s3');
const uppy = Uppy({
  debug: true
});
uppy.use(Dashboard, {
  inline: true,
  target: 'body'
});
uppy.use(AwsS3, {
  getUploadParameters(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"getUploadParameters","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters"},');

    return fetch('/s3-sign.php', {
      method: 'post',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type
      })
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    }).then(data => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

      return {
        method: data.method,
        url: data.url,
        fields: data.fields,
        headers: data.headers
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters"},');

  }
});
