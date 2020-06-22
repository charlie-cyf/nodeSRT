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
    SRTlib.send(`{ "anonymous": false, "function": "httpHeaderSafeJson", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "httpHeaderSafeJson"},');

  return JSON.stringify(v).replace(charsToEncode, function (c) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.replace", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "ReturnStatement.replace"},');

    return '\\u' + ('000' + c.charCodeAt(0).toString(16)).slice(-4);
        SRTlib.send('], "end": "ReturnStatement.replace"},');

  });
    SRTlib.send('], "end": "httpHeaderSafeJson"},');

}
class DropBox extends Provider {
  constructor(options) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super(options);
    this.authProvider = options.provider = DropBox.authProvider;
    this.client = purest(options);
    this.needsCookieAuth = true;
        SRTlib.send('], "end": "constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox.authProvider", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "authProvider"},');

    return 'dropbox';
        SRTlib.send('], "end": "authProvider"},');

  }
  _userInfo({token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox._userInfo", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.client.post('users/get_current_account').options({
      version: '2'
    }).auth(token).request(done);
        SRTlib.send('], "end": "_userInfo"},');

  }
  list(options, done) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox.list", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    let userInfoDone = false;
    let statsDone = false;
    let userInfo;
    let stats;
    let reqErr;
    const finishReq = () => {
            SRTlib.send(`{ "anonymous": false, "function": "finishReq", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (reqErr || stats.statusCode !== 200) {
        const err = this._error(reqErr, stats);
        logger.error(err, 'provider.dropbox.list.error');
        done(err);
      } else {
        stats.body.user_email = userInfo.body.email;
        done(null, this.adaptData(stats.body, options.companion));
      }
            SRTlib.send('], "end": "finishReq"},');

    };
    this.stats(options, (err, resp) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      statsDone = true;
      stats = resp;
      reqErr = reqErr || err;
      if (userInfoDone) {
        finishReq();
      }
            SRTlib.send('], "end": "emptyKey"},');

    });
    this._userInfo(options, (err, resp) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      userInfoDone = true;
      userInfo = resp;
      reqErr = reqErr || err;
      if (statsDone) {
        finishReq();
      }
            SRTlib.send('], "end": "emptyKey2"},');

    });
        SRTlib.send('], "end": "list"},');

  }
  stats({directory, query, token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox.stats", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (query.cursor) {
      this.client.post('files/list_folder/continue').options({
        version: '2'
      }).auth(token).json({
        cursor: query.cursor
      }).request(done);
            SRTlib.send('], "end": "stats"},');

      return;
    }
    this.client.post('files/list_folder').options({
      version: '2'
    }).qs(query).auth(token).json({
      path: `${directory || ''}`
    }).request(done);
        SRTlib.send('], "end": "stats"},');

  }
  download({id, token}, onData) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox.download", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "download"},');

    return this.client.post('https://content.dropboxapi.com/2/files/download').options({
      version: '2',
      headers: {
        'Dropbox-API-Arg': httpHeaderSafeJson({
          path: `${id}`
        })
      }
    }).auth(token).request().on('response', resp => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (resp.statusCode !== 200) {
        onData(this._error(null, resp));
      } else {
        resp.on('data', chunk => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "emptyKey3"},');

          return onData(null, chunk);
                    SRTlib.send('], "end": "emptyKey3"},');

        });
      }
            SRTlib.send('], "end": "emptyKey4"},');

    }).on('end', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey5"},');

      return onData(null, null);
            SRTlib.send('], "end": "emptyKey5"},');

    }).on('error', err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      logger.error(err, 'provider.dropbox.download.error');
      onData(err);
            SRTlib.send('], "end": "emptyKey6"},');

    });
        SRTlib.send('], "end": "download"},');

  }
  thumbnail({id, token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox.thumbnail", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "thumbnail"},');

    return this.client.post('https://content.dropboxapi.com/2/files/get_thumbnail').options({
      version: '2',
      headers: {
        'Dropbox-API-Arg': httpHeaderSafeJson({
          path: `${id}`,
          size: 'w256h256'
        })
      }
    }).auth(token).request().on('response', resp => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (resp.statusCode !== 200) {
        const err = this._error(null, resp);
        logger.error(err, 'provider.dropbox.thumbnail.error');
                SRTlib.send('], "end": "emptyKey7"},');

        return done(err);
      }
      done(null, resp);
            SRTlib.send('], "end": "emptyKey7"},');

    }).on('error', err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      logger.error(err, 'provider.dropbox.thumbnail.error');
            SRTlib.send('], "end": "emptyKey8"},');

    });
        SRTlib.send('], "end": "thumbnail"},');

  }
  size({id, token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox.size", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "size"},');

    return this.client.post('files/get_metadata').options({
      version: '2'
    }).auth(token).json({
      path: id
    }).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.dropbox.size.error');
                SRTlib.send('], "end": "emptyKey9"},');

        return done(err);
      }
      done(null, parseInt(body.size));
            SRTlib.send('], "end": "emptyKey9"},');

    });
        SRTlib.send('], "end": "size"},');

  }
  logout({token}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox.logout", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "logout"},');

    return this.client.post('auth/token/revoke').options({
      version: '2'
    }).auth(token).request((err, resp) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        logger.error(err, 'provider.dropbox.size.error');
        done(this._error(err, resp));
                SRTlib.send('], "end": "emptyKey10"},');

        return;
      }
      done(null, {
        revoked: true
      });
            SRTlib.send('], "end": "emptyKey10"},');

    });
        SRTlib.send('], "end": "logout"},');

  }
  adaptData(res, companion) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox.adaptData", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const data = {
      username: adapter.getUsername(res),
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach(item => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send('], "end": "emptyKey11"},');

    });
    data.nextPagePath = adapter.getNextPagePath(res);
        SRTlib.send('], "end": "adaptData"},');

    return data;
        SRTlib.send('], "end": "adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{ "anonymous": false, "function": "DropBox._error", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (resp) {
      const fallbackMessage = `request to ${this.authProvider} returned ${resp.statusCode}`;
      const errMsg = (resp.body || ({})).error_summary ? resp.body.error_summary : fallbackMessage;
            SRTlib.send('], "end": "_error"},');

      return resp.statusCode === 401 ? new ProviderAuthError() : new ProviderApiError(errMsg, resp.statusCode);
    }
        SRTlib.send('], "end": "_error"},');

    return err;
        SRTlib.send('], "end": "_error"},');

  }
}
module.exports = DropBox;
