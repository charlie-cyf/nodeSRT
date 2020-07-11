const SRTlib = require('SRT-util');

const getFileTypeIcon = require('../utils/getFileTypeIcon');
const {h} = require('preact');
module.exports = function FilePreview(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  const file = props.file;
  if (file.preview) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return <img class="uppy-DashboardItem-previewImg" alt={file.name} src={file.preview} />;
  }
  const {color, icon} = getFileTypeIcon(file.type);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class="uppy-DashboardItem-previewIconWrap">
      <span class="uppy-DashboardItem-previewIcon" style={{
    color: color
  }}>{icon}</span>
      <svg aria-hidden="true" focusable="false" class="uppy-DashboardItem-previewIconBg" width="58" height="76" viewBox="0 0 58 76"><rect fill="#FFF" width="58" height="76" rx="3" fill-rule="evenodd" /></svg>
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
