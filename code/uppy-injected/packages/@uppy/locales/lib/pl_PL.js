var SRTlib = require('SRT-util');

var pl_PL = {};
pl_PL.strings = {
  addBulkFilesFailed: {
    '0': 'Dodanie %{smart_count} pliku nie powiodło się powodu błędu',
    '1': 'Dodanie %{smart_count} plików nie powiodło się z powodu błędów'
  },
  addMore: 'Dodaj więcej',
  addMoreFiles: 'Dodaj więcej plików',
  addingMoreFiles: 'Dodawanie kolejnych plików',
  allowAccessDescription: 'Aby zrobić zdjęcie lub nagrać filmik z użyciem wbudowanego aparatu, zezwól stronie na dostęp do tego urządzenia',
  allowAccessTitle: 'Zezwól na dostęp do aparatu',
  authenticateWith: 'Połącz z %{pluginName}',
  authenticateWithTitle: 'Zaloguj się do %{pluginName} aby wybrać pliki',
  back: 'Wstecz',
  browse: 'Wybierz',
  cancel: 'Anuluj',
  cancelUpload: 'Anuluj wysyłkę',
  chooseFiles: 'Wybierz pliki',
  closeModal: 'Zamknij okno',
  companionError: 'Połączenie z serwisem nie powiodło się',
  companionUnauthorizeHint: 'Aby wylogować się z konta %{provider}, przejdź pod adres %{url}',
  complete: 'Ukończono',
  connectedToInternet: 'Połączono z Internetem',
  copyLink: 'Skopiuj link',
  copyLinkToClipboardFallback: 'Skopiuj poniższy adres URL',
  copyLinkToClipboardSuccess: 'Link skopiowany do schowka',
  creatingAssembly: 'Przygotowywanie wysyłania...',
  creatingAssemblyFailed: 'Transloadit: Niepowodzenie przy tworzeniu zbioru',
  dashboardTitle: 'Przesyłanie plików',
  dashboardWindowTitle: 'Okno przesyłania plików (Naciśnij escape aby zamknąć)',
  dataUploadedOfTotal: '%{complete} z %{total}',
  done: 'Ukończono',
  dropHereOr: 'Upuść pliku tutaj albo %{browse}',
  dropHint: 'Upuść swoje pliki tutaj',
  dropPaste: 'Upuść pliki tutaj, wklej, albo %{browse}',
  dropPasteImport: 'Upuść pliki tutaj, wklej, %{browse} albo zaimportuj z',
  editFile: 'Edytuj plik',
  editing: 'Edycja %{file}',
  emptyFolderAdded: 'Z pustego folderu nie zostały dodane żadne pliki',
  encoding: 'Transkodowanie...',
  enterCorrectUrl: 'Niepoprawny URL: Upewnij się, że wprowadzasz bezpośredni adres pliku',
  enterUrlToImport: 'Wprowadź URL, aby zaimportować plik',
  exceedsSize: 'Plik ma rozmiar większy od dozwolonego',
  failedToFetch: 'Serwis nie mógł przetworzyć podanego linku, zweryfikuj jego poprawność',
  failedToUpload: 'Przesyłanie %{file} nie powiodło się',
  fileSource: 'Źródło pliku: %{name}',
  filesUploadedOfTotal: {
    '0': 'wysłano %{complete} z %{smart_count} pliku',
    '1': 'wysłano %{complete} z %{smart_count} plików',
    '2': 'wysłano %{complete} z %{smart_count} plików'
  },
  filter: 'Filtr',
  finishEditingFile: 'Zakończ edycję pliku',
  folderAdded: {
    '0': 'Dodano %{smart_count} plik z %{folder}',
    '1': 'Dodano %{smart_count} plików z %{folder}',
    '2': 'Dodano %{smart_count} plików z %{folder}'
  },
  generatingThumbnails: 'Generowanie miniaturek...',
  import: 'Importuj',
  importFrom: 'Importuj z %{name}',
  loading: 'Ładowanie...',
  logOut: 'Wyloguj',
  myDevice: 'Moje urządzenie',
  noDuplicates: 'Nie można dodać i zduplikować pliku \'%{fileName}\', już istnieje',
  noFilesFound: 'W tym miejscu brakuje plików lub katalogów',
  noInternetConnection: 'Brak połączenia z Internetem',
  noNewAlreadyUploading: 'Nie można dodać nowych plików: trwa wysyłka',
  openFolderNamed: 'Otwórz folder %{name}',
  pause: 'Wstrzymaj',
  pauseUpload: 'Wstrzymaj wysyłkę',
  paused: 'Wstrzymano',
  poweredBy: 'Dostarczane przez',
  processingXFiles: {
    '0': 'Przetwarzanie %{smart_count} pliku',
    '1': 'Przetwarzanie %{smart_count} plików',
    '2': 'Przetwarzanie %{smart_count} plików'
  },
  recordingLength: 'Długość nagrania %{recording_length}',
  removeFile: 'Usuń filtr',
  resetFilter: 'Zresetuj filtr',
  resume: 'Wznów',
  resumeUpload: 'Wznów wysyłkę',
  retry: 'Ponów próbę',
  retryUpload: 'Ponów próbę wysyłki',
  saveChanges: 'Zapisz zmiany',
  selectAllFilesFromFolderNamed: 'Wybierz wszystkie pliki z folderu %{name}',
  selectFileNamed: 'Wybierz plik %{name}',
  selectX: {
    '0': 'Wybierz %{smart_count}',
    '1': 'Wybierz %{smart_count}',
    '2': 'Wybierz %{smart_count}'
  },
  smile: 'Uśmiech!',
  startRecording: 'Zacznij nagrywanie wideo',
  stopRecording: 'Zatrzymaj nagrywanie wideo',
  takePicture: 'Zrób zdjęcie',
  timedOut: 'Wysyłka wstrzymana przez %{seconds} sekund, przerywanie.',
  unselectAllFilesFromFolderNamed: 'Odznacz wszystkie pliki z folderu %{name}',
  unselectFileNamed: 'Odznacz plik %{name}',
  upload: 'Wgrywanie',
  uploadComplete: 'Wgrywanie ukończone',
  uploadFailed: 'Wgrywanie nie powiodło się',
  uploadPaused: 'Wgrywanie wstrzymane',
  uploadXFiles: {
    '0': 'Wgraj %{smart_count} plik',
    '1': 'Wgraj %{smart_count} pliki',
    '2': 'Wgraj %{smart_count} pliki'
  },
  uploadXNewFiles: {
    '0': 'Wgraj +%{smart_count} plik',
    '1': 'Wgraj +%{smart_count} pliki',
    '2': 'Wgraj +%{smart_count} pliki'
  },
  uploading: 'Wgrywanie',
  uploadingXFiles: {
    '0': 'Wgrywanie %{smart_count} pliku',
    '1': 'Wgrywanie %{smart_count} plików',
    '2': 'Wgrywanie %{smart_count} plików'
  },
  xFilesSelected: {
    '0': '%{smart_count} plik zaznaczony',
    '1': '%{smart_count} plików zaznaczonych',
    '2': '%{smart_count} plików zaznaczonych'
  },
  xMoreFilesAdded: {
    '0': 'dodano %{smart_count} 1 plik więcej',
    '1': 'dodano %{smart_count} pliki więcej',
    '2': 'dodano %{smart_count} pliki więcej'
  },
  xTimeLeft: '%{time} zostało',
  youCanOnlyUploadFileTypes: 'Możesz przesłać tylko: %{types}',
  youCanOnlyUploadX: {
    '0': 'Możesz wgrać tylko %{smart_count} plik',
    '1': 'Możesz wgrać tylko %{smart_count} pliki',
    '2': 'Możesz wgrać tylko %{smart_count} pliki'
  },
  youHaveToAtLeastSelectX: {
    '0': 'Musisz wybrać przynajmniej %{smart_count} plik',
    '1': 'Musisz wybrać przynajmniej %{smart_count} pliki',
    '2': 'Musisz wybrać przynajmniej %{smart_count} pliki'
  }
};

pl_PL.pluralize = function (n) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"pl_PL.pluralize\",\"fileName\":\"/packages/@uppy/locales/src/pl_PL.js\",\"paramsNumber\":1},");

  if (n === 1) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"pl_PL.pluralize"},');
    return 0;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"pl_PL.pluralize"},');
  return 1;
  SRTlib.send('{"type":"FUNCTIONEND","function":"pl_PL.pluralize"},');
};

if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.pl_PL = pl_PL;
}

module.exports = pl_PL;