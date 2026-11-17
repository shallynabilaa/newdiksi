// Data Inflasi Bulanan (YoY, MtM, YtD) Tahun 2024 - 2026
const INFLATION_MONTHLY_DATA = [
  // 2024
  { tahun: '2024', bulan: 'Januari', yoy: 4.47, mtm: 1.48, ytd: 1.48 },
  { tahun: '2024', bulan: 'Februari', yoy: 3.51, mtm: -0.39, ytd: 1.08 },
  { tahun: '2024', bulan: 'Maret', yoy: 5.47, mtm: 1.41, ytd: 2.51 },
  { tahun: '2024', bulan: 'April', yoy: 6.09, mtm: 0.97, ytd: 3.51 },
  { tahun: '2024', bulan: 'Mei', yoy: 4.74, mtm: -0.34, ytd: 3.16 },
  { tahun: '2024', bulan: 'Juni', yoy: 4.89, mtm: -0.45, ytd: 2.69 },
  { tahun: '2024', bulan: 'Juli', yoy: 3.46, mtm: -0.99, ytd: 1.67 },
  { tahun: '2024', bulan: 'Agustus', yoy: 3.86, mtm: 0.54, ytd: 2.23 },
  { tahun: '2024', bulan: 'September', yoy: 2.81, mtm: -0.63, ytd: 1.58 },
  { tahun: '2024', bulan: 'Oktober', yoy: 3.03, mtm: -0.37, ytd: 1.21 },
  { tahun: '2024', bulan: 'November', yoy: 2.28, mtm: 0.12, ytd: 1.33 },
  { tahun: '2024', bulan: 'Desember', yoy: 2.07, mtm: 0.73, ytd: 2.07 },
  // 2025
  { tahun: '2025', bulan: 'Januari', yoy: 1.24, mtm: 0.65, ytd: 0.65 },
  { tahun: '2025', bulan: 'Februari', yoy: 1.73, mtm: 0.09, ytd: 0.75 },
  { tahun: '2025', bulan: 'Maret', yoy: 0.98, mtm: 0.67, ytd: 1.42 },
  { tahun: '2025', bulan: 'April', yoy: 3.46, mtm: 2.01, ytd: 3.46 },
  { tahun: '2025', bulan: 'Mei', yoy: 1.22, mtm: 1.13, ytd: 2.29 },
  { tahun: '2025', bulan: 'Juni', yoy: 2.37, mtm: 0.68, ytd: 2.99 },
  { tahun: '2025', bulan: 'Juli', yoy: 4.51, mtm: 1.48, ytd: 4.92 },
  { tahun: '2025', bulan: 'Agustus', yoy: 4.56, mtm: 0.20, ytd: 4.72 },
  { tahun: '2025', bulan: 'September', yoy: 5.90, mtm: 0.64, ytd: 5.39 },
  { tahun: '2025', bulan: 'Oktober', yoy: 6.70, mtm: 0.39, ytd: 5.80 },
  { tahun: '2025', bulan: 'November', yoy: 5.66, mtm: -0.85, ytd: 4.89 },
  { tahun: '2025', bulan: 'Desember', yoy: 5.52, mtm: 0.60, ytd: 5.52 },
  // 2026
  { tahun: '2026', bulan: 'Januari', yoy: 3.46, mtm: -1.31, ytd: -1.31 },
  { tahun: '2026', bulan: 'Februari', yoy: 4.48, mtm: 1.07, ytd: -0.25 },
  { tahun: '2026', bulan: 'Maret', yoy: 5.11, mtm: 1.28, ytd: 1.02 },
  { tahun: '2026', bulan: 'April', yoy: 2.84, mtm: -0.19, ytd: 0.83 },
  { tahun: '2026', bulan: 'Mei', yoy: 4.27, mtm: 0.25, ytd: 1.08 },
  { tahun: '2026', bulan: 'Juni', yoy: 4.30, mtm: 0.72, ytd: 1.80 },
  { tahun: '2026', bulan: 'Juli', yoy: 3.14, mtm: 0.35, ytd: 0.35 },
  { tahun: '2026', bulan: 'Agustus', yoy: 3.58, mtm: 0.62, ytd: 2.79 },
  { tahun: '2026', bulan: 'September', yoy: 3.64, mtm: 0.70, ytd: 3.52 },
  { tahun: '2026', bulan: 'Oktober', yoy: 3.73, mtm: 0.47, ytd: 4.00 }
];

