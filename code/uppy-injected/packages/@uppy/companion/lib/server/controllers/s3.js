const SRTlib = require('SRT-util');

const router = require('express').Router;
module.exports = function s3(config) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  if (typeof config.acl !== 'string') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    throw new TypeError('s3: The `acl` option must be a string');
  }
  if (typeof config.getKey !== 'function') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    throw new TypeError('s3: The `getKey` option must be a function');
  }
  /**
  * Get upload paramaters for a simple direct upload.
  *
  * Expected query parameters:
  *  - filename - The name of the file, given to the `config.getKey`
  *    option to determine the object key name in the S3 bucket.
  *  - type - The MIME type of the file.
  *  - metadata - Key/value pairs configuring S3 metadata. Both must be ASCII-safe.
  *    Query parameters are formatted like `metadata[name]=value`.
  *
  * Response JSON:
  *  - method - The HTTP method to use to upload.
  *  - url - The URL to upload to.
  *  - fields - Form fields to send along.
  */
  function getUploadParameters(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getUploadParameters","fileName":"${__filename}","paramsNumber":3},`);

    // @ts-ignore The `companion` property is added by middleware before reaching here.
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"forEach","fileName":"${__filename}","paramsNumber":1},`);

      fields[`x-amz-meta-${key}`] = metadata[key];
            SRTlib.send('{"type":"FUNCTIONEND","function":"forEach"},');

    });
    client.createPresignedPost({
      Bucket: config.bucket,
      Expires: config.expires,
      Fields: fields,
      Conditions: config.conditions
    }, (err, data) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.createPresignedPost","fileName":"${__filename}","paramsNumber":2},`);

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
  /**
  * Create an S3 multipart upload. With this, files can be uploaded in chunks of 5MB+ each.
  *
  * Expected JSON body:
  *  - filename - The name of the file, given to the `config.getKey`
  *    option to determine the object key name in the S3 bucket.
  *  - type - The MIME type of the file.
  *  - metadata - An object with the key/value pairs to set as metadata.
  *    Keys and values must be ASCII-safe for S3.
  *
  * Response JSON:
  *  - key - The object key in the S3 bucket.
  *  - uploadId - The ID of this multipart upload, to be used in later requests.
  */
  function createMultipartUpload(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createMultipartUpload","fileName":"${__filename}","paramsNumber":3},`);

    // @ts-ignore The `companion` property is added by middleware before reaching here.
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.createMultipartUpload","fileName":"${__filename}","paramsNumber":2},`);

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
  /**
  * List parts that have been fully uploaded so far.
  *
  * Expected URL parameters:
  *  - uploadId - The uploadId returned from `createMultipartUpload`.
  * Expected query parameters:
  *  - key - The object key in the S3 bucket.
  * Response JSON:
  *  - An array of objects representing parts:
  *     - PartNumber - the index of this part.
  *     - ETag - a hash of this part's contents, used to refer to it.
  *     - Size - size of this part.
  */
  function getUploadedParts(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getUploadedParts","fileName":"${__filename}","paramsNumber":3},`);

    // @ts-ignore The `companion` property is added by middleware before reaching here.
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"listPartsPage","fileName":"${__filename}","paramsNumber":1},`);

      client.listParts({
        Bucket: config.bucket,
        Key: key,
        UploadId: uploadId,
        PartNumberMarker: startAt
      }, (err, data) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.listParts","fileName":"${__filename}","paramsNumber":2},`);

        if (err) {
          next(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"client.listParts"},');

          return;
        }
        parts = parts.concat(data.Parts);
        if (data.IsTruncated) {
          // Get the next page.
          listPartsPage(data.NextPartNumberMarker);
        } else {
          done();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.listParts"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"listPartsPage","paramsNumber":1},');

    }
    function done() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"done","fileName":"${__filename}","paramsNumber":0},`);

      res.json(parts);
            SRTlib.send('{"type":"FUNCTIONEND","function":"done","paramsNumber":0},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadedParts","paramsNumber":3},');

  }
  /**
  * Get parameters for uploading one part.
  *
  * Expected URL parameters:
  *  - uploadId - The uploadId returned from `createMultipartUpload`.
  *  - partNumber - This part's index in the file (1-10000).
  * Expected query parameters:
  *  - key - The object key in the S3 bucket.
  * Response JSON:
  *  - url - The URL to upload to, including signed query parameters.
  */
  function signPartUpload(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"signPartUpload","fileName":"${__filename}","paramsNumber":3},`);

    // @ts-ignore The `companion` property is added by middleware before reaching here.
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.getSignedUrl","fileName":"${__filename}","paramsNumber":2},`);

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
  /**
  * Abort a multipart upload, deleting already uploaded parts.
  *
  * Expected URL parameters:
  *  - uploadId - The uploadId returned from `createMultipartUpload`.
  * Expected query parameters:
  *  - key - The object key in the S3 bucket.
  * Response JSON:
  *   Empty.
  */
  function abortMultipartUpload(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"abortMultipartUpload","fileName":"${__filename}","paramsNumber":3},`);

    // @ts-ignore The `companion` property is added by middleware before reaching here.
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.abortMultipartUpload","fileName":"${__filename}","paramsNumber":2},`);

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
  /**
  * Complete a multipart upload, combining all the parts into a single object in the S3 bucket.
  *
  * Expected URL parameters:
  *  - uploadId - The uploadId returned from `createMultipartUpload`.
  * Expected query parameters:
  *  - key - The object key in the S3 bucket.
  * Expected JSON body:
  *  - parts - An array of parts, see the `getUploadedParts` response JSON.
  * Response JSON:
  *  - location - The full URL to the object in the S3 bucket.
  */
  function completeMultipartUpload(req, res, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"completeMultipartUpload","fileName":"${__filename}","paramsNumber":3},`);

    // @ts-ignore The `companion` property is added by middleware before reaching here.
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.completeMultipartUpload","fileName":"${__filename}","paramsNumber":2},`);

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isValidPart","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isValidPart"},');

  return part && typeof part === 'object' && typeof part.PartNumber === 'number' && typeof part.ETag === 'string';
    SRTlib.send('{"type":"FUNCTIONEND","function":"isValidPart","paramsNumber":1},');

}
