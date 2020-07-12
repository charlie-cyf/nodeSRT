const SRTlib = require('SRT-util');

import React, {Component} from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import GoogleDrive from '@uppy/google-drive';
import {Dashboard, DashboardModal} from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
const isOnTravis = process.env.REACT_APP_ON_TRAVIS;
const endpoint = isOnTravis ? 'http://companion.test:1080' : 'http://localhost:1080';
class App extends Component {
  constructor(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/test/endtoend/create-react-app/src/App.js","paramsNumber":1,"classInfo":{"className":"App","superClass":"Component"}},`);

    super(props);
    this.uppy = new Uppy({
      id: 'uppy1',
      autoProceed: true,
      debug: true
    }).use(Tus, {
      endpoint: `${endpoint}/files/`
    }).use(GoogleDrive, {
      companionUrl: 'https://companion.uppy.io'
    });
    this.uppy2 = new Uppy({
      id: 'uppy2',
      autoProceed: false,
      debug: true
    }).use(Tus, {
      endpoint: `${endpoint}/files/`
    });
    this.state = {
      showInlineDashboard: true,
      open: false
    };
    this.handleModalClick = this.handleModalClick.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"/test/endtoend/create-react-app/src/App.js","paramsNumber":0,"classInfo":{"className":"App","superClass":"Component"}},`);

    this.uppy.close();
    this.uppy2.close();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  handleModalClick() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleModalClick","fileName":"/test/endtoend/create-react-app/src/App.js","paramsNumber":0,"classInfo":{"className":"App","superClass":"Component"}},`);

    this.setState({
      open: !this.state.open
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleModalClick"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/test/endtoend/create-react-app/src/App.js","paramsNumber":0,"classInfo":{"className":"App","superClass":"Component"}},`);

    const {showInlineDashboard} = this.state;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div>
        <h1>React Examples</h1>

        <h2>Inline Dashboard</h2>
        <div id="inline-dashboard">
          <label>
            <input id="inline-dashboard-toggle" type="checkbox" checked={showInlineDashboard} onChange={event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/test/endtoend/create-react-app/src/App.js","paramsNumber":1},`);

      this.setState({
        showInlineDashboard: event.target.checked
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    }} />
            Show Dashboard
          </label>
          {showInlineDashboard && <Dashboard uppy={this.uppy} plugins={['GoogleDrive']} metaFields={[{
      id: 'name',
      name: 'Name',
      placeholder: 'File name'
    }]} />}
        </div>

        <h2>Modal Dashboard</h2>
        <div id="modal-dashboard">
          <button onClick={this.handleModalClick} id="modal-dashboard-toggle">
            {this.state.open ? 'Close dashboard' : 'Open dashboard'}
          </button>
          <DashboardModal uppy={this.uppy2} open={this.state.open} target="#modal-dashboard" onRequestClose={() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###2","fileName":"/test/endtoend/create-react-app/src/App.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

      return this.setState({
        open: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

    }} />
        </div>

        {}
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
export default App;
