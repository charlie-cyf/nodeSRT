const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
const AuthView = require('./AuthView');
const Browser = require('./Browser');
const LoaderView = require('./Loader');
const generateFileID = require('@uppy/utils/lib/generateFileID');
const getFileType = require('@uppy/utils/lib/getFileType');
const isPreviewSupported = require('@uppy/utils/lib/isPreviewSupported');
function findIndex(array, predicate) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"findIndex","fileName":"${__filename}","paramsNumber":2},`);

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"findIndex"},');

      return i;
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"findIndex"},');

  return -1;
    SRTlib.send('{"type":"FUNCTIONEND","function":"findIndex","paramsNumber":2},');

}
function getOrigin() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getOrigin","fileName":"${__filename}","paramsNumber":0},`);

  if (('origin' in location)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getOrigin"},');

    return location.origin;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"getOrigin"},');

  return `${location.protocol}//${location.hostname}${location.port ? `:${location.port}` : ''}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getOrigin","paramsNumber":0},');

}
class CloseWrapper extends Component {
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"CloseWrapper","superClass":"Component"}},`);

    this.props.onUnmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"CloseWrapper","superClass":"Component"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return this.props.children[0];
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
module.exports = class ProviderView {
  static VERSION = require('../package.json').version
  constructor(plugin, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProviderView"}},`);

    this.plugin = plugin;
    this.provider = opts.provider;
    const defaultOptions = {
      viewType: 'list',
      showTitles: true,
      showFilter: true,
      showBreadcrumbs: true
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.addFile = this.addFile.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.filterQuery = this.filterQuery.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.getFolder = this.getFolder.bind(this);
    this.getNextFolder = this.getNextFolder.bind(this);
    this.logout = this.logout.bind(this);
    this.preFirstRender = this.preFirstRender.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.sortByTitle = this.sortByTitle.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.isActiveRow = this.isActiveRow.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.listAllFiles = this.listAllFiles.bind(this);
    this.donePicking = this.donePicking.bind(this);
    this.cancelPicking = this.cancelPicking.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
    this.render = this.render.bind(this);
    this.clearSelection();
    this.plugin.setPluginState({
      authenticated: false,
      files: [],
      folders: [],
      directories: [],
      activeRow: -1,
      filterInput: '',
      isSearchVisible: false
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  tearDown() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"tearDown","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"tearDown"},');

  }
  _updateFilesAndFolders(res, files, folders) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_updateFilesAndFolders","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"ProviderView"}},`);

    this.nextPagePath = res.nextPagePath;
    res.items.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.res.items.forEach","fileName":"${__filename}","paramsNumber":1},`);

      if (item.isFolder) {
        folders.push(item);
      } else {
        files.push(item);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.res.items.forEach"},');

    });
    this.plugin.setPluginState({
      folders,
      files
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_updateFilesAndFolders"},');

  }
  preFirstRender() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"preFirstRender","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

    this.plugin.setPluginState({
      didFirstRender: true
    });
    this.plugin.onFirstRender();
        SRTlib.send('{"type":"FUNCTIONEND","function":"preFirstRender"},');

  }
  getFolder(id, name) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getFolder","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProviderView"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getFolder"},');

    return this._loaderWrapper(this.provider.list(id), res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement._loaderWrapper","fileName":"${__filename}","paramsNumber":1},`);

      const folders = [];
      const files = [];
      let updatedDirectories;
      const state = this.plugin.getPluginState();
      const index = findIndex(state.directories, dir => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"index.findIndex","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"index.findIndex"},');

        return id === dir.id;
                SRTlib.send('{"type":"FUNCTIONEND","function":"index.findIndex"},');

      });
      if (index !== -1) {
        updatedDirectories = state.directories.slice(0, index + 1);
      } else {
        updatedDirectories = state.directories.concat([{
          id,
          title: name
        }]);
      }
      this.username = this.username ? this.username : res.username;
      this._updateFilesAndFolders(res, files, folders);
      this.plugin.setPluginState({
        directories: updatedDirectories
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement._loaderWrapper"},');

    }, this.handleError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"getFolder"},');

  }
  getNextFolder(folder) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getNextFolder","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    this.getFolder(folder.requestPath, folder.name);
    this.lastCheckbox = undefined;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getNextFolder"},');

  }
  addFile(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addFile","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    const tagFile = {
      id: this.providerFileToId(file),
      source: this.plugin.id,
      data: file,
      name: file.name || file.id,
      type: file.mimeType,
      isRemote: true,
      body: {
        fileId: file.id
      },
      remote: {
        companionUrl: this.plugin.opts.companionUrl,
        url: `${this.provider.fileUrl(file.requestPath)}`,
        body: {
          fileId: file.id
        },
        providerOptions: this.provider.opts
      }
    };
    const fileType = getFileType(tagFile);
    if (fileType && isPreviewSupported(fileType)) {
      tagFile.preview = file.thumbnail;
    }
    this.plugin.uppy.log('Adding remote file');
    try {
      this.plugin.uppy.addFile(tagFile);
    } catch (err) {
      if (!err.isRestriction) {
        this.plugin.uppy.log(err);
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');

  }
  removeFile(id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeFile","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    const {currentSelection} = this.plugin.getPluginState();
    this.plugin.setPluginState({
      currentSelection: currentSelection.filter(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter"},');

        return file.id !== id;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter"},');

      })
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeFile"},');

  }
  logout() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

    this.provider.logout().then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.provider.logout.then.catch.provider.logout.then","fileName":"${__filename}","paramsNumber":1},`);

      if (res.ok) {
        if (!res.revoked) {
          const message = this.plugin.uppy.i18n('companionUnauthorizeHint', {
            provider: this.plugin.title,
            url: res.manual_revoke_url
          });
          this.plugin.uppy.info(message, 'info', 7000);
        }
        const newState = {
          authenticated: false,
          files: [],
          folders: [],
          directories: []
        };
        this.plugin.setPluginState(newState);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.provider.logout.then.catch.provider.logout.then"},');

    }).catch(this.handleError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  filterQuery(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"filterQuery","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    const state = this.plugin.getPluginState();
    this.plugin.setPluginState(Object.assign({}, state, {
      filterInput: e ? e.target.value : ''
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"filterQuery"},');

  }
  toggleSearch(inputEl) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"toggleSearch","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    const state = this.plugin.getPluginState();
    this.plugin.setPluginState({
      isSearchVisible: !state.isSearchVisible,
      filterInput: ''
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"toggleSearch"},');

  }
  filterItems(items) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"filterItems","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    const state = this.plugin.getPluginState();
    if (!state.filterInput || state.filterInput === '') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"filterItems"},');

      return items;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"filterItems"},');

    return items.filter(folder => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.items.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.items.filter"},');

      return folder.name.toLowerCase().indexOf(state.filterInput.toLowerCase()) !== -1;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.items.filter"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"filterItems"},');

  }
  sortByTitle() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"sortByTitle","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

    const state = Object.assign({}, this.plugin.getPluginState());
    const {files, folders, sorting} = state;
    const sortedFiles = files.sort((fileA, fileB) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.sortedFiles.files.sort","fileName":"${__filename}","paramsNumber":2},`);

      if (sorting === 'titleDescending') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort"},');

        return fileB.name.localeCompare(fileA.name);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort"},');

      return fileA.name.localeCompare(fileB.name);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort"},');

    });
    const sortedFolders = folders.sort((folderA, folderB) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.sortedFolders.folders.sort","fileName":"${__filename}","paramsNumber":2},`);

      if (sorting === 'titleDescending') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort"},');

        return folderB.name.localeCompare(folderA.name);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort"},');

      return folderA.name.localeCompare(folderB.name);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort"},');

    });
    this.plugin.setPluginState(Object.assign({}, state, {
      files: sortedFiles,
      folders: sortedFolders,
      sorting: sorting === 'titleDescending' ? 'titleAscending' : 'titleDescending'
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"sortByTitle"},');

  }
  sortByDate() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"sortByDate","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

    const state = Object.assign({}, this.plugin.getPluginState());
    const {files, folders, sorting} = state;
    const sortedFiles = files.sort((fileA, fileB) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.sortedFiles.files.sort###2","fileName":"${__filename}","paramsNumber":2},`);

      const a = new Date(fileA.modifiedDate);
      const b = new Date(fileB.modifiedDate);
      if (sorting === 'dateDescending') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###2"},');

        return a > b ? -1 : a < b ? 1 : 0;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###2"},');

      return a > b ? 1 : a < b ? -1 : 0;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###2"},');

    });
    const sortedFolders = folders.sort((folderA, folderB) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.sortedFolders.folders.sort###2","fileName":"${__filename}","paramsNumber":2},`);

      const a = new Date(folderA.modifiedDate);
      const b = new Date(folderB.modifiedDate);
      if (sorting === 'dateDescending') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort###2"},');

        return a > b ? -1 : a < b ? 1 : 0;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort###2"},');

      return a > b ? 1 : a < b ? -1 : 0;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort###2"},');

    });
    this.plugin.setPluginState(Object.assign({}, state, {
      files: sortedFiles,
      folders: sortedFolders,
      sorting: sorting === 'dateDescending' ? 'dateAscending' : 'dateDescending'
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"sortByDate"},');

  }
  sortBySize() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"sortBySize","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

    const state = Object.assign({}, this.plugin.getPluginState());
    const {files, sorting} = state;
    if (!files.length || !this.plugin.getItemData(files[0]).size) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"sortBySize"},');

      return;
    }
    const sortedFiles = files.sort((fileA, fileB) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.sortedFiles.files.sort###3","fileName":"${__filename}","paramsNumber":2},`);

      const a = fileA.size;
      const b = fileB.size;
      if (sorting === 'sizeDescending') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###3"},');

        return a > b ? -1 : a < b ? 1 : 0;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###3"},');

      return a > b ? 1 : a < b ? -1 : 0;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###3"},');

    });
    this.plugin.setPluginState(Object.assign({}, state, {
      files: sortedFiles,
      sorting: sorting === 'sizeDescending' ? 'sizeAscending' : 'sizeDescending'
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"sortBySize"},');

  }
  isActiveRow(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isActiveRow","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"isActiveRow"},');

    return this.plugin.getPluginState().activeRow === this.plugin.getItemId(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"isActiveRow"},');

  }
  isChecked(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isChecked","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    const {currentSelection} = this.plugin.getPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"isChecked"},');

    return currentSelection.some(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.currentSelection.some","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.currentSelection.some"},');

      return item.id === file.id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.currentSelection.some"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"isChecked"},');

  }
  addFolder(folder) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addFolder","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    const folderId = this.providerFileToId(folder);
    let state = this.plugin.getPluginState();
    const folders = state.selectedFolders || ({});
    if ((folderId in folders) && folders[folderId].loading) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"addFolder"},');

      return;
    }
    folders[folderId] = {
      loading: true,
      files: []
    };
    this.plugin.setPluginState({
      selectedFolders: folders
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFolder"},');

    return this.listAllFiles(folder.requestPath).then(files => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.listAllFiles.then.catch.listAllFiles.then","fileName":"${__filename}","paramsNumber":1},`);

      files.forEach(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach","fileName":"${__filename}","paramsNumber":1},`);

        this.addFile(file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');

      });
      const ids = files.map(this.providerFileToId);
      state = this.plugin.getPluginState();
      state.selectedFolders[folderId] = {
        loading: false,
        files: ids
      };
      this.plugin.setPluginState({
        selectedFolders: folders
      });
      let message;
      if (files.length) {
        message = this.plugin.uppy.i18n('folderAdded', {
          smart_count: files.length,
          folder: folder.name
        });
      } else {
        message = this.plugin.uppy.i18n('emptyFolderAdded');
      }
      this.plugin.uppy.info(message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.listAllFiles.then.catch.listAllFiles.then"},');

    }).catch(e => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.listAllFiles.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      state = this.plugin.getPluginState();
      delete state.selectedFolders[folderId];
      this.plugin.setPluginState({
        selectedFolders: state.selectedFolders
      });
      this.handleError(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.listAllFiles.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFolder"},');

  }
  toggleCheckbox(e, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"toggleCheckbox","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProviderView"}},`);

    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.focus();
    const {folders, files} = this.plugin.getPluginState();
    const items = this.filterItems(folders.concat(files));
    if (this.lastCheckbox && e.shiftKey) {
      let currentSelection;
      const prevIndex = items.indexOf(this.lastCheckbox);
      const currentIndex = items.indexOf(file);
      if (prevIndex < currentIndex) {
        currentSelection = items.slice(prevIndex, currentIndex + 1);
      } else {
        currentSelection = items.slice(currentIndex, prevIndex + 1);
      }
      this.plugin.setPluginState({
        currentSelection
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"toggleCheckbox"},');

      return;
    }
    this.lastCheckbox = file;
    const {currentSelection} = this.plugin.getPluginState();
    if (this.isChecked(file)) {
      this.plugin.setPluginState({
        currentSelection: currentSelection.filter(item => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter###2","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter###2"},');

          return item.id !== file.id;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter###2"},');

        })
      });
    } else {
      this.plugin.setPluginState({
        currentSelection: currentSelection.concat([file])
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"toggleCheckbox"},');

  }
  providerFileToId(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"providerFileToId","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"providerFileToId"},');

    return generateFileID({
      data: file,
      name: file.name || file.id,
      type: file.mimeType
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"providerFileToId"},');

  }
  handleAuth() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleAuth","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

    const authState = btoa(JSON.stringify({
      origin: getOrigin()
    }));
    const clientVersion = encodeURIComponent(`@uppy/provider-views=${ProviderView.VERSION}`);
    const link = `${this.provider.authUrl()}?state=${authState}&uppyVersions=${clientVersion}`;
    const authWindow = window.open(link, '_blank');
    const handleToken = e => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleToken","fileName":"${__filename}","paramsNumber":1},`);

      if (!this._isOriginAllowed(e.origin, this.plugin.opts.companionAllowedHosts) || e.source !== authWindow) {
        this.plugin.uppy.log(`rejecting event from ${e.origin} vs allowed pattern ${this.plugin.opts.companionAllowedHosts}`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"handleToken"},');

        return;
      }
      const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      if (!data.token) {
        this.plugin.uppy.log('did not receive token from auth window');
                SRTlib.send('{"type":"FUNCTIONEND","function":"handleToken"},');

        return;
      }
      authWindow.close();
      window.removeEventListener('message', handleToken);
      this.provider.setAuthToken(data.token);
      this.preFirstRender();
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleToken"},');

    };
    window.addEventListener('message', handleToken);
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleAuth"},');

  }
  _isOriginAllowed(origin, allowedOrigin) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_isOriginAllowed","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProviderView"}},`);

    const getRegex = value => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getRegex","fileName":"${__filename}","paramsNumber":1},`);

      if (typeof value === 'string') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"getRegex"},');

        return new RegExp(`^${value}$`);
      } else if (value instanceof RegExp) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"getRegex"},');

        return value;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"getRegex"},');

    };
    const patterns = Array.isArray(allowedOrigin) ? allowedOrigin.map(getRegex) : [getRegex(allowedOrigin)];
        SRTlib.send('{"type":"FUNCTIONEND","function":"_isOriginAllowed"},');

    return patterns.filter(pattern => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.patterns.filter.some.patterns.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.patterns.filter.some.patterns.filter"},');

      return pattern != null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.patterns.filter.some.patterns.filter"},');

    }).some(pattern => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.patterns.filter.some","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.patterns.filter.some"},');

      return pattern.test(origin) || pattern.test(`${origin}/`);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.patterns.filter.some"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_isOriginAllowed"},');

  }
  handleError(error) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleError","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    const uppy = this.plugin.uppy;
    uppy.log(error.toString());
    if (error.isAuthError) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleError"},');

      return;
    }
    const message = uppy.i18n('companionError');
    uppy.info({
      message: message,
      details: error.toString()
    }, 'error', 5000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleError"},');

  }
  handleScroll(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleScroll","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProviderView"}},`);

    const scrollPos = e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight);
    const path = this.nextPagePath || null;
    if (scrollPos < 50 && path && !this._isHandlingScroll) {
      this.provider.list(path).then(res => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.provider.list.then.catch.then.provider.list.then.catch.provider.list.then","fileName":"${__filename}","paramsNumber":1},`);

        const {files, folders} = this.plugin.getPluginState();
        this._updateFilesAndFolders(res, files, folders);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.provider.list.then.catch.then.provider.list.then.catch.provider.list.then"},');

      }).catch(this.handleError).then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.provider.list.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

        this._isHandlingScroll = false;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.provider.list.then.catch.then"},');

      });
      this._isHandlingScroll = true;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleScroll"},');

  }
  listAllFiles(path, files = null) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"listAllFiles","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProviderView"}},`);

    files = files || [];
        SRTlib.send('{"type":"FUNCTIONEND","function":"listAllFiles"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      this.provider.list(path).then(res => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"provider.list.then.catch.provider.list.then","fileName":"${__filename}","paramsNumber":1},`);

        res.items.forEach(item => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"res.items.forEach","fileName":"${__filename}","paramsNumber":1},`);

          if (!item.isFolder) {
            files.push(item);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"res.items.forEach"},');

        });
        const moreFiles = res.nextPagePath || null;
        if (moreFiles) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch.provider.list.then"},');

          return this.listAllFiles(moreFiles, files).then(files => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.listAllFiles.then.catch.listAllFiles.then","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.listAllFiles.then.catch.listAllFiles.then"},');

            return resolve(files);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.listAllFiles.then.catch.listAllFiles.then"},');

          }).catch(e => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.listAllFiles.then.catch","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.listAllFiles.then.catch"},');

            return reject(e);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.listAllFiles.then.catch"},');

          });
        } else {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch.provider.list.then"},');

          return resolve(files);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch.provider.list.then"},');

      }).catch(e => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"provider.list.then.catch","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch"},');

        return reject(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"listAllFiles"},');

  }
  donePicking() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"donePicking","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

    const {currentSelection} = this.plugin.getPluginState();
    const promises = currentSelection.map(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.promises.currentSelection.map","fileName":"${__filename}","paramsNumber":1},`);

      if (file.isFolder) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.currentSelection.map"},');

        return this.addFolder(file);
      } else {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.currentSelection.map"},');

        return this.addFile(file);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.currentSelection.map"},');

    });
    this._loaderWrapper(Promise.all(promises), () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._loaderWrapper","fileName":"${__filename}","paramsNumber":0},`);

      this.clearSelection();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._loaderWrapper"},');

    }, () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._loaderWrapper###2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._loaderWrapper###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"donePicking"},');

  }
  cancelPicking() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cancelPicking","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

    this.clearSelection();
    const dashboard = this.plugin.uppy.getPlugin('Dashboard');
    if (dashboard) dashboard.hideAllPanels();
        SRTlib.send('{"type":"FUNCTIONEND","function":"cancelPicking"},');

  }
  clearSelection() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"clearSelection","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProviderView"}},`);

    this.plugin.setPluginState({
      currentSelection: []
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"clearSelection"},');

  }
  _loaderWrapper(promise, then, catch_) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_loaderWrapper","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"ProviderView"}},`);

    promise.then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.promise.then.catch.promise.then","fileName":"${__filename}","paramsNumber":1},`);

      this.plugin.setPluginState({
        loading: false
      });
      then(result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promise.then.catch.promise.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.promise.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      this.plugin.setPluginState({
        loading: false
      });
      catch_(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promise.then.catch"},');

    });
    this.plugin.setPluginState({
      loading: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_loaderWrapper"},');

  }
  render(state, viewOptions = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProviderView"}},`);

    const {authenticated, didFirstRender} = this.plugin.getPluginState();
    if (!didFirstRender) {
      this.preFirstRender();
    }
    if (this.plugin.getPluginState().loading) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

      return <CloseWrapper onUnmount={this.clearSelection}>
          <LoaderView i18n={this.plugin.uppy.i18n} />
        </CloseWrapper>;
    }
    if (!authenticated) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

      return <CloseWrapper onUnmount={this.clearSelection}>
          <AuthView pluginName={this.plugin.title} pluginIcon={this.plugin.icon} handleAuth={this.handleAuth} i18n={this.plugin.uppy.i18n} i18nArray={this.plugin.uppy.i18nArray} />
        </CloseWrapper>;
    }
    const targetViewOptions = {
      ...this.opts,
      ...viewOptions
    };
    const browserProps = Object.assign({}, this.plugin.getPluginState(), {
      username: this.username,
      getNextFolder: this.getNextFolder,
      getFolder: this.getFolder,
      filterItems: this.filterItems,
      filterQuery: this.filterQuery,
      toggleSearch: this.toggleSearch,
      sortByTitle: this.sortByTitle,
      sortByDate: this.sortByDate,
      logout: this.logout,
      isActiveRow: this.isActiveRow,
      isChecked: this.isChecked,
      toggleCheckbox: this.toggleCheckbox,
      handleScroll: this.handleScroll,
      listAllFiles: this.listAllFiles,
      done: this.donePicking,
      cancel: this.cancelPicking,
      title: this.plugin.title,
      viewType: targetViewOptions.viewType,
      showTitles: targetViewOptions.showTitles,
      showFilter: targetViewOptions.showFilter,
      showBreadcrumbs: targetViewOptions.showBreadcrumbs,
      pluginIcon: this.plugin.icon,
      i18n: this.plugin.uppy.i18n
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <CloseWrapper onUnmount={this.clearSelection}>
        <Browser  {...browserProps} />
      </CloseWrapper>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
};
