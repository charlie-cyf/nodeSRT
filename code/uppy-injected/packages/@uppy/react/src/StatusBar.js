const SRTlib = require('SRT-util');

const React = require('react');
const PropTypes = require('prop-types');
const StatusBarPlugin = require('@uppy/status-bar');
const uppyPropType = require('./propTypes').uppy;
const h = React.createElement;
/**
* React component that renders a status bar containing upload progress and speed,
* processing progress and pause/resume/cancel controls.
*/
class StatusBar extends React.Component {
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"StatusBar"}},`);

    this.installPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidUpdate","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"StatusBar"}},`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidUpdate"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"StatusBar"}},`);

    this.uninstallPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  installPlugin() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"installPlugin","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"StatusBar"}},`);

    const uppy = this.props.uppy;
    const options = Object.assign({
      id: 'react:StatusBar'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(StatusBarPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"installPlugin"},');

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstallPlugin","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"StatusBar"}},`);

    const uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstallPlugin"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"StatusBar"}},`);

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
StatusBar.propTypes = {
  uppy: uppyPropType,
  hideAfterFinish: PropTypes.bool,
  showProgressDetails: PropTypes.bool
};
StatusBar.defaultProps = {};
module.exports = StatusBar;
