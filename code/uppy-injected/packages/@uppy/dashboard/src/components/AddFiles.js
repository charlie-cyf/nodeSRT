const SRTlib = require('SRT-util');

const {iconMyDevice} = require('./icons');
const {h, Component} = require('preact');
class AddFiles extends Component {
  triggerFileInputClick = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":0},`);

    this.fileInput.click();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  }
  onFileInputChange = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###2","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":1},`);

    this.props.handleInputChange(event);
    event.target.value = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###2"},');

  }
  renderPoweredByUppy() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderPoweredByUppy","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":0,"classInfo":{"className":"AddFiles","superClass":"Component"}},`);

    const uppyBranding = <span>
        <svg aria-hidden="true" focusable="false" class="UppyIcon uppy-Dashboard-poweredByIcon" width="11" height="11" viewBox="0 0 11 11">
          <path d="M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z" fill-rule="evenodd" />
        </svg>
        <span class="uppy-Dashboard-poweredByUppy">Uppy</span>
      </span>;
    const linkText = this.props.i18nArray('poweredBy2', {
      backwardsCompat: this.props.i18n('poweredBy'),
      uppy: uppyBranding
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderPoweredByUppy"},');

    return <a tabindex="-1" href="https://uppy.io" rel="noreferrer noopener" target="_blank" class="uppy-Dashboard-poweredBy">
        {linkText}
      </a>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderPoweredByUppy"},');

  }
  renderCloudIcon = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###3","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###3"},');

    return <svg class="uppy-Dashboard-dropFilesIcon" aria-hidden="true" width="64" height="45" viewBox="0 0 64 45" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 44.932V31h8L33 15 20 31h8v13.932H13.538C6.075 44.932 0 38.774 0 31.202c0-6.1 4.06-11.512 9.873-13.162l.005-.017c.345-5.8 5.248-10.534 10.922-10.534.502 0 1.164.017 1.868.16C25.9 2.85 31.225 0 36.923 0c9.5 0 17.23 7.838 17.23 17.473l-.011.565.012.002C60.039 19.685 64 24.975 64 31.203c0 7.57-6.075 13.729-13.538 13.729H38z" fill="#E2E2E2" fill-rule="nonzero" />
      </svg>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###3"},');

  }
  renderHiddenFileInput = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###4","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###4"},');

    return <input class="uppy-Dashboard-input" hidden aria-hidden="true" tabindex={-1} type="file" name="files[]" multiple={this.props.maxNumberOfFiles !== 1} onchange={this.onFileInputChange} accept={this.props.allowedFileTypes} ref={ref => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":1},`);

      this.fileInput = ref;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    }} />;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###4"},');

  }
  renderMyDeviceAcquirer = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###5","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###5"},');

    return <div class="uppy-DashboardTab" role="presentation">
        <button type="button" class="uppy-DashboardTab-btn" role="tab" tabindex={0} data-uppy-super-focusable onclick={this.triggerFileInputClick}>
          {iconMyDevice()}
          <div class="uppy-DashboardTab-name">{this.props.i18n('myDevice')}</div>
        </button>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###5"},');

  }
  renderDropPasteBrowseTagline = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###6","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":0},`);

    const numberOfAcquirers = this.props.acquirers.length;
    const browse = <button type="button" class="uppy-u-reset uppy-Dashboard-browse" onclick={this.triggerFileInputClick} data-uppy-super-focusable={numberOfAcquirers === 0}>
        {this.props.i18n('browse')}
      </button>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###6"},');

    return <div class="uppy-Dashboard-AddFiles-title">
        {numberOfAcquirers > 0 ? this.props.i18nArray('dropPasteImport', {
      browse
    }) : this.props.i18nArray('dropPaste', {
      browse
    })}
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###6"},');

  }
  renderAcquirer = acquirer => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###7","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###7"},');

    return <div class="uppy-DashboardTab" role="presentation">
        <button type="button" class="uppy-DashboardTab-btn" role="tab" tabindex={0} aria-controls={`uppy-DashboardContent-panel--${acquirer.id}`} aria-selected={this.props.activePickerPanel.id === acquirer.id} data-uppy-super-focusable onclick={() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###2","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

      return this.props.showPanel(acquirer.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

    }}>
          {acquirer.icon()}
          <div class="uppy-DashboardTab-name">{acquirer.name}</div>
        </button>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###7"},');

  }
  renderAcquirers = acquirers => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###8","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":1},`);

    const acquirersWithoutLastTwo = [...acquirers];
    const lastTwoAcquirers = acquirersWithoutLastTwo.splice(acquirers.length - 2, acquirers.length);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###8"},');

    return <div class="uppy-Dashboard-AddFiles-list" role="tablist">
        {this.renderMyDeviceAcquirer()}
        {acquirersWithoutLastTwo.map(acquirer => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.acquirersWithoutLastTwo.map","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.acquirersWithoutLastTwo.map"},');

      return this.renderAcquirer(acquirer);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.acquirersWithoutLastTwo.map"},');

    })}
        <span role="presentation" style="white-space: nowrap;">
          {lastTwoAcquirers.map(acquirer => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.lastTwoAcquirers.map","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastTwoAcquirers.map"},');

      return this.renderAcquirer(acquirer);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastTwoAcquirers.map"},');

    })}
        </span>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###8"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/dashboard/src/components/AddFiles.js","paramsNumber":0,"classInfo":{"className":"AddFiles","superClass":"Component"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div class="uppy-Dashboard-AddFiles">
        {this.renderHiddenFileInput()}
        {this.renderDropPasteBrowseTagline()}
        {this.props.acquirers.length > 0 && this.renderAcquirers(this.props.acquirers)}
        <div class="uppy-Dashboard-AddFiles-info">
          {this.props.note && <div class="uppy-Dashboard-note">{this.props.note}</div>}
          {this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props)}
        </div>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
module.exports = AddFiles;
