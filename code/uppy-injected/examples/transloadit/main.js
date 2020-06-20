var SRTlib = require('SRT-util');
const {inspect} = require('util');
const robodog = require('@uppy/robodog');
const TRANSLOADIT_KEY = '35c1aed03f5011e982b6afe82599b6a0';
const TEMPLATE_ID = 'bbc273f69e0c4694a5a9d1b587abc1bc';
const formUppy = robodog.form('#test-form', {
  debug: true,
  fields: ['message'],
  restrictions: {
    allowedFileTypes: ['.png']
  },
  waitForEncoding: true,
  params: {
    auth: {
      key: TRANSLOADIT_KEY
    },
    template_id: TEMPLATE_ID
  },
  modal: true,
  progressBar: '#test-form .progress'
});
formUppy.on('error', err => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  document.querySelector('#test-form .error').textContent = err.message;
    SRTlib.send("]},");

});
formUppy.on('upload-error', (file, err) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  document.querySelector('#test-form .error').textContent = err.message;
    SRTlib.send("]},");

});
window.formUppy = formUppy;
const formUppyWithDashboard = robodog.form('#dashboard-form', {
  debug: true,
  fields: ['message'],
  restrictions: {
    allowedFileTypes: ['.png']
  },
  waitForEncoding: true,
  note: 'Only PNG files please!',
  params: {
    auth: {
      key: TRANSLOADIT_KEY
    },
    template_id: TEMPLATE_ID
  },
  dashboard: '#dashboard-form .dashboard'
});
window.formUppyWithDashboard = formUppyWithDashboard;
const dashboard = robodog.dashboard('#dashboard', {
  debug: true,
  waitForEncoding: true,
  note: 'Images will be resized with Transloadit',
  params: {
    auth: {
      key: TRANSLOADIT_KEY
    },
    template_id: TEMPLATE_ID
  }
});
window.dashboard = dashboard;
function openModal() {
    SRTlib.send(`{ "anonymous": false, "function": "openModal", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  robodog.pick({
    restrictions: {
      allowedFileTypes: ['.png']
    },
    waitForEncoding: true,
    params: {
      auth: {
        key: TRANSLOADIT_KEY
      },
      template_id: TEMPLATE_ID
    },
    providers: ['webcam']
  }).then(console.log, console.error);
    SRTlib.send("]},");

}
window.openModal = openModal;
window.doUpload = event => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const resultEl = document.querySelector('#upload-result');
  const errorEl = document.querySelector('#upload-error');
  robodog.upload(event.target.files, {
    waitForEncoding: true,
    params: {
      auth: {
        key: TRANSLOADIT_KEY
      },
      template_id: TEMPLATE_ID
    }
  }).then(result => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    resultEl.classList.remove('hidden');
    errorEl.classList.add('hidden');
    resultEl.textContent = inspect(result.results);
        SRTlib.send("]},");

  }, err => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    resultEl.classList.add('hidden');
    errorEl.classList.remove('hidden');
    errorEl.textContent = err.message;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
