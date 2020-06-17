var SRTlib = require('SRT-util');
const Provider = require('../Provider');
const request = require('request');
const purest = require('purest')({
  request
});
const logger = require('../../logger');
const adapter = require('./adapter');
const {ProviderApiError, ProviderAuthError} = require('../error');
const charsToEncode = /[\u007f-\uffff]/g;
function httpHeaderSafeJson(v) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return JSON.stringify(v).replace(charsToEncode, function (c) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.replace", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return '\\u' + ('000' + c.charCodeAt(0).toString(16)).slice(-4);
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
class DropBox extends Provider {
  constructor(options) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super(options);
    this.authProvider = options.provider = DropBox.authProvider;
    this.client = purest(options);
    this.needsCookieAuth = true;
        SRTlib.send("]},");

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return 'dropbox';
        SRTlib.send("]},");

  }
  _userInfo({token}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.client.post('users/get_current_account').options({
      version: '2'
    }).auth(token).request(done);
        SRTlib.send("]},");

  }
  list(options, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    let userInfoDone = false;
    let statsDone = false;
    let userInfo;
    let stats;
    let reqErr;
    const finishReq = () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (reqErr || stats.statusCode !== 200) {
        const err = this._error(reqErr, stats);
        logger.error(err, 'provider.dropbox.list.error');
        done(err);
      } else {
        stats.body.user_email = userInfo.body.email;
        done(null, this.adaptData(stats.body, options.companion));
      }
            SRTlib.send("]},");

    };
    this.stats(options, (err, resp) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      statsDone = true;
      stats = resp;
      reqErr = reqErr || err;
      if (userInfoDone) {
        finishReq();
      }
            SRTlib.send("]},");

    });
    this._userInfo(options, (err, resp) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      userInfoDone = true;
      userInfo = resp;
      reqErr = reqErr || err;
      if (statsDone) {
        finishReq();
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  stats({directory, query, token}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (query.cursor) {
      this.client.post('files/list_folder/continue').options({
        version: '2'
      }).auth(token).json({
        cursor: query.cursor
      }).request(done);
            SRTlib.send("]},");

      return;
    }
    this.client.post('files/list_folder').options({
      version: '2'
    }).qs(query).auth(token).json({
      path: `${directory || ''}`
    }).request(done);
        SRTlib.send("]},");

  }
  download({id, token}, onData) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.client.post('https://content.dropboxapi.com/2/files/download').options({
      version: '2',
      headers: {
        'Dropbox-API-Arg': httpHeaderSafeJson({
          path: `${id}`
        })
      }
    }).auth(token).request().on('response', resp => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (resp.statusCode !== 200) {
        onData(this._error(null, resp));
      } else {
        resp.on('data', chunk => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          onData(null, chunk);
                    SRTlib.send("]},");

        });
      }
            SRTlib.send("]},");

    }).on('end', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      onData(null, null);
            SRTlib.send("]},");

    }).on('error', err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      logger.error(err, 'provider.dropbox.download.error');
      onData(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  thumbnail({id, token}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.client.post('https://content.dropboxapi.com/2/files/get_thumbnail').options({
      version: '2',
      headers: {
        'Dropbox-API-Arg': httpHeaderSafeJson({
          path: `${id}`,
          size: 'w256h256'
        })
      }
    }).auth(token).request().on('response', resp => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (resp.statusCode !== 200) {
        const err = this._error(null, resp);
        logger.error(err, 'provider.dropbox.thumbnail.error');
                SRTlib.send("]},");

        return done(err);
      }
      done(null, resp);
            SRTlib.send("]},");

    }).on('error', err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      logger.error(err, 'provider.dropbox.thumbnail.error');
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  size({id, token}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.client.post('files/get_metadata').options({
      version: '2'
    }).auth(token).json({
      path: id
    }).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.dropbox.size.error');
                SRTlib.send("]},");

        return done(err);
      }
      done(null, parseInt(body.size));
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  logout({token}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.client.post('auth/token/revoke').options({
      version: '2'
    }).auth(token).request((err, resp) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        logger.error(err, 'provider.dropbox.size.error');
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
  adaptData(res, companion) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const data = {
      username: adapter.getUsername(res),
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach(item => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey21", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      data.items.push({
        isFolder: adapter.isFolder(item),
        icon: adapter.getItemIcon(item),
        name: adapter.getItemName(item),
        mimeType: adapter.getMimeType(item),
        id: adapter.getItemId(item),
        thumbnail: companion.buildURL(adapter.getItemThumbnailUrl(item), true),
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
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey23", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (resp) {
      const fallbackMessage = `request to ${this.authProvider} returned ${resp.statusCode}`;
      const errMsg = (resp.body || ({})).error_summary ? resp.body.error_summary : fallbackMessage;
            SRTlib.send("]},");

      return resp.statusCode === 401 ? new ProviderAuthError() : new ProviderApiError(errMsg, resp.statusCode);
    }
        SRTlib.send("]},");

    return err;
        SRTlib.send("]},");

  }
}
module.exports = DropBox;
