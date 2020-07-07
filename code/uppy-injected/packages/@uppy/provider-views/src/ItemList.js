const SRTlib = require('SRT-util');

const {h} = require('preact');
const Item = require('./Item/index');
const getSharedProps = (fileOrFolder, props) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getSharedProps","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"getSharedProps"},');

  return {
    id: fileOrFolder.id,
    title: fileOrFolder.name,
    getItemIcon: () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"getItemIcon","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"getItemIcon"},');

      return fileOrFolder.icon;
            SRTlib.send('{"type":"FUNCTIONEND","function":"getItemIcon"},');

    },
    isChecked: props.isChecked(fileOrFolder),
    toggleCheckbox: e => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"toggleCheckbox","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"toggleCheckbox"},');

      return props.toggleCheckbox(e, fileOrFolder);
            SRTlib.send('{"type":"FUNCTIONEND","function":"toggleCheckbox"},');

    },
    columns: props.columns,
    showTitles: props.showTitles,
    viewType: props.viewType,
    i18n: props.i18n
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSharedProps"},');

};
module.exports = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  if (!props.folders.length && !props.files.length) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return <div class="uppy-Provider-empty">{props.i18n('noFilesFound')}</div>;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class="uppy-ProviderBrowser-body">
      <ul class="uppy-ProviderBrowser-list" onscroll={props.handleScroll} role="listbox" tabindex="-1">
        {props.folders.map(folder => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.props.folders.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.props.folders.map"},');

    return Item({
      ...getSharedProps(folder, props),
      type: 'folder',
      isDisabled: props.isChecked(folder) ? props.isChecked(folder).loading : false,
      handleFolderClick: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Item.handleFolderClick","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"Item.handleFolderClick"},');

        return props.handleFolderClick(folder);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Item.handleFolderClick"},');

      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.props.folders.map"},');

  })}
        {props.files.map(file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.props.files.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.props.files.map"},');

    return Item({
      ...getSharedProps(file, props),
      type: 'file',
      isDisabled: false
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.props.files.map"},');

  })}
      </ul>
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
