const SRTlib = require('SRT-util');

const Provider = require('../../Provider');
const request = require('request');
const purest = require('purest')({
  request
});
const utils = require('../../../helpers/utils');
const logger = require('../../../logger');
const adapter = require('./adapter');
const {ProviderApiError, ProviderAuthError} = require('../../error');
class Instagram extends Provider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    super(options);
    this.authProvider = options.provider = Instagram.authProvider;
    this.client = purest(options);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static getExtraConfig() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getExtraConfig","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getExtraConfig"},');

    return {
      protocol: 'https',
      scope: ['user_profile', 'user_media']
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"getExtraConfig"},');

  }
  static get authProvider() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authProvider","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

    return 'instagram';
        SRTlib.send('{"type":"FUNCTIONEND","function":"authProvider"},');

  }
  list({directory, token, query = {
    cursor: null
  }}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    const qs = {
      fields: 'id,media_type,thumbnail_url,media_url,timestamp,children{media_type,media_url,thumbnail_url,timestamp}'
    };
    if (query.cursor) {
      qs.after = query.cursor;
    }
    this.client.get('https://graph.instagram.com/me/media').qs(qs).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.get.qs.auth.request","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.list.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.qs.auth.request"},');

        return done(err);
      } else {
        this._getUsername(token, (err, username) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_getUsername","fileName":"${__filename}","paramsNumber":2},`);

          err ? done(err) : done(null, this.adaptData(body, username, directory, query));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_getUsername"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.qs.auth.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  _getUsername(token, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getUsername","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    this.client.get('https://graph.instagram.com/me').qs({
      fields: 'username'
    }).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.get.qs.auth.request2","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.user.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.qs.auth.request2"},');

        return done(err);
      } else {
        done(null, body.username);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"client.get.qs.auth.request2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getUsername"},');

  }
  download({id, token}, onData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

    return this.client.get(`https://graph.instagram.com/${id}`).qs({
      fields: 'media_url'
    }).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.get.qs.auth.request","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.download.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.qs.auth.request"},');

        return;
      }
      request(body.media_url).on('response', resp => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.on.on.on.request.on.on.request.on","fileName":"${__filename}","paramsNumber":1},`);

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
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.on.on.on.request.on.on.request.on"},');

      }).on('end', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.on.on.on.request.on.on","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"request.on.on.on.request.on.on"},');

        return onData(null, null);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.on.on.on.request.on.on"},');

      }).on('error', err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.on.on.on","fileName":"${__filename}","paramsNumber":1},`);

        logger.error(err, 'provider.instagram.download.url.error');
        onData(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.on.on.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.qs.auth.request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  thumbnail(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    const err = new Error('call to thumbnail is not implemented');
    logger.error(err, 'provider.instagram.thumbnail.error');
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

    return done(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail"},');

  }
  size({id, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

    return this.client.get(`https://graph.instagram.com/${id}`).qs({
      fields: 'media_url'
    }).auth(token).request((err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.client.get.qs.auth.request2","fileName":"${__filename}","paramsNumber":3},`);

      if (err || resp.statusCode !== 200) {
        err = this._error(err, resp);
        logger.error(err, 'provider.instagram.size.error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.qs.auth.request2"},');

        return done(err);
      }
      utils.getURLMeta(body.media_url).then(({size}) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"utils.getURLMeta.then.catch.utils.getURLMeta.then","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"utils.getURLMeta.then.catch.utils.getURLMeta.then"},');

        return done(null, size);
                SRTlib.send('{"type":"FUNCTIONEND","function":"utils.getURLMeta.then.catch.utils.getURLMeta.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"utils.getURLMeta.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        logger.error(err, 'provider.instagram.size.error');
        done();
                SRTlib.send('{"type":"FUNCTIONEND","function":"utils.getURLMeta.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.client.get.qs.auth.request2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  logout(_, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    done(null, {
      revoked: false,
      manual_revoke_url: 'https://www.instagram.com/accounts/manage_access/'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  adaptData(res, username, directory, currentQuery) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"adaptData","fileName":"${__filename}","paramsNumber":4,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    const data = {
      username: username,
      items: []
    };
    const items = adapter.getItemSubList(res);
    items.forEach((item, i) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"items.forEach","fileName":"${__filename}","paramsNumber":2},`);

      data.items.push({
        isFolder: adapter.isFolder(item),
        icon: adapter.getItemIcon(item),
        name: adapter.getItemName(item, i),
        mimeType: adapter.getMimeType(item),
        id: adapter.getItemId(item),
        thumbnail: adapter.getItemThumbnailUrl(item),
        requestPath: adapter.getItemRequestPath(item),
        modifiedDate: adapter.getItemModifiedDate(item)
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"items.forEach"},');

    });
    data.nextPagePath = adapter.getNextPagePath(res, currentQuery, directory);
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

    return data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"adaptData"},');

  }
  _error(err, resp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_error","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Instagram","superClass":"Provider"}},`);

    if (resp) {
      if (resp.body && resp.body.error.code === 190) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

        return new ProviderAuthError();
      }
      const fallbackMessage = `request to ${this.authProvider} returned ${resp.statusCode}`;
      const msg = resp.body && resp.body.error ? resp.body.error.message : fallbackMessage;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

      return new ProviderApiError(msg, resp.statusCode);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

    return err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_error"},');

  }
}
module.exports = Instagram;
