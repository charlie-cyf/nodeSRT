var SRTlib = require('SRT-util');
const Uppy = require('@uppy/core');
const Dashboard = require('@uppy/dashboard');
const Instagram = require('@uppy/instagram');
const GoogleDrive = require('@uppy/google-drive');
const Url = require('@uppy/url');
const Webcam = require('@uppy/webcam');
const Tus = require('@uppy/tus');
require('@uppy/core/dist/style.css');
require('@uppy/dashboard/dist/style.css');
require('@uppy/url/dist/style.css');
require('@uppy/webcam/dist/style.css');
const TUS_ENDPOINT = 'https://master.tus.io/files/';
const uppy = Uppy({
  debug: true,
  meta: {
    username: 'John',
    license: 'Creative Commons'
  }
}).use(Dashboard, {
  trigger: '#pick-files',
  target: '#upload-form',
  inline: true,
  replaceTargetContent: true,
  metaFields: [{
    id: 'license',
    name: 'License',
    placeholder: 'specify license'
  }, {
    id: 'caption',
    name: 'Caption',
    placeholder: 'add caption'
  }],
  showProgressDetails: true,
  proudlyDisplayPoweredByUppy: true,
  note: '2 files, images and video only'
}).use(GoogleDrive, {
  target: Dashboard,
  companionUrl: 'http://localhost:3020'
}).use(Instagram, {
  target: Dashboard,
  companionUrl: 'http://localhost:3020'
}).use(Url, {
  target: Dashboard,
  companionUrl: 'http://localhost:3020'
}).use(Webcam, {
  target: Dashboard
}).use(Tus, {
  endpoint: TUS_ENDPOINT
});
uppy.on('complete', result => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (result.failed.length === 0) {
    console.log('Upload successful 😀');
  } else {
    console.warn('Upload failed 😞');
  }
  console.log('successful files:', result.successful);
  console.log('failed files:', result.failed);
    SRTlib.send('], "end": "emptyKey"},');

});
