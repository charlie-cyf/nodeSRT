var SRTlib = require('SRT-util');
var _class, _temp;
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var AuthView = require('./AuthView');
var Browser = require('./Browser');
var LoaderView = require('./Loader');
var generateFileID = require('@uppy/utils/lib/generateFileID');
var getFileType = require('@uppy/utils/lib/getFileType');
var isPreviewSupported = require('@uppy/utils/lib/isPreviewSupported');
function findIndex(array, predicate) {
    SRTlib.send(`{ "anonymous": false, "function": "findIndex", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
            SRTlib.send("]},");

      return i;
    }
  }
    SRTlib.send("]},");

  return -1;
    SRTlib.send("]},");

}
function getOrigin() {
    SRTlib.send(`{ "anonymous": false, "function": "getOrigin", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  if (('origin' in location)) {
        SRTlib.send("]},");

    return location.origin;
  }
    SRTlib.send("]},");

  return location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : '');
    SRTlib.send("]},");

}
var CloseWrapper = (function (_Component) {
    SRTlib.send(`{ "anonymous": true, "function": "CloseWrapper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(CloseWrapper, _Component);
  function CloseWrapper() {
        SRTlib.send(`{ "anonymous": false, "function": "CloseWrapper", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return _Component.apply(this, arguments) || this;
        SRTlib.send("]},");

  }
  var _proto = CloseWrapper.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "CloseWrapper._proto.componentWillUnmount.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.props.onUnmount();
        SRTlib.send("]},");

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "CloseWrapper._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return this.props.children[0];
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return CloseWrapper;
    SRTlib.send("]},");

})(Component);
module.exports = (_temp = _class = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function ProviderView(plugin, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "ProviderView", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send("]},");

  }
  var _proto2 = ProviderView.prototype;
  _proto2.tearDown = function tearDown() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.tearDown.tearDown", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  };
  _proto2._updateFilesAndFolders = function _updateFilesAndFolders(res, files, folders) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2._updateFilesAndFolders._updateFilesAndFolders", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    this.nextPagePath = res.nextPagePath;
    res.items.forEach(function (item) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2._updateFilesAndFolders._updateFilesAndFolders.res.items.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (item.isFolder) {
        folders.push(item);
      } else {
        files.push(item);
      }
            SRTlib.send("]},");

    });
    this.plugin.setPluginState({
      folders: folders,
      files: files
    });
        SRTlib.send("]},");

  };
  _proto2.preFirstRender = function preFirstRender() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.preFirstRender.preFirstRender", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.plugin.setPluginState({
      didFirstRender: true
    });
    this.plugin.onFirstRender();
        SRTlib.send("]},");

  };
  _proto2.getFolder = function getFolder(id, name) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.getFolder.getFolder", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this = this;
        SRTlib.send("]},");

    return this._loaderWrapper(this.provider.list(id), function (res) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.getFolder.getFolder.ReturnStatement._loaderWrapper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var folders = [];
      var files = [];
      var updatedDirectories;
      var state = _this.plugin.getPluginState();
      var index = findIndex(state.directories, function (dir) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.getFolder.getFolder.ReturnStatement._loaderWrapper.index.findIndex", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return id === dir.id;
                SRTlib.send("]},");

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
            SRTlib.send("]},");

    }, this.handleError);
        SRTlib.send("]},");

  };
  _proto2.getNextFolder = function getNextFolder(folder) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.getNextFolder.getNextFolder", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.getFolder(folder.requestPath, folder.name);
    this.lastCheckbox = undefined;
        SRTlib.send("]},");

  };
  _proto2.addFile = function addFile(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.addFile.addFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        SRTlib.send("]},");

  };
  _proto2.removeFile = function removeFile(id) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.removeFile.removeFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this$plugin$getPlugi = this.plugin.getPluginState(), currentSelection = _this$plugin$getPlugi.currentSelection;
    this.plugin.setPluginState({
      currentSelection: currentSelection.filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.removeFile.removeFile.plugin.setPluginState.currentSelection", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return file.id !== id;
                SRTlib.send("]},");

      })
    });
        SRTlib.send("]},");

  };
  _proto2.logout = function logout() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.logout.logout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
    this.provider.logout().then(function (res) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.logout.logout.provider.logout.then.catch.provider.logout.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send("]},");

    }).catch(this.handleError);
        SRTlib.send("]},");

  };
  _proto2.filterQuery = function filterQuery(e) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.filterQuery.filterQuery", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var state = this.plugin.getPluginState();
    this.plugin.setPluginState(_extends({}, state, {
      filterInput: e ? e.target.value : ''
    }));
        SRTlib.send("]},");

  };
  _proto2.toggleSearch = function toggleSearch(inputEl) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.toggleSearch.toggleSearch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var state = this.plugin.getPluginState();
    this.plugin.setPluginState({
      isSearchVisible: !state.isSearchVisible,
      filterInput: ''
    });
        SRTlib.send("]},");

  };
  _proto2.filterItems = function filterItems(items) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.filterItems.filterItems", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var state = this.plugin.getPluginState();
    if (!state.filterInput || state.filterInput === '') {
            SRTlib.send("]},");

      return items;
    }
        SRTlib.send("]},");

    return items.filter(function (folder) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.filterItems.filterItems.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return folder.name.toLowerCase().indexOf(state.filterInput.toLowerCase()) !== -1;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto2.sortByTitle = function sortByTitle() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.sortByTitle.sortByTitle", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var state = _extends({}, this.plugin.getPluginState());
    var files = state.files, folders = state.folders, sorting = state.sorting;
    var sortedFiles = files.sort(function (fileA, fileB) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.sortByTitle.sortByTitle.sortedFiles", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (sorting === 'titleDescending') {
                SRTlib.send("]},");

        return fileB.name.localeCompare(fileA.name);
      }
            SRTlib.send("]},");

      return fileA.name.localeCompare(fileB.name);
            SRTlib.send("]},");

    });
    var sortedFolders = folders.sort(function (folderA, folderB) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.sortByTitle.sortByTitle.sortedFolders", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (sorting === 'titleDescending') {
                SRTlib.send("]},");

        return folderB.name.localeCompare(folderA.name);
      }
            SRTlib.send("]},");

      return folderA.name.localeCompare(folderB.name);
            SRTlib.send("]},");

    });
    this.plugin.setPluginState(_extends({}, state, {
      files: sortedFiles,
      folders: sortedFolders,
      sorting: sorting === 'titleDescending' ? 'titleAscending' : 'titleDescending'
    }));
        SRTlib.send("]},");

  };
  _proto2.sortByDate = function sortByDate() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.sortByDate.sortByDate", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var state = _extends({}, this.plugin.getPluginState());
    var files = state.files, folders = state.folders, sorting = state.sorting;
    var sortedFiles = files.sort(function (fileA, fileB) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.sortByDate.sortByDate.sortedFiles", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var a = new Date(fileA.modifiedDate);
      var b = new Date(fileB.modifiedDate);
      if (sorting === 'dateDescending') {
                SRTlib.send("]},");

        return a > b ? -1 : a < b ? 1 : 0;
      }
            SRTlib.send("]},");

      return a > b ? 1 : a < b ? -1 : 0;
            SRTlib.send("]},");

    });
    var sortedFolders = folders.sort(function (folderA, folderB) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.sortByDate.sortByDate.sortedFolders", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var a = new Date(folderA.modifiedDate);
      var b = new Date(folderB.modifiedDate);
      if (sorting === 'dateDescending') {
                SRTlib.send("]},");

        return a > b ? -1 : a < b ? 1 : 0;
      }
            SRTlib.send("]},");

      return a > b ? 1 : a < b ? -1 : 0;
            SRTlib.send("]},");

    });
    this.plugin.setPluginState(_extends({}, state, {
      files: sortedFiles,
      folders: sortedFolders,
      sorting: sorting === 'dateDescending' ? 'dateAscending' : 'dateDescending'
    }));
        SRTlib.send("]},");

  };
  _proto2.sortBySize = function sortBySize() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.sortBySize.sortBySize", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var state = _extends({}, this.plugin.getPluginState());
    var files = state.files, sorting = state.sorting;
    if (!files.length || !this.plugin.getItemData(files[0]).size) {
            SRTlib.send("]},");

      return;
    }
    var sortedFiles = files.sort(function (fileA, fileB) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.sortBySize.sortBySize.sortedFiles", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var a = fileA.size;
      var b = fileB.size;
      if (sorting === 'sizeDescending') {
                SRTlib.send("]},");

        return a > b ? -1 : a < b ? 1 : 0;
      }
            SRTlib.send("]},");

      return a > b ? 1 : a < b ? -1 : 0;
            SRTlib.send("]},");

    });
    this.plugin.setPluginState(_extends({}, state, {
      files: sortedFiles,
      sorting: sorting === 'sizeDescending' ? 'sizeAscending' : 'sizeDescending'
    }));
        SRTlib.send("]},");

  };
  _proto2.isActiveRow = function isActiveRow(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.isActiveRow.isActiveRow", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return this.plugin.getPluginState().activeRow === this.plugin.getItemId(file);
        SRTlib.send("]},");

  };
  _proto2.isChecked = function isChecked(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.isChecked.isChecked", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this$plugin$getPlugi2 = this.plugin.getPluginState(), currentSelection = _this$plugin$getPlugi2.currentSelection;
        SRTlib.send("]},");

    return currentSelection.some(function (item) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.isChecked.isChecked.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return item.id === file.id;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto2.addFolder = function addFolder(folder) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.addFolder.addFolder", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this3 = this;
    var folderId = this.providerFileToId(folder);
    var state = this.plugin.getPluginState();
    var folders = state.selectedFolders || ({});
    if ((folderId in folders) && folders[folderId].loading) {
            SRTlib.send("]},");

      return;
    }
    folders[folderId] = {
      loading: true,
      files: []
    };
    this.plugin.setPluginState({
      selectedFolders: folders
    });
        SRTlib.send("]},");

    return this.listAllFiles(folder.requestPath).then(function (files) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.addFolder.addFolder.ReturnStatement.listAllFiles.then.catch.listAllFiles.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      files.forEach(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.addFolder.addFolder.ReturnStatement.listAllFiles.then.catch.listAllFiles.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this3.addFile(file);
                SRTlib.send("]},");

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
            SRTlib.send("]},");

    }).catch(function (e) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.addFolder.addFolder.ReturnStatement.listAllFiles.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      state = _this3.plugin.getPluginState();
      delete state.selectedFolders[folderId];
      _this3.plugin.setPluginState({
        selectedFolders: state.selectedFolders
      });
      _this3.handleError(e);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto2.toggleCheckbox = function toggleCheckbox(e, file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.toggleCheckbox.toggleCheckbox", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.focus();
    var _this$plugin$getPlugi3 = this.plugin.getPluginState(), folders = _this$plugin$getPlugi3.folders, files = _this$plugin$getPlugi3.files;
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
            SRTlib.send("]},");

      return;
    }
    this.lastCheckbox = file;
    var _this$plugin$getPlugi4 = this.plugin.getPluginState(), currentSelection = _this$plugin$getPlugi4.currentSelection;
    if (this.isChecked(file)) {
      this.plugin.setPluginState({
        currentSelection: currentSelection.filter(function (item) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.toggleCheckbox.toggleCheckbox.plugin.setPluginState.currentSelection", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return item.id !== file.id;
                    SRTlib.send("]},");

        })
      });
    } else {
      this.plugin.setPluginState({
        currentSelection: currentSelection.concat([file])
      });
    }
        SRTlib.send("]},");

  };
  _proto2.providerFileToId = function providerFileToId(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.providerFileToId.providerFileToId", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return generateFileID({
      data: file,
      name: file.name || file.id,
      type: file.mimeType
    });
        SRTlib.send("]},");

  };
  _proto2.handleAuth = function handleAuth() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.handleAuth.handleAuth", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this4 = this;
    var authState = btoa(JSON.stringify({
      origin: getOrigin()
    }));
    var clientVersion = encodeURIComponent("@uppy/provider-views=" + ProviderView.VERSION);
    var link = this.provider.authUrl() + "?state=" + authState + "&uppyVersions=" + clientVersion;
    var authWindow = window.open(link, '_blank');
    var handleToken = function handleToken(e) {
            SRTlib.send(`{ "anonymous": false, "function": "handleToken", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!_this4._isOriginAllowed(e.origin, _this4.plugin.opts.companionAllowedHosts) || e.source !== authWindow) {
        _this4.plugin.uppy.log("rejecting event from " + e.origin + " vs allowed pattern " + _this4.plugin.opts.companionAllowedHosts);
                SRTlib.send("]},");

        return;
      }
      var data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      if (!data.token) {
        _this4.plugin.uppy.log('did not receive token from auth window');
                SRTlib.send("]},");

        return;
      }
      authWindow.close();
      window.removeEventListener('message', handleToken);
      _this4.provider.setAuthToken(data.token);
      _this4.preFirstRender();
            SRTlib.send("]},");

    };
    window.addEventListener('message', handleToken);
        SRTlib.send("]},");

  };
  _proto2._isOriginAllowed = function _isOriginAllowed(origin, allowedOrigin) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2._isOriginAllowed._isOriginAllowed", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var getRegex = function getRegex(value) {
            SRTlib.send(`{ "anonymous": false, "function": "getRegex", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (typeof value === 'string') {
                SRTlib.send("]},");

        return new RegExp("^" + value + "$");
      } else if (value instanceof RegExp) {
                SRTlib.send("]},");

        return value;
      }
            SRTlib.send("]},");

    };
    var patterns = Array.isArray(allowedOrigin) ? allowedOrigin.map(getRegex) : [getRegex(allowedOrigin)];
        SRTlib.send("]},");

    return patterns.filter(function (pattern) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2._isOriginAllowed._isOriginAllowed.ReturnStatement.some", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return pattern != null;
            SRTlib.send("]},");

    }).some(function (pattern) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2._isOriginAllowed._isOriginAllowed.ReturnStatement.some2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return pattern.test(origin) || pattern.test(origin + "/");
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto2.handleError = function handleError(error) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.handleError.handleError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var uppy = this.plugin.uppy;
    uppy.log(error.toString());
    if (error.isAuthError) {
            SRTlib.send("]},");

      return;
    }
    var message = uppy.i18n('companionError');
    uppy.info({
      message: message,
      details: error.toString()
    }, 'error', 5000);
        SRTlib.send("]},");

  };
  _proto2.handleScroll = function handleScroll(e) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.handleScroll.handleScroll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this5 = this;
    var scrollPos = e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight);
    var path = this.nextPagePath || null;
    if (scrollPos < 50 && path && !this._isHandlingScroll) {
      this.provider.list(path).then(function (res) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.handleScroll.handleScroll.provider.list.then.catch.then.provider.list.then.catch.provider.list.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this5$plugin$getPlug = _this5.plugin.getPluginState(), files = _this5$plugin$getPlug.files, folders = _this5$plugin$getPlug.folders;
        _this5._updateFilesAndFolders(res, files, folders);
                SRTlib.send("]},");

      }).catch(this.handleError).then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.handleScroll.handleScroll.provider.list.then.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _this5._isHandlingScroll = false;
                SRTlib.send("]},");

      });
      this._isHandlingScroll = true;
    }
        SRTlib.send("]},");

  };
  _proto2.listAllFiles = function listAllFiles(path, files) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.listAllFiles.listAllFiles", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this6 = this;
    if (files === void 0) {
      files = null;
    }
    files = files || [];
        SRTlib.send("]},");

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.listAllFiles.listAllFiles.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this6.provider.list(path).then(function (res) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.listAllFiles.listAllFiles.ReturnStatement._this6.provider.list.then.catch._this6.provider.list.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        res.items.forEach(function (item) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.listAllFiles.listAllFiles.ReturnStatement._this6.provider.list.then.catch._this6.provider.list.then.res.items.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (!item.isFolder) {
            files.push(item);
          }
                    SRTlib.send("]},");

        });
        var moreFiles = res.nextPagePath || null;
        if (moreFiles) {
                    SRTlib.send("]},");

          return _this6.listAllFiles(moreFiles, files).then(function (files) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.listAllFiles.listAllFiles.ReturnStatement._this6.provider.list.then.catch._this6.provider.list.then.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return resolve(files);
                        SRTlib.send("]},");

          }).catch(function (e) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.listAllFiles.listAllFiles.ReturnStatement._this6.provider.list.then.catch._this6.provider.list.then.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return reject(e);
                        SRTlib.send("]},");

          });
        } else {
                    SRTlib.send("]},");

          return resolve(files);
        }
                SRTlib.send("]},");

      }).catch(function (e) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.listAllFiles.listAllFiles.ReturnStatement._this6.provider.list.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return reject(e);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto2.donePicking = function donePicking() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.donePicking.donePicking", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this7 = this;
    var _this$plugin$getPlugi5 = this.plugin.getPluginState(), currentSelection = _this$plugin$getPlugi5.currentSelection;
    var promises = currentSelection.map(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.donePicking.donePicking.promises", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (file.isFolder) {
                SRTlib.send("]},");

        return _this7.addFolder(file);
      } else {
                SRTlib.send("]},");

        return _this7.addFile(file);
      }
            SRTlib.send("]},");

    });
    this._loaderWrapper(Promise.all(promises), function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.donePicking.donePicking._loaderWrapper", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this7.clearSelection();
            SRTlib.send("]},");

    }, function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.donePicking.donePicking._loaderWrapper2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto2.cancelPicking = function cancelPicking() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.cancelPicking.cancelPicking", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.clearSelection();
    var dashboard = this.plugin.uppy.getPlugin('Dashboard');
    if (dashboard) dashboard.hideAllPanels();
        SRTlib.send("]},");

  };
  _proto2.clearSelection = function clearSelection() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.clearSelection.clearSelection", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.plugin.setPluginState({
      currentSelection: []
    });
        SRTlib.send("]},");

  };
  _proto2._loaderWrapper = function _loaderWrapper(promise, then, catch_) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2._loaderWrapper._loaderWrapper", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this8 = this;
    promise.then(function (result) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2._loaderWrapper._loaderWrapper.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this8.plugin.setPluginState({
        loading: false
      });
      then(result);
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2._loaderWrapper._loaderWrapper.catch2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this8.plugin.setPluginState({
        loading: false
      });
      catch_(err);
            SRTlib.send("]},");

    });
    this.plugin.setPluginState({
      loading: true
    });
        SRTlib.send("]},");

  };
  _proto2.render = function render(state, viewOptions) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto2.render.render", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (viewOptions === void 0) {
      viewOptions = {};
    }
    var _this$plugin$getPlugi6 = this.plugin.getPluginState(), authenticated = _this$plugin$getPlugi6.authenticated, didFirstRender = _this$plugin$getPlugi6.didFirstRender;
    if (!didFirstRender) {
      this.preFirstRender();
    }
    if (this.plugin.getPluginState().loading) {
            SRTlib.send("]},");

      return h(CloseWrapper, {
        onUnmount: this.clearSelection
      }, h(LoaderView, {
        i18n: this.plugin.uppy.i18n
      }));
    }
    if (!authenticated) {
            SRTlib.send("]},");

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
        SRTlib.send("]},");

    return h(CloseWrapper, {
      onUnmount: this.clearSelection
    }, h(Browser, browserProps));
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return ProviderView;
    SRTlib.send("]},");

})(), _class.VERSION = require('../package.json').version, _temp);
