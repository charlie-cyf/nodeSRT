const SRTlib = require('SRT-util');

const {h} = require('preact');
const AddFiles = require('./AddFiles');
const AddFilesPanel = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"AddFilesPanel","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"AddFilesPanel"},');

  return <div class="uppy-Dashboard-AddFilesPanel" data-uppy-panelType="AddFiles" aria-hidden={props.showAddFilesPanel}>
      <div class="uppy-DashboardContent-bar">
        <div class="uppy-DashboardContent-title" role="heading" aria-level="1">
          {props.i18n('addingMoreFiles')}
        </div>
        <button class="uppy-DashboardContent-back" type="button" onclick={ev => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    return props.toggleAddFilesPanel(false);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

  }}>{props.i18n('back')}
        </button>
      </div>
      <AddFiles  {...props} />
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"AddFilesPanel"},');

};
module.exports = AddFilesPanel;
