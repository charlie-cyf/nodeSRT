const SRTlib = require('SRT-util');

const {h} = require('preact');
const classNames = require('classnames');
const ItemIcon = require('./components/ItemIcon');
const GridLi = require('./components/GridLi');
const ListLi = require('./components/ListLi');
module.exports = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  const itemIconString = props.getItemIcon();
  const className = classNames('uppy-ProviderBrowserItem', {
    'uppy-ProviderBrowserItem--selected': props.isChecked
  }, {
    'uppy-ProviderBrowserItem--noPreview': itemIconString === 'video'
  });
  const itemIconEl = <ItemIcon itemIconString={itemIconString} />;
  switch (props.viewType) {
    case 'grid':
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

      return <GridLi  {...props} className={className} itemIconEl={itemIconEl} />;
    case 'list':
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

      return <ListLi  {...props} className={className} itemIconEl={itemIconEl} />;
    default:
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

      throw new Error(`There is no such type ${props.viewType}`);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
