var SRTlib = require('SRT-util');
const React = require('react');
const PropTypes = require('prop-types');
const DashboardPlugin = require('@uppy/dashboard');
const basePropTypes = require('./propTypes').dashboard;
const h = React.createElement;
class DashboardModal extends React.Component {
  componentDidMount() {
        SRTlib.send(`{ "anonymous": false, "function": "DashboardModal.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send("]},");

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": false, "function": "DashboardModal.componentDidUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
    if (prevProps.open && !this.props.open) {
      this.plugin.closeModal();
    } else if (!prevProps.open && this.props.open) {
      this.plugin.openModal();
    }
        SRTlib.send("]},");

  }
  componentWillUnmount() {
        SRTlib.send(`{ "anonymous": false, "function": "DashboardModal.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send("]},");

  }
  installPlugin() {
        SRTlib.send(`{ "anonymous": false, "function": "DashboardModal.installPlugin", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const uppy = this.props.uppy;
    const options = Object.assign({
      id: 'react:DashboardModal'
    }, this.props, {
      onRequestCloseModal: this.props.onRequestClose
    });
    if (!options.target) {
      options.target = this.container;
    }
    delete options.uppy;
    uppy.use(DashboardPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
    if (this.props.open) {
      this.plugin.openModal();
    }
        SRTlib.send("]},");

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{ "anonymous": false, "function": "DashboardModal.uninstallPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send("]},");

  }
  render() {
        SRTlib.send(`{ "anonymous": false, "function": "DashboardModal.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return h('div', {
      ref: container => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.container = container;
                SRTlib.send("]},");

      }
    });
        SRTlib.send("]},");

  }
}
DashboardModal.propTypes = Object.assign({
  target: typeof window !== 'undefined' ? PropTypes.instanceOf(window.HTMLElement) : PropTypes.any,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
  closeModalOnClickOutside: PropTypes.bool,
  disablePageScrollWhenModalOpen: PropTypes.bool
}, basePropTypes);
DashboardModal.defaultProps = {};
module.exports = DashboardModal;
