var SRTlib = require('SRT-util');
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
        SRTlib.send(`{ "anonymous": false, "function": "Instagram.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super(options);
    this.authProvider = options.provider = Instagram.authProvider;
    this.client = purest(options);
        SRTlib.send('], "end": "constructor"},');

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram.authProvider", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "authProvider"},');

    return 'instagram';
        SRTlib.send('], "end": "authProvider"},');

  }
  list({directory = 'recent', token, query = {
    cursor: null,
    max_id: null
  }}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram.list", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const cursor = query.cursor || query.max_id;
    const qs = cursor ? {
      max_id: cursor
    } : {};
    this.client.get(`users/self/media/${directory}`).qs(qs).auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.list.error');
                SRTlib.send('], "end": "emptyKey2"},');

        return done(err);
      } else {
        this._getUsername(token, (err, username) => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          err ? done(err) : done(null, this.adaptData(body, username));
                    SRTlib.send('], "end": "emptyKey"},');

        });
      }
            SRTlib.send('], "end": "emptyKey2"},');

    });
        SRTlib.send('], "end": "list"},');

  }
  _getUsername(token, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram._getUsername", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.client.get('users/self').auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.user.error');
                SRTlib.send('], "end": "emptyKey3"},');

        return done(err);
      } else {
        done(null, body.data.username);
      }
            SRTlib.send('], "end": "emptyKey3"},');

    });
        SRTlib.send('], "end": "_getUsername"},');

  }
  _getMediaUrl(body, carouselId) {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram._getMediaUrl", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send('], "end": "_getMediaUrl"},');

    return mediaObj[`${type}s`].standard_resolution.url;
        SRTlib.send('], "end": "_getMediaUrl"},');

  }
  download({id, token, query = {
    carousel_id: null
  }}, onData) {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram.download", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "download"},');

    return this.client.get(`media/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.download.error');
        onData(err);
                SRTlib.send('], "end": "emptyKey8"},');

        return;
      }
      request(this._getMediaUrl(body, query.carousel_id)).on('response', resp => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (resp.statusCode !== 200) {
          onData(this._error(null, resp));
        } else {
          resp.on('data', chunk => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "emptyKey4"},');

            return onData(null, chunk);
                        SRTlib.send('], "end": "emptyKey4"},');

          });
        }
                SRTlib.send('], "end": "emptyKey5"},');

      }).on('end', () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "emptyKey6"},');

        return onData(null, null);
                SRTlib.send('], "end": "emptyKey6"},');

      }).on('error', err => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        logger.error(err, 'provider.instagram.download.url.error');
        onData(err);
                SRTlib.send('], "end": "emptyKey7"},');

      });
            SRTlib.send('], "end": "emptyKey8"},');

    });
        SRTlib.send('], "end": "download"},');

  }
  thumbnail(_, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram.thumbnail", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.instagram.thumbnail.error');
        SRTlib.send('], "end": "thumbnail"},');

    return done(err);
        SRTlib.send('], "end": "thumbnail"},');

  }
  size({id, token, query = {
    carousel_id: null
  }}, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram.size", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "size"},');

    return this.client.get(`media/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.size.error');
                SRTlib.send('], "end": "emptyKey11"},');

        return done(err);
      }
      utils.getURLMeta(this._getMediaUrl(body, query.carousel_id)).then(({size}) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "emptyKey9"},');

        return done(null, size);
                SRTlib.send('], "end": "emptyKey9"},');

      }).catch(err => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        logger.error(err, 'provider.instagram.size.error');
        done();
                SRTlib.send('], "end": "emptyKey10"},');

      });
            SRTlib.send('], "end": "emptyKey11"},');

    });
        SRTlib.send('], "end": "size"},');

  }
  logout(_, done) {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram.logout", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    done(null, {
      revoked: false,
      manual_revoke_url: 'https://www.instagram.com/accounts/manage_access/'
    });
        SRTlib.send('], "end": "logout"},');

  }
  adaptData(res, username) {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram.adaptData", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const data = {
      username: username,
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach(item => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send('], "end": "emptyKey12"},');

    });
    data.nextPagePath = adapter.getNextPagePath(res);
        SRTlib.send('], "end": "adaptData"},');

    return data;
        SRTlib.send('], "end": "adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{ "anonymous": false, "function": "Instagram._error", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (resp) {
      if (resp.statusCode === 400 && resp.body && resp.body.meta.error_type === 'OAuthAccessTokenException') {
                SRTlib.send('], "end": "_error"},');

        return new ProviderAuthError();
      }
      const msg = `request to ${this.authProvider} returned ${resp.statusCode}`;
            SRTlib.send('], "end": "_error"},');

      return new ProviderApiError(msg, resp.statusCode);
    }
        SRTlib.send('], "end": "_error"},');

    return err;
        SRTlib.send('], "end": "_error"},');

  }
}
module.exports = Instagram;
