const SRTlib = require('SRT-util');

const {h} = require('preact');
const prettyBytes = require('@uppy/utils/lib/prettyBytes');
const truncateString = require('../../../utils/truncateString');
const renderAcquirerIcon = (acquirer, props) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderAcquirerIcon","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"renderAcquirerIcon"},');

  return <span title={props.i18n('fileSource', {
    name: acquirer.name
  })}>
    {acquirer.icon()}
  </span>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderAcquirerIcon"},');

};
const renderFileSource = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderFileSource","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSource"},');

  return props.file.source && props.file.source !== props.id && <div class="uppy-DashboardItem-sourceIcon">
      {props.acquirers.map(acquirer => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"props.acquirers.map","fileName":"${__filename}","paramsNumber":1},`);

    if (acquirer.id === props.file.source) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"props.acquirers.map"},');

      return renderAcquirerIcon(acquirer, props);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"props.acquirers.map"},');

  })}
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSource"},');

};
const renderFileName = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderFileName","fileName":"${__filename}","paramsNumber":1},`);

  let maxNameLength;
  if (props.containerWidth <= 352) {
    maxNameLength = 35;
  } else if (props.containerWidth <= 576) {
    maxNameLength = 60;
  } else {
    maxNameLength = 30;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileName"},');

  return <div class="uppy-DashboardItem-name" title={props.file.meta.name}>
      {truncateString(props.file.meta.name, maxNameLength)}
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileName"},');

};
const renderFileSize = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderFileSize","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSize"},');

  return props.file.data.size && <div class="uppy-DashboardItem-statusSize">
      {prettyBytes(props.file.data.size)}
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSize"},');

};
module.exports = function FileInfo(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class="uppy-DashboardItem-fileInfo" data-uppy-file-source={props.file.source}>
      {renderFileName(props)}
      <div class="uppy-DashboardItem-status">
        {renderFileSize(props)}
        {renderFileSource(props)}
      </div>
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
