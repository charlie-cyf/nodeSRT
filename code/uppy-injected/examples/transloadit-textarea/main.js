/*eslint-env browser*/
const SRTlib = require('SRT-util');

const marked = require('marked');
const dragdrop = require('drag-drop');
const robodog = require('@uppy/robodog');
const TRANSLOADIT_EXAMPLE_KEY = '35c1aed03f5011e982b6afe82599b6a0';
const TRANSLOADIT_EXAMPLE_TEMPLATE = '0b2ee2bc25dc43619700c2ce0a75164a';
/**
* A textarea for markdown text, with support for file attachments.
*
* ## Usage
*
* ```js
* const element = document.querySelector('textarea')
* const mdtxt = new MarkdownTextarea(element)
* mdtxt.install()
* ```
*/
class MarkdownTextarea {
  constructor(element) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MarkdownTextarea"}},`);

    this.element = element;
    this.controls = document.createElement('div');
    this.controls.classList.add('mdtxt-controls');
    this.uploadLine = document.createElement('div');
    this.uploadLine.classList.add('mdtxt-upload');
    this.uploadLine.appendChild(document.createTextNode('Upload an attachment'));
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MarkdownTextarea"}},`);

    const {element} = this;
    const wrapper = document.createElement('div');
    wrapper.classList.add('mdtxt');
    element.parentNode.replaceChild(wrapper, element);
    wrapper.appendChild(this.controls);
    wrapper.appendChild(element);
    wrapper.appendChild(this.uploadLine);
    this.setupUploadLine();
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  setupTextareaDrop() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setupTextareaDrop","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MarkdownTextarea"}},`);

