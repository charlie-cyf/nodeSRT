const SRTlib = require('SRT-util');

import React from 'react';
import {AsyncStorage, View, FlatList, Image, WebView} from 'react-native';
import Instagram from '@uppy/instagram';
function getQueryParamValueFromUrl(name, url) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getQueryParamValueFromUrl","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":2},`);

  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getQueryParamValueFromUrl"},');

  return results == null ? null : results[1];
    SRTlib.send('{"type":"FUNCTIONEND","function":"getQueryParamValueFromUrl","paramsNumber":2},');

}
export default class UppyRNInstagram extends React.Component {
  constructor() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":0,"classInfo":{"className":"UppyRNInstagram"}},`);

    super();
    this.state = {
      instagram: {
        user: 'bla@gmail.com',
        items: [{
          caption: Date.now(),
          url: 'http://lorempixel.com/200/200/cats/1'
        }, {
          caption: Date.now(),
          url: 'http://lorempixel.com/200/200/cats/2'
        }, {
          caption: Date.now(),
          url: 'http://lorempixel.com/200/200/cats/3'
        }, {
          caption: Date.now(),
          url: 'http://lorempixel.com/200/200/cats/4'
        }, {
          caption: Date.now(),
          url: 'http://lorempixel.com/200/200/cats/5'
        }, {
          caption: Date.now(),
          url: 'http://lorempixel.com/200/200/'
        }, {
          caption: Date.now(),
          url: 'http://lorempixel.com/200/200/'
        }, {
          caption: Date.now(),
          url: 'http://lorempixel.com/200/200/'
        }, {
          caption: Date.now(),
          url: 'http://lorempixel.com/200/200/'
        }]
      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":0,"classInfo":{"className":"UppyRNInstagram"}},`);

    const uppy = this.props.uppy;
    const options = Object.assign({
      id: 'uppyRN:Instagram'
    }, this.props, {
      storage: AsyncStorage
    });
    delete options.uppy;
    uppy.use(Instagram, options);
    this.plugin = uppy.getPlugin(options.id);
    this.setState({
      authUrl: this.plugin.provider.authUrl()
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":0,"classInfo":{"className":"UppyRNInstagram"}},`);

    const uppy = this.props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  renderGrid(items) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderGrid","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":1,"classInfo":{"className":"UppyRNInstagram"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"renderGrid"},');

    return <View style={styles.container}>
        <FlatList data={items} renderItem={({item}) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

      return <View style={{
        flex: 1,
        flexDirection: 'column',
        margin: 1
      }}>
              <Image style={styles.item} source={{
        uri: item.url
      }} />
            </View>;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    }} keyExtractor={(item, index) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###2","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

      return index.toString();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

    }} numColumns={3} />
      </View>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderGrid"},');

  }
  renderInstagram() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderInstagram","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":0,"classInfo":{"className":"UppyRNInstagram"}},`);

    console.log(this.state.authUrl);
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderInstagram"},');

    return <WebView source={{
      uri: this.state.authUrl
    }} style={{
      marginTop: 20
    }} onNavigationStateChange={ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###3","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":1},`);

      const url = ev.url;
      const token = getQueryParamValueFromUrl('uppyAuthToken', url);
      console.log(token);
      this.plugin.provider.setAuthToken(token);
      console.log(this.plugin.provider.list('recent'));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###3"},');

    }} />;
        SRTlib.send('{"type":"FUNCTIONEND","function":"renderInstagram"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/react-native/file-picker/instagram.js","paramsNumber":0,"classInfo":{"className":"UppyRNInstagram"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return this.renderInstagram();
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  }
});
