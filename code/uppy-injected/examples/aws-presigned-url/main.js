const SRTlib = require('SRT-util');

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.use.getUploadParameters","fileName":"/examples/aws-presigned-url/main.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters"},');

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then.fetch.then","fileName":"/examples/aws-presigned-url/main.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then.fetch.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then.fetch.then"},');

    }).then(data => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then","fileName":"/examples/aws-presigned-url/main.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then"},');

      return {
        method: data.method,
        url: data.url,
        fields: data.fields,
        headers: data.headers
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters"},');

  }
});
