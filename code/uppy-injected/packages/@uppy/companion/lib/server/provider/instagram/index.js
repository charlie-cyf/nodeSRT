const SRTlib = require('SRT-util');

const Provider = require('../Provider');
const request = require('request');
const purest = require('purest')({
  request
});
const utils = require('../../helpers/utils');
const logger = require('../../logger');
const adapter = require('./adapter');
const {ProviderApiError, ProviderAuthError} = require('../error');
class Instagram extends Provider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":1,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    super(options);
    this.authProvider = options.provider = Instagram.authProvider;
    this.client = purest(options);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":0,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return 'instagram';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
  list({directory = 'recent', token, query = {
    cursor: null,
    max_id: null
  }}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    const cursor = query.cursor || query.max_id;
    const qs = cursor ? {
      max_id: cursor
    } : {};
    this.client.get(`users/self/media/${directory}`).qs(qs).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.get.qs.auth.request","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.list.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.qs.auth.request"},');

        return done(err);
      } else {
        this._getUsername(token, (err, username) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_getUsername","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2},`);

          err ? done(err) : done(null, this.adaptData(body, username));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_getUsername"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.qs.auth.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  _getUsername(token, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getUsername","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    this.client.get('users/self').auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.get.auth.request","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.user.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.auth.request"},');

        return done(err);
      } else {
        done(null, body.data.username);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.auth.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getUsername"},');

  }
  _getMediaUrl(body, carouselId) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getMediaUrl","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    let mediaObj;
    let type;
    if (body.data.type === 'carousel') {
      carouselId = carouselId ? parseInt(carouselId) : 0;
      mediaObj = body.data.carousel_media[carouselId];
      type = mediaObj.type;
    } else {
      mediaObj = body.data;
      type = body.data.type;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getMediaUrl"},');

    return mediaObj[`${type}s`].standard_resolution.url;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getMediaUrl"},');

  }
  download({id, token, query = {
    carousel_id: null
  }}, onData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

    return this.client.get(`media/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.get.auth.request","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.download.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request"},');

        return;
      }
      request(this._getMediaUrl(body, query.carousel_id)).on('response', resp => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.on.on.on.request.on.on.request.on","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":1},`);

        if (resp.statusCode !== 200) {
          onData(this._error(null, resp));
        } else {
          resp.on('data', chunk => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"resp.on","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on"},');

            return onData(null, chunk);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"resp.on"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.on.on.on.request.on.on.request.on"},');

      }).on('end', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.on.on.on.request.on.on","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"request.on.on.on.request.on.on"},');

        return onData(null, null);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.on.on.on.request.on.on"},');

      }).on('error', err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.on.on.on","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":1},`);

        logger.error(err, 'provider.instagram.download.url.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.on.on.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  thumbnail(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.instagram.thumbnail.error');
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

    return done(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

  }
  size({id, token, query = {
    carousel_id: null
  }}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    return this.client.get(`media/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.get.auth.request###2","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.size.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request###2"},');

        return done(err);
      }
      utils.getURLMeta(this._getMediaUrl(body, query.carousel_id)).then(({size}) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"utils.getURLMeta.then.catch.utils.getURLMeta.then","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"utils.getURLMeta.then.catch.utils.getURLMeta.then"},');

        return done(null, size);
                SRTlib.send('{"type":"FUNCTIONEND","function":"utils.getURLMeta.then.catch.utils.getURLMeta.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"utils.getURLMeta.then.catch","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":1},`);

        logger.error(err, 'provider.instagram.size.error');
        done();
                SRTlib.send('{"type":"FUNCTIONEND","function":"utils.getURLMeta.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.auth.request###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  logout(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    done(null, {
      revoked: false,
      manual_revoke_url: 'https://www.instagram.com/accounts/manage_access/'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  adaptData(res, username) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptData","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    const data = {
      username: username,
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"items.forEach","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":1},`);

      data.items.push({
        isFolder: adapter.isFolder(item),
        icon: adapter.getItemIcon(item),
        name: adapter.getItemName(item),
        mimeType: adapter.getMimeType(item),
        id: adapter.getItemId(item),
        thumbnail: adapter.getItemThumbnailUrl(item),
        requestPath: adapter.getItemRequestPath(item),
        modifiedDate: adapter.getItemModifiedDate(item)
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"items.forEach"},');

    });
    data.nextPagePath = adapter.getNextPagePath(res);
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

    return data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_error","fileName":"/packages/@uppy/companion/lib/server/provider/instagram/index.js","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    if (resp) {
      if (resp.statusCode === 400 && resp.body && resp.body.meta.error_type === 'OAuthAccessTokenException') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

        return new ProviderAuthError();
      }
      const msg = `request to ${this.authProvider} returned ${resp.statusCode}`;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

      return new ProviderApiError(msg, resp.statusCode);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

    return err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

  }
}
module.exports = Instagram;
