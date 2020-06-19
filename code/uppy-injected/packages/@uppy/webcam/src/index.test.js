var SRTlib = require('SRT-util');
const Uppy = require('@uppy/core');
const Webcam = require('./index');
describe('Webcam', () => {
  describe('_getMediaRecorderOptions', () => {
    it('should not have a mimeType set if no preferences given', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Webcam", "testName": "should%20not%20have%20a%20mimeType%20set%20if%20no%20preferences%20given", "fileName": "${__filename}", "calls" : [`);

      global.MediaRecorder = {
        isTypeSupported: () => true
      };
      const uppy = Uppy().use(Webcam);
      expect(uppy.getPlugin('Webcam')._getMediaRecorderOptions().mimeType).not.toBeDefined();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should use preferredVideoMimeType', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Webcam", "testName": "should%20use%20preferredVideoMimeType", "fileName": "${__filename}", "calls" : [`);

      global.MediaRecorder = {
        isTypeSupported: ty => ty === 'video/webm'
      };
      const uppy = Uppy().use(Webcam, {
        preferredVideoMimeType: 'video/webm'
      });
      expect(uppy.getPlugin('Webcam')._getMediaRecorderOptions().mimeType).toEqual('video/webm');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not use preferredVideoMimeType if it is not supported', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Webcam", "testName": "should%20not%20use%20preferredVideoMimeType%20if%20it%20is%20not%20supported", "fileName": "${__filename}", "calls" : [`);

      global.MediaRecorder = {
        isTypeSupported: ty => ty === 'video/webm'
      };
      const uppy = Uppy().use(Webcam, {
        preferredVideoMimeType: 'video/mp4'
      });
      expect(uppy.getPlugin('Webcam')._getMediaRecorderOptions().mimeType).not.toBeDefined();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should pick type based on `allowedFileTypes`', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Webcam", "testName": "should%20pick%20type%20based%20on%20%60allowedFileTypes%60", "fileName": "${__filename}", "calls" : [`);

      global.MediaRecorder = {
        isTypeSupported: () => true
      };
      const uppy = Uppy({
        restrictions: {
          allowedFileTypes: ['video/mp4', 'video/webm']
        }
      }).use(Webcam);
      expect(uppy.getPlugin('Webcam')._getMediaRecorderOptions().mimeType).toEqual('video/mp4');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should use first supported type from allowedFileTypes', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Webcam", "testName": "should%20use%20first%20supported%20type%20from%20allowedFileTypes", "fileName": "${__filename}", "calls" : [`);

      global.MediaRecorder = {
        isTypeSupported: ty => ty === 'video/webm'
      };
      const uppy = Uppy({
        restrictions: {
          allowedFileTypes: ['video/mp4', 'video/webm']
        }
      }).use(Webcam);
      expect(uppy.getPlugin('Webcam')._getMediaRecorderOptions().mimeType).toEqual('video/webm');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should prefer preferredVideoMimeType over allowedFileTypes', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Webcam", "testName": "should%20prefer%20preferredVideoMimeType%20over%20allowedFileTypes", "fileName": "${__filename}", "calls" : [`);

      global.MediaRecorder = {
        isTypeSupported: () => true
      };
      const uppy = Uppy({
        restrictions: {
          allowedFileTypes: ['video/mp4', 'video/webm']
        }
      }).use(Webcam, {
        preferredVideoMimeType: 'video/webm'
      });
      expect(uppy.getPlugin('Webcam')._getMediaRecorderOptions().mimeType).toEqual('video/webm');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not use allowedFileTypes if they are unsupported', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Webcam", "testName": "should%20not%20use%20allowedFileTypes%20if%20they%20are%20unsupported", "fileName": "${__filename}", "calls" : [`);

      global.MediaRecorder = {
        isTypeSupported: () => false
      };
      const uppy = Uppy({
        restrictions: {
          allowedFileTypes: ['video/mp4', 'video/webm']
        }
      }).use(Webcam);
      expect(uppy.getPlugin('Webcam')._getMediaRecorderOptions().mimeType).toEqual(undefined);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
});
