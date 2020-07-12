const SRTlib = require('SRT-util');

import React from 'react';
import Url from './url';
export default class UppyRNProvider extends React.Component {
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/react-native/file-picker/provider.js","paramsNumber":0,"classInfo":{"className":"UppyRNProvider"}},`);

    if (this.props.providerID === 'Url') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

      return <Url  {...this.props} />;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