const FALLBACK_DATA = {
  lastUpdated: '17 Nov 2026',
  years: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
  indicators: [
    // ================= 1. KEPENDUDUKAN =================
    {
      id: 'penduduk',
      kategori: 'Kependudukan',
      nama: 'Jumlah Penduduk',
      satuan: 'Jiwa',
      delta: '+1.500 jiwa dibanding 2024',
      chart_type: 'bar',
      color: '#002B49',
      insight: 'Jumlah penduduk Kabupaten Kerinci terus bertumbuh dari 237.791 jiwa (2018) menjadi 258.200 jiwa (2025).',
      values: [237791, 238882, 250259, 251911, 253863, 255796, 256700, 258200, null]
    },
    {
      id: 'penduduk_laki',
      kategori: 'Kependudukan',
      nama: 'Jumlah Penduduk Laki-laki',
      satuan: 'Jiwa',
      delta: '+725 jiwa dibanding 2023',
      chart_type: 'bar',
      color: '#005A9C',
      insight: 'Penduduk laki-laki Kabupaten Kerinci mencapai 128.734 jiwa pada tahun 2024.',
      values: [118656, 119196, 125647, 126371, 127245, 128009, 128734, null, null]
    },
    {
      id: 'penduduk_perempuan',
      kategori: 'Kependudukan',
      nama: 'Jumlah Penduduk Perempuan',
      satuan: 'Jiwa',
      delta: '+655 jiwa dibanding 2023',
      chart_type: 'bar',
      color: '#0093DD',
      insight: 'Penduduk perempuan Kabupaten Kerinci mencapai 127.966 jiwa pada tahun 2024.',
      values: [119135, 119686, 124612, 125540, 126618, 127787, 127966, null, null]
    },
    {
      id: 'rasio_jk',
      kategori: 'Kependudukan',
      nama: 'Rasio Jenis Kelamin (Sex Ratio)',
      satuan: 'Persen',
      delta: '100,50% pada tahun 2025',
      chart_type: 'line',
      color: '#0284C7',
      insight: 'Rasio jenis kelamin sebesar 100,50 menunjukkan terdapat sekitar 100-101 penduduk laki-laki per 100 penduduk perempuan.',
      values: [99.60, 99.80, 100.80, 100.70, 100.50, 100.70, 100.60, 100.50, null]
    },
    {
      id: 'ikg',
      kategori: 'Kependudukan',
      nama: 'Indeks Ketimpangan Gender (IKG)',
      satuan: 'Indeks',
      delta: '-0,03 poin dibanding 2023 (Membaik)',
      chart_type: 'line',
      color: '#68B92E',
      insight: 'Penurunan Indeks Ketimpangan Gender hingga 0,43 (2024) menunjukkan kesetaraan gender di Kerinci semakin membaik.',
      values: [0.51, 0.59, 0.59, 0.57, 0.57, 0.46, 0.43, null, null]
    },
    {
      id: 'gini_rasio',
      kategori: 'Kependudukan',
      nama: 'Gini Rasio',
      satuan: 'Indeks',
      delta: '0,287 pada tahun 2025',
      chart_type: 'line',
      color: '#F58220',
      insight: 'Gini rasio Kabupaten Kerinci terjaga rendah di bawah 0,30, menandakan ketimpangan pengeluaran penduduk tergolong rendah.',
      values: [0.32, 0.29, 0.28, 0.28, 0.28, 0.30, 0.29, 0.287, null]
    },
    {
      id: 'lpp',
      kategori: 'Kependudukan',
      nama: 'Laju Pertumbuhan Penduduk',
      satuan: 'Persen',
      delta: '0,64% pada tahun 2025',
      chart_type: 'line',
      color: '#005A9C',
      insight: 'Laju pertumbuhan penduduk Kabupaten Kerinci berada pada kisaran 0,60% hingga 0,64%.',
      values: [0.43, 0.40, 0.87, 0.49, 0.82, 0.70, 0.60, 0.64, null]
    },

    // ================= 2. KETENAGAKERJAAN =================
    {
      id: 'tpak',
      kategori: 'Ketenagakerjaan',
      nama: 'Tingkat Partisipasi Angkatan Kerja (TPAK)',
      satuan: 'Persen',
      delta: '74,77% pada tahun 2025',
      chart_type: 'line',
      color: '#005A9C',
      insight: 'TPAK Kabupaten Kerinci mencapai 74,77% pada tahun 2025.',
      values: [71.14, 66.26, 69.55, 70.90, 73.53, 71.89, 77.64, 74.77, null]
    },
    {
      id: 'tpt',
      kategori: 'Ketenagakerjaan',
      nama: 'Tingkat Pengangguran Terbuka (TPT)',
      satuan: 'Persen',
      delta: '-0,09 poin persen dibanding 2024',
      chart_type: 'line',
      color: '#0093DD',
      insight: 'Tingkat Pengangguran Terbuka (TPT) Kabupaten Kerinci turun menjadi 2,42% pada tahun 2025.',
      values: [2.74, 2.63, 2.43, 2.32, 2.61, 2.48, 2.51, 2.42, null]
    },
    {
      id: 'rasio_ketergantungan',
      kategori: 'Ketenagakerjaan',
      nama: 'Rasio Ketergantungan',
      satuan: 'Persen',
      delta: '44,96% pada tahun 2022',
      chart_type: 'line',
      color: '#0284C7',
      insight: 'Rasio ketergantungan penduduk usia non-produktif terhadap penduduk usia produktif berada di kisaran 44-46%.',
      values: [46.66, 44.47, 46.01, 46.06, 44.96, null, null, null, null]
    },
    {
      id: 'penduduk_bekerja',
      kategori: 'Ketenagakerjaan',
      nama: 'Penduduk Bekerja',
      satuan: 'Jiwa',
      delta: '144.986 jiwa pada tahun 2025',
      chart_type: 'bar',
      color: '#68B92E',
      insight: 'Jumlah penduduk Kabupaten Kerinci yang bekerja mencapai 144.986 jiwa pada tahun 2025.',
      values: [125009, 118000, 127187, 130965, 136320, 137302, 149363, 144986, null]
    },
    {
      id: 'pengangguran',
      kategori: 'Ketenagakerjaan',
      nama: 'Jumlah Pengangguran',
      satuan: 'Jiwa',
      delta: '-261 jiwa dibanding 2024',
      chart_type: 'bar',
      color: '#F58220',
      insight: 'Jumlah pengangguran terbuka di Kabupaten Kerinci berkurang menjadi 3.590 jiwa pada tahun 2025.',
      values: [3595, 3236, 3167, 3107, 3677, 3485, 3851, 3590, null]
    },
    {
      id: 'angkatan_kerja',
      kategori: 'Ketenagakerjaan',
      nama: 'Jumlah Angkatan Kerja',
      satuan: 'Jiwa',
      delta: '148.576 jiwa pada tahun 2025',
      chart_type: 'bar',
      color: '#002B49',
      insight: 'Total angkatan kerja di Kabupaten Kerinci mencapai 148.576 jiwa pada tahun 2025.',
      values: [131048, 123186, 130354, 134072, 139997, 140787, 153214, 148576, null]
    },
    {
      id: 'bukan_angkatan_kerja',
      kategori: 'Ketenagakerjaan',
      nama: 'Bukan Angkatan Kerja',
      satuan: 'Jiwa',
      delta: '50.293 jiwa pada tahun 2025',
      chart_type: 'bar',
      color: '#64748B',
      insight: 'Penduduk usia kerja yang termasuk kategori bukan angkatan kerja sebanyak 50.293 jiwa.',
      values: [53153, 62738, 57073, 55031, 50309, 55062, 44115, 50293, null]
    },

    // ================= 3. KEMISKINAN =================
    {
      id: 'garis_kemiskinan',
      kategori: 'Kemiskinan',
      nama: 'Garis Kemiskinan',
      satuan: 'Rp/Kapita/Bulan',
      delta: '+Rp 3.816 dibanding 2025',
      chart_type: 'bar',
      color: '#D97706',
      insight: 'Garis kemiskinan Kabupaten Kerinci meningkat dari Rp 617.362 (2025) menjadi Rp 621.178/kapita/bulan (2026).',
      values: [333978, 356059, 385571, 396168, 443400, 485838, 606095, 617362, 621178]
    },
    {
      id: 'kemiskinan',
      kategori: 'Kemiskinan',
      nama: 'Persentase Penduduk Miskin (P0)',
      satuan: 'Persen',
      delta: '8,00% pada tahun 2026',
      chart_type: 'line',
      color: '#F58220',
      insight: 'Persentase penduduk miskin Kabupaten Kerinci tercatat sebesar 7,48% pada 2025 dan 8,00% pada 2026.',
      values: [7.07, 7.13, 7.30, 7.71, 7.57, 7.54, 6.93, 7.48, 8.00]
    },
    {
      id: 'indeks_kedalaman_p1',
      kategori: 'Kemiskinan',
      nama: 'Indeks Kedalaman Kemiskinan (P1)',
      satuan: 'Poin',
      delta: '1,17 poin pada tahun 2026',
      chart_type: 'line',
      color: '#F59E0B',
      insight: 'Indeks Kedalaman Kemiskinan (P1) mengukur rata-rata kesenjangan pengeluaran penduduk miskin terhadap garis kemiskinan.',
      values: [0.72, 0.59, 1.05, 0.81, 1.22, 1.08, 1.00, 0.79, 1.17]
    },
    {
      id: 'indeks_keparahan_p2',
      kategori: 'Kemiskinan',
      nama: 'Indeks Keparahan Kemiskinan (P2)',
      satuan: 'Poin',
      delta: '0,26 poin pada tahun 2026',
      chart_type: 'line',
      color: '#B45309',
      insight: 'Indeks Keparahan Kemiskinan (P2) memberikan gambaran mengenai penyebaran pengeluaran di antara penduduk miskin.',
      values: [0.13, 0.10, 0.21, 0.15, 0.31, 0.27, 0.24, 0.14, 0.26]
    },
    {
      id: 'jumlah_miskin',
      kategori: 'Kemiskinan',
      nama: 'Jumlah Penduduk Miskin',
      satuan: 'Ribu Jiwa',
      delta: '19,87 ribu jiwa pada tahun 2026',
      chart_type: 'bar',
      color: '#EA580C',
      insight: 'Jumlah penduduk miskin di Kabupaten Kerinci tercatat sebanyak 18,28 ribu jiwa (2025) dan 19,87 ribu jiwa (2026).',
      values: [16.79, 17.00, 17.48, 18.45, 18.20, 18.21, 16.85, 18.28, 19.87]
    },

    // ================= 4. IPM & PENDIDIKAN =================
    {
      id: 'uhh',
      kategori: 'IPM',
      nama: 'Umur Harapan Hidup (UHH)',
      satuan: 'Tahun',
      delta: '+0,19 tahun (73,85 th di 2026)',
      chart_type: 'line',
      color: '#0093DD',
      insight: 'Umur Harapan Hidup saat lahir penduduk Kabupaten Kerinci terus meningkat mencapai 73,85 tahun pada tahun 2026.',
      values: [69.65, 69.82, 72.64, 72.70, 72.94, 73.18, 73.39, 73.66, 73.85]
    },
    {
      id: 'rls',
      kategori: 'IPM',
      nama: 'Rata-rata Lama Sekolah (RLS)',
      satuan: 'Tahun',
      delta: '+0,05 tahun (8,81 th di 2026)',
      chart_type: 'line',
      color: '#0284C7',
      insight: 'Rata-rata Lama Sekolah penduduk usia 25 tahun ke atas meningkat menjadi 8,81 tahun pada 2026.',
      values: [8.20, 8.21, 8.55, 8.56, 8.57, 8.59, 8.60, 8.76, 8.81]
    },
    {
      id: 'pengeluaran_kapita',
      kategori: 'IPM',
      nama: 'Pengeluaran per Kapita Disesuaikan',
      satuan: 'Ribu Rupiah',
      delta: '+Rp 347 ribu (11.997 ribu di 2026)',
      chart_type: 'bar',
      color: '#002B49',
      insight: 'Pengeluaran riil per kapita disesuaikan mencapai Rp 11.997 ribu per tahun pada 2026.',
      values: [9961, 10198, 9995, 10184, 10570, 10965, 11441, 11650, 11997]
    },
    {
      id: 'ipm',
      kategori: 'IPM',
      nama: 'Indeks Pembangunan Manusia (IPM)',
      satuan: 'Poin',
      delta: '+0,59 poin (75,69 di 2026)',
      chart_type: 'line',
      color: '#005A9C',
      insight: 'IPM Kabupaten Kerinci meningkat konsisten dari 70,59 (2018) hingga mencapai 75,69 pada tahun 2026 (Kategori Tinggi).',
      values: [70.59, 70.95, 72.47, 72.72, 73.24, 73.77, 74.33, 75.10, 75.69]
    },
    {
      id: 'hls',
      kategori: 'IPM',
      nama: 'Harapan Lama Sekolah (HLS)',
      satuan: 'Tahun',
      delta: '+0,06 tahun (14,24 th di 2026)',
      chart_type: 'line',
      color: '#68B92E',
      insight: 'Harapan Lama Sekolah anak usia 7 tahun di Kabupaten Kerinci mencapai 14,24 tahun pada 2026.',
      values: [13.85, 13.86, 13.87, 13.88, 13.89, 13.91, 13.92, 14.18, 14.24]
    },
    {
      id: 'aps_7_12',
      kategori: 'Pendidikan (APS)',
      nama: 'Angka Partisipasi Sekolah (APS) 7-12 Tahun',
      satuan: 'Persen',
      delta: '99,27% pada tahun 2023',
      chart_type: 'line',
      color: '#005A9C',
      insight: 'Partisipasi sekolah kelompok umur 7-12 tahun (jenjang SD/sederajat) sangat tinggi di atas 99%.',
      values: [99.70, 99.75, 99.70, 99.40, 99.70, 99.27, null, null, null]
    },
    {
      id: 'aps_13_15',
      kategori: 'Pendidikan (APS)',
      nama: 'Angka Partisipasi Sekolah (APS) 13-15 Tahun',
      satuan: 'Persen',
      delta: '93,51% pada tahun 2023',
      chart_type: 'line',
      color: '#0093DD',
      insight: 'Partisipasi sekolah kelompok umur 13-15 tahun (jenjang SMP/sederajat) berada di kisaran 93,51% - 98,18%.',
      values: [98.09, 98.18, 97.41, 97.63, 93.71, 93.51, null, null, null]
    },
    {
      id: 'aps_16_18',
      kategori: 'Pendidikan (APS)',
      nama: 'Angka Partisipasi Sekolah (APS) 16-18 Tahun',
      satuan: 'Persen',
      delta: '73,46% pada tahun 2023',
      chart_type: 'line',
      color: '#68B92E',
      insight: 'Partisipasi sekolah kelompok umur 16-18 tahun (jenjang SMA/sederajat) sebesar 73,46% pada tahun 2023.',
      values: [77.25, 79.20, 78.05, 78.48, 71.84, 73.46, null, null, null]
    },

    // ================= 5. PDRB & PERTUMBUHAN EKONOMI =================
    {
      id: 'pdrb_growth',
      kategori: 'PDRB',
      nama: 'Pertumbuhan Ekonomi',
      satuan: 'Persen',
      delta: '4,57% pada tahun 2024',
      chart_type: 'bar',
      color: '#68B92E',
      insight: 'Pertumbuhan ekonomi Kabupaten Kerinci tetap solid di angka 4,57% pada tahun 2024.',
      values: [4.93, 4.23, 3.81, 3.69, 5.12, 4.66, 4.57, null, null]
    },
    {
      id: 'pdrb_perkapita',
      kategori: 'PDRB',
      nama: 'PDRB ADHB Per Kapita',
      satuan: 'Juta Rupiah',
      delta: '+Rp 3,95 Juta dibanding 2024',
      chart_type: 'line',
      color: '#002B49',
      insight: 'PDRB per kapita Atas Dasar Harga Berlaku Kabupaten Kerinci meningkat menjadi Rp 61,25 juta pada tahun 2025.',
      values: [39.56, 41.53, 41.80, 44.61, 48.16, 52.43, 57.30, 61.25, null]
    },
    {
      id: 'pdrb_adhb',
      kategori: 'PDRB',
      nama: 'PDRB Atas Dasar Harga Berlaku (ADHB)',
      satuan: 'Miliar Rupiah',
      delta: '+Rp 1.100,20 Miliar dibanding 2024',
      chart_type: 'bar',
      color: '#005A9C',
      insight: 'Nilai PDRB ADHB Kabupaten Kerinci meningkat dari Rp 14.710,03 miliar (2024) menjadi Rp 15.810,23 miliar (2025).',
      values: [9400.04, 9912.47, 10460.27, 11237.96, 12225.79, 13400.01, 14710.03, 15810.23, null]
    },
    {
      id: 'pdrb_adhk',
      kategori: 'PDRB',
      nama: 'PDRB Atas Dasar Harga Konstan (ADHK)',
      satuan: 'Miliar Rupiah',
      delta: '+Rp 363,34 Miliar dibanding 2024',
      chart_type: 'bar',
      color: '#0093DD',
      insight: 'Nilai PDRB ADHK 2010 Kabupaten Kerinci meningkat dari Rp 7.877,89 miliar (2024) menjadi Rp 8.241,23 miliar (2025).',
      values: [6089.60, 6336.54, 6567.28, 6822.79, 7125.01, 7500.03, 7877.89, 8241.23, null]
    }
  ],
  sectors: [
    { label: 'Pertanian, Kehutanan & Perikanan', value: 48.60, color: '#68B92E' },
    { label: 'Perdagangan Besar & Eceran', value: 14.25, color: '#005A9C' },
    { label: 'Konstruksi', value: 9.80, color: '#0093DD' },
    { label: 'Administrasi Pemerintahan', value: 8.45, color: '#F58220' },
    { label: 'Lapangan Usaha Lainnya', value: 18.90, color: '#94a3b8' }
  ]
};

