const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
class AddFiles extends Component {
  triggerFileInputClick=() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

    this.fileInput.click();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  }
  onFileInputChange=event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    this.props.handleInputChange(event);
    event.target.value = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  }
  renderPoweredByUppy() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderPoweredByUppy","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"AddFiles","superClass":"Component"}},`);

    const uppyBranding = <span>
        <svg aria-hidden="true" focusable="false" class="uppy-c-icon uppy-Dashboard-poweredByIcon" width="11" height="11" viewBox="0 0 11 11">
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
  renderHiddenFileInput=() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    return <input class="uppy-Dashboard-input" hidden aria-hidden="true" tabindex={-1} type="file" name="files[]" multiple={this.props.maxNumberOfFiles !== 1} onchange={this.onFileInputChange} accept={this.props.allowedFileTypes} ref={ref => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

      this.fileInput = ref;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    }} />;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  }
  renderMyDeviceAcquirer=() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    return <div class="uppy-DashboardTab" role="presentation">
        <button type="button" class="uppy-DashboardTab-btn" role="tab" tabindex={0} data-uppy-super-focusable onclick={this.triggerFileInputClick}>
          <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32">
            <g fill="none" fill-rule="evenodd">
              <rect width="32" height="32" rx="16" fill="#2275D7" />
              <path d="M21.973 21.152H9.863l-1.108-5.087h14.464l-1.246 5.087zM9.935 11.37h3.958l.886 1.444a.673.673 0 0 0 .585.316h6.506v1.37H9.935v-3.13zm14.898 3.44a.793.793 0 0 0-.616-.31h-.978v-2.126c0-.379-.275-.613-.653-.613H15.75l-.886-1.445a.673.673 0 0 0-.585-.316H9.232c-.378 0-.667.209-.667.587V14.5h-.782a.793.793 0 0 0-.61.303.795.795 0 0 0-.155.663l1.45 6.633c.078.36.396.618.764.618h13.354c.36 0 .674-.246.76-.595l1.631-6.636a.795.795 0 0 0-.144-.675z" fill="#FFF" />
            </g>
          </svg>
          <div class="uppy-DashboardTab-name">{this.props.i18n('myDevice')}</div>
        </button>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  }
  renderDropPasteBrowseTagline=() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

    const numberOfAcquirers = this.props.acquirers.length;
    const browse = <button type="button" class="uppy-u-reset uppy-Dashboard-browse" onclick={this.triggerFileInputClick} data-uppy-super-focusable={numberOfAcquirers === 0}>
        {this.props.i18n('browse')}
      </button>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    return <div class="uppy-Dashboard-AddFiles-title">
        {numberOfAcquirers > 0 ? this.props.i18nArray('dropPasteImport', {
      browse
    }) : this.props.i18nArray('dropPaste', {
      browse
    })}
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  }
  renderAcquirer=acquirer => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    return <div class="uppy-DashboardTab" role="presentation">
        <button type="button" class="uppy-DashboardTab-btn" role="tab" tabindex={0} aria-controls={`uppy-DashboardContent-panel--${acquirer.id}`} aria-selected={this.props.activePickerPanel.id === acquirer.id} data-uppy-super-focusable onclick={() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

      return this.props.showPanel(acquirer.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

    }}>
          {acquirer.icon()}
          <div class="uppy-DashboardTab-name">{acquirer.name}</div>
        </button>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  }
  renderAcquirers=acquirers => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

    const acquirersWithoutLastTwo = [...acquirers];
    const lastTwoAcquirers = acquirersWithoutLastTwo.splice(acquirers.length - 2, acquirers.length);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    return <div class="uppy-Dashboard-AddFiles-list" role="tablist">
        {this.renderMyDeviceAcquirer()}
        {acquirersWithoutLastTwo.map(acquirer => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.acquirersWithoutLastTwo.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.acquirersWithoutLastTwo.map"},');

      return this.renderAcquirer(acquirer);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.acquirersWithoutLastTwo.map"},');

    })}
        <span role="presentation" style="white-space: nowrap;">
          {lastTwoAcquirers.map(acquirer => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.lastTwoAcquirers.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastTwoAcquirers.map"},');

      return this.renderAcquirer(acquirer);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastTwoAcquirers.map"},');

    })}
        </span>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"AddFiles","superClass":"Component"}},`);

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
