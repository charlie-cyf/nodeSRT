const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
class AuthView extends Component {
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/provider-views/src/AuthView.js","paramsNumber":0,"classInfo":{"className":"AuthView","superClass":"Component"}},`);

    const pluginNameComponent = <span class="uppy-Provider-authTitleName">{this.props.pluginName}<br /></span>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div class="uppy-Provider-auth">
        <div class="uppy-Provider-authIcon">{this.props.pluginIcon()}</div>
        <div class="uppy-Provider-authTitle">
          {this.props.i18nArray('authenticateWithTitle', {
      pluginName: pluginNameComponent
    })}
        </div>
        <button type="button" class="uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn" onclick={this.props.handleAuth} data-uppy-super-focusable>
          {this.props.i18nArray('authenticateWith', {
      pluginName: this.props.pluginName
    })}
        </button>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
module.exports = AuthView;
