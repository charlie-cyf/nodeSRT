var SRTlib = require('SRT-util');
const router = require('express').Router;
module.exports = function s3(config) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.s3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (typeof config.acl !== 'string') {
        SRTlib.send('], "end": "module.exports.s3"},');

    throw new TypeError('s3: The `acl` option must be a string');
  }
  if (typeof config.getKey !== 'function') {
        SRTlib.send('], "end": "module.exports.s3"},');

    throw new TypeError('s3: The `getKey` option must be a function');
  }
  function getUploadParameters(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "getUploadParameters", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const metadata = req.query.metadata || ({});
    const key = config.getKey(req, req.query.filename, metadata);
    if (typeof key !== 'string') {
            SRTlib.send('], "end": "getUploadParameters"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      fields[`x-amz-meta-${key}`] = metadata[key];
            SRTlib.send('], "end": "emptyKey"},');

    });
    client.createPresignedPost({
      Bucket: config.bucket,
      Expires: config.expires,
      Fields: fields,
      Conditions: config.conditions
    }, (err, data) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err) {
        next(err);
                SRTlib.send('], "end": "emptyKey2"},');

        return;
      }
      res.json({
        method: 'post',
        url: data.url,
        fields: data.fields
      });
            SRTlib.send('], "end": "emptyKey2"},');

    });
        SRTlib.send('], "end": "getUploadParameters"},');

  }
  function createMultipartUpload(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "createMultipartUpload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const key = config.getKey(req, req.body.filename, req.body.metadata || ({}));
    const {type, metadata} = req.body;
    if (typeof key !== 'string') {
            SRTlib.send('], "end": "createMultipartUpload"},');

      return res.status(500).json({
        error: 's3: filename returned from `getKey` must be a string'
      });
    }
    if (typeof type !== 'string') {
            SRTlib.send('], "end": "createMultipartUpload"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err) {
        next(err);
                SRTlib.send('], "end": "emptyKey3"},');

        return;
      }
      res.json({
        key: data.Key,
        uploadId: data.UploadId
      });
            SRTlib.send('], "end": "emptyKey3"},');

    });
        SRTlib.send('], "end": "createMultipartUpload"},');

  }
  function getUploadedParts(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "getUploadedParts", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const {uploadId} = req.params;
    const {key} = req.query;
    if (typeof key !== 'string') {
            SRTlib.send('], "end": "getUploadedParts"},');

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    let parts = [];
    listPartsPage(0);
    function listPartsPage(startAt) {
            SRTlib.send(`{ "anonymous": false, "function": "listPartsPage", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      client.listParts({
        Bucket: config.bucket,
        Key: key,
        UploadId: uploadId,
        PartNumberMarker: startAt
      }, (err, data) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (err) {
          next(err);
                    SRTlib.send('], "end": "emptyKey4"},');

          return;
        }
        parts = parts.concat(data.Parts);
        if (data.IsTruncated) {
          listPartsPage(data.NextPartNumberMarker);
        } else {
          done();
        }
                SRTlib.send('], "end": "emptyKey4"},');

      });
            SRTlib.send('], "end": "listPartsPage"},');

    }
    function done() {
            SRTlib.send(`{ "anonymous": false, "function": "done", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      res.json(parts);
            SRTlib.send('], "end": "done"},');

    }
        SRTlib.send('], "end": "getUploadedParts"},');

  }
  function signPartUpload(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "signPartUpload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const {uploadId, partNumber} = req.params;
    const {key} = req.query;
    if (typeof key !== 'string') {
            SRTlib.send('], "end": "signPartUpload"},');

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    if (!parseInt(partNumber, 10)) {
            SRTlib.send('], "end": "signPartUpload"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err) {
        next(err);
                SRTlib.send('], "end": "emptyKey5"},');

        return;
      }
      res.json({
        url
      });
            SRTlib.send('], "end": "emptyKey5"},');

    });
        SRTlib.send('], "end": "signPartUpload"},');

  }
  function abortMultipartUpload(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "abortMultipartUpload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const {uploadId} = req.params;
    const {key} = req.query;
    if (typeof key !== 'string') {
            SRTlib.send('], "end": "abortMultipartUpload"},');

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    client.abortMultipartUpload({
      Bucket: config.bucket,
      Key: key,
      UploadId: uploadId
    }, (err, data) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err) {
        next(err);
                SRTlib.send('], "end": "emptyKey6"},');

        return;
      }
      res.json({});
            SRTlib.send('], "end": "emptyKey6"},');

    });
        SRTlib.send('], "end": "abortMultipartUpload"},');

  }
  function completeMultipartUpload(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "completeMultipartUpload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const {uploadId} = req.params;
    const {key} = req.query;
    const {parts} = req.body;
    if (typeof key !== 'string') {
            SRTlib.send('], "end": "completeMultipartUpload"},');

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    if (!Array.isArray(parts) || !parts.every(isValidPart)) {
            SRTlib.send('], "end": "completeMultipartUpload"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err) {
        next(err);
                SRTlib.send('], "end": "emptyKey7"},');

        return;
      }
      res.json({
        location: data.Location
      });
            SRTlib.send('], "end": "emptyKey7"},');

    });
        SRTlib.send('], "end": "completeMultipartUpload"},');

  }
    SRTlib.send('], "end": "module.exports.s3"},');

  return router().get('/params', getUploadParameters).post('/multipart', createMultipartUpload).get('/multipart/:uploadId', getUploadedParts).get('/multipart/:uploadId/:partNumber', signPartUpload).post('/multipart/:uploadId/complete', completeMultipartUpload).delete('/multipart/:uploadId', abortMultipartUpload);
    SRTlib.send('], "end": "module.exports.s3"},');

};
function isValidPart(part) {
    SRTlib.send(`{ "anonymous": false, "function": "isValidPart", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "isValidPart"},');

  return part && typeof part === 'object' && typeof part.PartNumber === 'number' && typeof part.ETag === 'string';
    SRTlib.send('], "end": "isValidPart"},');

}
