const SRTlib = require('SRT-util');

const Provider = require('../Provider');
const request = require('request');
const purest = require('purest')({
  request
});
const logger = require('../../logger');
const adapter = require('./adapter');
const {ProviderApiError, ProviderAuthError} = require('../error');
// From https://www.dropbox.com/developers/reference/json-encoding:
// 
// This function is simple and has OK performance compared to more
// complicated ones: http://jsperf.com/json-escape-unicode/4
const charsToEncode = /[\u007f-\uffff]/g;
function httpHeaderSafeJson(v) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"httpHeaderSafeJson","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"httpHeaderSafeJson"},');

  return JSON.stringify(v).replace(charsToEncode, function (c) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.JSON.stringify.replace","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.JSON.stringify.replace"},');

    return '\\u' + ('000' + c.charCodeAt(0).toString(16)).slice(-4);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.JSON.stringify.replace"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"httpHeaderSafeJson","paramsNumber":1},');

}
/**
* Adapter for API https://www.dropbox.com/developers/documentation/http/documentation
*/
class DropBox extends Provider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

    super(options);
    this.authProvider = options.provider = DropBox.authProvider;
    this.client = purest(options);
    // needed for the thumbnails fetched via companion
    this.needsCookieAuth = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return 'dropbox';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
  _userInfo({token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_userInfo","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

    this.client.post('users/get_current_account').options({
      version: '2'
    }).auth(token).request(done);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_userInfo"},');

  }
  list(options, done) {
    /**
    * Makes 2 requests in parallel - 1. to get files, 2. to get user email
    * it then waits till both requests are done before proceeding with the callback
    *
    * @param {object} options
    * @param {function} done
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

    let userInfoDone = false;
    let statsDone = false;
    let userInfo;
    let stats;
    let reqErr;
    const finishReq = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"finishReq","fileName":"${__filename}","paramsNumber":0},`);

      if (reqErr || stats.statusCode !== 200) {
        const err = this._error(reqErr, stats);
        logger.error(err, 'provider.dropbox.list.error');
        done(err);
      } else {
        stats.body.user_email = userInfo.body.email;
        done(null, this.adaptData(stats.body, options.companion));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"finishReq"},');

    };
    this.stats(options, (err, resp) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"stats","fileName":"${__filename}","paramsNumber":2},`);

      statsDone = true;
      stats = resp;
      reqErr = reqErr || err;
      if (userInfoDone) {
        finishReq();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"stats"},');

    });
    this._userInfo(options, (err, resp) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_userInfo","fileName":"${__filename}","paramsNumber":2},`);

      userInfoDone = true;
      userInfo = resp;
      reqErr = reqErr || err;
      if (statsDone) {
        finishReq();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_userInfo"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  stats({directory, query, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"stats","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

    if (query.cursor) {
      this.client.post('files/list_folder/continue').options({
        version: '2'
      }).auth(token).json({
        cursor: query.cursor
      }).request(done);
            SRTlib.send('{"type":"FUNCTIONEND","function":"stats"},');

      return;
    }
    this.client.post('files/list_folder').options({
      version: '2'
    }).qs(query).auth(token).json({
      path: `${directory || ''}`
    }).request(done);
        SRTlib.send('{"type":"FUNCTIONEND","function":"stats"},');

  }
  download({id, token}, onData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

    return this.client.post('https://content.dropboxapi.com/2/files/download').options({
      version: '2',
      headers: {
        'Dropbox-API-Arg': httpHeaderSafeJson({
          path: `${id}`
        })
      }
    }).auth(token).request().on('response', resp => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.post.options.auth.request.on.on.on.client.post.options.auth.request.on.on.client.post.options.auth.request.on","fileName":"${__filename}","paramsNumber":1},`);

      if (resp.statusCode !== 200) {
        onData(this._error(null, resp));
      } else {
        resp.on('data', chunk => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"resp.on","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on"},');

          return onData(null, chunk);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.request.on.on.on.client.post.options.auth.request.on.on.client.post.options.auth.request.on"},');

    }).on('end', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.post.options.auth.request.on.on.on.client.post.options.auth.request.on.on","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.request.on.on.on.client.post.options.auth.request.on.on"},');

      return onData(null, null);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.request.on.on.on.client.post.options.auth.request.on.on"},');

    }).on('error', err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.post.options.auth.request.on.on.on","fileName":"${__filename}","paramsNumber":1},`);

      logger.error(err, 'provider.dropbox.download.error');
      onData(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.request.on.on.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  thumbnail({id, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

    return this.client.post('https://content.dropboxapi.com/2/files/get_thumbnail').options({
      version: '2',
      headers: {
        'Dropbox-API-Arg': httpHeaderSafeJson({
          path: `${id}`,
          size: 'w256h256'
        })
      }
    }).auth(token).request().on('response', resp => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.post.options.auth.request.on.on.client.post.options.auth.request.on","fileName":"${__filename}","paramsNumber":1},`);

      if (resp.statusCode !== 200) {
        const err = this._error(null, resp);
        logger.error(err, 'provider.dropbox.thumbnail.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.request.on.on.client.post.options.auth.request.on"},');

        return done(err);
      }
      done(null, resp);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.request.on.on.client.post.options.auth.request.on"},');

    }).on('error', err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.post.options.auth.request.on.on","fileName":"${__filename}","paramsNumber":1},`);

      logger.error(err, 'provider.dropbox.thumbnail.error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.request.on.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

  }
  size({id, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    return this.client.post('files/get_metadata').options({
      version: '2'
    }).auth(token).json({
      path: id
    }).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.post.options.auth.json.request","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.dropbox.size.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.json.request"},');

        return done(err);
      }
      done(null, parseInt(body.size));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.json.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  logout({token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

    return this.client.post('auth/token/revoke').options({
      version: '2'
    }).auth(token).request((err, resp) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.post.options.auth.request","fileName":"${__filename}","paramsNumber":2},`);

      if (err || resp.statusCode !== 200) {
        logger.error(err, 'provider.dropbox.size.error');
        done(this._error(err, resp));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.request"},');

        return;
      }
      done(null, {
        revoked: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.post.options.auth.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  adaptData(res, companion) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptData","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

    const data = {
      username: adapter.getUsername(res),
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"items.forEach","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"items.forEach"},');

    });
    data.nextPagePath = adapter.getNextPagePath(res);
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

    return data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_error","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DropBox","superClass":"Provider"}},`);

    if (resp) {
      const fallbackMessage = `request to ${this.authProvider} returned ${resp.statusCode}`;
      const errMsg = (resp.body || ({})).error_summary ? resp.body.error_summary : fallbackMessage;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

      return resp.statusCode === 401 ? new ProviderAuthError() : new ProviderApiError(errMsg, resp.statusCode);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

    return err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

  }
}
module.exports = DropBox;