let dashboardData = FALLBACK_DATA;
let mainChartInstance = null;
let sectorChartInstance = null;
let inflationChartInstance = null;
let currentIndicatorId = null;
let currentChartType = 'line';
let lastKnownTimestamp = null;

// Pengaturan Halaman Tabel (Pagination)
let currentTablePage = 1;
const ITEMS_PER_PAGE = 7;

let currentInflationPage = 1;
const INFLATION_ITEMS_PER_PAGE = 12;

document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  await loadDashboardData();
  setupEvents();
  renderInflationSection();
  if (window.lucide) lucide.createIcons();

  setInterval(checkForUpdates, 10000);
});

// =========================================================================
// LOGIKA PERPINDAHAN TAB UTAMA (INDIKATOR STRATEGIS VS DATA INFLASI)
// =========================================================================
window.switchMainTab = function(tabName, scrollTargetId = null) {
  const panelStrategis = document.getElementById('tabPanelStrategis');
  const panelInflasi = document.getElementById('tabPanelInflasi');
  const btnStrategis = document.getElementById('tabBtnStrategis');
  const btnInflasi = document.getElementById('tabBtnInflasi');

  if (tabName === 'inflasi') {
    panelStrategis.classList.add('hidden');
    panelInflasi.classList.remove('hidden');

    btnInflasi.className = 'flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all bg-[#005A9C] text-white shadow';
    btnStrategis.className = 'flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';

    renderInflationChart();
  } else {
    panelInflasi.classList.add('hidden');
    panelStrategis.classList.remove('hidden');

    btnStrategis.className = 'flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all bg-[#005A9C] text-white shadow';
    btnInflasi.className = 'flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';
  }

  if (scrollTargetId) {
    const el = document.getElementById(scrollTargetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
};

// =========================================================================
// RENDER TAB DATA INFLASI (KARTU, GRAFIK 3 GARIS, TABEL & EXPORT EXCEL)
// =========================================================================
function renderInflationSection() {
  const latest = INFLATION_MONTHLY_DATA[INFLATION_MONTHLY_DATA.length - 1];
  if (latest) {
    const periodeLabel = `${latest.bulan} ${latest.tahun}`;
    document.getElementById('infBadgeYoY').textContent = periodeLabel;
    document.getElementById('infBadgeMtM').textContent = periodeLabel;
    document.getElementById('infBadgeYtD').textContent = periodeLabel;
    document.getElementById('infLatestYoY').textContent = `${formatInfNum(latest.yoy)}%`;
    document.getElementById('infLatestMtM').textContent = `${formatInfNum(latest.mtm)}%`;
    document.getElementById('infLatestYtD').textContent = `${formatInfNum(latest.ytd)}%`;
  }

  renderInflationChart();
  renderInflationTable();
}

function renderInflationChart() {
  const canvas = document.getElementById('inflationTrendChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const yearFilter = document.getElementById('inflationYearFilterChart')?.value || '2026';
  const filtered = yearFilter === 'all'
    ? INFLATION_MONTHLY_DATA
    : INFLATION_MONTHLY_DATA.filter(d => d.tahun === yearFilter);

  const labels = filtered.map(d => yearFilter === 'all' ? `${d.bulan.slice(0, 3)} ${d.tahun.slice(2)}` : d.bulan);

  const ctx = canvas.getContext('2d');
  if (inflationChartInstance) inflationChartInstance.destroy();

  inflationChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'YoY (%)',
          data: filtered.map(d => d.yoy),
          borderColor: '#005A9C',
          backgroundColor: '#005A9C20',
          borderWidth: 3,
          tension: 0.3,
          pointRadius: 4
        },
        {
          label: 'MtM (%)',
          data: filtered.map(d => d.mtm),
          borderColor: '#F58220',
          backgroundColor: '#F5822020',
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 4
        },
        {
          label: 'YtD (%)',
          data: filtered.map(d => d.ytd),
          borderColor: '#68B92E',
          backgroundColor: '#68B92E20',
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'top' }
      }
    }
  });
}

