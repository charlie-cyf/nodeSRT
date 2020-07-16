const SRTlib = require('SRT-util');

const request = require('request');
const BASE_URL = 'https://api.unsplash.com';
class MyCustomProvider {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider"}},`);

    this.authProvider = 'myunsplash';
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  list({token, directory}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":2,"classInfo":{"className":"MyCustomProvider"}},`);

    const path = directory ? `/${directory}/photos` : '';
    const options = {
      url: `${BASE_URL}/collections${path}`,
      method: 'GET',
      json: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    request(options, (err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":3},`);

      if (err) {
        console.log(err);
        done(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request"},');

        return;
      }
      done(null, this._adaptData(body));
            SRTlib.send('{"type":"FUNCTIONEND","function":"request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  download({id, token}, onData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"download","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":2,"classInfo":{"className":"MyCustomProvider"}},`);

    const options = {
      url: `${BASE_URL}/photos/${id}`,
      method: 'GET',
      json: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    request(options, (err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request###2","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":3},`);

      if (err) {
        console.log(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request###2"},');

        return;
      }
      const url = body.links.download;
      request.get(url).on('data', chunk => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.get.on.on.on.request.get.on.on.request.get.on","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"request.get.on.on.on.request.get.on.on.request.get.on"},');

        return onData(null, chunk);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.get.on.on.on.request.get.on.on.request.get.on"},');

      }).on('end', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.get.on.on.on.request.get.on.on","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"request.get.on.on.on.request.get.on.on"},');

        return onData(null, null);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.get.on.on.on.request.get.on.on"},');

      }).on('error', err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.get.on.on.on","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"request.get.on.on.on"},');

        return console.log(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.get.on.on.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"request###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"download"},');

  }
  size({id, token}, done) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"size","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":2,"classInfo":{"className":"MyCustomProvider"}},`);

    const options = {
      url: `${BASE_URL}/photos/${id}`,
      method: 'GET',
      json: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    request(options, (err, resp, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request###3","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":3},`);

      if (err) {
        console.log(err);
        done(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request###3"},');

        return;
      }
      done(null, body.width * body.height);
            SRTlib.send('{"type":"FUNCTIONEND","function":"request###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"size"},');

  }
  _adaptData(res) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_adaptData","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider"}},`);

    const data = {
      username: null,
      items: [],
      nextPagePath: null
    };
    const items = res;
    items.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"items.forEach","fileName":"/examples/custom-provider/server/customprovider.js","paramsNumber":1},`);

      const isFolder = !!item.published_at;
      data.items.push({
        isFolder: isFolder,
        icon: isFolder ? item.cover_photo.urls.thumb : item.urls.thumb,
        name: item.title || item.description,
        mimeType: isFolder ? null : 'image/jpeg',
        id: item.id,
        thumbnail: isFolder ? item.cover_photo.urls.thumb : item.urls.thumb,
        requestPath: item.id,
        modifiedDate: item.updated_at,
        size: null
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"items.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_adaptData"},');

    return data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_adaptData"},');

  }
}
module.exports = MyCustomProvider;
