const SRTlib = require('SRT-util');

const {h} = require('preact');
const ignoreEvent = require('../utils/ignoreEvent.js');
function PickerPanelContent(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"PickerPanelContent","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"PickerPanelContent"},');

  return <div class="uppy-DashboardContent-panel" role="tabpanel" data-uppy-panelType="PickerPanel" id={`uppy-DashboardContent-panel--${props.activePickerPanel.id}`} onDragOver={ignoreEvent} onDragLeave={ignoreEvent} onDrop={ignoreEvent} onPaste={ignoreEvent}>
      <div class="uppy-DashboardContent-bar">
        <div class="uppy-DashboardContent-title" role="heading" aria-level="1">
          {props.i18n('importFrom', {
    name: props.activePickerPanel.name
  })}
        </div>
        <button class="uppy-DashboardContent-back" type="button" onclick={props.hideAllPanels}>{props.i18n('done')}
        </button>
      </div>
      <div class="uppy-DashboardContent-panelBody">
        {props.getPlugin(props.activePickerPanel.id).render(props.state)}
      </div>
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"PickerPanelContent","paramsNumber":1},');

}
module.exports = PickerPanelContent;
