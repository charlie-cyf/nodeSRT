var SRTlib = require('SRT-util');
var zh_TW = {};
zh_TW.strings = {
  addBulkFilesFailed: {
    '0': '因伺服器錯誤，無法新增 %{smart_count} 個檔案',
    '1': '因伺服器錯誤，無法新增 %{smart_count} 個檔案'
  },
  addMore: '新增更多',
  addMoreFiles: '新增更多檔案',
  addingMoreFiles: '正在新增更多檔案',
  allowAccessDescription: '為了使用您的相機進行拍照或錄影，請允許網站讀取相機',
  allowAccessTitle: '請允許對相機的讀取權限',
  authenticateWith: '連接到%{pluginName}',
  authenticateWithTitle: '請使用%{pluginName}進行身份驗證以選擇檔案',
  back: '返回',
  browse: '瀏覽',
  cancel: '取消',
  cancelUpload: '取消上傳',
  chooseFiles: '選擇檔案',
  closeModal: '關閉互動視窗',
  companionError: '與Companion的連接失敗',
  companionUnauthorizeHint: '若要取消 %{provider} 帳號認證, 請前往 %{url}',
  complete: '完成',
  connectedToInternet: '連線至網絡',
  copyLink: '複製連結',
  copyLinkToClipboardFallback: '複製以下網址',
  copyLinkToClipboardSuccess: '連結已複製到剪貼板',
  creatingAssembly: '準備上傳中...',
  creatingAssemblyFailed: 'Transloadit：無法建立程序集',
  dashboardTitle: '檔案上傳工具',
  dashboardWindowTitle: '檔案上傳視窗（點擊離開以關閉）',
  dataUploadedOfTotal: '%{total}%{complete}',
  done: '完成',
  dropHereOr: '拖曳檔案到這裡或%{browse}',
  dropHint: '拖曳檔案到這裡',
  dropPaste: '拖曳檔案到這裡，貼上或者%{browse}',
  dropPasteImport: '拖曳檔案到這裡，貼上，%{browse}或者匯入',
  editFile: '編輯檔案',
  editing: '編輯%{file}中',
  emptyFolderAdded: '無法從空資料夾新增檔案',
  encoding: '編碼中...',
  enterCorrectUrl: '錯誤連結： 請確認您輸入的是檔案連結',
  enterUrlToImport: '輸入連結或者匯入文件',
  exceedsSize: '此檔案大小超出允許的最大值',
  failedToFetch: 'Companion無法抓取此連結，請確認它是正確的',
  failedToUpload: '上傳%{file}失敗',
  fileSource: '檔案來源：%{name}',
  filesUploadedOfTotal: {
    '0': '%{smart_count}個檔案上傳%{complete}',
    '1': '%{smart_count}個檔案上傳%{complete}',
    '2': '%{smart_count}個檔案上傳%{complete}'
  },
  filter: '篩選器',
  finishEditingFile: '完成檔案編輯',
  folderAdded: {
    '0': '從%{folder}新增了%{smart_count}個檔案',
    '1': '從%{folder}新增了%{smart_count}個檔案',
    '2': '從%{folder}新增了%{smart_count}個檔案'
  },
  generatingThumbnails: '產生縮圖中...',
  import: '匯入',
  importFrom: '從%{name}匯入',
  loading: '載入中...',
  logOut: '登出',
  myDevice: '我的裝置',
  noDuplicates: '無法新增重複檔案 \'%{fileName}\' 已存在',
  noFilesFound: '這裡空空如也',
  noInternetConnection: '無法連線到網絡',
  noNewAlreadyUploading: '無法新增檔案: 已在上傳中',
  openFolderNamed: '開啟資料夾 %{name}',
  pause: '暫停',
  pauseUpload: '暫停上傳',
  paused: '已暫停',
  poweredBy: '技術提供者',
  processingXFiles: {
    '0': '%{smart_count}個檔案處理中',
    '1': '%{smart_count}個檔案處理中',
    '2': '%{smart_count}個檔案處理中'
  },
  recordingLength: '錄影長度 %{recording_length}',
  removeFile: '移除檔案',
  resetFilter: '重設篩選器',
  resume: '恢復',
  resumeUpload: '恢復上傳',
  retry: '重試',
  retryUpload: '重試上傳',
  saveChanges: '儲存變更',
  selectAllFilesFromFolderNamed: '選擇資料夾 %{name} 中的所有檔案',
  selectFileNamed: '選擇檔案 %{name}',
  selectX: {
    '0': '選擇%{smart_count}',
    '1': '選擇%{smart_count}',
    '2': '選擇%{smart_count}'
  },
  smile: '請微笑！',
  startRecording: '開始錄影',
  stopRecording: '停止錄影',
  takePicture: '拍照',
  timedOut: '上傳已經停滯%{seconds}秒，中止上傳',
  unselectAllFilesFromFolderNamed: '取消選擇資料夾 %{name} 中的所有檔案',
  unselectFileNamed: '取消選擇檔案 %{name}',
  upload: '上傳',
  uploadComplete: '上傳完成',
  uploadFailed: '上傳失敗',
  uploadPaused: '暫停上傳',
  uploadXFiles: {
    '0': '上傳%{smart_count}個檔案',
    '1': '上傳%{smart_count}個檔案',
    '2': '上傳%{smart_count}個檔案'
  },
  uploadXNewFiles: {
    '0': '新上傳了%{smart_count}個檔案',
    '1': '新上傳了%{smart_count}個檔案',
    '2': '新上傳了%{smart_count}個檔案'
  },
  uploading: '上傳中',
  uploadingXFiles: {
    '0': '上傳%{smart_count}個檔案中',
    '1': '上傳%{smart_count}個檔案中',
    '2': '上傳%{smart_count}個檔案中'
  },
  xFilesSelected: {
    '0': '已選擇%{smart_count}個檔案',
    '1': '已選擇%{smart_count}個檔案',
    '2': '已選擇%{smart_count}個檔案'
  },
  xMoreFilesAdded: {
    '0': '又新增%{smart_count}個檔案',
    '1': '又新增%{smart_count}個檔案',
    '2': '又新增%{smart_count}個檔案'
  },
  xTimeLeft: '還剩下%{time}',
  youCanOnlyUploadFileTypes: '您只能上傳這些檔案類型：%{types}',
  youCanOnlyUploadX: {
    '0': '您只能上傳%{smart_count}個檔案',
    '1': '您只能上傳%{smart_count}個檔案',
    '2': '您只能上傳%{smart_count}個檔案'
  },
  youHaveToAtLeastSelectX: {
    '0': '您至少要選擇%{smart_count}個檔案',
    '1': '您至少要選擇%{smart_count}個檔案',
    '2': '您至少要選擇%{smart_count}個檔案'
  }
};
zh_TW.pluralize = function (n) {
    SRTlib.send(`{ "anonymous": true, "function": "zh_TW.pluralize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (n === 1) {
        SRTlib.send('], "end": "zh_TW.pluralize"},');

    return 0;
  }
    SRTlib.send('], "end": "zh_TW.pluralize"},');

  return 1;
    SRTlib.send('], "end": "zh_TW.pluralize"},');

};
if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.zh_TW = zh_TW;
}
module.exports = zh_TW;
