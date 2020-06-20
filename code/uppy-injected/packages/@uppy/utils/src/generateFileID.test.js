var SRTlib = require('SRT-util');
const generateFileID = require('./generateFileID');
describe('generateFileID', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "generateFileID", "fileName": "${__filename}", "calls" : [`);

  it('should take the filename object and produce a lowercase file id made up of uppy- prefix, file name (cleaned up to be lowercase, letters and numbers only), type, relative path (folder) from file.meta.relativePath, size and lastModified date', () => {
        SRTlib.send(`{ "testSuite": "generateFileID", "testName": "should%20take%20the%20filename%20object%20and%20produce%20a%20lowercase%20file%20id%20made%20up%20of%20uppy-%20prefix%2C%20file%20name%20%28cleaned%20up%20to%20be%20lowercase%2C%20letters%20and%20numbers%20only%29%2C%20type%2C%20relative%20path%20%28folder%29%20from%20file.meta.relativePath%2C%20size%20and%20lastModified%20date", "fileName": "${__filename}", "calls" : [`);

    const fileObj = {
      name: 'fOo0Fi@£$.jpg',
      type: 'image/jpeg',
      data: {
        lastModified: 1498510508000,
        size: 2271173
      }
    };
    expect(generateFileID(fileObj)).toEqual('uppy-foo0fi////jpg-20-53-14-1e-image/jpeg-2271173-1498510508000');
    expect(generateFileID({
      name: 'джумла-джpумлатест.jpg',
      type: 'image/jpeg',
      data: {
        lastModified: 1498510508000,
        size: 2271173
      }
    })).toEqual('uppy-/////////p/////////jpg-11k-11m-123-11s-11r-11g-1d-11k-11m-123-11s-11r-11g-122-11l-121-122-1e-image/jpeg-2271173-1498510508000');
    expect(generateFileID({
      name: 'hello.jpg',
      type: 'image/jpeg',
      data: {
        lastModified: 1498510508000,
        size: 2271173
      },
      meta: {
        relativePath: 'folder/a'
      }
    })).toEqual('uppy-hello/jpg-1e-image/jpeg-folder/a-1f-2271173-1498510508000');
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
