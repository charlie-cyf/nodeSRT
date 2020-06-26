const Provider = require('../Provider');
const request = require('request');
// @ts-ignore
const purest = require('purest')({
  request
});
const logger = require('../../logger');
const adapter = require('./adapter');
const {ProviderApiError, ProviderAuthError} = require('../error');
const DRIVE_FILE_FIELDS = 'kind,id,name,mimeType,ownedByMe,permissions(role,emailAddress),size,modifiedTime,iconLink,thumbnailLink,teamDriveId';
const DRIVE_FILES_FIELDS = `kind,nextPageToken,incompleteSearch,files(${DRIVE_FILE_FIELDS})`;
// using wildcard to get all 'drive' fields because specifying fields seems no to work for the /drives endpoint
const SHARED_DRIVE_FIELDS = '*';
/**
* Adapter for API https://developers.google.com/drive/api/v3/
*/
class Drive extends Provider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    super(options);
    this.authProvider = options.provider = Drive.authProvider;
    options.alias = 'drive';
    options.version = 'v3';
    this.client = purest(options);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return 'google';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
  list(options, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    const directory = options.directory || 'root';
    const query = options.query || ({});
    let sharedDrivesPromise = Promise.resolve(undefined);
    const shouldListSharedDrives = directory === 'root' && !query.cursor;
    if (shouldListSharedDrives) {
      sharedDrivesPromise = new Promise(resolve => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

        this.client.query().get('drives').qs({
          fields: SHARED_DRIVE_FIELDS
        }).auth(options.token).request((err, resp) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

          if (err) {
            logger.error(err, 'provider.drive.sharedDrive.error');
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

            return;
          }
          resolve(resp);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":2},`);

      this.client.query().get('files').qs(where).auth(options.token).request((err, resp) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":2},`);

        if (err || resp.statusCode !== 200) {
          reject(this._error(err, resp));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

          return;
        }
        resolve(resp);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
    Promise.all([sharedDrivesPromise, filesPromise]).then(([sharedDrives, filesResponse]) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

      const returnData = this.adaptData(filesResponse.body, sharedDrives && sharedDrives.body, directory, query);
      done(null, returnData);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    }, reqErr => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

      logger.error(reqErr, 'provider.drive.list.error');
      done(reqErr);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  stats({id, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"stats","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"stats"},');

    return this.client.query().get(`files/${id}`).qs({
      fields: DRIVE_FILE_FIELDS,
      supportsAllDrives: true
    }).auth(token).request(done);
        SRTlib.send('{"type":"FUNCTIONEND","function":"stats"},');

  }
  _exportGsuiteFile(id, token, mimeType) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_exportGsuiteFile","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    logger.info(`calling google file export for ${id} to ${mimeType}`, 'provider.drive.export');
        SRTlib.send('{"type":"FUNCTIONEND","function":"_exportGsuiteFile"},');

    return this.client.query().get(`files/${id}/export`).qs({
      supportsAllDrives: true,
      mimeType
    }).auth(token).request();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_exportGsuiteFile"},');

  }
  _waitForFailedResponse(resp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_waitForFailedResponse","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_waitForFailedResponse"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":2},`);

      let data = '';
      resp.on('data', chunk => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

        data += chunk;
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

      }).on('end', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":0},`);

        try {
          resolve(JSON.parse(data.toString()));
        } catch (error) {
          reject(error);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_waitForFailedResponse"},');

  }
  download({id, token}, onData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    this.stats({
      id,
      token
    }, (err, _, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey16","fileName":"${__filename}","paramsNumber":3},`);

      if (err) {
        logger.error(err, 'provider.drive.download.stats.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

        if (resp.statusCode !== 200) {
          this._waitForFailedResponse(resp).then(jsonResp => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

            resp.body = jsonResp;
            onData(this._error(null, resp));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

          }).catch(err => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

            return onData(this._error(err, resp));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

          });
        } else {
          resp.on('data', chunk => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

            return onData(null, chunk);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

      }).on('end', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

        return onData(null, null);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

      }).on('error', err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey15","fileName":"${__filename}","paramsNumber":1},`);

        logger.error(err, 'provider.drive.download.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  thumbnail(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    // not implementing this because a public thumbnail from googledrive will be used instead
    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.drive.thumbnail.error');
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

    return done(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

  }
  size({id, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    return this.stats({
      id,
      token
    }, (err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey17","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.drive.size.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

        return done(err);
      }
      if (adapter.isGsuiteFile(body.mimeType)) {
        // Not all GSuite file sizes can be predetermined
        // also for files whose size can be predetermined,
        // the request to get it can be sometimes expesnive, depending
        // on the file size. So we default the size to the size export limit
        // 10 MB
        const maxExportFileSize = 10 * 1024 * 1024;
        done(null, maxExportFileSize);
      } else {
        done(null, parseInt(body.size));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  logout({token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

    return this.client.get('https://accounts.google.com/o/oauth2/revoke').qs({
      token
    }).request((err, resp) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey18","fileName":"${__filename}","paramsNumber":2},`);

      if (err || resp.statusCode !== 200) {
        logger.error(err, 'provider.drive.logout.error');
        done(this._error(err, resp));
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

        return;
      }
      done(null, {
        revoked: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  adaptData(res, sharedDrivesResp, directory, query) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptData","fileName":"${__filename}","paramsNumber":4,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

    const adaptItem = item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptItem","fileName":"${__filename}","paramsNumber":1},`);

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
          // @todo isTeamDrive is left for backward compatibility. We should remove it in the next
          // major release.
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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_error","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Drive","superClass":"Provider"}},`);

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
