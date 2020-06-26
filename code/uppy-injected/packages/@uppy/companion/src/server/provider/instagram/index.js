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
/**
* Adapter for API https://www.instagram.com/developer/endpoints/
*/
class Instagram extends Provider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    super(options);
    this.authProvider = options.provider = Instagram.authProvider;
    this.client = purest(options);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return 'instagram';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
  list({directory = 'recent', token, query = {
    cursor: null,
    max_id: null
  }}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    const cursor = query.cursor || query.max_id;
    const qs = cursor ? {
      max_id: cursor
    } : {};
    this.client.get(`users/self/media/${directory}`).qs(qs).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.list.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

        return done(err);
      } else {
        this._getUsername(token, (err, username) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

          err ? done(err) : done(null, this.adaptData(body, username));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  _getUsername(token, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getUsername","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    this.client.get('users/self').auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.user.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        return done(err);
      } else {
        done(null, body.data.username);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getUsername"},');

  }
  _getMediaUrl(body, carouselId) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getMediaUrl","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

    return this.client.get(`media/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.download.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

        return;
      }
      request(this._getMediaUrl(body, query.carousel_id)).on('response', resp => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

        if (resp.statusCode !== 200) {
          onData(this._error(null, resp));
        } else {
          resp.on('data', chunk => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

            return onData(null, chunk);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

      }).on('end', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

        return onData(null, null);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

      }).on('error', err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

        logger.error(err, 'provider.instagram.download.url.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  thumbnail(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    // not implementing this because a public thumbnail from instagram will be used instead
    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.instagram.thumbnail.error');
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

    return done(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

  }
  size({id, token, query = {
    carousel_id: null
  }}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    return this.client.get(`media/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.size.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

        return done(err);
      }
      utils.getURLMeta(this._getMediaUrl(body, query.carousel_id)).then(({size}) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

        return done(null, size);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

        logger.error(err, 'provider.instagram.size.error');
        done();
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  logout(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    // access revoke is not supported by Instagram's API
    done(null, {
      revoked: false,
      manual_revoke_url: 'https://www.instagram.com/accounts/manage_access/'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  adaptData(res, username) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptData","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    const data = {
      username: username,
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    });
    data.nextPagePath = adapter.getNextPagePath(res);
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

    return data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_error","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

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