    dragdrop(this.element, files => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"dragdrop","fileName":"${__filename}","paramsNumber":1},`);

      this.uploadFiles(files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"dragdrop"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"setupTextareaDrop"},');

  }
  setupUploadLine() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setupUploadLine","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MarkdownTextarea"}},`);

    this.uploadLine.addEventListener('click', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uploadLine.addEventListener","fileName":"${__filename}","paramsNumber":0},`);

      this.pickFiles();
            SRTlib.send('{"type":"FUNCTIONEND","function":"uploadLine.addEventListener"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"setupUploadLine"},');

  }
  reportUploadError(err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reportUploadError","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MarkdownTextarea"}},`);

    this.uploadLine.classList.add('error');
    const message = document.createElement('span');
    message.appendChild(document.createTextNode(err.message));
    this.uploadLine.insertChild(message, this.uploadLine.firstChild);
        SRTlib.send('{"type":"FUNCTIONEND","function":"reportUploadError"},');

  }
  unreportUploadError() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"unreportUploadError","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MarkdownTextarea"}},`);

    this.uploadLine.classList.remove('error');
    const message = this.uploadLine.querySelector('message');
    if (message) {
      this.uploadLine.removeChild(message);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"unreportUploadError"},');

  }
  insertAttachments(attachments) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"insertAttachments","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MarkdownTextarea"}},`);

    attachments.forEach(attachment => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"attachments.forEach","fileName":"${__filename}","paramsNumber":1},`);

      const {file, thumb} = attachment;
      const link = `\n[LABEL](${file.ssl_url})\n`;
      const labelText = `View File ${file.basename}`;
      if (thumb) {
        this.element.value += link.replace('LABEL', `![${labelText}](${thumb.ssl_url})`);
      } else {
        this.element.value += link.replace('LABEL', labelText);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"attachments.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"insertAttachments"},');

  }
  matchFilesAndThumbs(results) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"matchFilesAndThumbs","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MarkdownTextarea"}},`);

    const filesById = {};
    const thumbsById = {};
    results.forEach(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"results.forEach","fileName":"${__filename}","paramsNumber":1},`);

      if (result.stepName === 'thumbnails') {
        thumbsById[result.original_id] = result;
      } else {
        filesById[result.original_id] = result;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"results.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"matchFilesAndThumbs"},');

    return Object.keys(filesById).reduce((acc, key) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Object.keys.reduce","fileName":"${__filename}","paramsNumber":2},`);

      const file = filesById[key];
      const thumb = thumbsById[key];
      acc.push({
        file,
        thumb
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.reduce"},');

      return acc;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.reduce"},');

    }, []);
        SRTlib.send('{"type":"FUNCTIONEND","function":"matchFilesAndThumbs"},');

  }
  uploadFiles(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadFiles","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MarkdownTextarea"}},`);

    robodog.upload({
      waitForEncoding: true,
      params: {
        auth: {
          key: TRANSLOADIT_EXAMPLE_KEY
        },
        template_id: TRANSLOADIT_EXAMPLE_TEMPLATE
      }
    }).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"robodog.upload.then.catch.robodog.upload.then","fileName":"${__filename}","paramsNumber":1},`);

      if (result == null) return;
      this.insertAttachments(this.matchFilesAndThumbs(result.results));
            SRTlib.send('{"type":"FUNCTIONEND","function":"robodog.upload.then.catch.robodog.upload.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"robodog.upload.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      console.error(err);
      this.reportUploadError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"robodog.upload.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFiles"},');

  }
  pickFiles() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"pickFiles","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MarkdownTextarea"}},`);

    robodog.pick({
      waitForEncoding: true,
      params: {
        auth: {
          key: TRANSLOADIT_EXAMPLE_KEY
        },
        template_id: TRANSLOADIT_EXAMPLE_TEMPLATE
      }
    }).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"robodog.pick.then.catch.robodog.pick.then","fileName":"${__filename}","paramsNumber":1},`);

      if (result == null) return;
      this.insertAttachments(this.matchFilesAndThumbs(result.results));
            SRTlib.send('{"type":"FUNCTIONEND","function":"robodog.pick.then.catch.robodog.pick.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"robodog.pick.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      console.error(err);
      this.reportUploadError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"robodog.pick.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"pickFiles"},');

  }
}
const textarea = new MarkdownTextarea(document.querySelector('#new textarea'));
textarea.install();
function renderSnippet(title, text) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderSnippet","fileName":"${__filename}","paramsNumber":2},`);

  const template = document.querySelector('#snippet');
  const newSnippet = document.importNode(template.content, true);
  const titleEl = newSnippet.querySelector('.snippet-title');
  const contentEl = newSnippet.querySelector('.snippet-content');
  titleEl.appendChild(document.createTextNode(title));
  contentEl.innerHTML = marked(text);
  const list = document.querySelector('#snippets');
  list.insertBefore(newSnippet, list.firstChild);
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderSnippet","paramsNumber":2},');

}
function saveSnippet(title, text) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"saveSnippet","fileName":"${__filename}","paramsNumber":2},`);

  const id = parseInt(localStorage.numSnippets || 0, 10);
  localStorage[`snippet_${id}`] = JSON.stringify({
    title,
    text
  });
  localStorage.numSnippets = id + 1;
    SRTlib.send('{"type":"FUNCTIONEND","function":"saveSnippet","paramsNumber":2},');

}
function loadSnippets() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"loadSnippets","fileName":"${__filename}","paramsNumber":0},`);

  for (let id = 0; localStorage[`snippet_${id}`] != null; id += 1) {
    const {title, text} = JSON.parse(localStorage[`snippet_${id}`]);
    renderSnippet(title, text);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"loadSnippets","paramsNumber":0},');

}
document.querySelector('#new').addEventListener('submit', event => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"document.querySelector.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

  event.preventDefault();
  const title = event.target.querySelector('input[name="title"]').value || 'Unnamed Snippet';
  const text = textarea.element.value;
  saveSnippet(title, text);
  renderSnippet(title, text);
  event.target.querySelector('input').value = '';
  event.target.querySelector('textarea').value = '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"document.querySelector.addEventListener"},');

});
window.addEventListener('DOMContentLoaded', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"window.addEventListener","fileName":"${__filename}","paramsNumber":0},`);

  loadSnippets();
    SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener"},');

});
