const SRTlib = require('SRT-util');

import React from 'react';
import {View, Text} from 'react-native';
export default function ProgressBar(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ProgressBar","fileName":"/examples/react-native-expo/ProgressBar.js","paramsNumber":1},`);

  const progress = props.progress;
  const colorGreen = '#0b8600';
  const colorBlue = '#006bb7';
    SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBar"},');

  return <View style={{
    marginTop: 15,
    marginBottom: 15
  }}>
      <View style={{
    height: 5,
    overflow: 'hidden',
    backgroundColor: '#dee1e3'
  }}>
        <View style={{
    height: 5,
    backgroundColor: progress === 100 ? colorGreen : colorBlue,
    width: progress + '%'
  }} />
      </View>
      <Text>{progress ? progress + '%' : null}</Text>
    </View>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBar","paramsNumber":1},');

}
