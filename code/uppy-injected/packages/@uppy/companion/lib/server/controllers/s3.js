const SRTlib = require('SRT-util');

const router = require('express').Router;
module.exports = function s3(config) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":1},`);

  if (typeof config.acl !== 'string') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    throw new TypeError('s3: The `acl` option must be a string');
  }
  if (typeof config.getKey !== 'function') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    throw new TypeError('s3: The `getKey` option must be a function');
  }
  function getUploadParameters(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getUploadParameters","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":3},`);

    const client = req.companion.s3Client;
    const metadata = req.query.metadata || ({});
    const key = config.getKey(req, req.query.filename, metadata);
    if (typeof key !== 'string') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters"},');

      return res.status(500).json({
        error: 's3: filename returned from `getKey` must be a string'
      });
    }
    const fields = {
      acl: config.acl,
      key: key,
      success_action_status: '201',
      'content-type': req.query.type
    };
    Object.keys(metadata).forEach(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":1},`);

      fields[`x-amz-meta-${key}`] = metadata[key];
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

    });
    client.createPresignedPost({
      Bucket: config.bucket,
      Expires: config.expires,
      Fields: fields,
      Conditions: config.conditions
    }, (err, data) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.createPresignedPost","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":2},`);

      if (err) {
        next(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.createPresignedPost"},');

        return;
      }
      res.json({
        method: 'post',
        url: data.url,
        fields: data.fields
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.createPresignedPost"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters","paramsNumber":3},');

  }
  function createMultipartUpload(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createMultipartUpload","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":3},`);

    const client = req.companion.s3Client;
    const key = config.getKey(req, req.body.filename, req.body.metadata || ({}));
    const {type, metadata} = req.body;
    if (typeof key !== 'string') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"createMultipartUpload"},');

      return res.status(500).json({
        error: 's3: filename returned from `getKey` must be a string'
      });
    }
    if (typeof type !== 'string') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"createMultipartUpload"},');

      return res.status(400).json({
        error: 's3: content type must be a string'
      });
    }
    client.createMultipartUpload({
      Bucket: config.bucket,
      Key: key,
      ACL: config.acl,
      ContentType: type,
      Metadata: metadata,
      Expires: config.expires
    }, (err, data) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.createMultipartUpload","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":2},`);

      if (err) {
        next(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.createMultipartUpload"},');

        return;
      }
      res.json({
        key: data.Key,
        uploadId: data.UploadId
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.createMultipartUpload"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createMultipartUpload","paramsNumber":3},');

  }
  function getUploadedParts(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getUploadedParts","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":3},`);

    const client = req.companion.s3Client;
    const {uploadId} = req.params;
    const {key} = req.query;
    if (typeof key !== 'string') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadedParts"},');

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    let parts = [];
    listPartsPage(0);
    function listPartsPage(startAt) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"listPartsPage","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":1},`);

      client.listParts({
        Bucket: config.bucket,
        Key: key,
        UploadId: uploadId,
        PartNumberMarker: startAt
      }, (err, data) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.listParts","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":2},`);

        if (err) {
          next(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"client.listParts"},');

          return;
        }
        parts = parts.concat(data.Parts);
        if (data.IsTruncated) {
          listPartsPage(data.NextPartNumberMarker);
        } else {
          done();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.listParts"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"listPartsPage","paramsNumber":1},');

    }
    function done() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"done","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":0},`);

      res.json(parts);
            SRTlib.send('{"type":"FUNCTIONEND","function":"done","paramsNumber":0},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadedParts","paramsNumber":3},');

  }
  function signPartUpload(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"signPartUpload","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":3},`);

    const client = req.companion.s3Client;
    const {uploadId, partNumber} = req.params;
    const {key} = req.query;
    if (typeof key !== 'string') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"signPartUpload"},');

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    if (!parseInt(partNumber, 10)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"signPartUpload"},');

      return res.status(400).json({
        error: 's3: the part number must be a number between 1 and 10000.'
      });
    }
    client.getSignedUrl('uploadPart', {
      Bucket: config.bucket,
      Key: key,
      UploadId: uploadId,
      PartNumber: partNumber,
      Body: '',
      Expires: config.expires
    }, (err, url) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.getSignedUrl","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":2},`);

      if (err) {
        next(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.getSignedUrl"},');

        return;
      }
      res.json({
        url
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.getSignedUrl"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"signPartUpload","paramsNumber":3},');

  }
  function abortMultipartUpload(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"abortMultipartUpload","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":3},`);

    const client = req.companion.s3Client;
    const {uploadId} = req.params;
    const {key} = req.query;
    if (typeof key !== 'string') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"abortMultipartUpload"},');

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    client.abortMultipartUpload({
      Bucket: config.bucket,
      Key: key,
      UploadId: uploadId
    }, (err, data) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.abortMultipartUpload","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":2},`);

      if (err) {
        next(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.abortMultipartUpload"},');

        return;
      }
      res.json({});
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.abortMultipartUpload"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"abortMultipartUpload","paramsNumber":3},');

  }
  function completeMultipartUpload(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"completeMultipartUpload","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":3},`);

    const client = req.companion.s3Client;
    const {uploadId} = req.params;
    const {key} = req.query;
    const {parts} = req.body;
    if (typeof key !== 'string') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"completeMultipartUpload"},');

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    if (!Array.isArray(parts) || !parts.every(isValidPart)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"completeMultipartUpload"},');

      return res.status(400).json({
        error: 's3: `parts` must be an array of {ETag, PartNumber} objects.'
      });
    }
    client.completeMultipartUpload({
      Bucket: config.bucket,
      Key: key,
      UploadId: uploadId,
      MultipartUpload: {
        Parts: parts
      }
    }, (err, data) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.completeMultipartUpload","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":2},`);

      if (err) {
        next(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.completeMultipartUpload"},');

        return;
      }
      res.json({
        location: data.Location
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.completeMultipartUpload"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"completeMultipartUpload","paramsNumber":3},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return router().get('/params', getUploadParameters).post('/multipart', createMultipartUpload).get('/multipart/:uploadId', getUploadedParts).get('/multipart/:uploadId/:partNumber', signPartUpload).post('/multipart/:uploadId/complete', completeMultipartUpload).delete('/multipart/:uploadId', abortMultipartUpload);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
function isValidPart(part) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isValidPart","fileName":"/packages/@uppy/companion/lib/server/controllers/s3.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isValidPart"},');

  return part && typeof part === 'object' && typeof part.PartNumber === 'number' && typeof part.ETag === 'string';
    SRTlib.send('{"type":"FUNCTIONEND","function":"isValidPart","paramsNumber":1},');

}