function renderInflationTable() {
  const tbody = document.getElementById('inflationTableBody');
  const paginationEl = document.getElementById('inflationPagination');
  if (!tbody) return;

  const yearFilter = document.getElementById('inflationYearFilterTable')?.value || 'all';
  const filtered = yearFilter === 'all'
    ? INFLATION_MONTHLY_DATA
    : INFLATION_MONTHLY_DATA.filter(d => d.tahun === yearFilter);

  const totalPages = Math.ceil(filtered.length / INFLATION_ITEMS_PER_PAGE);
  if (currentInflationPage > totalPages) currentInflationPage = totalPages;
  if (currentInflationPage < 1) currentInflationPage = 1;

  const startIdx = (currentInflationPage - 1) * INFLATION_ITEMS_PER_PAGE;
  const endIdx = Math.min(startIdx + INFLATION_ITEMS_PER_PAGE, filtered.length);
  const pageItems = filtered.slice(startIdx, endIdx);

  tbody.innerHTML = pageItems.map(row => `
    <tr class="hover:bg-sky-50/70 dark:hover:bg-slate-800/60 transition-colors">
      <td class="py-3 px-4 font-bold text-slate-900 dark:text-white">${row.tahun}</td>
      <td class="py-3 px-4 font-medium">${row.bulan}</td>
      <td class="py-3 px-4 text-right font-mono font-semibold text-[#005A9C] dark:text-sky-400">${formatInfNum(row.yoy)}</td>
      <td class="py-3 px-4 text-right font-mono ${row.mtm < 0 ? 'text-red-500 font-semibold' : ''}">${formatInfNum(row.mtm)}</td>
      <td class="py-3 px-4 text-right font-mono ${row.ytd < 0 ? 'text-red-500 font-semibold' : ''}">${formatInfNum(row.ytd)}</td>
    </tr>
  `).join('');

  if (paginationEl) {
    let pageButtons = '';
    for (let p = 1; p <= totalPages; p++) {
      const activeClass = p === currentInflationPage
        ? 'bg-[#005A9C] text-white border-[#005A9C] shadow-sm'
        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100';
      pageButtons += `
        <button type="button" onclick="goToInflationPage(${p})" class="w-8 h-8 rounded-lg border text-xs font-bold transition-colors ${activeClass}">
          ${p}
        </button>
      `;
    }

    paginationEl.innerHTML = `
      <div class="text-slate-500 dark:text-slate-400">
        Menampilkan <strong>${startIdx + 1}–${endIdx}</strong> dari <strong>${filtered.length}</strong> bulan (Halaman <strong>${currentInflationPage}</strong> dari ${totalPages})
      </div>
      <div class="flex items-center gap-1.5 flex-wrap justify-center">
        <button type="button" onclick="goToInflationPage(${currentInflationPage - 1})" ${currentInflationPage === 1 ? 'disabled' : ''} class="px-3 h-8 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold disabled:opacity-40 hover:bg-slate-100">
          ← Sebelumnya
        </button>
        ${pageButtons}
        <button type="button" onclick="goToInflationPage(${currentInflationPage + 1})" ${currentInflationPage === totalPages ? 'disabled' : ''} class="px-3 h-8 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold disabled:opacity-40 hover:bg-slate-100">
          Berikutnya →
        </button>
      </div>
    `;
  }
}

