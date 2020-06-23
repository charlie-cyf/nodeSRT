var SRTlib = require('SRT-util');
const React = require('react');
const PropTypes = require('prop-types');
const DashboardPlugin = require('@uppy/dashboard');
const basePropTypes = require('./propTypes').dashboard;
const h = React.createElement;
class DashboardModal extends React.Component {
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DashboardModal"}},`);

    this.installPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidUpdate","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"DashboardModal"}},`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
    if (prevProps.open && !this.props.open) {
      this.plugin.closeModal();
    } else if (!prevProps.open && this.props.open) {
      this.plugin.openModal();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidUpdate"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DashboardModal"}},`);

    this.uninstallPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  installPlugin() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"installPlugin","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DashboardModal"}},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"installPlugin"},');

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstallPlugin","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"DashboardModal"}},`);

    const uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstallPlugin"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"DashboardModal"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return h('div', {
      ref: container => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        this.container = container;
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

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