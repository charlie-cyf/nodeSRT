const SRTlib = require('SRT-util');

const React = require('react');
const Uppy = require('@uppy/core');
const Tus = require('@uppy/tus');
const GoogleDrive = require('@uppy/google-drive');
const {Dashboard, DashboardModal, DragDrop, ProgressBar} = require('@uppy/react');
module.exports = class App extends React.Component {
  constructor(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"App"}},`);

    super(props);
    this.state = {
      showInlineDashboard: false,
      open: false
    };
    this.uppy = new Uppy({
      id: 'uppy1',
      autoProceed: true,
      debug: true
    }).use(Tus, {
      endpoint: 'https://master.tus.io/files/'
    }).use(GoogleDrive, {
      companionUrl: 'https://companion.uppy.io'
    });
    this.uppy2 = new Uppy({
      id: 'uppy2',
      autoProceed: false,
      debug: true
    }).use(Tus, {
      endpoint: 'https://master.tus.io/files/'
    });
    this.handleModalClick = this.handleModalClick.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"App"}},`);

    this.uppy.close();
    this.uppy2.close();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  handleModalClick() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleModalClick","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"App"}},`);

    this.setState({
      open: !this.state.open
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleModalClick"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"App"}},`);

    const {showInlineDashboard} = this.state;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div>
        <h1>React Examples</h1>

        <h2>Inline Dashboard</h2>
        <label>
          <input type="checkbox" checked={showInlineDashboard} onChange={event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

      this.setState({
        showInlineDashboard: event.target.checked
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');

    }} />
          Show Dashboard
        </label>
        {showInlineDashboard && <Dashboard uppy={this.uppy} plugins={['GoogleDrive']} metaFields={[{
      id: 'name',
      name: 'Name',
      placeholder: 'File name'
    }]} />}

        <h2>Modal Dashboard</h2>
        <div>
          <button onClick={this.handleModalClick}>
            {this.state.open ? 'Close dashboard' : 'Open dashboard'}
          </button>
          <DashboardModal uppy={this.uppy2} open={this.state.open} target={document.body} onRequestClose={() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement2"},');

      return this.setState({
        open: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement2"},');

    }} />
        </div>

        <h2>Drag Drop Area</h2>
        <DragDrop uppy={this.uppy} locale={{
      strings: {
        chooseFile: 'Boop a file',
        orDragDrop: 'or yoink it here'
      }
    }} />

        <h2>Progress Bar</h2>
        <ProgressBar uppy={this.uppy} hideAfterFinish={false} />
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
};
