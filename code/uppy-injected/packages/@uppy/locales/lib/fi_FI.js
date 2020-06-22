var SRTlib = require('SRT-util');

var fi_FI = {};
fi_FI.strings = {
  addMore: 'Lisää',
  addMoreFiles: 'Lisää tiedostoja',
  addingMoreFiles: 'Lisätään tiedostoja',
  allowAccessDescription: 'Jotta voit lähettää kuvia tai videota kamerastasi, sinun tulee antaa tälle sivustolle oikeus käyttää kameraasi.',
  allowAccessTitle: 'Salli kameran käyttö, kiitos',
  authenticateWith: 'Mene %{pluginName}',
  authenticateWithTitle: '%{pluginName} vaadittu tunnistautumiseen, jotta voit valita tiedostoja',
  back: 'Takaisin',
  browse: 'selaa',
  cancel: 'Peruuta',
  cancelUpload: 'Peruuta lähetys',
  chooseFiles: 'Valitse tiedostot',
  closeModal: 'Sulje ikkuna',
  companionError: 'Yhdistäminen Companioniin epäonnistui',
  complete: 'Valmis',
  connectedToInternet: 'Yhdistetty Internettiin',
  copyLink: 'Kopioi linkki',
  copyLinkToClipboardFallback: 'Kopioi alla oleva linkki',
  copyLinkToClipboardSuccess: 'Linkki kopioitu leikepöydälle',
  creatingAssembly: 'Valmistellaan lähetystä...',
  creatingAssemblyFailed: 'Transloadit: Assemblyn luonti epäonnistui',
  dashboardTitle: 'Tiedoston Lataaja',
  dashboardWindowTitle: 'Tiedoston latausikkuna (Paina Esc sulkeaksesi)',
  dataUploadedOfTotal: '%{complete} / %{total}',
  done: 'Valmis',
  dropHereOr: 'Raahaa tiedostot tähän tai %{browse}',
  dropHint: 'Raahaa tiedostot tähän',
  dropPaste: 'Raahaa tiedostot tähän, liitä tai %{browse}',
  dropPasteImport: 'Raahaa tiedostot tähän, liitä, %{browse} tai tuo',
  editFile: 'Muokkaa tiedostoa',
  editing: 'Muokataan %{file}',
  emptyFolderAdded: 'Ei lisätty tiedostoja tyhjästä kansiosta',
  encoding: 'Koodataan...',
  enterCorrectUrl: 'Epäkelpo osoite: Varmista, että osoite osoittaa suoraan tiedostoon',
  enterUrlToImport: 'Anna osoite tuodaksesi tiedoston',
  exceedsSize: 'Tiedoston koko ylittää sallitun maksimin',
  failedToFetch: 'Companion ei voinut ladata tiedostoa osoitteesta, onko osoite varmasti oikea?',
  failedToUpload: 'Ei voitu lähettää tiedostoa %{file}',
  fileSource: 'Tiedoston lähde: %{name}',
  filesUploadedOfTotal: {
    '0': '%{complete} / %{smart_count} tiedostosta lähetetty',
    '1': '%{complete} / %{smart_count} tiedostoa lähetetty',
    '2': '%{complete} / %{smart_count} tiedostoa lähetetty'
  },
  filter: 'Suodata',
  finishEditingFile: 'Lopeta tiedoston muokkaus',
  folderAdded: {
    '0': 'Lisätty %{smart_count} tiedosto kansiosta %{folder}',
    '1': 'Lisätty %{smart_count} tiedostoa kansiosta %{folder}',
    '2': 'Lisätty %{smart_count} tiedostoa kansiosta %{folder}'
  },
  import: 'Tuo',
  importFrom: 'Tuo %{name}',
  loading: 'Ladataan...',
  logOut: 'Kirjaudu ulos',
  myDevice: 'Laitteeltani',
  noFilesFound: 'Sinulla ei ole tiedostoja tai kansioita täällä',
  noInternetConnection: 'Ei Internet-yhteyttä',
  openFolderNamed: 'Avaa kansio %{name}',
  pause: 'Keskeytä',
  pauseUpload: 'Keskeytä lähetys',
  paused: 'Keskeytetty',
  poweredBy: 'Powered by',
  processingXFiles: {
    '0': 'Käsitellään %{smart_count} tiedostoa',
    '1': 'Käsitellään %{smart_count} tiedostoa',
    '2': 'Käsitellään %{smart_count} tiedostoa'
  },
  removeFile: 'Poista tiedosto',
  resetFilter: 'Resetoi suodatin',
  resume: 'Jatka',
  resumeUpload: 'Jatka lähetystä',
  retry: 'Yritä uudelleen',
  retryUpload: 'Yritä lähetystä uudelleen',
  saveChanges: 'Tallenna muutokset',
  selectAllFilesFromFolderNamed: 'Valitse kaikki tiedostot kansiosta %{name}',
  selectFileNamed: 'Valitse tiedosto %{name}',
  selectX: {
    '0': 'Valitse %{smart_count}',
    '1': 'Valitse %{smart_count}',
    '2': 'Valitse %{smart_count}'
  },
  smile: 'Hymyile!',
  startRecording: 'Aloita videon tallennus',
  stopRecording: 'Lopeta videon tallennus',
  takePicture: 'Ota kuva',
  timedOut: 'Lähetys jumittunut %{seconds} sekunniksi, keskeytetään.',
  unselectAllFilesFromFolderNamed: 'Poista tiedostojen valinta kansiossa %{name}',
  unselectFileNamed: 'Poista valinta tiedostosta %{name}',
  upload: 'Lähetä',
  uploadComplete: 'Lähetys valmis',
  uploadFailed: 'Lähetys epäonnistui',
  uploadPaused: 'Lähetys keskeytetty',
  uploadXFiles: {
    '0': 'Lähetä %{smart_count} tiedosto',
    '1': 'Lähetä %{smart_count} tiedostoa',
    '2': 'Lähetä %{smart_count} tiedostoa'
  },
  uploadXNewFiles: {
    '0': 'Lähetä +%{smart_count} tiedosto',
    '1': 'Lähetä +%{smart_count} tiedostoa',
    '2': 'Lähetä +%{smart_count} tiedostoa'
  },
  uploading: 'Lähetetään',
  uploadingXFiles: {
    '0': 'Lähetetään %{smart_count} tiedosto',
    '1': 'Lähetetään %{smart_count} tiedostoa',
    '2': 'Lähetetään %{smart_count} tiedostoa'
  },
  xFilesSelected: {
    '0': '%{smart_count} tiedosto valittu',
    '1': '%{smart_count} tiedostoa valittu',
    '2': '%{smart_count} tiedostoa valittu'
  },
  xMoreFilesAdded: {
    '0': '%{smart_count} tiedosto added',
    '1': '%{smart_count} tiedostoa added',
    '2': '%{smart_count} tiedostoa added'
  },
  xTimeLeft: '%{time} jäljellä',
  youCanOnlyUploadFileTypes: 'Sallitut tiedostomuodot: %{types}',
  youCanOnlyUploadX: {
    '0': 'Voit lähettää vain %{smart_count} tiedosto',
    '1': 'Voit lähettää vain %{smart_count} tiedostoa',
    '2': 'Voit lähettää vain %{smart_count} tiedostoa'
  },
  youHaveToAtLeastSelectX: {
    '0': 'Sinun pitää valita vähintään %{smart_count} tiedosto',
    '1': 'Sinun pitää valita vähintään %{smart_count} tiedostoa',
    '2': 'Sinun pitää valita vähintään %{smart_count} tiedostoa'
  },
  startCapturing: 'Aloita tallennus',
  stopCapturing: 'Lopeta tallennus',
  submitRecordedFile: 'Hyväksy tallenne',
  streamActive: 'Jako aktiivinen',
  streamPassive: 'Jako passiivinen',
  micDisabled: 'Käyttäjä on estänyt mikrofonin',
  recording: 'Tallennetaan'
};

fi_FI.pluralize = function (n) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"fi_FI.pluralize\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

  if (n === 1) {
    SRTlib.send('], "end": "fi_FI.pluralize"},');
    return 0;
  }

  SRTlib.send('], "end": "fi_FI.pluralize"},');
  return 1;
  SRTlib.send('], "end": "fi_FI.pluralize"},');
};

if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.fi_FI = fi_FI;
}

module.exports = fi_FI;