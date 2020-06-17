var SRTlib = require('SRT-util');
const React = require('react');
const PropTypes = require('prop-types');
const uppyPropType = require('./propTypes').uppy;
const h = React.createElement;
class UppyWrapper extends React.Component {
  constructor(props) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super(props);
    this.refContainer = this.refContainer.bind(this);
        SRTlib.send("]},");

  }
  componentDidMount() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send("]},");

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send("]},");

  }
  componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send("]},");

  }
  installPlugin() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const plugin = this.props.uppy.getPlugin(this.props.plugin);
    plugin.mount(this.container, plugin);
        SRTlib.send("]},");

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const plugin = props.uppy.getPlugin(this.props.plugin);
    plugin.unmount();
        SRTlib.send("]},");

  }
  refContainer(container) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.container = container;
        SRTlib.send("]},");

  }
  render() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
