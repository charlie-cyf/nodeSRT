var SRTlib = require('SRT-util');
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
        SRTlib.send(`{ "anonymous": false, "function": "Drive.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super(options);
    this.authProvider = options.provider = Drive.authProvider;
    options.alias = 'drive';
    options.version = 'v3';
    this.client = purest(options);
        SRTlib.send('], "end": "constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.authProvider", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "authProvider"},');

    return 'google';
        SRTlib.send('], "end": "authProvider"},');

  }
  list(options, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.list", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const directory = options.directory || 'root';
    const query = options.query || ({});
    let sharedDrivesPromise = Promise.resolve(undefined);
    const shouldListSharedDrives = directory === 'root' && !query.cursor;
    if (shouldListSharedDrives) {
      sharedDrivesPromise = new Promise(resolve => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.client.query().get('drives').qs({
          fields: SHARED_DRIVE_FIELDS
        }).auth(options.token).request((err, resp) => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (err) {
            logger.error(err, 'provider.drive.sharedDrive.error');
                        SRTlib.send('], "end": "emptyKey"},');

            return;
          }
          resolve(resp);
                    SRTlib.send('], "end": "emptyKey"},');

        });
                SRTlib.send('], "end": "emptyKey2"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this.client.query().get('files').qs(where).auth(options.token).request((err, resp) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (err || resp.statusCode !== 200) {
          reject(this._error(err, resp));
                    SRTlib.send('], "end": "emptyKey3"},');

          return;
        }
        resolve(resp);
                SRTlib.send('], "end": "emptyKey3"},');

      });
            SRTlib.send('], "end": "emptyKey4"},');

    });
    Promise.all([sharedDrivesPromise, filesPromise]).then(([sharedDrives, filesResponse]) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const returnData = this.adaptData(filesResponse.body, sharedDrives && sharedDrives.body, directory, query);
      done(null, returnData);
            SRTlib.send('], "end": "emptyKey5"},');

    }, reqErr => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      logger.error(reqErr, 'provider.drive.list.error');
      done(reqErr);
            SRTlib.send('], "end": "emptyKey6"},');

    });
        SRTlib.send('], "end": "list"},');

  }
  stats({id, token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.stats", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "stats"},');

    return this.client.query().get(`files/${id}`).qs({
      fields: DRIVE_FILE_FIELDS,
      supportsAllDrives: true
    }).auth(token).request(done);
        SRTlib.send('], "end": "stats"},');

  }
  _exportGsuiteFile(id, token, mimeType) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive._exportGsuiteFile", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    logger.info(`calling google file export for ${id} to ${mimeType}`, 'provider.drive.export');
        SRTlib.send('], "end": "_exportGsuiteFile"},');

    return this.client.query().get(`files/${id}/export`).qs({
      supportsAllDrives: true,
      mimeType
    }).auth(token).request();
        SRTlib.send('], "end": "_exportGsuiteFile"},');

  }
  _waitForFailedResponse(resp) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive._waitForFailedResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "_waitForFailedResponse"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      let data = '';
      resp.on('data', chunk => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        data += chunk;
                SRTlib.send('], "end": "emptyKey7"},');

      }).on('end', () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        try {
          resolve(JSON.parse(data.toString()));
        } catch (error) {
          reject(error);
        }
                SRTlib.send('], "end": "emptyKey8"},');

      });
            SRTlib.send('], "end": "emptyKey9"},');

    });
        SRTlib.send('], "end": "_waitForFailedResponse"},');

  }
  download({id, token}, onData) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.download", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.stats({
      id,
      token
    }, (err, _, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err) {
        logger.error(err, 'provider.drive.download.stats.error');
        onData(err);
                SRTlib.send('], "end": "emptyKey16"},');

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
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (resp.statusCode !== 200) {
          this._waitForFailedResponse(resp).then(jsonResp => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            resp.body = jsonResp;
            onData(this._error(null, resp));
                        SRTlib.send('], "end": "emptyKey10"},');

          }).catch(err => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "emptyKey11"},');

            return onData(this._error(err, resp));
                        SRTlib.send('], "end": "emptyKey11"},');

          });
        } else {
          resp.on('data', chunk => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "emptyKey12"},');

            return onData(null, chunk);
                        SRTlib.send('], "end": "emptyKey12"},');

          });
        }
                SRTlib.send('], "end": "emptyKey13"},');

      }).on('end', () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "emptyKey14"},');

        return onData(null, null);
                SRTlib.send('], "end": "emptyKey14"},');

      }).on('error', err => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        logger.error(err, 'provider.drive.download.error');
        onData(err);
                SRTlib.send('], "end": "emptyKey15"},');

      });
            SRTlib.send('], "end": "emptyKey16"},');

    });
        SRTlib.send('], "end": "download"},');

  }
  thumbnail(_, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.thumbnail", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.drive.thumbnail.error');
        SRTlib.send('], "end": "thumbnail"},');

    return done(err);
        SRTlib.send('], "end": "thumbnail"},');

  }
  size({id, token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.size", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "size"},');

    return this.stats({
      id,
      token
    }, (err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.drive.size.error');
                SRTlib.send('], "end": "emptyKey17"},');

        return done(err);
      }
      if (adapter.isGsuiteFile(body.mimeType)) {
        const maxExportFileSize = 10 * 1024 * 1024;
        done(null, maxExportFileSize);
      } else {
        done(null, parseInt(body.size));
      }
            SRTlib.send('], "end": "emptyKey17"},');

    });
        SRTlib.send('], "end": "size"},');

  }
  logout({token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.logout", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "logout"},');

    return this.client.get('https://accounts.google.com/o/oauth2/revoke').qs({
      token
    }).request((err, resp) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        logger.error(err, 'provider.drive.logout.error');
        done(this._error(err, resp));
                SRTlib.send('], "end": "emptyKey18"},');

        return;
      }
      done(null, {
        revoked: true
      });
            SRTlib.send('], "end": "emptyKey18"},');

    });
        SRTlib.send('], "end": "logout"},');

  }
  adaptData(res, sharedDrivesResp, directory, query) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.adaptData", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

    const adaptItem = item => {
            SRTlib.send(`{ "anonymous": false, "function": "adaptItem", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "adaptItem"},');

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
            SRTlib.send('], "end": "adaptItem"},');

    };
    const items = adapter.getItemSubList(res);
    const sharedDrives = sharedDrivesResp ? sharedDrivesResp.drives || [] : [];
    const adaptedItems = sharedDrives.concat(items).map(adaptItem);
        SRTlib.send('], "end": "adaptData"},');

    return {
      username: adapter.getUsername(res),
      items: adaptedItems,
      nextPagePath: adapter.getNextPagePath(res, query, directory)
    };
        SRTlib.send('], "end": "adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive._error", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (resp) {
      const fallbackMessage = `request to ${this.authProvider} returned ${resp.statusCode}`;
      const errMsg = resp.body && resp.body.error ? resp.body.error.message : fallbackMessage;
            SRTlib.send('], "end": "_error"},');

      return resp.statusCode === 401 ? new ProviderAuthError() : new ProviderApiError(errMsg, resp.statusCode);
    }
        SRTlib.send('], "end": "_error"},');

    return err;
        SRTlib.send('], "end": "_error"},');

  }
}
module.exports = Drive;