window.goToInflationPage = function(page) {
  currentInflationPage = page;
  renderInflationTable();
};

function formatInfNum(val) {
  if (val === null || val === undefined) return '-';
  return Number(val).toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// =========================================================================
// LOGIKA TAB 1: INDIKATOR STRATEGIS TAHUNAN
// =========================================================================
function initTheme() {
  if (localStorage.getItem('diksi_theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
}

async function loadDashboardData() {
  try {
    const res = await fetch('/api/dashboard');
    if (!res.ok) throw new Error('API tidak merespons');
    dashboardData = await res.json();
  } catch (err) {
    dashboardData = FALLBACK_DATA;
  }

  lastKnownTimestamp = dashboardData.lastUpdated;
  const badgeEl = document.getElementById('lastUpdatedBadge');
  if (badgeEl) badgeEl.textContent = dashboardData.lastUpdated || '-';

  if (dashboardData.indicators.length > 0) {
    currentIndicatorId = dashboardData.indicators[0].id;
    currentChartType = dashboardData.indicators[0].chart_type || 'line';
  }

  renderAll(false);
}

async function checkForUpdates() {
  try {
    const res = await fetch('/api/dashboard');
    if (!res.ok) return;
    const fresh = await res.json();
    if (lastKnownTimestamp && fresh.lastUpdated !== lastKnownTimestamp) {
      dashboardData = fresh;
      lastKnownTimestamp = fresh.lastUpdated;
      const badgeEl = document.getElementById('lastUpdatedBadge');
      if (badgeEl) badgeEl.textContent = dashboardData.lastUpdated;
      renderAll(true);
    }
  } catch (_) {}
}

function renderAll(keepSelection = false) {
  renderHeroHighlights();
  renderKpiCards();
  populateSelectors(keepSelection);
  renderMainChart();
  renderSectorChart();
  renderTable();
  if (window.lucide) lucide.createIcons();
}

function getLatestValidData(item) {
  for (let i = item.values.length - 1; i >= 0; i--) {
    if (item.values[i] !== null && item.values[i] !== undefined && item.values[i] !== '') {
      return { value: item.values[i], year: dashboardData.years[i] };
    }
  }
  return { value: null, year: '-' };
}

function renderHeroHighlights() {
  const container = document.getElementById('heroHighlights');
  if (!container) return;

  const priorityIds = ['penduduk', 'ipm', 'kemiskinan', 'tpt'];
  let top4 = priorityIds.map(id => dashboardData.indicators.find(i => i.id === id)).filter(Boolean);
  if (top4.length < 4) top4 = dashboardData.indicators.slice(0, 4);

  container.innerHTML = top4.map(item => {
    const latest = getLatestValidData(item);
    return `
      <div class="p-3.5 rounded-xl bg-slate-950/60 border border-white/10">
        <p class="text-xs text-slate-300 line-clamp-1">${item.nama}</p>
        <p class="font-display font-extrabold text-xl sm:text-2xl text-sky-300 mt-1">${formatNum(latest.value)}</p>
        <p class="text-[11px] text-slate-400 mt-0.5">${item.satuan} (${latest.year})</p>
      </div>
    `;
  }).join('');
}

function renderKpiCards() {
  const container = document.getElementById('kpiGrid');
  if (!container) return;

  const featuredIds = ['penduduk', 'tpt', 'kemiskinan', 'ipm', 'pdrb_growth', 'pdrb_adhb'];
  let featured = featuredIds.map(id => dashboardData.indicators.find(i => i.id === id)).filter(Boolean);
  if (featured.length === 0) featured = dashboardData.indicators.slice(0, 6);

  container.innerHTML = featured.map(item => {
    const latest = getLatestValidData(item);
    return `
      <div onclick="focusIndicator('${item.id}')" class="kpi-card cursor-pointer bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:border-[#0093DD] flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">${item.kategori}</span>
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">${latest.year}</span>
          </div>
          <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">${item.nama}</h3>
          <div class="mt-2 flex items-baseline gap-2">
            <span class="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">${formatNum(latest.value)}</span>
            <span class="text-xs text-slate-500">${item.satuan}</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <span class="font-semibold text-[#68B92E]">${item.delta}</span>
          <span class="font-semibold text-[#005A9C] dark:text-sky-400">Lihat Grafik →</span>
        </div>
      </div>
    `;
  }).join('');
}

window.focusIndicator = function(id) {
  const item = dashboardData.indicators.find(i => i.id === id);
  currentIndicatorId = id;
  if (item && item.chart_type) currentChartType = item.chart_type;
  const selectEl = document.getElementById('chartIndicatorSelect');
  if (selectEl) selectEl.value = id;
  syncChartTypeButtons();
  renderMainChart();
  const visEl = document.getElementById('visualisasi');
  if (visEl) visEl.scrollIntoView({ behavior: 'smooth' });
};

function populateSelectors(keepSelection) {
  const indSelect = document.getElementById('chartIndicatorSelect');
  if (indSelect) {
    indSelect.innerHTML = dashboardData.indicators
      .map(i => `<option value="${i.id}">[${i.kategori}] ${i.nama}</option>`)
      .join('');
    if (keepSelection && currentIndicatorId) indSelect.value = currentIndicatorId;
  }

  const categories = [...new Set(dashboardData.indicators.map(i => i.kategori))];
  const catFilter = document.getElementById('tableCategoryFilter');
  if (catFilter) {
    const prevCat = catFilter.value;
    catFilter.innerHTML = `<option value="all">Semua Kategori (${dashboardData.indicators.length})</option>` +
      categories.map(c => `<option value="${c}">${c}</option>`).join('');
    if (keepSelection && prevCat) catFilter.value = prevCat;
  }
}

function syncChartTypeButtons() {
  const btnLine = document.getElementById('btnLineChart');
  const btnBar = document.getElementById('btnBarChart');
  if (!btnLine || !btnBar) return;

  if (currentChartType === 'bar') {
    btnBar.classList.add('bg-white', 'dark:bg-slate-900', 'text-[#005A9C]', 'dark:text-sky-400', 'shadow-sm');
    btnLine.classList.remove('bg-white', 'dark:bg-slate-900', 'text-[#005A9C]', 'dark:text-sky-400', 'shadow-sm');
  } else {
    btnLine.classList.add('bg-white', 'dark:bg-slate-900', 'text-[#005A9C]', 'dark:text-sky-400', 'shadow-sm');
    btnBar.classList.remove('bg-white', 'dark:bg-slate-900', 'text-[#005A9C]', 'dark:text-sky-400', 'shadow-sm');
  }
}

function renderMainChart() {
  const item = dashboardData.indicators.find(i => i.id === currentIndicatorId);
  if (!item || typeof Chart === 'undefined') return;

  document.getElementById('chartTitle').textContent = item.nama;
  document.getElementById('chartSubtitle').textContent = `Kategori: ${item.kategori} • Satuan: ${item.satuan}`;
  document.getElementById('chartInsight').textContent = item.insight || 'Data resmi Badan Pusat Statistik Kabupaten Kerinci.';
  syncChartTypeButtons();

  const ctx = document.getElementById('mainTrendChart').getContext('2d');
  if (mainChartInstance) mainChartInstance.destroy();

  const color = item.color || '#005A9C';
  mainChartInstance = new Chart(ctx, {
    type: currentChartType,
    data: {
      labels: dashboardData.years,
      datasets: [{
        label: item.nama,
        data: item.values,
        borderColor: color,
        backgroundColor: currentChartType === 'line' ? color + '28' : color + 'CC',
        borderWidth: 3,
        fill: currentChartType === 'line',
        tension: 0.35,
        spanGaps: true,
        pointRadius: 5,
        borderRadius: currentChartType === 'bar' ? 8 : 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } }
    }
  });
}

function renderSectorChart() {
  if (typeof Chart === 'undefined') return;
  const canvas = document.getElementById('sectorChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (sectorChartInstance) sectorChartInstance.destroy();

  sectorChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: dashboardData.sectors.map(s => s.label),
      datasets: [{
        data: dashboardData.sectors.map(s => s.value),
        backgroundColor: dashboardData.sectors.map(s => s.color),
        borderWidth: 2
      }]
    },
    options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { display: false } } }
  });

  const legendEl = document.getElementById('sectorLegend');
  if (legendEl) {
    legendEl.innerHTML = dashboardData.sectors.map(s => `
      <div class="flex items-center justify-between gap-2">
        <span class="flex items-center gap-2 min-w-0"><span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${s.color}"></span><span class="truncate">${s.label}</span></span>
        <span class="font-bold shrink-0">${formatNum(s.value)}%</span>
      </div>
    `).join('');
  }
}

