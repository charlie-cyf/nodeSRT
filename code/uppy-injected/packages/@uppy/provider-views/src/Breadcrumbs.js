const SRTlib = require('SRT-util');

const {h} = require('preact');
const Breadcrumb = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Breadcrumb","fileName":"/packages/@uppy/provider-views/src/Breadcrumbs.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"Breadcrumb"},');

  return <span>
      <button type="button" class="uppy-u-reset" onclick={props.getFolder}>
        {props.title}
      </button>
      {!props.isLast ? ' / ' : ''}
    </span>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"Breadcrumb"},');

};
module.exports = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/provider-views/src/Breadcrumbs.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class="uppy-Provider-breadcrumbs">
      <div class="uppy-Provider-breadcrumbsIcon">{props.breadcrumbsIcon}</div>
      {props.directories.map((directory, i) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.props.directories.map","fileName":"/packages/@uppy/provider-views/src/Breadcrumbs.js","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.props.directories.map"},');

    return <Breadcrumb key={directory.id} getFolder={() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"/packages/@uppy/provider-views/src/Breadcrumbs.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      return props.getFolder(directory.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    }} title={i === 0 ? props.title : directory.title} isLast={i + 1 === props.directories.length} />;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.props.directories.map"},');

  })}
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
