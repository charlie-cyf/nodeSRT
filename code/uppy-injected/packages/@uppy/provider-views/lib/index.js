var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var AuthView = require('./AuthView');

var Browser = require('./Browser');

var LoaderView = require('./Loader');

var generateFileID = require('@uppy/utils/lib/generateFileID');

var getFileType = require('@uppy/utils/lib/getFileType');

var isPreviewSupported = require('@uppy/utils/lib/isPreviewSupported');

function findIndex(array, predicate) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"findIndex\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2},");

  for (var i = 0; i < array.length; i++) {
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
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getOrigin\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0},");

  if ('origin' in location) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"getOrigin"},');
    return location.origin;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"getOrigin"},');
  return location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : '');
  SRTlib.send('{"type":"FUNCTIONEND","function":"getOrigin","paramsNumber":0},');
}

var CloseWrapper = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CloseWrapper, _Component);

  function CloseWrapper() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CloseWrapper.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentWillUnmount\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"CloseWrapper\",\"superClass\":\"Component\"}},");
    this.props.onUnmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');
  };

  _proto.render = function render() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"CloseWrapper\",\"superClass\":\"Component\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return this.props.children[0];
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return CloseWrapper;
}(Component);

module.exports = (_temp = _class = /*#__PURE__*/function () {
  function ProviderView(plugin, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ProviderView\"}},");
    this.plugin = plugin;
    this.provider = opts.provider;
    var defaultOptions = {
      viewType: 'list',
      showTitles: true,
      showFilter: true,
      showBreadcrumbs: true
    };
    this.opts = _extends({}, defaultOptions, {}, opts);
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto2 = ProviderView.prototype;

  _proto2.tearDown = function tearDown() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"tearDown\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"tearDown"},');
  };

  _proto2._updateFilesAndFolders = function _updateFilesAndFolders(res, files, folders) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_updateFilesAndFolders\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"ProviderView\"}},");
    this.nextPagePath = res.nextPagePath;
    res.items.forEach(function (item) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.res.items.forEach\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

      if (item.isFolder) {
        folders.push(item);
      } else {
        files.push(item);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.res.items.forEach"},');
    });
    this.plugin.setPluginState({
      folders: folders,
      files: files
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_updateFilesAndFolders"},');
  };

  _proto2.preFirstRender = function preFirstRender() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"preFirstRender\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");
    this.plugin.setPluginState({
      didFirstRender: true
    });
    this.plugin.onFirstRender();
    SRTlib.send('{"type":"FUNCTIONEND","function":"preFirstRender"},');
  };

  _proto2.getFolder = function getFolder(id, name) {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getFolder\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ProviderView\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"getFolder"},');
    return this._loaderWrapper(this.provider.list(id), function (res) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement._loaderWrapper\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
      var folders = [];
      var files = [];
      var updatedDirectories;

      var state = _this.plugin.getPluginState();

      var index = findIndex(state.directories, function (dir) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"index.findIndex\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"index.findIndex"},');
        return id === dir.id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"index.findIndex"},');
      });

      if (index !== -1) {
        updatedDirectories = state.directories.slice(0, index + 1);
      } else {
        updatedDirectories = state.directories.concat([{
          id: id,
          title: name
        }]);
      }

      _this.username = _this.username ? _this.username : res.username;

      _this._updateFilesAndFolders(res, files, folders);

      _this.plugin.setPluginState({
        directories: updatedDirectories
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement._loaderWrapper"},');
    }, this.handleError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getFolder"},');
  };

  _proto2.getNextFolder = function getNextFolder(folder) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getNextFolder\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    this.getFolder(folder.requestPath, folder.name);
    this.lastCheckbox = undefined;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getNextFolder"},');
  };

  _proto2.addFile = function addFile(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addFile\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    var tagFile = {
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
        url: "" + this.provider.fileUrl(file.requestPath),
        body: {
          fileId: file.id
        },
        providerOptions: this.provider.opts
      }
    };
    var fileType = getFileType(tagFile);

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
  };

  _proto2.removeFile = function removeFile(id) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"removeFile\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");

    var _this$plugin$getPlugi = this.plugin.getPluginState(),
        currentSelection = _this$plugin$getPlugi.currentSelection;

    this.plugin.setPluginState({
      currentSelection: currentSelection.filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter"},');
        return file.id !== id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter"},');
      })
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"removeFile"},');
  };

  _proto2.logout = function logout() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"logout\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");
    this.provider.logout().then(function (res) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.provider.logout.then.catch.provider.logout.then\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

      if (res.ok) {
        if (!res.revoked) {
          var message = _this2.plugin.uppy.i18n('companionUnauthorizeHint', {
            provider: _this2.plugin.title,
            url: res.manual_revoke_url
          });

          _this2.plugin.uppy.info(message, 'info', 7000);
        }

        var newState = {
          authenticated: false,
          files: [],
          folders: [],
          directories: []
        };

        _this2.plugin.setPluginState(newState);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.provider.logout.then.catch.provider.logout.then"},');
    }).catch(this.handleError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');
  };

  _proto2.filterQuery = function filterQuery(e) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"filterQuery\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    var state = this.plugin.getPluginState();
    this.plugin.setPluginState(_extends({}, state, {
      filterInput: e ? e.target.value : ''
    }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"filterQuery"},');
  };

  _proto2.toggleSearch = function toggleSearch(inputEl) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"toggleSearch\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    var state = this.plugin.getPluginState();
    this.plugin.setPluginState({
      isSearchVisible: !state.isSearchVisible,
      filterInput: ''
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"toggleSearch"},');
  };

  _proto2.filterItems = function filterItems(items) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"filterItems\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    var state = this.plugin.getPluginState();

    if (!state.filterInput || state.filterInput === '') {
      SRTlib.send('{"type":"FUNCTIONEND","function":"filterItems"},');
      return items;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"filterItems"},');
    return items.filter(function (folder) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.items.filter\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.items.filter"},');
      return folder.name.toLowerCase().indexOf(state.filterInput.toLowerCase()) !== -1;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.items.filter"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"filterItems"},');
  };

  _proto2.sortByTitle = function sortByTitle() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"sortByTitle\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");

    var state = _extends({}, this.plugin.getPluginState());

    var files = state.files,
        folders = state.folders,
        sorting = state.sorting;
    var sortedFiles = files.sort(function (fileA, fileB) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.sortedFiles.files.sort\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2},");

      if (sorting === 'titleDescending') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort"},');
        return fileB.name.localeCompare(fileA.name);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort"},');
      return fileA.name.localeCompare(fileB.name);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort"},');
    });
    var sortedFolders = folders.sort(function (folderA, folderB) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.sortedFolders.folders.sort\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2},");

      if (sorting === 'titleDescending') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort"},');
        return folderB.name.localeCompare(folderA.name);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort"},');
      return folderA.name.localeCompare(folderB.name);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort"},');
    });
    this.plugin.setPluginState(_extends({}, state, {
      files: sortedFiles,
      folders: sortedFolders,
      sorting: sorting === 'titleDescending' ? 'titleAscending' : 'titleDescending'
    }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"sortByTitle"},');
  };

  _proto2.sortByDate = function sortByDate() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"sortByDate\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");

    var state = _extends({}, this.plugin.getPluginState());

    var files = state.files,
        folders = state.folders,
        sorting = state.sorting;
    var sortedFiles = files.sort(function (fileA, fileB) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.sortedFiles.files.sort###2\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2},");
      var a = new Date(fileA.modifiedDate);
      var b = new Date(fileB.modifiedDate);

      if (sorting === 'dateDescending') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###2"},');
        return a > b ? -1 : a < b ? 1 : 0;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###2"},');
      return a > b ? 1 : a < b ? -1 : 0;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###2"},');
    });
    var sortedFolders = folders.sort(function (folderA, folderB) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.sortedFolders.folders.sort###2\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2},");
      var a = new Date(folderA.modifiedDate);
      var b = new Date(folderB.modifiedDate);

      if (sorting === 'dateDescending') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort###2"},');
        return a > b ? -1 : a < b ? 1 : 0;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort###2"},');
      return a > b ? 1 : a < b ? -1 : 0;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFolders.folders.sort###2"},');
    });
    this.plugin.setPluginState(_extends({}, state, {
      files: sortedFiles,
      folders: sortedFolders,
      sorting: sorting === 'dateDescending' ? 'dateAscending' : 'dateDescending'
    }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"sortByDate"},');
  };

  _proto2.sortBySize = function sortBySize() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"sortBySize\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");

    var state = _extends({}, this.plugin.getPluginState());

    var files = state.files,
        sorting = state.sorting;

    if (!files.length || !this.plugin.getItemData(files[0]).size) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"sortBySize"},');
      return;
    }

    var sortedFiles = files.sort(function (fileA, fileB) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.sortedFiles.files.sort###3\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2},");
      var a = fileA.size;
      var b = fileB.size;

      if (sorting === 'sizeDescending') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###3"},');
        return a > b ? -1 : a < b ? 1 : 0;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###3"},');
      return a > b ? 1 : a < b ? -1 : 0;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.sortedFiles.files.sort###3"},');
    });
    this.plugin.setPluginState(_extends({}, state, {
      files: sortedFiles,
      sorting: sorting === 'sizeDescending' ? 'sizeAscending' : 'sizeDescending'
    }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"sortBySize"},');
  };

  _proto2.isActiveRow = function isActiveRow(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isActiveRow\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"isActiveRow"},');
    return this.plugin.getPluginState().activeRow === this.plugin.getItemId(file);
    SRTlib.send('{"type":"FUNCTIONEND","function":"isActiveRow"},');
  };

  _proto2.isChecked = function isChecked(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isChecked\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");

    var _this$plugin$getPlugi2 = this.plugin.getPluginState(),
        currentSelection = _this$plugin$getPlugi2.currentSelection;

    SRTlib.send('{"type":"FUNCTIONEND","function":"isChecked"},');
    return currentSelection.some(function (item) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.currentSelection.some\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.currentSelection.some"},');
      return item.id === file.id;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.currentSelection.some"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"isChecked"},');
  };

  _proto2.addFolder = function addFolder(folder) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addFolder\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    var folderId = this.providerFileToId(folder);
    var state = this.plugin.getPluginState();
    var folders = state.selectedFolders || {};

    if (folderId in folders && folders[folderId].loading) {
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
    return this.listAllFiles(folder.requestPath).then(function (files) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.listAllFiles.then.catch.listAllFiles.then\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
      files.forEach(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"files.forEach\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

        _this3.addFile(file);

        SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');
      });
      var ids = files.map(_this3.providerFileToId);
      state = _this3.plugin.getPluginState();
      state.selectedFolders[folderId] = {
        loading: false,
        files: ids
      };

      _this3.plugin.setPluginState({
        selectedFolders: folders
      });

      var message;

      if (files.length) {
        message = _this3.plugin.uppy.i18n('folderAdded', {
          smart_count: files.length,
          folder: folder.name
        });
      } else {
        message = _this3.plugin.uppy.i18n('emptyFolderAdded');
      }

      _this3.plugin.uppy.info(message);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.listAllFiles.then.catch.listAllFiles.then"},');
    }).catch(function (e) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.listAllFiles.then.catch\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
      state = _this3.plugin.getPluginState();
      delete state.selectedFolders[folderId];

      _this3.plugin.setPluginState({
        selectedFolders: state.selectedFolders
      });

      _this3.handleError(e);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.listAllFiles.then.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"addFolder"},');
  };

  _proto2.toggleCheckbox = function toggleCheckbox(e, file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"toggleCheckbox\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ProviderView\"}},");
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.focus();

    var _this$plugin$getPlugi3 = this.plugin.getPluginState(),
        folders = _this$plugin$getPlugi3.folders,
        files = _this$plugin$getPlugi3.files;

    var items = this.filterItems(folders.concat(files));

    if (this.lastCheckbox && e.shiftKey) {
      var _currentSelection;

      var prevIndex = items.indexOf(this.lastCheckbox);
      var currentIndex = items.indexOf(file);

      if (prevIndex < currentIndex) {
        _currentSelection = items.slice(prevIndex, currentIndex + 1);
      } else {
        _currentSelection = items.slice(currentIndex, prevIndex + 1);
      }

      this.plugin.setPluginState({
        currentSelection: _currentSelection
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"toggleCheckbox"},');
      return;
    }

    this.lastCheckbox = file;

    var _this$plugin$getPlugi4 = this.plugin.getPluginState(),
        currentSelection = _this$plugin$getPlugi4.currentSelection;

    if (this.isChecked(file)) {
      this.plugin.setPluginState({
        currentSelection: currentSelection.filter(function (item) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.plugin.setPluginState.currentSelection.currentSelection.filter###2\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
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
  };

  _proto2.providerFileToId = function providerFileToId(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"providerFileToId\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"providerFileToId"},');
    return generateFileID({
      data: file,
      name: file.name || file.id,
      type: file.mimeType
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"providerFileToId"},');
  };

  _proto2.handleAuth = function handleAuth() {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleAuth\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");
    var authState = btoa(JSON.stringify({
      origin: getOrigin()
    }));
    var clientVersion = encodeURIComponent("@uppy/provider-views=" + ProviderView.VERSION);
    var link = this.provider.authUrl() + "?state=" + authState + "&uppyVersions=" + clientVersion;
    var authWindow = window.open(link, '_blank');

    var handleToken = function handleToken(e) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleToken\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

      if (!_this4._isOriginAllowed(e.origin, _this4.plugin.opts.companionAllowedHosts) || e.source !== authWindow) {
        _this4.plugin.uppy.log("rejecting event from " + e.origin + " vs allowed pattern " + _this4.plugin.opts.companionAllowedHosts);

        SRTlib.send('{"type":"FUNCTIONEND","function":"handleToken"},');
        return;
      }

      var data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;

      if (!data.token) {
        _this4.plugin.uppy.log('did not receive token from auth window');

        SRTlib.send('{"type":"FUNCTIONEND","function":"handleToken"},');
        return;
      }

      authWindow.close();
      window.removeEventListener('message', handleToken);

      _this4.provider.setAuthToken(data.token);

      _this4.preFirstRender();

      SRTlib.send('{"type":"FUNCTIONEND","function":"handleToken"},');
    };

    window.addEventListener('message', handleToken);
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleAuth"},');
  };

  _proto2._isOriginAllowed = function _isOriginAllowed(origin, allowedOrigin) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_isOriginAllowed\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ProviderView\"}},");

    var getRegex = function getRegex(value) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getRegex\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

      if (typeof value === 'string') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getRegex"},');
        return new RegExp("^" + value + "$");
      } else if (value instanceof RegExp) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getRegex"},');
        return value;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"getRegex"},');
    };

    var patterns = Array.isArray(allowedOrigin) ? allowedOrigin.map(getRegex) : [getRegex(allowedOrigin)];
    SRTlib.send('{"type":"FUNCTIONEND","function":"_isOriginAllowed"},');
    return patterns.filter(function (pattern) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.patterns.filter.some.patterns.filter\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.patterns.filter.some.patterns.filter"},');
      return pattern != null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.patterns.filter.some.patterns.filter"},');
    }).some(function (pattern) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.patterns.filter.some\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.patterns.filter.some"},');
      return pattern.test(origin) || pattern.test(origin + "/");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.patterns.filter.some"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_isOriginAllowed"},');
  };

  _proto2.handleError = function handleError(error) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleError\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    var uppy = this.plugin.uppy;
    uppy.log(error.toString());

    if (error.isAuthError) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"handleError"},');
      return;
    }

    var message = uppy.i18n('companionError');
    uppy.info({
      message: message,
      details: error.toString()
    }, 'error', 5000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleError"},');
  };

  _proto2.handleScroll = function handleScroll(e) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleScroll\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ProviderView\"}},");
    var scrollPos = e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight);
    var path = this.nextPagePath || null;

    if (scrollPos < 50 && path && !this._isHandlingScroll) {
      this.provider.list(path).then(function (res) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.provider.list.then.catch.then.provider.list.then.catch.provider.list.then\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

        var _this5$plugin$getPlug = _this5.plugin.getPluginState(),
            files = _this5$plugin$getPlug.files,
            folders = _this5$plugin$getPlug.folders;

        _this5._updateFilesAndFolders(res, files, folders);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.provider.list.then.catch.then.provider.list.then.catch.provider.list.then"},');
      }).catch(this.handleError).then(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.provider.list.then.catch.then\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0},");
        _this5._isHandlingScroll = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.provider.list.then.catch.then"},');
      });
      this._isHandlingScroll = true;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"handleScroll"},');
  };

  _proto2.listAllFiles = function listAllFiles(path, files) {
    var _this6 = this;

    if (files === void 0) {
      files = null;
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"listAllFiles\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ProviderView\"}},");
    files = files || [];
    SRTlib.send('{"type":"FUNCTIONEND","function":"listAllFiles"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2},");

      _this6.provider.list(path).then(function (res) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"provider.list.then.catch.provider.list.then\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
        res.items.forEach(function (item) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"res.items.forEach\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

          if (!item.isFolder) {
            files.push(item);
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"res.items.forEach"},');
        });
        var moreFiles = res.nextPagePath || null;

        if (moreFiles) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch.provider.list.then"},');
          return _this6.listAllFiles(moreFiles, files).then(function (files) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.listAllFiles.then.catch.listAllFiles.then\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.listAllFiles.then.catch.listAllFiles.then"},');
            return resolve(files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.listAllFiles.then.catch.listAllFiles.then"},');
          }).catch(function (e) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.listAllFiles.then.catch\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.listAllFiles.then.catch"},');
            return reject(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.listAllFiles.then.catch"},');
          });
        } else {
          SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch.provider.list.then"},');
          return resolve(files);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch.provider.list.then"},');
      }).catch(function (e) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"provider.list.then.catch\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch"},');
        return reject(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"provider.list.then.catch"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"listAllFiles"},');
  };

  _proto2.donePicking = function donePicking() {
    var _this7 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"donePicking\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");

    var _this$plugin$getPlugi5 = this.plugin.getPluginState(),
        currentSelection = _this$plugin$getPlugi5.currentSelection;

    var promises = currentSelection.map(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.promises.currentSelection.map\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

      if (file.isFolder) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.currentSelection.map"},');
        return _this7.addFolder(file);
      } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.currentSelection.map"},');
        return _this7.addFile(file);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.currentSelection.map"},');
    });

    this._loaderWrapper(Promise.all(promises), function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports._loaderWrapper\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0},");

      _this7.clearSelection();

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._loaderWrapper"},');
    }, function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports._loaderWrapper###2\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._loaderWrapper###2"},');
    });

    SRTlib.send('{"type":"FUNCTIONEND","function":"donePicking"},');
  };

  _proto2.cancelPicking = function cancelPicking() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"cancelPicking\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");
    this.clearSelection();
    var dashboard = this.plugin.uppy.getPlugin('Dashboard');
    if (dashboard) dashboard.hideAllPanels();
    SRTlib.send('{"type":"FUNCTIONEND","function":"cancelPicking"},');
  };

  _proto2.clearSelection = function clearSelection() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"clearSelection\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ProviderView\"}},");
    this.plugin.setPluginState({
      currentSelection: []
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"clearSelection"},');
  };

  _proto2._loaderWrapper = function _loaderWrapper(promise, then, catch_) {
    var _this8 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_loaderWrapper\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"ProviderView\"}},");
    promise.then(function (result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.promise.then.catch.promise.then\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

      _this8.plugin.setPluginState({
        loading: false
      });

      then(result);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promise.then.catch.promise.then"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.promise.then.catch\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":1},");

      _this8.plugin.setPluginState({
        loading: false
      });

      catch_(err);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promise.then.catch"},');
    });
    this.plugin.setPluginState({
      loading: true
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_loaderWrapper"},');
  };

  _proto2.render = function render(state, viewOptions) {
    if (viewOptions === void 0) {
      viewOptions = {};
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/provider-views/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ProviderView\"}},");

    var _this$plugin$getPlugi6 = this.plugin.getPluginState(),
        authenticated = _this$plugin$getPlugi6.authenticated,
        didFirstRender = _this$plugin$getPlugi6.didFirstRender;

    if (!didFirstRender) {
      this.preFirstRender();
    }

    if (this.plugin.getPluginState().loading) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
      return h(CloseWrapper, {
        onUnmount: this.clearSelection
      }, h(LoaderView, {
        i18n: this.plugin.uppy.i18n
      }));
    }

    if (!authenticated) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
      return h(CloseWrapper, {
        onUnmount: this.clearSelection
      }, h(AuthView, {
        pluginName: this.plugin.title,
        pluginIcon: this.plugin.icon,
        handleAuth: this.handleAuth,
        i18n: this.plugin.uppy.i18n,
        i18nArray: this.plugin.uppy.i18nArray
      }));
    }

    var targetViewOptions = _extends({}, this.opts, {}, viewOptions);

    var browserProps = _extends({}, this.plugin.getPluginState(), {
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
    return h(CloseWrapper, {
      onUnmount: this.clearSelection
    }, h(Browser, browserProps));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return ProviderView;
}(), _class.VERSION = require('../package.json').version, _temp);