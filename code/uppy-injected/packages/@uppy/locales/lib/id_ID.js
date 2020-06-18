var SRTlib = require('SRT-util');

var id_ID = {};
id_ID.strings = {
  addMore: 'Tambahkan lebih banyak',
  addMoreFiles: 'Tambahkan lebih banyak berkas',
  addingMoreFiles: 'Menambahkan lebih banyak berkas',
  allowAccessDescription: 'Untuk mengambil gambar atau merekam video menggunakan kamera Anda, mohon izinkan akses kamera untuk situs ini.',
  allowAccessTitle: 'Mohon izinkan akses ke kamera Anda.',
  authenticateWith: 'Menghubungkan ke %{pluginName}',
  authenticateWithTitle: 'Silahkan mengotentifikasi menggunakan %{pluginName} untuk memilih berkas',
  back: 'Kembali',
  browse: 'Telusuri',
  cancel: 'Batal',
  cancelUpload: 'Batalkan pengungahan',
  chooseFiles: 'Pilih berkas',
  closeModal: 'Tutup Modal',
  companionError: 'Koneksi ke Companion gagal',
  complete: 'Komplit',
  connectedToInternet: 'Terhubung ke Internet',
  copyLink: 'Salin tautan',
  copyLinkToClipboardFallback: 'Salin URL di bawah ini',
  copyLinkToClipboardSuccess: 'Tautan berhasil disalin ke Clipboard',
  creatingAssembly: 'Menyiapkan unggahan...',
  creatingAssemblyFailed: 'Transloadit: Tidak dapat membuat Assembly',
  dashboardTitle: 'Pengunggah Berkas',
  dashboardWindowTitle: 'Jendela Pengunggah Berkas (Tekan escape untuk menutup)',
  dataUploadedOfTotal: '%{complete} dari %{total}',
  done: 'Selesai',
  dropHereOr: 'Letakkan berkas di sini atau %{browse}',
  dropHint: 'Letakkan berkas Anda di sini',
  dropPaste: 'Letakkan berkas di sini, tempelkan atau %{browse}',
  dropPasteImport: 'Letakkan berkas, tempelkan, %{browse} atau impor dari',
  editFile: 'Ubah berkas',
  editing: 'Mengubah %{file}',
  emptyFolderAdded: 'Tidak ada berkas yang ditambahkan dari direktori kosong',
  encoding: 'Pengkodean...',
  enterCorrectUrl: 'URL salah: Mohon pastikan Anda memasukkan tautan langsung ke berkas',
  enterUrlToImport: 'Masukkan URL untuk mengimpor berkas',
  exceedsSize: 'Berkas ini melebihi ukuran maksimum yang dibolehkan',
  failedToFetch: 'Companion gagal mengambil URL ini, pastikan sudah benar',
  failedToUpload: 'Gagal mengunggah %{file}',
  fileSource: 'Sumber berkas: %{name}',
  filesUploadedOfTotal: {
    '0': '%{complete} dari %{smart_count} berkas terunggah',
    '1': '%{complete} dari %{smart_count} berkas terunggah',
    '2': '%{complete} dari %{smart_count} berkas terunggah'
  },
  filter: 'Penyaring',
  finishEditingFile: 'Selesai mengubah berkas',
  folderAdded: {
    '0': 'Menambahkan %{smart_count} berkas dari %{folder}',
    '1': 'Menambahkan %{smart_count} berkas dari %{folder}',
    '2': 'Menambahkan %{smart_count} berkas dari %{folder}'
  },
  import: 'Impor',
  importFrom: 'Impor dari %{name}',
  loading: 'Memuat...',
  logOut: 'Keluar',
  myDevice: 'Perangkat Saya',
  noFilesFound: 'Anda tidak memiliki berkas atau direktori di sini',
  noInternetConnection: 'Tidak ada koneksi Internet',
  openFolderNamed: 'Buka direktori %{name}',
  pause: 'Tunda',
  pauseUpload: 'Tunda pengungahan',
  paused: 'Ditunda',
  poweredBy: 'Didukung oleh',
  processingXFiles: {
    '0': 'Pemrosesan %{smart_count} berkas',
    '1': 'Pemrosesan %{smart_count} berkas',
    '2': 'Pemrosesan %{smart_count} berkas'
  },
  removeFile: 'Hapus berkas',
  resetFilter: 'Setel ulang penyaring',
  resume: 'Lanjutkan',
  resumeUpload: 'Lanjutkan pengungahan',
  retry: 'Ulangi',
  retryUpload: 'Ulangi pengungahan',
  saveChanges: 'Simpan perubahan',
  selectAllFilesFromFolderNamed: 'Pilih semua berkas dari folder %{name}',
  selectFileNamed: 'Pilih berkas %{name}',
  selectX: {
    '0': 'Pilih %{smart_count}',
    '1': 'Pilih %{smart_count}',
    '2': 'Pilih %{smart_count}'
  },
  smile: 'Senyum!',
  startRecording: 'Memulai perekaman video',
  stopRecording: 'Menghentikan perekaman video',
  takePicture: 'Mengambil gambar',
  timedOut: 'Pengunggahan terhenti untuk %{seconds} detik, membatalkan.',
  unselectAllFilesFromFolderNamed: 'Batalkan pemilihan semua berkas dari folder %{name}',
  unselectFileNamed: 'Batalkan pemilihan berkas %{name}',
  upload: 'Unggah',
  uploadComplete: 'Pengunggahan selesai',
  uploadFailed: 'Pengunggahan gagal',
  uploadPaused: 'Pengunggahan ditunda',
  uploadXFiles: {
    '0': 'Unggah %{smart_count} berkas',
    '1': 'Unggah %{smart_count} berkas',
    '2': 'Unggah %{smart_count} berkas'
  },
  uploadXNewFiles: {
    '0': 'Mengunggah +%{smart_count} berkas baru',
    '1': 'Mengunggah +%{smart_count} berkas baru',
    '2': 'Mengunggah +%{smart_count} berkas baru'
  },
  uploading: 'Mengunggah',
  uploadingXFiles: {
    '0': 'Mengunggah %{smart_count} berkas',
    '1': 'Mengunggah %{smart_count} berkas',
    '2': 'Mengunggah %{smart_count} berkas'
  },
  xFilesSelected: {
    '0': '%{smart_count} berkas terpilih',
    '1': '%{smart_count} berkas terpilih',
    '2': '%{smart_count} berkas terpilih'
  },
  xMoreFilesAdded: {
    '0': '%{smart_count} berkas lagi ditambahkan',
    '1': '%{smart_count} berkas lagi ditambahkan',
    '2': '%{smart_count} berkas lagi ditambahkan'
  },
  xTimeLeft: 'Tersisa %{time}',
  youCanOnlyUploadFileTypes: 'Anda hanya dapat menggunggah: %{types}',
  youCanOnlyUploadX: {
    '0': 'Anda hanya dapat mengunggah %{smart_count} berkas',
    '1': 'Anda hanya dapat mengunggah %{smart_count} berkas',
    '2': 'Anda hanya dapat mengunggah %{smart_count} berkas'
  },
  youHaveToAtLeastSelectX: {
    '0': 'Anda harus memilih minimal %{smart_count} berkas',
    '1': 'Anda harus memilih minimal %{smart_count} berkas',
    '2': 'Anda harus memilih minimal %{smart_count} berkas'
  }
};

id_ID.pluralize = function (n) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"id_ID.pluralize\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

  if (n === 1) {
    SRTlib.send("]},");
    return 0;
  }

  SRTlib.send("]},");
  return 1;
  SRTlib.send("]},");
};

if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.id_ID = id_ID;
}

module.exports = id_ID;