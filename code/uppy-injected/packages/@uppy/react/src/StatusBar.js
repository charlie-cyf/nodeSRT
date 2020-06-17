var SRTlib = require('SRT-util');
const React = require('react');
const PropTypes = require('prop-types');
const StatusBarPlugin = require('@uppy/status-bar');
const uppyPropType = require('./propTypes').uppy;
const h = React.createElement;
class StatusBar extends React.Component {
  componentDidMount() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send("]},");

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send("]},");

  }
  componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send("]},");

  }
  installPlugin() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const uppy = this.props.uppy;
    const options = Object.assign({
      id: 'react:StatusBar'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(StatusBarPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send("]},");

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send("]},");

  }
  render() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return h('div', {
      ref: container => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.container = container;
                SRTlib.send("]},");

      }
    });
        SRTlib.send("]},");

  }
}
StatusBar.propTypes = {
  uppy: uppyPropType,
  hideAfterFinish: PropTypes.bool,
  showProgressDetails: PropTypes.bool
};
StatusBar.defaultProps = {};
module.exports = StatusBar;
