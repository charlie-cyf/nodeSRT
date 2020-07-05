const SRTlib = require('SRT-util');

function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var React = require('react');
var DragDropPlugin = require('@uppy/drag-drop');
var propTypes = require('./propTypes');
var h = React.createElement;
var DragDrop = (function (_React$Component) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DragDrop","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(DragDrop, _React$Component);
  function DragDrop() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"DragDrop","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop"},');

    return _React$Component.apply(this, arguments) || this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop","paramsNumber":0},');

  }
  var _proto = DragDrop.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DragDrop._proto.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

    this.installPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop._proto.componentDidMount"},');

  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DragDrop._proto.componentDidUpdate","fileName":"${__filename}","paramsNumber":1},`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop._proto.componentDidUpdate"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DragDrop._proto.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

    this.uninstallPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop._proto.componentWillUnmount"},');

  };
  _proto.installPlugin = function installPlugin() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DragDrop._proto.installPlugin","fileName":"${__filename}","paramsNumber":0},`);

    var uppy = this.props.uppy;
    var options = _extends({
      id: 'react:DragDrop'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(DragDropPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop._proto.installPlugin"},');

  };
  _proto.uninstallPlugin = function uninstallPlugin(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DragDrop._proto.uninstallPlugin","fileName":"${__filename}","paramsNumber":1},`);

    if (props === void 0) {
      props = this.props;
    }
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop._proto.uninstallPlugin"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DragDrop._proto.render","fileName":"${__filename}","paramsNumber":0},`);

    var _this = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop._proto.render"},');

    return h('div', {
      ref: function ref(container) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DragDrop._proto.render.render.ReturnStatement.h.ref","fileName":"${__filename}","paramsNumber":1},`);

        _this.container = container;
                SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop._proto.render.render.ReturnStatement.h.ref"},');

      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop._proto.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop"},');

  return DragDrop;
    SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop"},');

})(React.Component);
DragDrop.propTypes = {
  uppy: propTypes.uppy,
  locale: propTypes.locale
};
DragDrop.defaultProps = {};
module.exports = DragDrop;
