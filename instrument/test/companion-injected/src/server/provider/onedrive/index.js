const Provider = require('../Provider');
const request = require('request');
const purest = require('purest')({
  request
});
const logger = require('../../logger');
const adapter = require('./adapter');
const {ProviderApiError, ProviderAuthError} = require('../error');
/**
* Adapter for API https://docs.microsoft.com/en-us/onedrive/developer/rest-api/
*/
class OneDrive extends Provider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    super(options);
    this.authProvider = options.provider = OneDrive.authProvider;
    this.client = purest(options);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return 'microsoft';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
  _userInfo({token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_userInfo","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    this.client.get('me').auth(token).request(done);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_userInfo"},');

  }
  list({directory, query, token}, done) {
    /**
    * Makes 2 requests in parallel - 1. to get files, 2. to get user email
    * it then waits till both requests are done before proceeding with the callback
    *
    * @param {object} options
    * @param {function} done
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    const path = directory ? `items/${directory}` : 'root';
    const rootPath = query.driveId ? `/drives/${query.driveId}` : '/drive';
    const qs = {
      $expand: 'thumbnails'
    };
    if (query.cursor) {
      qs.$skiptoken = query.cursor;
    }
    this.client.get(`${rootPath}/${path}/children`).qs(qs).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.onedrive.list.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

        return done(err);
      } else {
        this._userInfo({
          token
        }, (err, infoResp) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

          if (err || infoResp.statusCode !== 200) {
            err = this._error(err, infoResp);
            logger.error(err, 'provider.onedrive.user.error');
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

            return done(err);
          }
          done(null, this.adaptData(body, infoResp.body.mail || infoResp.body.userPrincipalName));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  download({id, token, query}, onData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    const rootPath = query.driveId ? `/drives/${query.driveId}` : '/drive';
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

    return this.client.get(`${rootPath}/items/${id}/content`).auth(token).request().on('response', resp => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

      if (resp.statusCode !== 200) {
        onData(this._error(null, resp));
      } else {
        resp.on('data', chunk => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

          return onData(null, chunk);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    }).on('end', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

      return onData(null, null);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    }).on('error', err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

      logger.error(err, 'provider.onedrive.download.error');
      onData(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  thumbnail(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    // not implementing this because a public thumbnail from onedrive will be used instead
    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.onedrive.thumbnail.error');
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

    return done(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

  }
  size({id, query, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    const rootPath = query.driveId ? `/drives/${query.driveId}` : '/drive';
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    return this.client.get(`${rootPath}/items/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.onedrive.size.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

        return done(err);
      } else {
        done(null, body.size);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  logout(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    // access revoke is not supported by Microsoft/OneDrive's API
    done(null, {
      revoked: false,
      manual_revoke_url: 'https://account.live.com/consent/Manage'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  adaptData(res, username) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptData","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

    const data = {
      username,
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    });
    data.nextPagePath = adapter.getNextPagePath(res);
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

    return data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_error","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"OneDrive","superClass":"Provider"}},`);

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
