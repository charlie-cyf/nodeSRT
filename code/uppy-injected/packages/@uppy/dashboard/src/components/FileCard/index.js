const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
const getFileTypeIcon = require('../../utils/getFileTypeIcon');
const ignoreEvent = require('../../utils/ignoreEvent.js');
const FilePreview = require('../FilePreview');
class FileCard extends Component {
  constructor(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"FileCard","superClass":"Component"}},`);

    super(props);
    const file = this.props.files[this.props.fileCardFor];
    const metaFields = this.props.metaFields || [];
    const storedMetaData = {};
    metaFields.forEach(field => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"metaFields.forEach","fileName":"${__filename}","paramsNumber":1},`);

      storedMetaData[field.id] = file.meta[field.id] || '';
            SRTlib.send('{"type":"FUNCTIONEND","function":"metaFields.forEach"},');

    });
    this.state = {
      formState: storedMetaData
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  saveOnEnter = ev => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    if (ev.keyCode === 13) {
      ev.stopPropagation();
      ev.preventDefault();
      const file = this.props.files[this.props.fileCardFor];
      this.props.saveFileCard(this.state.formState, file.id);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  }
  updateMeta = (newVal, name) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###2","fileName":"${__filename}","paramsNumber":2},`);

    this.setState({
      formState: {
        ...this.state.formState,
        [name]: newVal
      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###2"},');

  }
  handleSave = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###3","fileName":"${__filename}","paramsNumber":0},`);

    const fileID = this.props.fileCardFor;
    this.props.saveFileCard(this.state.formState, fileID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###3"},');

  }
  handleCancel = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###4","fileName":"${__filename}","paramsNumber":0},`);

    this.props.toggleFileCard();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###4"},');

  }
  renderMetaFields = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###5","fileName":"${__filename}","paramsNumber":0},`);

    const metaFields = this.props.metaFields || [];
    const fieldCSSClasses = {
      text: 'uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input'
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###5"},');

    return metaFields.map(field => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.metaFields.map","fileName":"${__filename}","paramsNumber":1},`);

      const id = `uppy-Dashboard-FileCard-input-${field.id}`;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.metaFields.map"},');

      return <fieldset key={field.id} class="uppy-Dashboard-FileCard-fieldset">
          <label class="uppy-Dashboard-FileCard-label" for={id}>{field.name}</label>
          {field.render !== undefined ? field.render({
        value: this.state.formState[field.id],
        onChange: newVal => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.field.render.onChange","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.field.render.onChange"},');

          return this.updateMeta(newVal, field.id);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.field.render.onChange"},');

        },
        fieldCSSClasses: fieldCSSClasses
      }, h) : <input class={fieldCSSClasses.text} id={id} type={field.type || 'text'} value={this.state.formState[field.id]} placeholder={field.placeholder} onkeyup={this.saveOnEnter} onkeydown={this.saveOnEnter} onkeypress={this.saveOnEnter} oninput={ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

        return this.updateMeta(ev.target.value, field.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

      }} data-uppy-super-focusable />}
        </fieldset>;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.metaFields.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###5"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"FileCard","superClass":"Component"}},`);

    const file = this.props.files[this.props.fileCardFor];
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div class="uppy-Dashboard-FileCard" data-uppy-panelType="FileCard" onDragOver={ignoreEvent} onDragLeave={ignoreEvent} onDrop={ignoreEvent} onPaste={ignoreEvent}>
        <div class="uppy-DashboardContent-bar">
          <div class="uppy-DashboardContent-title" role="heading" aria-level="1">
            {this.props.i18nArray('editing', {
      file: <span class="uppy-DashboardContent-titleFile">{file.meta ? file.meta.name : file.name}</span>
    })}
          </div>
          <button class="uppy-DashboardContent-back" type="button" title={this.props.i18n('finishEditingFile')} onclick={this.handleSave}>
            {this.props.i18n('done')}
          </button>
        </div>

        <div class="uppy-Dashboard-FileCard-inner">
          <div class="uppy-Dashboard-FileCard-preview" style={{
      backgroundColor: getFileTypeIcon(file.type).color
    }}>
            <FilePreview file={file} />
          </div>

          <div class="uppy-Dashboard-FileCard-info">
            {this.renderMetaFields()}
          </div>

          <div class="uppy-Dashboard-FileCard-actions">
            <button class="uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn" type="button" onclick={this.handleSave}>
              {this.props.i18n('saveChanges')}
            </button>
            <button class="uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn" type="button" onclick={this.handleCancel}>
              {this.props.i18n('cancel')}
            </button>
          </div>
        </div>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
module.exports = FileCard;
