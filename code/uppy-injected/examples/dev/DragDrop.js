const SRTlib = require('SRT-util');

const Uppy = require('@uppy/core/src');
const Tus = require('@uppy/tus/src');
const DragDrop = require('@uppy/drag-drop/src');
const ProgressBar = require('@uppy/progress-bar/src');
module.exports = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/examples/dev/DragDrop.js","paramsNumber":0},`);

  const uppyDragDrop = Uppy({
    debug: true,
    autoProceed: true
  }).use(DragDrop, {
    target: '#uppyDragDrop'
  }).use(ProgressBar, {
    target: '#uppyDragDrop-progress',
    hideAfterFinish: false
  }).use(Tus, {
    endpoint: 'https://master.tus.io/files/'
  });
  window.uppy = uppyDragDrop;
  uppyDragDrop.on('complete', result => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppyDragDrop.on","fileName":"/examples/dev/DragDrop.js","paramsNumber":1},`);

    if (result.failed.length === 0) {
      console.log('Upload successful 😀');
    } else {
      console.warn('Upload failed 😞');
    }
    console.log('successful files:', result.successful);
    console.log('failed files:', result.failed);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uppyDragDrop.on"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
