var SRTlib = require('SRT-util');
const Provider = require('../Provider');
const request = require('request');
const purest = require('purest')({
  request
});
const logger = require('../../logger');
const adapter = require('./adapter');
const {ProviderApiError, ProviderAuthError} = require('../error');
class OneDrive extends Provider {
  constructor(options) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super(options);
    this.authProvider = options.provider = OneDrive.authProvider;
    this.client = purest(options);
        SRTlib.send("]},");

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return 'microsoft';
        SRTlib.send("]},");

  }
  _userInfo({token}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.client.get('me').auth(token).request(done);
        SRTlib.send("]},");

  }
  list({directory, query, token}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const path = directory ? `items/${directory}` : 'root';
    const rootPath = query.driveId ? `/drives/${query.driveId}` : '/drive';
    const qs = {
      $expand: 'thumbnails'
    };
    if (query.cursor) {
      qs.$skiptoken = query.cursor;
    }
    this.client.get(`${rootPath}/${path}/children`).qs(qs).auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.onedrive.list.error');
                SRTlib.send("]},");

        return done(err);
      } else {
        this._userInfo({
          token
        }, (err, infoResp) => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (err || infoResp.statusCode !== 200) {
            err = this._error(err, infoResp);
            logger.error(err, 'provider.onedrive.user.error');
                        SRTlib.send("]},");

            return done(err);
          }
          done(null, this.adaptData(body, infoResp.body.mail || infoResp.body.userPrincipalName));
                    SRTlib.send("]},");

        });
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  download({id, token, query}, onData) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const rootPath = query.driveId ? `/drives/${query.driveId}` : '/drive';
        SRTlib.send("]},");

    return this.client.get(`${rootPath}/items/${id}/content`).auth(token).request().on('response', resp => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (resp.statusCode !== 200) {
        onData(this._error(null, resp));
      } else {
        resp.on('data', chunk => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          onData(null, chunk);
                    SRTlib.send("]},");

        });
      }
            SRTlib.send("]},");

    }).on('end', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      onData(null, null);
            SRTlib.send("]},");

    }).on('error', err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      logger.error(err, 'provider.onedrive.download.error');
      onData(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  thumbnail(_, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.onedrive.thumbnail.error');
        SRTlib.send("]},");

    return done(err);
        SRTlib.send("]},");

  }
  size({id, query, token}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const rootPath = query.driveId ? `/drives/${query.driveId}` : '/drive';
        SRTlib.send("]},");

    return this.client.get(`${rootPath}/items/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.onedrive.size.error');
                SRTlib.send("]},");

        return done(err);
      } else {
        done(null, body.size);
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  logout(_, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    done(null, {
      revoked: false,
      manual_revoke_url: 'https://account.live.com/consent/Manage'
    });
        SRTlib.send("]},");

  }
  adaptData(res, username) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const data = {
      username,
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach(item => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      data.items.push({
        isFolder: adapter.isFolder(item),
        icon: adapter.getItemIcon(item),
        name: adapter.getItemName(item),
        mimeType: adapter.getMimeType(item),
        id: adapter.getItemId(item),
        thumbnail: adapter.getItemThumbnailUrl(item),
        requestPath: adapter.getItemRequestPath(item),
        modifiedDate: adapter.getItemModifiedDate(item),
        size: adapter.getItemSize(item)
      });
            SRTlib.send("]},");

    });
    data.nextPagePath = adapter.getNextPagePath(res);
        SRTlib.send("]},");

    return data;
        SRTlib.send("]},");

  }
  _error(err, resp) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (resp) {
      const fallbackMsg = `request to ${this.authProvider} returned ${resp.statusCode}`;
      const errMsg = (resp.body || ({})).error ? resp.body.error.message : fallbackMsg;
            SRTlib.send("]},");

      return resp.statusCode === 401 ? new ProviderAuthError() : new ProviderApiError(errMsg, resp.statusCode);
    }
        SRTlib.send("]},");

    return err;
        SRTlib.send("]},");

  }
}
module.exports = OneDrive;