function renderTable() {
  const thead = document.getElementById('dataTableHead');
  const tbody = document.getElementById('dataTableBody');
  const paginationEl = document.getElementById('tablePagination');
  if (!thead || !tbody) return;

  const q = (document.getElementById('tableSearch')?.value || '').toLowerCase();
  const cat = document.getElementById('tableCategoryFilter')?.value || 'all';

  thead.innerHTML = `
    <tr class="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase text-slate-600 dark:text-slate-300">
      <th class="py-3.5 px-4">Kategori</th>
      <th class="py-3.5 px-4">Indikator Strategis</th>
      <th class="py-3.5 px-4">Satuan</th>
      ${dashboardData.years.map(y => `<th class="py-3.5 px-4 text-right">${y}</th>`).join('')}
    </tr>
  `;

  const filtered = dashboardData.indicators.filter(item => {
    const matchCat = cat === 'all' || item.kategori === cat;
    const matchText = item.nama.toLowerCase().includes(q) || item.kategori.toLowerCase().includes(q);
    return matchCat && matchText;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="${dashboardData.years.length + 3}" class="py-8 text-center text-slate-400 text-sm">
          Tidak ada indikator yang cocok dengan pencarian Anda.
        </td>
      </tr>
    `;
    if (paginationEl) paginationEl.innerHTML = '';
    return;
  }

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  if (currentTablePage > totalPages) currentTablePage = totalPages;
  if (currentTablePage < 1) currentTablePage = 1;

  const startIdx = (currentTablePage - 1) * ITEMS_PER_PAGE;
  const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, filtered.length);
  const pageItems = filtered.slice(startIdx, endIdx);

  tbody.innerHTML = pageItems.map(item => `
    <tr onclick="focusIndicator('${item.id}')" class="cursor-pointer hover:bg-sky-50/70 dark:hover:bg-slate-800/60 transition-colors">
      <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 whitespace-nowrap">${item.kategori}</span></td>
      <td class="py-3 px-4 font-semibold text-slate-900 dark:text-white">${item.nama}</td>
      <td class="py-3 px-4 text-xs text-slate-500 whitespace-nowrap">${item.satuan}</td>
      ${item.values.map(v => `<td class="py-3 px-4 text-right font-mono">${formatNum(v)}</td>`).join('')}
    </tr>
  `).join('');

  if (paginationEl) {
    let pageButtons = '';
    for (let p = 1; p <= totalPages; p++) {
      const activeClass = p === currentTablePage
        ? 'bg-[#005A9C] text-white border-[#005A9C] shadow-sm'
        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100';
      pageButtons += `
        <button type="button" onclick="goToTablePage(${p})" class="w-8 h-8 rounded-lg border text-xs font-bold transition-colors ${activeClass}">
          ${p}
        </button>
      `;
    }

    paginationEl.innerHTML = `
      <div class="text-slate-500 dark:text-slate-400">
        Menampilkan <strong>${startIdx + 1}–${endIdx}</strong> dari <strong>${filtered.length}</strong> indikator (Halaman <strong>${currentTablePage}</strong> dari ${totalPages})
      </div>
      <div class="flex items-center gap-1.5 flex-wrap justify-center">
        <button type="button" onclick="goToTablePage(${currentTablePage - 1})" ${currentTablePage === 1 ? 'disabled' : ''} class="px-3 h-8 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold disabled:opacity-40 hover:bg-slate-100">
          ← Sebelumnya
        </button>
        ${pageButtons}
        <button type="button" onclick="goToTablePage(${currentTablePage + 1})" ${currentTablePage === totalPages ? 'disabled' : ''} class="px-3 h-8 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold disabled:opacity-40 hover:bg-slate-100">
          Berikutnya →
        </button>
      </div>
    `;
  }
}

window.goToTablePage = function(page) {
  currentTablePage = page;
  renderTable();
};

function setupEvents() {
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('diksi_theme', isDark ? 'dark' : 'light');
  });

  document.getElementById('chartIndicatorSelect')?.addEventListener('change', (e) => {
    const item = dashboardData.indicators.find(i => i.id === e.target.value);
    currentIndicatorId = e.target.value;
    if (item && item.chart_type) currentChartType = item.chart_type;
    renderMainChart();
  });

  document.getElementById('btnLineChart')?.addEventListener('click', () => {
    currentChartType = 'line';
    renderMainChart();
  });

  document.getElementById('btnBarChart')?.addEventListener('click', () => {
    currentChartType = 'bar';
    renderMainChart();
  });

  document.getElementById('tableSearch')?.addEventListener('input', () => {
    currentTablePage = 1;
    renderTable();
  });

  document.getElementById('tableCategoryFilter')?.addEventListener('change', () => {
    currentTablePage = 1;
    renderTable();
  });

  // Event Filter Tab Inflasi
  document.getElementById('inflationYearFilterChart')?.addEventListener('change', renderInflationChart);
  document.getElementById('inflationYearFilterTable')?.addEventListener('change', () => {
    currentInflationPage = 1;
    renderInflationTable();
  });

  // Export Excel Indikator Strategis
  document.getElementById('exportCsvBtn')?.addEventListener('click', () => {
    const yearsHeader = dashboardData.years
      .map(y => `<th style="background-color:#002B49;color:#ffffff;font-weight:bold;border:1px solid #cbd5e1;padding:8px;text-align:right;">${y}</th>`)
      .join('');

    const rowsHtml = dashboardData.indicators.map(i => {
      const cells = i.values.map(v => {
        if (v === null || v === undefined || v === '') {
          return `<td style="border:1px solid #cbd5e1;padding:6px;text-align:right;color:#94a3b8;">-</td>`;
        }
        return `<td style="border:1px solid #cbd5e1;padding:6px;text-align:right;">${v}</td>`;
      }).join('');

      return `
        <tr>
          <td style="border:1px solid #cbd5e1;padding:6px;font-weight:bold;background-color:#f8fafc;">${i.kategori}</td>
          <td style="border:1px solid #cbd5e1;padding:6px;">${i.nama}</td>
          <td style="border:1px solid #cbd5e1;padding:6px;color:#475569;">${i.satuan}</td>
          ${cells}
        </tr>
      `;
    }).join('');

    const excelTemplate = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
      <head><meta charset="UTF-8"></head>
      <body>
        <table>
          <thead>
            <tr>
              <th colspan="${3 + dashboardData.years.length}" style="font-size:14pt;font-weight:bold;text-align:left;padding:10px 6px;color:#002B49;">
                DASHBOARD INDIKATOR DATA STRATEGIS KABUPATEN KERINCI (BPS 1501)
              </th>
            </tr>
            <tr>
              <th style="background-color:#002B49;color:#ffffff;font-weight:bold;border:1px solid #cbd5e1;padding:8px;text-align:left;">Kategori</th>
              <th style="background-color:#002B49;color:#ffffff;font-weight:bold;border:1px solid #cbd5e1;padding:8px;text-align:left;">Indikator Strategis</th>
              <th style="background-color:#002B49;color:#ffffff;font-weight:bold;border:1px solid #cbd5e1;padding:8px;text-align:left;">Satuan</th>
              ${yearsHeader}
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </body>
      </html>
    `;

    const blob = new Blob(['\uFEFF' + excelTemplate], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'DIKSI_1501_Kerinci_2018_2026.xls';
    a.click();
  });

  // Export Excel Data Inflasi
  document.getElementById('exportInflationExcelBtn')?.addEventListener('click', () => {
    const rowsHtml = INFLATION_MONTHLY_DATA.map(r => `
      <tr>
        <td style="border:1px solid #cbd5e1;padding:6px;font-weight:bold;text-align:center;">${r.tahun}</td>
        <td style="border:1px solid #cbd5e1;padding:6px;">${r.bulan}</td>
        <td style="border:1px solid #cbd5e1;padding:6px;text-align:right;">${r.yoy}</td>
        <td style="border:1px solid #cbd5e1;padding:6px;text-align:right;">${r.mtm}</td>
        <td style="border:1px solid #cbd5e1;padding:6px;text-align:right;">${r.ytd}</td>
      </tr>
    `).join('');

    const excelTemplate = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
      <head><meta charset="UTF-8"></head>
      <body>
        <table>
          <thead>
            <tr>
              <th colspan="5" style="font-size:13pt;font-weight:bold;text-align:left;padding:10px 6px;color:#002B49;">
                PERKEMBANGAN INFLASI BULANAN (YoY, MtM, YtD) TAHUN 2024 - 2026
              </th>
            </tr>
            <tr>
              <th style="background-color:#002B49;color:#ffffff;font-weight:bold;border:1px solid #cbd5e1;padding:8px;">Tahun</th>
              <th style="background-color:#002B49;color:#ffffff;font-weight:bold;border:1px solid #cbd5e1;padding:8px;">Bulan</th>
              <th style="background-color:#002B49;color:#ffffff;font-weight:bold;border:1px solid #cbd5e1;padding:8px;text-align:right;">YoY (%)</th>
              <th style="background-color:#002B49;color:#ffffff;font-weight:bold;border:1px solid #cbd5e1;padding:8px;text-align:right;">MtM (%)</th>
              <th style="background-color:#002B49;color:#ffffff;font-weight:bold;border:1px solid #cbd5e1;padding:8px;text-align:right;">YtD (%)</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </body>
      </html>
    `;

    const blob = new Blob(['\uFEFF' + excelTemplate], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'Data_Inflasi_2024_2026_DIKSI_1501.xls';
    a.click();
  });
}

function formatNum(val) {
  if (val === null || val === undefined || val === '') return '-';
  return Number(val).toLocaleString('id-ID', { maximumFractionDigits: 3 });
}