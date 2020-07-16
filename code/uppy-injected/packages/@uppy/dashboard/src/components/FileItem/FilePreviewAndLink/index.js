const SRTlib = require('SRT-util');

const {h} = require('preact');
const FilePreview = require('../../FilePreview');
const getFileTypeIcon = require('../../../utils/getFileTypeIcon');
module.exports = function FilePreviewAndLink(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/dashboard/src/components/FileItem/FilePreviewAndLink/index.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class="uppy-Dashboard-Item-previewInnerWrap" style={{
    backgroundColor: getFileTypeIcon(props.file.type).color
  }}>
      {props.showLinkToFileUploadResult && props.file.uploadURL && <a class="uppy-Dashboard-Item-previewLink" href={props.file.uploadURL} rel="noreferrer noopener" target="_blank" aria-label={props.file.meta.name} />}
      <FilePreview file={props.file} />
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
