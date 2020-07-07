const SRTlib = require('SRT-util');

import React from 'react';
import {StyleSheet, TouchableOpacity, Text, TextInput, View} from 'react-native';
import Url from '@uppy/url';
export default class UppyRNUrl extends React.Component {
  constructor() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppyRNUrl"}},`);

    super();
    this.state = {
      url: null
    };
    this.onPressImport = this.onPressImport.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppyRNUrl"}},`);

    const uppy = this.props.uppy;
    const options = Object.assign({
      id: 'uppyRN:Url'
    }, this.props, {});
    delete options.uppy;
    uppy.use(Url, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppyRNUrl"}},`);

    const uppy = this.props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  onPressImport() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPressImport","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppyRNUrl"}},`);

    this.plugin.addFile(this.state.url).then(this.props.onDone).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"plugin.addFile.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      console.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"plugin.addFile.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPressImport"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"UppyRNUrl"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <View style={styles.container}>
        <TextInput style={styles.input} autoFocus onChangeText={text => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

      return this.setState({
        url: text
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    }} placeholder="Enter URL to import a file" />
        <TouchableOpacity style={styles.buttonImport} onPress={this.onPressImport}>
          <Text style={styles.buttonImportText}>Import</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel} onPress={ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

      return this.props.onDone();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

    }}>
          <Text style={styles.buttonCancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#7f8a93',
    borderWidth: 1,
    padding: 5,
    borderRadius: 4,
    marginBottom: 15
  },
  buttonImport: {
    alignItems: 'center',
    backgroundColor: '#2275d7',
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonCancel: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5
  },
  buttonImportText: {
    color: '#fff'
  },
  buttonCancelText: {
    color: '#0077cc'
  }
});
