const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
class UrlUI extends Component {
  constructor(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/url/src/UrlUI.js","paramsNumber":1,"classInfo":{"className":"UrlUI","superClass":"Component"}},`);

    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"/packages/@uppy/url/src/UrlUI.js","paramsNumber":0,"classInfo":{"className":"UrlUI","superClass":"Component"}},`);

    this.input.value = '';
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  handleKeyPress(ev) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleKeyPress","fileName":"/packages/@uppy/url/src/UrlUI.js","paramsNumber":1,"classInfo":{"className":"UrlUI","superClass":"Component"}},`);

    if (ev.keyCode === 13) {
      this.props.addFile(this.input.value);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleKeyPress"},');

  }
  handleClick() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleClick","fileName":"/packages/@uppy/url/src/UrlUI.js","paramsNumber":0,"classInfo":{"className":"UrlUI","superClass":"Component"}},`);

    this.props.addFile(this.input.value);
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleClick"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/url/src/UrlUI.js","paramsNumber":0,"classInfo":{"className":"UrlUI","superClass":"Component"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div class="uppy-Url">
        <input class="uppy-u-reset uppy-c-textInput uppy-Url-input" type="text" aria-label={this.props.i18n('enterUrlToImport')} placeholder={this.props.i18n('enterUrlToImport')} onkeyup={this.handleKeyPress} ref={input => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/url/src/UrlUI.js","paramsNumber":1},`);

      this.input = input;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    }} data-uppy-super-focusable />
        <button class="uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Url-importButton" type="button" onclick={this.handleClick}>
          {this.props.i18n('import')}
        </button>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
module.exports = UrlUI;
