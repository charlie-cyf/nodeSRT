var SRTlib = require('SRT-util');
const React = require('react');
const PropTypes = require('prop-types');
const uppyPropType = require('./propTypes').uppy;
const h = React.createElement;
class UppyWrapper extends React.Component {
  constructor(props) {
        SRTlib.send(`{ "anonymous": false, "function": "UppyWrapper.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super(props);
    this.refContainer = this.refContainer.bind(this);
        SRTlib.send("]},");

  }
  componentDidMount() {
        SRTlib.send(`{ "anonymous": false, "function": "UppyWrapper.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send("]},");

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": false, "function": "UppyWrapper.componentDidUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send("]},");

  }
  componentWillUnmount() {
        SRTlib.send(`{ "anonymous": false, "function": "UppyWrapper.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send("]},");

  }
  installPlugin() {
        SRTlib.send(`{ "anonymous": false, "function": "UppyWrapper.installPlugin", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const plugin = this.props.uppy.getPlugin(this.props.plugin);
    plugin.mount(this.container, plugin);
        SRTlib.send("]},");

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{ "anonymous": false, "function": "UppyWrapper.uninstallPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const plugin = props.uppy.getPlugin(this.props.plugin);
    plugin.unmount();
        SRTlib.send("]},");

  }
  refContainer(container) {
        SRTlib.send(`{ "anonymous": false, "function": "UppyWrapper.refContainer", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.container = container;
        SRTlib.send("]},");

  }
  render() {
        SRTlib.send(`{ "anonymous": false, "function": "UppyWrapper.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return h('div', {
      ref: this.refContainer
    });
        SRTlib.send("]},");

  }
}
UppyWrapper.propTypes = {
  uppy: uppyPropType,
  plugin: PropTypes.string.isRequired
};
module.exports = UppyWrapper;
