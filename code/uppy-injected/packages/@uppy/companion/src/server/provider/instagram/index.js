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
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super(options);
    this.authProvider = options.provider = Instagram.authProvider;
    this.client = purest(options);
        SRTlib.send("]},");

  }
  static get authProvider() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return 'instagram';
        SRTlib.send("]},");

  }
  list({directory = 'recent', token, query = {
    cursor: null,
    max_id: null
  }}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const cursor = query.cursor || query.max_id;
    const qs = cursor ? {
      max_id: cursor
    } : {};
    this.client.get(`users/self/media/${directory}`).qs(qs).auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.list.error');
                SRTlib.send("]},");

        return done(err);
      } else {
        this._getUsername(token, (err, username) => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          err ? done(err) : done(null, this.adaptData(body, username));
                    SRTlib.send("]},");

        });
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _getUsername(token, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.client.get('users/self').auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.user.error');
                SRTlib.send("]},");

        return done(err);
      } else {
        done(null, body.data.username);
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _getMediaUrl(body, carouselId) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send("]},");

    return mediaObj[`${type}s`].standard_resolution.url;
        SRTlib.send("]},");

  }
  download({id, token, query = {
    carousel_id: null
  }}, onData) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.client.get(`media/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.download.error');
        onData(err);
                SRTlib.send("]},");

        return;
      }
      request(this._getMediaUrl(body, query.carousel_id)).on('response', resp => {
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

        logger.error(err, 'provider.instagram.download.url.error');
        onData(err);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  thumbnail(_, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.instagram.thumbnail.error');
        SRTlib.send("]},");

    return done(err);
        SRTlib.send("]},");

  }
  size({id, token, query = {
    carousel_id: null
  }}, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.client.get(`media/${id}`).auth(token).request((err, resp, body) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.size.error');
                SRTlib.send("]},");

        return done(err);
      }
      utils.getURLMeta(this._getMediaUrl(body, query.carousel_id)).then(({size}) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        done(null, size);
                SRTlib.send("]},");

      }).catch(err => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        logger.error(err, 'provider.instagram.size.error');
        done();
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  logout(_, done) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    done(null, {
      revoked: false,
      manual_revoke_url: 'https://www.instagram.com/accounts/manage_access/'
    });
        SRTlib.send("]},");

  }
  adaptData(res, username) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const data = {
      username: username,
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
        thumbnail: adapter.getItemThumbnailUrl(item),
        requestPath: adapter.getItemRequestPath(item),
        modifiedDate: adapter.getItemModifiedDate(item)
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
      if (resp.statusCode === 400 && resp.body && resp.body.meta.error_type === 'OAuthAccessTokenException') {
                SRTlib.send("]},");

        return new ProviderAuthError();
      }
      const msg = `request to ${this.authProvider} returned ${resp.statusCode}`;
            SRTlib.send("]},");

      return new ProviderApiError(msg, resp.statusCode);
    }
        SRTlib.send("]},");

    return err;
        SRTlib.send("]},");

  }
}
module.exports = Instagram;
