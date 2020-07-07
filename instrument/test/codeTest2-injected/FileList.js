const SRTlib = require('SRT-util');

import React from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';
import getFileTypeIcon from '@uppy/dashboard/lib/utils/getFileTypeIcon.js';
import truncateString from '@uppy/dashboard/lib/utils/truncateString.js';
import renderStringFromJSX from 'preact-render-to-string';
import SvgUri from 'react-native-svg-uri';
function FileIcon() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"FileIcon","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"FileIcon"},');

  return <View style={styles.itemIconContainer}>
      <Image style={styles.itemIcon} source={require('./assets/file-icon.png')} />
    </View>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"FileIcon","paramsNumber":0},');

}
function UppyDashboardFileIcon(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"UppyDashboardFileIcon","fileName":"${__filename}","paramsNumber":1},`);

  const icon = renderStringFromJSX(getFileTypeIcon(props.type).icon);
  if (!icon) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyDashboardFileIcon"},');

    return <FileIcon />;
  }
  const color = getFileTypeIcon(props.type).color;
    SRTlib.send('{"type":"FUNCTIONEND","function":"UppyDashboardFileIcon"},');

  return <View style={{
    ...styles.itemIconContainer,
    backgroundColor: color
  }}>
      <SvgUri width={50} height={50} style={styles.itemIconSVG} fill="#ffffff" fillAll svgXmlData={icon} />
    </View>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"UppyDashboardFileIcon","paramsNumber":1},');

}
export default function FileList(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"FileList","fileName":"${__filename}","paramsNumber":1},`);

  const uppyFiles = props.uppy.state.files;
  const uppyFilesArray = Object.keys(uppyFiles).map(id => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppyFilesArray.Object.keys.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"uppyFilesArray.Object.keys.map"},');

    return uppyFiles[id];
        SRTlib.send('{"type":"FUNCTIONEND","function":"uppyFilesArray.Object.keys.map"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"FileList"},');

  return <View style={styles.container}>
      <FlatList data={uppyFilesArray} keyExtractor={(item, index) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    return item.id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

  }} numColumns={2} renderItem={({item}) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

    return <View style={styles.item}>
              {item.type === 'image' ? <Image style={styles.itemImage} source={{
      uri: item.data.uri
    }} /> : <UppyDashboardFileIcon type={item.type} />}
              <Text style={styles.itemName}>{truncateString(item.name, 20)}</Text>
              <Text style={styles.itemType}>{item.type}</Text>
            </View>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

  }} />
    </View>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"FileList","paramsNumber":1},');

}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    width: 100,
    marginTop: 5,
    marginBottom: 15,
    marginRight: 25
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 5
  },
  itemIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#cfd3d6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemIcon: {
    width: 42,
    height: 56
  },
  itemIconSVG: {
    width: 50,
    height: 50
  },
  itemName: {
    fontSize: 13,
    color: '#2c3e50',
    fontWeight: '600'
  },
  itemType: {
    fontWeight: '600',
    fontSize: 12,
    color: '#95a5a6'
  }
});
