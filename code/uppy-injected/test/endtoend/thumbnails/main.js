var SRTlib = require('SRT-util');
require('es6-promise/auto');
require('whatwg-fetch');
const Uppy = require('@uppy/core');
const ThumbnailGenerator = require('@uppy/thumbnail-generator');
const FileInput = require('@uppy/file-input');
const uppyThumbnails = Uppy({
  id: 'uppyThumbnails',
  autoProceed: false,
  debug: true
});
uppyThumbnails.use(ThumbnailGenerator, {});
uppyThumbnails.use(FileInput, {
  target: '#uppyThumbnails',
  pretty: false
});
uppyThumbnails.on('file-added', file => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

  const el = document.createElement('p');
  el.className = 'file-name';
  el.textContent = file.name;
  document.body.appendChild(el);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

});
uppyThumbnails.on('thumbnail:error', (file, err) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":2},`);

  const el = document.createElement('pre');
  el.style = 'font: 14pt monospace; background: red; color: white';
  el.textContent = `Error: ${err.stack}`;
  document.body.appendChild(el);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

});
uppyThumbnails.on('thumbnail:generated', (file, preview) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":2},`);

  const img = new Image();
  img.src = file.preview;
  img.className = 'file-preview';
  img.style.display = 'block';
  document.body.appendChild(img);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

});