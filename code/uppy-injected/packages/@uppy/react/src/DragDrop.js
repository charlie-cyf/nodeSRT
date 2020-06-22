var SRTlib = require('SRT-util');
const React = require('react');
const DragDropPlugin = require('@uppy/drag-drop');
const propTypes = require('./propTypes');
const h = React.createElement;
class DragDrop extends React.Component {
  componentDidMount() {
        SRTlib.send(`{ "anonymous": false, "function": "DragDrop.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send('], "end": "componentDidMount"},');

  }
  componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": false, "function": "DragDrop.componentDidUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('], "end": "componentDidUpdate"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{ "anonymous": false, "function": "DragDrop.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send('], "end": "componentWillUnmount"},');

  }
  installPlugin() {
        SRTlib.send(`{ "anonymous": false, "function": "DragDrop.installPlugin", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const uppy = this.props.uppy;
    const options = Object.assign({
      id: 'react:DragDrop'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(DragDropPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send('], "end": "installPlugin"},');

  }
  uninstallPlugin(props = this.props) {
        SRTlib.send(`{ "anonymous": false, "function": "DragDrop.uninstallPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('], "end": "uninstallPlugin"},');

  }
  render() {
        SRTlib.send(`{ "anonymous": false, "function": "DragDrop.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
DragDrop.propTypes = {
  uppy: propTypes.uppy,
  locale: propTypes.locale
};
DragDrop.defaultProps = {};
module.exports = DragDrop;
