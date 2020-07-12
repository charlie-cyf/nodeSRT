const SRTlib = require('SRT-util');

import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
export default function SelectFiles(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"SelectFiles","fileName":"/examples/react-native-expo/SelectFilesButton.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"SelectFiles"},');

  return <TouchableHighlight onPress={props.showFilePicker} style={styles.button}>
      <Text style={styles.text}>Select files</Text>
    </TouchableHighlight>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"SelectFiles","paramsNumber":1},');

}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cc0077',
    padding: 15
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17
  }
});
