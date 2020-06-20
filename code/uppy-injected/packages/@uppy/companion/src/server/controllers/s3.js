var SRTlib = require('SRT-util');
const router = require('express').Router;
module.exports = function s3(config) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.s3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (typeof config.acl !== 'string') {
        SRTlib.send("]},");

    throw new TypeError('s3: The `acl` option must be a string');
  }
  if (typeof config.getKey !== 'function') {
        SRTlib.send("]},");

    throw new TypeError('s3: The `getKey` option must be a function');
  }
  function getUploadParameters(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "getUploadParameters", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const metadata = req.query.metadata || ({});
    const key = config.getKey(req, req.query.filename, metadata);
    if (typeof key !== 'string') {
            SRTlib.send("]},");

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
            SRTlib.send("]},");

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
                SRTlib.send("]},");

        return;
      }
      res.json({
        method: 'post',
        url: data.url,
        fields: data.fields
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  function createMultipartUpload(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "createMultipartUpload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const key = config.getKey(req, req.body.filename, req.body.metadata || ({}));
    const {type, metadata} = req.body;
    if (typeof key !== 'string') {
            SRTlib.send("]},");

      return res.status(500).json({
        error: 's3: filename returned from `getKey` must be a string'
      });
    }
    if (typeof type !== 'string') {
            SRTlib.send("]},");

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
                SRTlib.send("]},");

        return;
      }
      res.json({
        key: data.Key,
        uploadId: data.UploadId
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  function getUploadedParts(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "getUploadedParts", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const {uploadId} = req.params;
    const {key} = req.query;
    if (typeof key !== 'string') {
            SRTlib.send("]},");

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
                    SRTlib.send("]},");

          return;
        }
        parts = parts.concat(data.Parts);
        if (data.IsTruncated) {
          listPartsPage(data.NextPartNumberMarker);
        } else {
          done();
        }
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    }
    function done() {
            SRTlib.send(`{ "anonymous": false, "function": "done", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      res.json(parts);
            SRTlib.send("]},");

    }
        SRTlib.send("]},");

  }
  function signPartUpload(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "signPartUpload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const {uploadId, partNumber} = req.params;
    const {key} = req.query;
    if (typeof key !== 'string') {
            SRTlib.send("]},");

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    if (!parseInt(partNumber, 10)) {
            SRTlib.send("]},");

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
                SRTlib.send("]},");

        return;
      }
      res.json({
        url
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  function abortMultipartUpload(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "abortMultipartUpload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const {uploadId} = req.params;
    const {key} = req.query;
    if (typeof key !== 'string') {
            SRTlib.send("]},");

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
                SRTlib.send("]},");

        return;
      }
      res.json({});
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  function completeMultipartUpload(req, res, next) {
        SRTlib.send(`{ "anonymous": false, "function": "completeMultipartUpload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const client = req.companion.s3Client;
    const {uploadId} = req.params;
    const {key} = req.query;
    const {parts} = req.body;
    if (typeof key !== 'string') {
            SRTlib.send("]},");

      return res.status(400).json({
        error: 's3: the object key must be passed as a query parameter. For example: "?key=abc.jpg"'
      });
    }
    if (!Array.isArray(parts) || !parts.every(isValidPart)) {
            SRTlib.send("]},");

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
                SRTlib.send("]},");

        return;
      }
      res.json({
        location: data.Location
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
    SRTlib.send("]},");

  return router().get('/params', getUploadParameters).post('/multipart', createMultipartUpload).get('/multipart/:uploadId', getUploadedParts).get('/multipart/:uploadId/:partNumber', signPartUpload).post('/multipart/:uploadId/complete', completeMultipartUpload).delete('/multipart/:uploadId', abortMultipartUpload);
    SRTlib.send("]},");

};
function isValidPart(part) {
    SRTlib.send(`{ "anonymous": false, "function": "isValidPart", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return part && typeof part === 'object' && typeof part.PartNumber === 'number' && typeof part.ETag === 'string';
    SRTlib.send("]},");

}
