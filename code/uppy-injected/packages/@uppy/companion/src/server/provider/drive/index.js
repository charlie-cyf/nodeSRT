const SRTlib = require('SRT-util');

const Provider = require('../Provider');
const request = require('request');
const purest = require('purest')({
  request
});
const logger = require('../../logger');
const adapter = require('./adapter');
const {ProviderApiError, ProviderAuthError} = require('../error');
const DRIVE_FILE_FIELDS = 'kind,id,name,mimeType,ownedByMe,permissions(role,emailAddress),size,modifiedTime,iconLink,thumbnailLink,teamDriveId';
const DRIVE_FILES_FIELDS = `kind,nextPageToken,incompleteSearch,files(${DRIVE_FILE_FIELDS})`;
const SHARED_DRIVE_FIELDS = '*';
class Drive extends Provider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    super(options);
    this.authProvider = options.provider = Drive.authProvider;
    options.alias = 'drive';
    options.version = 'v3';
    this.client = purest(options);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":0,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return 'google';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
  list(options, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    const directory = options.directory || 'root';
    const query = options.query || ({});
    let sharedDrivesPromise = Promise.resolve(undefined);
    const shouldListSharedDrives = directory === 'root' && !query.cursor;
    if (shouldListSharedDrives) {
      sharedDrivesPromise = new Promise(resolve => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"sharedDrivesPromise.NewExpression","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

        this.client.query().get('drives').qs({
          fields: SHARED_DRIVE_FIELDS
        }).auth(options.token).request((err, resp) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.query.get.qs.auth.request","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2},`);

          if (err) {
            logger.error(err, 'provider.drive.sharedDrive.error');
                        SRTlib.send('{"type":"FUNCTIONEND","function":"client.query.get.qs.auth.request"},');

            return;
          }
          resolve(resp);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"client.query.get.qs.auth.request"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"sharedDrivesPromise.NewExpression"},');

      });
    }
    const where = {
      fields: DRIVE_FILES_FIELDS,
      pageToken: query.cursor,
      q: `'${directory}' in parents and trashed=false`,
      includeItemsFromAllDrives: true,
      supportsAllDrives: true
    };
    const filesPromise = new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"filesPromise.NewExpression","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2},`);

      this.client.query().get('files').qs(where).auth(options.token).request((err, resp) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.query.get.qs.auth.request###2","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2},`);

        if (err || resp.statusCode !== 200) {
          reject(this._error(err, resp));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"client.query.get.qs.auth.request###2"},');

          return;
        }
        resolve(resp);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.query.get.qs.auth.request###2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"filesPromise.NewExpression"},');

    });
    Promise.all([sharedDrivesPromise, filesPromise]).then(([sharedDrives, filesResponse]) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Promise.all.then","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

      const returnData = this.adaptData(filesResponse.body, sharedDrives && sharedDrives.body, directory, query);
      done(null, returnData);
            SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.all.then"},');

    }, reqErr => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Promise.all.then###2","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

      logger.error(reqErr, 'provider.drive.list.error');
      done(reqErr);
            SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.all.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  stats({id, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"stats","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"stats"},');

    return this.client.query().get(`files/${id}`).qs({
      fields: DRIVE_FILE_FIELDS,
      supportsAllDrives: true
    }).auth(token).request(done);
        SRTlib.send('{"type":"FUNCTIONEND","function":"stats"},');

  }
  _exportGsuiteFile(id, token, mimeType) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_exportGsuiteFile","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":3,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    logger.info(`calling google file export for ${id} to ${mimeType}`, 'provider.drive.export');
        SRTlib.send('{"type":"FUNCTIONEND","function":"_exportGsuiteFile"},');

    return this.client.query().get(`files/${id}/export`).qs({
      supportsAllDrives: true,
      mimeType
    }).auth(token).request();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_exportGsuiteFile"},');

  }
  _waitForFailedResponse(resp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_waitForFailedResponse","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_waitForFailedResponse"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2},`);

      let data = '';
      resp.on('data', chunk => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"resp.on.on.resp.on","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

        data += chunk;
                SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on.on.resp.on"},');

      }).on('end', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"resp.on.on","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":0},`);

        try {
          resolve(JSON.parse(data.toString()));
        } catch (error) {
          reject(error);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_waitForFailedResponse"},');

  }
  download({id, token}, onData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    this.stats({
      id,
      token
    }, (err, _, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"stats","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":3},`);

      if (err) {
        logger.error(err, 'provider.drive.download.stats.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"stats"},');

        return;
      }
      let requestStream;
      if (adapter.isGsuiteFile(body.mimeType)) {
        requestStream = this._exportGsuiteFile(id, token, adapter.getGsuiteExportType(body.mimeType));
      } else {
        requestStream = this.client.query().get(`files/${id}`).qs({
          alt: 'media',
          supportsAllDrives: true
        }).auth(token).request();
      }
      requestStream.on('response', resp => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"requestStream.on.on.on.requestStream.on.on.requestStream.on","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

        if (resp.statusCode !== 200) {
          this._waitForFailedResponse(resp).then(jsonResp => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_waitForFailedResponse.then.catch._waitForFailedResponse.then","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

            resp.body = jsonResp;
            onData(this._error(null, resp));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"_waitForFailedResponse.then.catch._waitForFailedResponse.then"},');

          }).catch(err => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_waitForFailedResponse.then.catch","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"_waitForFailedResponse.then.catch"},');

            return onData(this._error(err, resp));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"_waitForFailedResponse.then.catch"},');

          });
        } else {
          resp.on('data', chunk => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"resp.on","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on"},');

            return onData(null, chunk);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"requestStream.on.on.on.requestStream.on.on.requestStream.on"},');

      }).on('end', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"requestStream.on.on.on.requestStream.on.on","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"requestStream.on.on.on.requestStream.on.on"},');

        return onData(null, null);
                SRTlib.send('{"type":"FUNCTIONEND","function":"requestStream.on.on.on.requestStream.on.on"},');

      }).on('error', err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"requestStream.on.on.on","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

        logger.error(err, 'provider.drive.download.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"requestStream.on.on.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"stats"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  thumbnail(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.drive.thumbnail.error');
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

    return done(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

  }
  size({id, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    return this.stats({
      id,
      token
    }, (err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.stats","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.drive.size.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.stats"},');

        return done(err);
      }
      if (adapter.isGsuiteFile(body.mimeType)) {
        const maxExportFileSize = 10 * 1024 * 1024;
        done(null, maxExportFileSize);
      } else {
        done(null, parseInt(body.size));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.stats"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  logout({token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

    return this.client.get('https://accounts.google.com/o/oauth2/revoke').qs({
      token
    }).request((err, resp) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.get.qs.request","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2},`);

      if (err || resp.statusCode !== 200) {
        logger.error(err, 'provider.drive.logout.error');
        done(this._error(err, resp));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.qs.request"},');

        return;
      }
      done(null, {
        revoked: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.qs.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  adaptData(res, sharedDrivesResp, directory, query) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptData","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":4,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    const adaptItem = item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptItem","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"adaptItem"},');

      return {
        isFolder: adapter.isFolder(item),
        icon: adapter.getItemIcon(item),
        name: adapter.getItemName(item),
        mimeType: adapter.getMimeType(item),
        id: adapter.getItemId(item),
        thumbnail: adapter.getItemThumbnailUrl(item),
        requestPath: adapter.getItemRequestPath(item),
        modifiedDate: adapter.getItemModifiedDate(item),
        size: adapter.getItemSize(item),
        custom: {
          isTeamDrive: adapter.isSharedDrive(item),
          isSharedDrive: adapter.isSharedDrive(item)
        }
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"adaptItem"},');

    };
    const items = adapter.getItemSubList(res);
    const sharedDrives = sharedDrivesResp ? sharedDrivesResp.drives || [] : [];
    const adaptedItems = sharedDrives.concat(items).map(adaptItem);
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

    return {
      username: adapter.getUsername(res),
      items: adaptedItems,
      nextPagePath: adapter.getNextPagePath(res, query, directory)
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_error","fileName":"/packages/@uppy/companion/src/server/provider/drive/index.js","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    if (resp) {
      const fallbackMessage = `request to ${this.authProvider} returned ${resp.statusCode}`;
      const errMsg = resp.body && resp.body.error ? resp.body.error.message : fallbackMessage;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

      return resp.statusCode === 401 ? new ProviderAuthError() : new ProviderApiError(errMsg, resp.statusCode);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

    return err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

  }
}
module.exports = Drive;
