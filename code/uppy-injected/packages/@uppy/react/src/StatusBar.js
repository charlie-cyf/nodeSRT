var SRTlib = require('SRT-util');
const React = require('react');
const PropTypes = require('prop-types');
const StatusBarPlugin = require('@uppy/status-bar');
const uppyPropType = require('./propTypes').uppy;
const h = React.createElement;
class StatusBar extends React.Component {
  componentDidMount() {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send('], "end": "componentDidMount"},');

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar.componentDidUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('], "end": "componentDidUpdate"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send('], "end": "componentWillUnmount"},');

  }
  installPlugin() {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar.installPlugin", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const uppy = this.props.uppy;
    const options = Object.assign({
      id: 'react:StatusBar'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(StatusBarPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send('], "end": "installPlugin"},');

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar.uninstallPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('], "end": "uninstallPlugin"},');

  }
  render() {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "render"},');

    return h('div', {
      ref: container => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.container = container;
                SRTlib.send('], "end": "emptyKey"},');

      }
    });
        SRTlib.send('], "end": "render"},');

  }
}
StatusBar.propTypes = {
  uppy: uppyPropType,
  hideAfterFinish: PropTypes.bool,
  showProgressDetails: PropTypes.bool
};
StatusBar.defaultProps = {};
module.exports = StatusBar;
