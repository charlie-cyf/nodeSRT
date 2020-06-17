var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
var Breadcrumb = function Breadcrumb(props) {
    SRTlib.send(`{ "anonymous": true, "function": "Breadcrumb.Breadcrumb", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return h("span", null, h("button", {
    type: "button",
    class: "uppy-u-reset",
    onclick: props.getFolder
  }, props.title), !props.isLast ? ' / ' : '');
    SRTlib.send("]},");

};
module.exports = function (props) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return h("div", {
    class: "uppy-Provider-breadcrumbs"
  }, h("div", {
    class: "uppy-Provider-breadcrumbsIcon"
  }, props.breadcrumbsIcon), props.directories.map(function (directory, i) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.ReturnStatement.h.props.directories.map", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return h(Breadcrumb, {
      key: directory.id,
      getFolder: function getFolder() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.ReturnStatement.h.props.directories.map.ReturnStatement.h.getFolder.getFolder", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return props.getFolder(directory.id);
                SRTlib.send("]},");

      },
      title: i === 0 ? props.title : directory.title,
      isLast: i + 1 === props.directories.length
    });
        SRTlib.send("]},");

  }));
    SRTlib.send("]},");

};
