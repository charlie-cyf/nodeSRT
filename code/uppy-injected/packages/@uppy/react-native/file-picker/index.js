const SRTlib = require('SRT-util');

import React from 'react';
import {StyleSheet, Modal, Text, ScrollView, TouchableOpacity} from 'react-native';
import takePicture from './takePicture';
import selectImage from './selectImage';
import selectDocument from './selectDocument';
import Provider from './provider';
export default class UppyReactNativeFilePicker extends React.Component {
  constructor() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":0,"classInfo":{"className":"UppyReactNativeFilePicker"}},`);

    super();
    this.state = {
      providers: [{
        id: 'LocalImages',
        title: 'Pick Local Images/Videos'
      }, {
        id: 'LocalDocuments',
        title: 'Pick Documents'
      }, {
        id: 'LocalCamera',
        title: 'Take a Picture'
      }, {
        id: 'Url',
        title: 'Url'
      }],
      openProvider: null
    };
    this.takePicture = this.takePicture.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.selectDocument = this.selectDocument.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":0,"classInfo":{"className":"UppyReactNativeFilePicker"}},`);

    this.uppy = this.props.uppy;
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  takePicture() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"takePicture","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":0,"classInfo":{"className":"UppyReactNativeFilePicker"}},`);

    takePicture().then(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"takePicture.then.catch.takePicture.then","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1},`);

      this.uppy.addFile({
        source: 'React Native',
        name: `media_${Date.now()}.jpg`,
        type: file.type,
        data: file
      });
      this.props.onRequestClose();
            SRTlib.send('{"type":"FUNCTIONEND","function":"takePicture.then.catch.takePicture.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"takePicture.then.catch","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1},`);

      console.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"takePicture.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"takePicture"},');

  }
  selectImage() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"selectImage","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":0,"classInfo":{"className":"UppyReactNativeFilePicker"}},`);

    selectImage({
      exif: true
    }).then(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"selectImage.then.catch.selectImage.then","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1},`);

      this.uppy.addFile({
        source: 'React Native',
        name: `media_${Date.now()}.jpg`,
        type: file.type,
        data: file
      });
      this.props.onRequestClose();
            SRTlib.send('{"type":"FUNCTIONEND","function":"selectImage.then.catch.selectImage.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"selectImage.then.catch","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1},`);

      console.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"selectImage.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"selectImage"},');

  }
  selectDocument() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"selectDocument","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":0,"classInfo":{"className":"UppyReactNativeFilePicker"}},`);

    selectDocument().then(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"selectDocument.then.catch.selectDocument.then","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1},`);

      this.uppy.addFile({
        source: 'React Native',
        name: file.name,
        data: file
      });
      this.props.onRequestClose();
            SRTlib.send('{"type":"FUNCTIONEND","function":"selectDocument.then.catch.selectDocument.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"selectDocument.then.catch","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1},`);

      console.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"selectDocument.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"selectDocument"},');

  }
  openProvider(id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"openProvider","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1,"classInfo":{"className":"UppyReactNativeFilePicker"}},`);

    console.log('Open provider:', id);
    this.setState({
      openProvider: id
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"openProvider"},');

  }
  chooseProvider(id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"chooseProvider","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1,"classInfo":{"className":"UppyReactNativeFilePicker"}},`);

    console.log('Provider selected:', id);
    switch (id) {
      case 'LocalImages':
                SRTlib.send('{"type":"FUNCTIONEND","function":"chooseProvider"},');

        this.selectImage();
        return;
      case 'LocalDocuments':
                SRTlib.send('{"type":"FUNCTIONEND","function":"chooseProvider"},');

        this.selectDocument();
        return;
      case 'LocalCamera':
                SRTlib.send('{"type":"FUNCTIONEND","function":"chooseProvider"},');

        this.takePicture();
        return;
      default:
        this.openProvider(id);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"chooseProvider"},');

  }
  renderSourceList() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderSourceList","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":0,"classInfo":{"className":"UppyReactNativeFilePicker"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"renderSourceList"},');

    return <ScrollView contentContainerStyle={styles.providerList}>
        {this.state.providers.map((item, index) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.state.providers.map","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.state.providers.map"},');

      return <TouchableOpacity style={styles.providerButton} key={index} onPress={ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

        return this.chooseProvider(item.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

      }}>
              <Text style={styles.providerButtonText}>{item.title}</Text>
            </TouchableOpacity>;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.state.providers.map"},');

    })}
        <TouchableOpacity style={styles.cancelButton} onPress={ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###2","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

      return this.props.onRequestClose();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

    }}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderSourceList"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":0,"classInfo":{"className":"UppyReactNativeFilePicker"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <Modal animationType="slide" transparent={false} visible={this.props.show} supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']} onRequestClose={this.props.onRequestClose}>
        {this.state.openProvider ? <Provider providerID={this.state.openProvider} uppy={this.uppy} onDone={() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###3","fileName":"/packages/@uppy/react-native/file-picker/index.js","paramsNumber":0},`);

      this.setState({
        openProvider: null
      });
      this.props.onRequestClose();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###3"},');

    }}  {...this.props} /> : this.renderSourceList()}
      </Modal>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
const styles = StyleSheet.create({
  providerList: {
    flex: 1,
    marginTop: 22,
    justifyContent: 'center'
  },
  providerButton: {
    alignItems: 'center',
    backgroundColor: '#0077cc',
    marginBottom: 15,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    borderRadius: 5
  },
  providerButtonText: {
    color: '#fff'
  },
  cancelButton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0077cc',
    marginBottom: 15,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    borderRadius: 5
  },
  cancelButtonText: {
    color: '#0077cc'
  }
});
