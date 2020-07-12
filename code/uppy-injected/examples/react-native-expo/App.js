const SRTlib = require('SRT-util');

import React from 'react';
import {Text, View, AsyncStorage, Image} from 'react-native';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import UppyFilePicker from '@uppy/react-native';
import FileList from './FileList';
import PauseResumeButton from './PauseResumeButton';
import ProgressBar from './ProgressBar';
import SelectFiles from './SelectFilesButton';
import getTusFileReader from './tusFileReader';
export default class App extends React.Component {
  constructor() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/examples/react-native-expo/App.js","paramsNumber":0,"classInfo":{"className":"App"}},`);

    super();
    this.state = {
      progress: 0,
      total: 0,
      file: null,
      uploadURL: null,
      isFilePickerVisible: false,
      isPaused: false,
      uploadStarted: false,
      uploadComplete: false,
      info: null,
      totalProgress: 0
    };
    this.isReactNative = typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
    this.showFilePicker = this.showFilePicker.bind(this);
    this.hideFilePicker = this.hideFilePicker.bind(this);
    this.togglePauseResume = this.togglePauseResume.bind(this);
    console.log('Is this React Native?', this.isReactNative);
    this.uppy = Uppy({
      autoProceed: true,
      debug: true
    });
    this.uppy.use(Tus, {
      endpoint: 'https://master.tus.io/files/',
      urlStorage: AsyncStorage,
      fileReader: getTusFileReader,
      chunkSize: 10 * 1024 * 1024
    });
    this.uppy.on('upload-progress', (file, progress) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on","fileName":"/examples/react-native-expo/App.js","paramsNumber":2},`);

      this.setState({
        progress: progress.bytesUploaded,
        total: progress.bytesTotal,
        totalProgress: this.uppy.state.totalProgress,
        uploadStarted: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on"},');

    });
    this.uppy.on('upload-success', (file, response) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on###2","fileName":"/examples/react-native-expo/App.js","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on###2"},');

    });
    this.uppy.on('complete', result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on###3","fileName":"/examples/react-native-expo/App.js","paramsNumber":1},`);

      this.setState({
        status: 'Upload complete ✅',
        uploadURL: result.successful[0] ? result.successful[0].uploadURL : null,
        uploadComplete: true,
        uploadStarted: false
      });
      console.log('Upload complete:', result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on###3"},');

    });
    this.uppy.on('info-visible', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on###4","fileName":"/examples/react-native-expo/App.js","paramsNumber":0},`);

      const info = this.uppy.getState().info;
      this.setState({
        info: info
      });
      console.log('uppy-info:', info);
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on###4"},');

    });
    this.uppy.on('info-hidden', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on###5","fileName":"/examples/react-native-expo/App.js","paramsNumber":0},`);

      this.setState({
        info: null
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on###5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  showFilePicker() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"showFilePicker","fileName":"/examples/react-native-expo/App.js","paramsNumber":0,"classInfo":{"className":"App"}},`);

    this.setState({
      isFilePickerVisible: true,
      uploadStarted: false,
      uploadComplete: false
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"showFilePicker"},');

  }
  hideFilePicker() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"hideFilePicker","fileName":"/examples/react-native-expo/App.js","paramsNumber":0,"classInfo":{"className":"App"}},`);

    this.setState({
      isFilePickerVisible: false
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"hideFilePicker"},');

  }
  togglePauseResume() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"togglePauseResume","fileName":"/examples/react-native-expo/App.js","paramsNumber":0,"classInfo":{"className":"App"}},`);

    if (this.state.isPaused) {
      this.uppy.resumeAll();
      this.setState({
        isPaused: false
      });
    } else {
      this.uppy.pauseAll();
      this.setState({
        isPaused: true
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"togglePauseResume"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/examples/react-native-expo/App.js","paramsNumber":0,"classInfo":{"className":"App"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <View style={{
      paddingTop: 100,
      paddingLeft: 50,
      paddingRight: 50,
      flex: 1
    }}>
        <Text style={{
      fontSize: 25,
      marginBottom: 20,
      textAlign: 'center'
    }}>Uppy in React Native
        </Text>
        <View style={{
      alignItems: 'center'
    }}>
          <Image style={{
      width: 80,
      height: 78,
      marginBottom: 50
    }} source={require('./assets/uppy-logo.png')} />
        </View>
        <SelectFiles showFilePicker={this.showFilePicker} />

        {this.state.info ? <Text style={{
      marginBottom: 10,
      marginTop: 10,
      color: '#b8006b'
    }}>
            {this.state.info.message}
          </Text> : null}

        <ProgressBar progress={this.state.totalProgress} />

        <PauseResumeButton isPaused={this.state.isPaused} onPress={this.togglePauseResume} uploadStarted={this.state.uploadStarted} uploadComplete={this.state.uploadComplete} />

        <UppyFilePicker uppy={this.uppy} show={this.state.isFilePickerVisible} onRequestClose={this.hideFilePicker} companionUrl="http://localhost:3020" />

        <FileList uppy={this.uppy} />

        {}
      </View>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
