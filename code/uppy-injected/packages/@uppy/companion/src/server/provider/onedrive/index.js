const SRTlib = require('SRT-util');

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":1,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    super(options);
    this.authProvider = options.provider = OneDrive.authProvider;
    this.client = purest(options);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":0,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return 'microsoft';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
  _userInfo({token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_userInfo","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    this.client.get('me').auth(token).request(done);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_userInfo"},');

  }
  list({directory, query, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    const path = directory ? `items/${directory}` : 'root';
    const rootPath = query.driveId ? `/drives/${query.driveId}` : '/drive';
    const qs = {
      $expand: 'thumbnails'
    };
    if (query.cursor) {
      qs.$skiptoken = query.cursor;
    }
    this.client.get(`${rootPath}/${path}/children`).qs(qs).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.get.qs.auth.request","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.onedrive.list.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.qs.auth.request"},');

        return done(err);
      } else {
        this._userInfo({
          token
        }, (err, infoResp) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_userInfo","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":2},`);

          if (err || infoResp.statusCode !== 200) {
            err = this._error(err, infoResp);
            logger.error(err, 'provider.onedrive.user.error');
                        SRTlib.send('{"type":"FUNCTIONEND","function":"_userInfo"},');

            return done(err);
          }
          done(null, this.adaptData(body, infoResp.body.mail || infoResp.body.userPrincipalName));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_userInfo"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.qs.auth.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  download({id, token, query}, onData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    const rootPath = query.driveId ? `/drives/${query.driveId}` : '/drive';
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

    return this.client.get(`${rootPath}/items/${id}/content`).auth(token).request().on('response', resp => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.get.auth.request.on.on.on.client.get.auth.request.on.on.client.get.auth.request.on","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":1},`);

      if (resp.statusCode !== 200) {
        onData(this._error(null, resp));
      } else {
        resp.on('data', chunk => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"resp.on","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on"},');

          return onData(null, chunk);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request.on.on.on.client.get.auth.request.on.on.client.get.auth.request.on"},');

    }).on('end', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.get.auth.request.on.on.on.client.get.auth.request.on.on","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request.on.on.on.client.get.auth.request.on.on"},');

      return onData(null, null);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request.on.on.on.client.get.auth.request.on.on"},');

    }).on('error', err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.get.auth.request.on.on.on","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":1},`);

      logger.error(err, 'provider.onedrive.download.error');
      onData(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request.on.on.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  thumbnail(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.onedrive.thumbnail.error');
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

    return done(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

  }
  size({id, query, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    const rootPath = query.driveId ? `/drives/${query.driveId}` : '/drive';
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    return this.client.get(`${rootPath}/items/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.get.auth.request","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.onedrive.size.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request"},');

        return done(err);
      } else {
        done(null, body.size);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  logout(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    done(null, {
      revoked: false,
      manual_revoke_url: 'https://account.live.com/consent/Manage'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  adaptData(res, username) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptData","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    const data = {
      username,
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"items.forEach","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"items.forEach"},');

    });
    data.nextPagePath = adapter.getNextPagePath(res);
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

    return data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_error","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/index.js","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    if (resp) {
      const fallbackMsg = `request to ${this.authProvider} returned ${resp.statusCode}`;
      const errMsg = (resp.body || ({})).error ? resp.body.error.message : fallbackMsg;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

      return resp.statusCode === 401 ? new ProviderAuthError() : new ProviderApiError(errMsg, resp.statusCode);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

    return err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

  }
}
module.exports = OneDrive;
