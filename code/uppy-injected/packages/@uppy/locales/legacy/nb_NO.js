const SRTlib = require('SRT-util');

const nb_NO = {};
nb_NO.strings = {
  chooseFile: 'Velg en fil',
  youHaveChosen: 'Du har valgt: %{fileName}',
  orDragDrop: 'eller slipp den her',
  filesChosen: {
    0: '%{smart_count} fil valgt',
    1: '%{smart_count} filer valgt'
  },
  filesUploaded: {
    0: '%{smart_count} fil lastet opp',
    1: '%{smart_count} filer lastet opp'
  },
  files: {
    0: '%{smart_count} fil',
    1: '%{smart_count} filer'
  },
  uploadFiles: {
    0: 'Lastet opp %{smart_count} fil',
    1: 'Lastet opp %{smart_count} filer'
  },
  selectToUpload: 'Velg filer å laste opp',
  closeModal: 'Lukk dialogboksen',
  upload: 'Last opp',
  importFrom: 'Importer filer fra',
  dashboardWindowTitle: 'Uppy Dashboard-vindu (Trykk escape for å lukke)',
  dashboardTitle: 'Uppy Dashboard',
  copyLinkToClipboardSuccess: 'Lenken ble kopiert til utklippstavla.',
  copyLinkToClipboardFallback: 'Kopier URL-en under',
  done: 'Ferdig',
  localDisk: 'Lokal disk',
  dropPasteImport: 'Du kan slippe eller lime inn filer her, importere fra en en av plasseringene ovenfor eller',
  dropPaste: 'Du kan slippe eller lime inn filer her eller',
  browse: 'velge dem',
  fileProgress: 'Filstatus: Opplastingshastighet og ETA',
  numberOfSelectedFiles: 'Antall valgte filer',
  uploadAllNewFiles: 'Last opp alle nye filer'
};
nb_NO.pluralize = function (n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"nb_NO.pluralize","fileName":"${__filename}","paramsNumber":1},`);

  if (n === 1) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"nb_NO.pluralize"},');

    return 0;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"nb_NO.pluralize"},');

  return 1;
    SRTlib.send('{"type":"FUNCTIONEND","function":"nb_NO.pluralize"},');

};
if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.nb_NO = nb_NO;
}
module.exports = nb_NO;
