const SRTlib = require('SRT-util');

import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
export default function PauseResumeButton(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"PauseResumeButton","fileName":"${__filename}","paramsNumber":1},`);

  if (!props.uploadStarted || props.uploadComplete) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"PauseResumeButton"},');

    return null;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"PauseResumeButton"},');

  return <TouchableHighlight onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.isPaused ? 'Resume' : 'Pause'}
      </Text>
    </TouchableHighlight>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"PauseResumeButton","paramsNumber":1},');

}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cc0077',
    padding: 10
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17
  }
});
