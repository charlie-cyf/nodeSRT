const SRTlib = require('SRT-util');

const React = require('react');
const DashboardPlugin = require('@uppy/dashboard');
const basePropTypes = require('./propTypes').dashboard;
const h = React.createElement;
class Dashboard extends React.Component {
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"/packages/@uppy/react/src/Dashboard.js","paramsNumber":0,"classInfo":{"className":"Dashboard"}},`);

    this.installPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidUpdate","fileName":"/packages/@uppy/react/src/Dashboard.js","paramsNumber":1,"classInfo":{"className":"Dashboard"}},`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidUpdate"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"/packages/@uppy/react/src/Dashboard.js","paramsNumber":0,"classInfo":{"className":"Dashboard"}},`);

    this.uninstallPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  installPlugin() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"installPlugin","fileName":"/packages/@uppy/react/src/Dashboard.js","paramsNumber":0,"classInfo":{"className":"Dashboard"}},`);

    const uppy = this.props.uppy;
    const options = Object.assign({
      id: 'react:Dashboard'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(DashboardPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"installPlugin"},');

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstallPlugin","fileName":"/packages/@uppy/react/src/Dashboard.js","paramsNumber":1,"classInfo":{"className":"Dashboard"}},`);

    const uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstallPlugin"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/react/src/Dashboard.js","paramsNumber":0,"classInfo":{"className":"Dashboard"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return h('div', {
      ref: container => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.h.ref","fileName":"/packages/@uppy/react/src/Dashboard.js","paramsNumber":1},`);

        this.container = container;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h.ref"},');

      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
Dashboard.propTypes = basePropTypes;
Dashboard.defaultProps = {
  inline: true
};
module.exports = Dashboard;
