const SRTlib = require('SRT-util');

const FileList = require('./FileList');
const AddFiles = require('./AddFiles');
const AddFilesPanel = require('./AddFilesPanel');
const PickerPanelContent = require('./PickerPanelContent');
const PanelTopBar = require('./PickerPanelTopBar');
const FileCard = require('./FileCard');
const classNames = require('classnames');
const isDragDropSupported = require('@uppy/utils/lib/isDragDropSupported');
const {h} = require('preact');
const PreactCSSTransitionGroup = require('preact-css-transition-group');
function TransitionWrapper(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"TransitionWrapper","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"TransitionWrapper"},');

  return <PreactCSSTransitionGroup transitionName="uppy-transition-slideDownUp" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
      {props.children}
    </PreactCSSTransitionGroup>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransitionWrapper","paramsNumber":1},');

}
const WIDTH_XL = 900;
const WIDTH_LG = 700;
const WIDTH_MD = 576;
const HEIGHT_MD = 400;
module.exports = function Dashboard(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  const noFiles = props.totalFileCount === 0;
  const isSizeMD = props.containerWidth > WIDTH_MD;
  const dashboardClassName = classNames({
    'uppy-Root': props.isTargetDOMEl,
    'uppy-Dashboard': true,
    'uppy-Dashboard--animateOpenClose': props.animateOpenClose,
    'uppy-Dashboard--isClosing': props.isClosing,
    'uppy-Dashboard--isDraggingOver': props.isDraggingOver,
    'uppy-Dashboard--modal': !props.inline,
    'uppy-size--md': props.containerWidth > WIDTH_MD,
    'uppy-size--lg': props.containerWidth > WIDTH_LG,
    'uppy-size--xl': props.containerWidth > WIDTH_XL,
    'uppy-size--height-md': props.containerHeight > HEIGHT_MD,
    'uppy-Dashboard--isAddFilesPanelVisible': props.showAddFilesPanel,
    'uppy-Dashboard--isInnerWrapVisible': props.areInsidesReadyToBeVisible
  });
  let itemsPerRow = 1;
  if (props.containerWidth > WIDTH_XL) {
    itemsPerRow = 5;
  } else if (props.containerWidth > WIDTH_LG) {
    itemsPerRow = 4;
  } else if (props.containerWidth > WIDTH_MD) {
    itemsPerRow = 3;
  }
  const showFileList = props.showSelectedFiles && !noFiles;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class={dashboardClassName} data-uppy-theme={props.theme} data-uppy-num-acquirers={props.acquirers.length} data-uppy-drag-drop-supported={isDragDropSupported()} aria-hidden={props.inline ? 'false' : props.isHidden} aria-label={!props.inline ? props.i18n('dashboardWindowTitle') : props.i18n('dashboardTitle')} onpaste={props.handlePaste} onDragOver={props.handleDragOver} onDragLeave={props.handleDragLeave} onDrop={props.handleDrop}>
      <div class="uppy-Dashboard-overlay" tabindex={-1} onclick={props.handleClickOutside} />

      <div class="uppy-Dashboard-inner" aria-modal={!props.inline && 'true'} role={!props.inline && 'dialog'} style={{
    width: props.inline && props.width ? props.width : '',
    height: props.inline && props.height ? props.height : ''
  }}>

        {!props.inline ? <button class="uppy-u-reset uppy-Dashboard-close" type="button" aria-label={props.i18n('closeModal')} title={props.i18n('closeModal')} onclick={props.closeModal}>
            <span aria-hidden="true">×</span>
          </button> : null}

        <div class="uppy-Dashboard-innerWrap">
          <div class="uppy-Dashboard-dropFilesHereHint">
            {props.i18n('dropHint')}
          </div>

          {showFileList && <PanelTopBar  {...props} />}

          {showFileList ? <FileList  {...props} itemsPerRow={itemsPerRow} /> : <AddFiles  {...props} isSizeMD={isSizeMD} />}

          <TransitionWrapper>
            {props.showAddFilesPanel ? <AddFilesPanel key="AddFilesPanel"  {...props} isSizeMD={isSizeMD} /> : null}
          </TransitionWrapper>

          <TransitionWrapper>
            {props.fileCardFor ? <FileCard key="FileCard"  {...props} /> : null}
          </TransitionWrapper>

          <TransitionWrapper>
            {props.activePickerPanel ? <PickerPanelContent key="PickerPanelContent"  {...props} /> : null}
          </TransitionWrapper>

          <div class="uppy-Dashboard-progressindicators">
            {props.progressindicators.map(target => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Dashboard.ReturnStatement.props.progressindicators.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Dashboard.ReturnStatement.props.progressindicators.map"},');

    return props.getPlugin(target.id).render(props.state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Dashboard.ReturnStatement.props.progressindicators.map"},');

  })}
          </div>
        </div>
      </div>
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
