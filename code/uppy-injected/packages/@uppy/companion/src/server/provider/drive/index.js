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
        SRTlib.send("]},");

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.authProvider", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return 'google';
        SRTlib.send("]},");

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
                        SRTlib.send("]},");

            return;
          }
          resolve(resp);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

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
                    SRTlib.send("]},");

          return;
        }
        resolve(resp);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
    Promise.all([sharedDrivesPromise, filesPromise]).then(([sharedDrives, filesResponse]) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const returnData = this.adaptData(filesResponse.body, sharedDrives && sharedDrives.body, directory, query);
      done(null, returnData);
            SRTlib.send("]},");

    }, reqErr => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      logger.error(reqErr, 'provider.drive.list.error');
      done(reqErr);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  stats({id, token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.stats", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.client.query().get(`files/${id}`).qs({
      fields: DRIVE_FILE_FIELDS,
      supportsAllDrives: true
    }).auth(token).request(done);
        SRTlib.send("]},");

  }
  _exportGsuiteFile(id, token, mimeType) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive._exportGsuiteFile", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    logger.info(`calling google file export for ${id} to ${mimeType}`, 'provider.drive.export');
        SRTlib.send("]},");

    return this.client.query().get(`files/${id}/export`).qs({
      supportsAllDrives: true,
      mimeType
    }).auth(token).request();
        SRTlib.send("]},");

  }
  _waitForFailedResponse(resp) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive._waitForFailedResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      let data = '';
      resp.on('data', chunk => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        data += chunk;
                SRTlib.send("]},");

      }).on('end', () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        try {
          resolve(JSON.parse(data.toString()));
        } catch (error) {
          reject(error);
        }
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

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
                SRTlib.send("]},");

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
                        SRTlib.send("]},");

          }).catch(err => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return onData(this._error(err, resp));
                        SRTlib.send("]},");

          });
        } else {
          resp.on('data', chunk => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return onData(null, chunk);
                        SRTlib.send("]},");

          });
        }
                SRTlib.send("]},");

      }).on('end', () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return onData(null, null);
                SRTlib.send("]},");

      }).on('error', err => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        logger.error(err, 'provider.drive.download.error');
        onData(err);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  thumbnail(_, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.thumbnail", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.drive.thumbnail.error');
        SRTlib.send("]},");

    return done(err);
        SRTlib.send("]},");

  }
  size({id, token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.size", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.stats({
      id,
      token
    }, (err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.drive.size.error');
                SRTlib.send("]},");

        return done(err);
      }
      if (adapter.isGsuiteFile(body.mimeType)) {
        const maxExportFileSize = 10 * 1024 * 1024;
        done(null, maxExportFileSize);
      } else {
        done(null, parseInt(body.size));
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  logout({token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.logout", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.client.get('https://accounts.google.com/o/oauth2/revoke').qs({
      token
    }).request((err, resp) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        logger.error(err, 'provider.drive.logout.error');
        done(this._error(err, resp));
                SRTlib.send("]},");

        return;
      }
      done(null, {
        revoked: true
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  adaptData(res, sharedDrivesResp, directory, query) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive.adaptData", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

    const adaptItem = item => {
            SRTlib.send(`{ "anonymous": false, "function": "adaptItem", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

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
            SRTlib.send("]},");

    };
    const items = adapter.getItemSubList(res);
    const sharedDrives = sharedDrivesResp ? sharedDrivesResp.drives || [] : [];
    const adaptedItems = sharedDrives.concat(items).map(adaptItem);
        SRTlib.send("]},");

    return {
      username: adapter.getUsername(res),
      items: adaptedItems,
      nextPagePath: adapter.getNextPagePath(res, query, directory)
    };
        SRTlib.send("]},");

  }
  _error(err, resp) {
        SRTlib.send(`{ "anonymous": false, "function": "Drive._error", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (resp) {
      const fallbackMessage = `request to ${this.authProvider} returned ${resp.statusCode}`;
      const errMsg = resp.body && resp.body.error ? resp.body.error.message : fallbackMessage;
            SRTlib.send("]},");

      return resp.statusCode === 401 ? new ProviderAuthError() : new ProviderApiError(errMsg, resp.statusCode);
    }
        SRTlib.send("]},");

    return err;
        SRTlib.send("]},");

  }
}
module.exports = Drive;
