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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.use.getUploadParameters","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters"},');

    // Send a request to our PHP signing endpoint.
    return fetch('/s3-sign.php', {
      method: 'post',
      // Send and receive JSON.
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type
      })
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then.fetch.then"},');

      // Parse the JSON response.
      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then.fetch.then"},');

    }).then(data => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.use.getUploadParameters.ReturnStatement.fetch.then.then"},');

      // Return an object in the correct shape.
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
