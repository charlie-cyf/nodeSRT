const SRTlib = require('SRT-util');

const React = require('react');
const PropTypes = require('prop-types');
const uppyPropType = require('./propTypes').uppy;
const h = React.createElement;
class UppyWrapper extends React.Component {
  constructor(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"UppyWrapper"}},`);

    super(props);
    this.refContainer = this.refContainer.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppyWrapper"}},`);

    this.installPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidUpdate","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"UppyWrapper"}},`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidUpdate"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppyWrapper"}},`);

    this.uninstallPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  installPlugin() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"installPlugin","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppyWrapper"}},`);

    const plugin = this.props.uppy.getPlugin(this.props.plugin);
    plugin.mount(this.container, plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"installPlugin"},');

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstallPlugin","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"UppyWrapper"}},`);

    const plugin = props.uppy.getPlugin(this.props.plugin);
    plugin.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstallPlugin"},');

  }
  refContainer(container) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"refContainer","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"UppyWrapper"}},`);

    this.container = container;
        SRTlib.send('{"type":"FUNCTIONEND","function":"refContainer"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppyWrapper"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return h('div', {
      ref: this.refContainer
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
UppyWrapper.propTypes = {
  uppy: uppyPropType,
  plugin: PropTypes.string.isRequired
};
module.exports = UppyWrapper;
