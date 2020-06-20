var SRTlib = require('SRT-util');
const marked = require('marked');
const dragdrop = require('drag-drop');
const robodog = require('@uppy/robodog');
const TRANSLOADIT_EXAMPLE_KEY = '35c1aed03f5011e982b6afe82599b6a0';
const TRANSLOADIT_EXAMPLE_TEMPLATE = '0b2ee2bc25dc43619700c2ce0a75164a';
class MarkdownTextarea {
  constructor(element) {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.element = element;
    this.controls = document.createElement('div');
    this.controls.classList.add('mdtxt-controls');
    this.uploadLine = document.createElement('div');
    this.uploadLine.classList.add('mdtxt-upload');
    this.uploadLine.appendChild(document.createTextNode('Upload an attachment'));
        SRTlib.send("]},");

  }
  install() {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const {element} = this;
    const wrapper = document.createElement('div');
    wrapper.classList.add('mdtxt');
    element.parentNode.replaceChild(wrapper, element);
    wrapper.appendChild(this.controls);
    wrapper.appendChild(element);
    wrapper.appendChild(this.uploadLine);
    this.setupUploadLine();
        SRTlib.send("]},");

  }
  setupTextareaDrop() {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.setupTextareaDrop", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    dragdrop(this.element, files => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.uploadFiles(files);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  setupUploadLine() {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.setupUploadLine", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uploadLine.addEventListener('click', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.pickFiles();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  reportUploadError(err) {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.reportUploadError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.uploadLine.classList.add('error');
    const message = document.createElement('span');
    message.appendChild(document.createTextNode(err.message));
    this.uploadLine.insertChild(message, this.uploadLine.firstChild);
        SRTlib.send("]},");

  }
  unreportUploadError() {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.unreportUploadError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uploadLine.classList.remove('error');
    const message = this.uploadLine.querySelector('message');
    if (message) {
      this.uploadLine.removeChild(message);
    }
        SRTlib.send("]},");

  }
  insertAttachments(attachments) {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.insertAttachments", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    attachments.forEach(attachment => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const {file, thumb} = attachment;
      const link = `\n[LABEL](${file.ssl_url})\n`;
      const labelText = `View File ${file.basename}`;
      if (thumb) {
        this.element.value += link.replace('LABEL', `![${labelText}](${thumb.ssl_url})`);
      } else {
        this.element.value += link.replace('LABEL', labelText);
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  matchFilesAndThumbs(results) {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.matchFilesAndThumbs", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const filesById = {};
    const thumbsById = {};
    results.forEach(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (result.stepName === 'thumbnails') {
        thumbsById[result.original_id] = result;
      } else {
        filesById[result.original_id] = result;
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return Object.keys(filesById).reduce((acc, key) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      const file = filesById[key];
      const thumb = thumbsById[key];
      acc.push({
        file,
        thumb
      });
            SRTlib.send("]},");

      return acc;
            SRTlib.send("]},");

    }, []);
        SRTlib.send("]},");

  }
  uploadFiles(files) {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.uploadFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    robodog.upload({
      waitForEncoding: true,
      params: {
        auth: {
          key: TRANSLOADIT_EXAMPLE_KEY
        },
        template_id: TRANSLOADIT_EXAMPLE_TEMPLATE
      }
    }).then(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (result == null) {
                SRTlib.send("]},");

        return;
      }
      this.insertAttachments(this.matchFilesAndThumbs(result.results));
            SRTlib.send("]},");

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      console.error(err);
      this.reportUploadError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  pickFiles() {
        SRTlib.send(`{ "anonymous": false, "function": "MarkdownTextarea.pickFiles", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    robodog.pick({
      waitForEncoding: true,
      params: {
        auth: {
          key: TRANSLOADIT_EXAMPLE_KEY
        },
        template_id: TRANSLOADIT_EXAMPLE_TEMPLATE
      }
    }).then(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (result == null) {
                SRTlib.send("]},");

        return;
      }
      this.insertAttachments(this.matchFilesAndThumbs(result.results));
            SRTlib.send("]},");

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      console.error(err);
      this.reportUploadError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
}
const textarea = new MarkdownTextarea(document.querySelector('#new textarea'));
textarea.install();
function renderSnippet(title, text) {
    SRTlib.send(`{ "anonymous": false, "function": "renderSnippet", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const template = document.querySelector('#snippet');
  const newSnippet = document.importNode(template.content, true);
  const titleEl = newSnippet.querySelector('.snippet-title');
  const contentEl = newSnippet.querySelector('.snippet-content');
  titleEl.appendChild(document.createTextNode(title));
  contentEl.innerHTML = marked(text);
  const list = document.querySelector('#snippets');
  list.insertBefore(newSnippet, list.firstChild);
    SRTlib.send("]},");

}
function saveSnippet(title, text) {
    SRTlib.send(`{ "anonymous": false, "function": "saveSnippet", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const id = parseInt(localStorage.numSnippets || 0, 10);
  localStorage[`snippet_${id}`] = JSON.stringify({
    title,
    text
  });
  localStorage.numSnippets = id + 1;
    SRTlib.send("]},");

}
function loadSnippets() {
    SRTlib.send(`{ "anonymous": false, "function": "loadSnippets", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  for (let id = 0; localStorage[`snippet_${id}`] != null; id += 1) {
    const {title, text} = JSON.parse(localStorage[`snippet_${id}`]);
    renderSnippet(title, text);
  }
    SRTlib.send("]},");

}
document.querySelector('#new').addEventListener('submit', event => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  event.preventDefault();
  const title = event.target.querySelector('input[name="title"]').value || 'Unnamed Snippet';
  const text = textarea.element.value;
  saveSnippet(title, text);
  renderSnippet(title, text);
  event.target.querySelector('input').value = '';
  event.target.querySelector('textarea').value = '';
    SRTlib.send("]},");

});
window.addEventListener('DOMContentLoaded', () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  loadSnippets();
    SRTlib.send("]},");

});
