var SRTlib = require('SRT-util');
const isPreviewSupported = require('./isPreviewSupported');
describe('isPreviewSupported', () => {
  it('should return true for any filetypes that browsers can preview', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "isPreviewSupported", "testName": "should%20return%20true%20for%20any%20filetypes%20that%20browsers%20can%20preview", "fileName": "${__filename}", "calls" : [`);

    const supported = ['image/jpeg', 'image/gif', 'image/png', 'image/svg', 'image/svg+xml', 'image/bmp', 'image/jpg', 'image/webp'];
    supported.forEach(ext => {
      expect(isPreviewSupported(ext)).toEqual(true);
    });
    expect(isPreviewSupported('foo')).toEqual(false);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
