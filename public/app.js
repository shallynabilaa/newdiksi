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

// =====================================================================
// STATE
// =====================================================================
let dashboardData = FALLBACK_DATA;
let mainChartInstance = null;
let sectorChartInstance = null;
let currentIndicatorId = null;
let currentChartType = 'line';
let currentChartCategory = 'all';
let lastKnownTimestamp = null;
let usingFallback = false;

const FEATURED_HERO = ['penduduk', 'ipm', 'kemiskinan', 'tpt'];
const FEATURED_KPI = ['penduduk', 'tpt', 'kemiskinan', 'ipm', 'pdrb_growth', 'pdrb_adhb'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// =====================================================================
// UTIL
// =====================================================================
const $ = (id) => document.getElementById(id);
const isDark = () => document.documentElement.classList.contains('dark');

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function formatNum(val) {
  if (val === null || val === undefined || val === '') return '-';
  const n = Number(val);
  if (Number.isNaN(n)) return '-';
  return n.toLocaleString('id-ID', { maximumFractionDigits: 3 });
}

function icons() {
  if (window.lucide) window.lucide.createIcons();
}

function hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(hex || '');
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [0, 90, 156];
}

// Warna gelap (mis. navy) hampir tak terlihat pada mode gelap: campur dengan putih
function themedColor(hex) {
  const [r, g, b] = hexToRgb(hex);
  if (!isDark()) return hex;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (lum > 0.38) return hex;
  const t = 0.62;
  const mix = (c) => Math.round(c + (255 - c) * t);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function rgba(color, a) {
  if (color.startsWith('rgb(')) return color.replace('rgb(', 'rgba(').replace(')', `, ${a})`);
  const [r, g, b] = hexToRgb(color);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// Nilai & tahun terakhir yang tidak kosong
function getLatestValidData(item) {
  for (let i = item.values.length - 1; i >= 0; i--) {
    const v = item.values[i];
    if (v !== null && v !== undefined && v !== '') return { value: v, year: dashboardData.years[i], index: i };
  }
  return { value: null, year: '-', index: -1 };
}

// =====================================================================
// BOOT
// =====================================================================
document.addEventListener('DOMContentLoaded', async () => {
  syncThemeButton();
  setupEvents();
  setupNavSpy();
  icons();
  await loadDashboardData();

  // Auto-sync: pembaruan dari Admin langsung tampil di web publik
  setInterval(() => { if (!document.hidden) checkForUpdates(); }, 10000);
});

async function fetchDashboard() {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch('/api/dashboard', { signal: ctrl.signal, cache: 'no-store' });
    if (!res.ok) throw new Error('API merespons ' + res.status);
    const data = await res.json();
    if (!data || !Array.isArray(data.indicators) || !Array.isArray(data.years)) throw new Error('Format data tidak valid');
    return data;
  } finally {
    clearTimeout(timer);
  }
}

async function loadDashboardData() {
  try {
    dashboardData = await fetchDashboard();
    usingFallback = false;
    showBanner(null);
  } catch (err) {
    console.warn('Menggunakan data cadangan lokal:', err.message);
    dashboardData = FALLBACK_DATA;
    usingFallback = true;
    showBanner('Server data belum merespons. Menampilkan data cadangan (' + FALLBACK_DATA.lastUpdated + ').');
  }

  lastKnownTimestamp = dashboardData.lastUpdated;
  $('lastUpdatedBadge').textContent = dashboardData.lastUpdated || '-';

  if (dashboardData.indicators.length > 0) {
    currentIndicatorId = dashboardData.indicators[0].id;
    currentChartType = dashboardData.indicators[0].chart_type || 'line';
  }
  renderAll(false);
}

async function checkForUpdates() {
  try {
    const fresh = await fetchDashboard();
    if (usingFallback) {
      // Server pulih: ganti data cadangan dengan data asli
      dashboardData = fresh;
      usingFallback = false;
      lastKnownTimestamp = fresh.lastUpdated;
      showBanner(null);
      $('lastUpdatedBadge').textContent = fresh.lastUpdated || '-';
      if (!dashboardData.indicators.some((i) => i.id === currentIndicatorId)) currentIndicatorId = dashboardData.indicators[0]?.id || null;
      renderAll(true);
      return;
    }
    if (lastKnownTimestamp && fresh.lastUpdated !== lastKnownTimestamp) {
      dashboardData = fresh;
      lastKnownTimestamp = fresh.lastUpdated;
      $('lastUpdatedBadge').textContent = fresh.lastUpdated || '-';
      if (!dashboardData.indicators.some((i) => i.id === currentIndicatorId)) currentIndicatorId = dashboardData.indicators[0]?.id || null;
      renderAll(true);
    }
  } catch (_) { /* diam: coba lagi pada interval berikutnya */ }
}

function showBanner(text) {
  const el = $('apiBanner');
  if (!text) { el.hidden = true; return; }
  $('apiBannerText').textContent = text;
  el.hidden = false;
}

function renderAll(keepSelection = false) {
  renderHeroHighlights();
  renderKpiCards();
  populateSelectors(keepSelection);
  renderMainChart();
  renderSectorChart();
  renderTable();
  icons();
}

// =====================================================================
// HERO + KPI
// =====================================================================
function pickFeatured(ids, fallbackCount) {
  let list = ids.map((id) => dashboardData.indicators.find((i) => i.id === id)).filter(Boolean);
  if (list.length < Math.min(ids.length, fallbackCount)) list = dashboardData.indicators.slice(0, fallbackCount);
  return list;
}

function renderHeroHighlights() {
  const container = $('heroHighlights');
  const list = pickFeatured(FEATURED_HERO, 4);
  if (list.length === 0) {
    container.innerHTML = '<p class="stat-unit" style="grid-column:1/-1">Belum ada indikator.</p>';
    return;
  }
  container.innerHTML = list.map((item) => {
    const latest = getLatestValidData(item);
    return `
      <div class="stat">
        <p class="stat-label" title="${esc(item.nama)}">${esc(item.nama)}</p>
        <p class="stat-value">${formatNum(latest.value)}</p>
        <p class="stat-unit">${esc(item.satuan)} &bull; ${esc(latest.year)}</p>
      </div>`;
  }).join('');
}

function sparkline(item) {
  const pts = item.values.map((v, i) => ({ v: v === null || v === undefined || v === '' ? null : Number(v), i })).filter((p) => p.v !== null && !Number.isNaN(p.v));
  if (pts.length < 2) return '';
  const min = Math.min(...pts.map((p) => p.v));
  const max = Math.max(...pts.map((p) => p.v));
  const span = max - min || 1;
  const first = pts[0].i;
  const n = (pts[pts.length - 1].i - first) || 1;
  const x = (i) => (((i - first) / n) * 100).toFixed(2);
  const y = (v) => (30 - ((v - min) / span) * 26).toFixed(2);
  const d = pts.map((p, k) => `${k ? 'L' : 'M'}${x(p.i)} ${y(p.v)}`).join(' ');
  const area = `${d} L${x(pts[pts.length - 1].i)} 34 L${x(pts[0].i)} 34 Z`;
  const color = themedColor(item.color || '#005A9C');
  return `<svg class="spark" viewBox="0 0 100 34" preserveAspectRatio="none" style="color:${color}" aria-hidden="true" focusable="false">
      <path class="spark-area" d="${area}"/>
      <path d="${d}" stroke="${color}"/>
    </svg>`;
}

function deltaIcon(text) {
  const t = String(text || '').trim();
  if (t.startsWith('+')) return 'trending-up';
  if (t.startsWith('-') || t.startsWith('−')) return 'trending-down';
  return 'minus';
}

function renderKpiCards() {
  const container = $('kpiGrid');
  const list = pickFeatured(FEATURED_KPI, 6);
  if (list.length === 0) {
    container.innerHTML = `<div class="state card" style="grid-column:1/-1"><i data-lucide="inbox"></i><strong>Belum ada indikator</strong><p>Admin dapat menambahkan indikator melalui panel admin.</p></div>`;
    return;
  }
  container.innerHTML = list.map((item) => {
    const latest = getLatestValidData(item);
    return `
      <a href="#visualisasi" class="kpi" data-id="${esc(item.id)}" aria-label="${esc(item.nama)}: ${formatNum(latest.value)} ${esc(item.satuan)} (${esc(latest.year)}). Lihat grafik">
        <div class="kpi-top">
          <span class="kpi-cat">${esc(item.kategori)}</span>
          <span class="kpi-year">${esc(latest.year)}</span>
        </div>
        <h3 class="kpi-name">${esc(item.nama)}</h3>
        <div class="kpi-value"><strong>${formatNum(latest.value)}</strong><span>${esc(item.satuan)}</span></div>
        ${sparkline(item)}
        <div class="kpi-foot">
          <span class="delta"><i data-lucide="${deltaIcon(item.delta)}" class="icon icon-sm"></i><span>${esc(item.delta)}</span></span>
          <span class="kpi-link">Lihat grafik <i data-lucide="arrow-right" class="icon icon-sm"></i></span>
        </div>
      </a>`;
  }).join('');
}

// =====================================================================
// SELECTORS & CHART
// =====================================================================
function visibleIndicators() {
  return dashboardData.indicators.filter((i) => currentChartCategory === 'all' || i.kategori === currentChartCategory);
}

function populateSelectors(keepSelection) {
  const categories = [...new Set(dashboardData.indicators.map((i) => i.kategori))];
  if (currentChartCategory !== 'all' && !categories.includes(currentChartCategory)) currentChartCategory = 'all';

  // chips kategori (grafik)
  $('categoryChips').innerHTML = ['all', ...categories].map((c) => `
    <button type="button" class="chip" data-cat="${esc(c)}" aria-pressed="${c === currentChartCategory}">${c === 'all' ? 'Semua' : esc(c)}</button>`).join('');

  fillIndicatorSelect();

  // filter kategori tabel
  const catFilter = $('tableCategoryFilter');
  const prev = catFilter.value;
  catFilter.innerHTML = `<option value="all">Semua Kategori (${dashboardData.indicators.length})</option>` +
    categories.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
  if (keepSelection && categories.includes(prev)) catFilter.value = prev;
}

function fillIndicatorSelect() {
  const sel = $('chartIndicatorSelect');
  const list = visibleIndicators();
  sel.innerHTML = list.map((i) => `<option value="${esc(i.id)}">${currentChartCategory === 'all' ? '[' + esc(i.kategori) + '] ' : ''}${esc(i.nama)}</option>`).join('');
  if (list.some((i) => i.id === currentIndicatorId)) sel.value = currentIndicatorId;
  else if (list.length) { currentIndicatorId = list[0].id; sel.value = currentIndicatorId; }
}

function syncChartTypeButtons() {
  $('btnLineChart').setAttribute('aria-pressed', String(currentChartType !== 'bar'));
  $('btnBarChart').setAttribute('aria-pressed', String(currentChartType === 'bar'));
}

function chartState(boxId, canvasId, html) {
  const box = $(boxId);
  let st = box.querySelector('.state');
  if (!html) { if (st) st.remove(); $(canvasId).style.display = ''; return; }
  $(canvasId).style.display = 'none';
  if (!st) { st = document.createElement('div'); st.className = 'state error'; box.appendChild(st); }
  st.innerHTML = html;
  icons();
}

function chartDefaults() {
  return {
    font: { family: "'Inter', system-ui, sans-serif", size: 12 },
    tick: cssVar('--chart-tick'),
    grid: cssVar('--chart-grid'),
    surface: cssVar('--surface'),
    text: cssVar('--text')
  };
}

function renderMainChart() {
  const item = dashboardData.indicators.find((i) => i.id === currentIndicatorId);
  const canvas = $('mainTrendChart');

  if (!item) {
    $('chartTitle').textContent = 'Belum ada indikator';
    $('chartSubtitle').textContent = '';
    $('chartInsight').textContent = '';
    $('metaLatest').textContent = $('metaYear').textContent = $('metaDelta').textContent = '-';
    if (mainChartInstance) { mainChartInstance.destroy(); mainChartInstance = null; }
    chartState('mainChartBox', 'mainTrendChart', '<i data-lucide="inbox"></i><strong>Belum ada data untuk ditampilkan</strong><p>Tambahkan indikator melalui panel admin, lalu muat ulang halaman.</p>');
    return;
  }

  const latest = getLatestValidData(item);
  $('chartTitle').textContent = item.nama;
  $('chartSubtitle').textContent = `Kategori: ${item.kategori} • Satuan: ${item.satuan}`;
  $('chartInsight').textContent = item.insight || 'Data resmi Badan Pusat Statistik Kabupaten Kerinci.';
  $('metaLatest').textContent = latest.value === null ? '-' : `${formatNum(latest.value)} ${item.satuan}`;
  $('metaYear').textContent = latest.year;
  $('metaDelta').textContent = item.delta || '-';
  syncChartTypeButtons();

  if (typeof Chart === 'undefined') {
    chartState('mainChartBox', 'mainTrendChart', '<i data-lucide="triangle-alert"></i><strong>Grafik tidak dapat dimuat</strong><p>Pustaka grafik gagal diunduh. Periksa koneksi internet, lalu muat ulang.</p><button type="button" class="btn btn-ghost btn-sm" onclick="location.reload()">Muat ulang</button>');
    return;
  }
  chartState('mainChartBox', 'mainTrendChart', null);

  const d = chartDefaults();
  const color = themedColor(item.color || '#005A9C');
  const isLine = currentChartType === 'line';
  if (mainChartInstance) mainChartInstance.destroy();

  mainChartInstance = new Chart(canvas.getContext('2d'), {
    type: currentChartType,
    data: {
      labels: dashboardData.years,
      datasets: [{
        label: item.nama,
        data: item.values,
        borderColor: color,
        backgroundColor: (ctx) => {
          if (!isLine) return rgba(color, 0.85);
          const { chart } = ctx;
          if (!chart.chartArea) return rgba(color, 0.15);
          const g = chart.ctx.createLinearGradient(0, chart.chartArea.top, 0, chart.chartArea.bottom);
          g.addColorStop(0, rgba(color, 0.32));
          g.addColorStop(1, rgba(color, 0));
          return g;
        },
        borderWidth: isLine ? 3 : 0,
        fill: isLine,
        tension: 0.35,
        spanGaps: true,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: color,
        pointBorderColor: d.surface,
        pointBorderWidth: 2,
        borderRadius: isLine ? 0 : 8,
        maxBarThickness: 56
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: reduceMotion ? false : { duration: 700, easing: 'easeOutQuart' },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isDark() ? '#1B3A55' : '#002B49',
          titleColor: '#fff', bodyColor: '#E7EFF6', padding: 12, cornerRadius: 10, displayColors: false,
          titleFont: { family: d.font.family, weight: '600' }, bodyFont: { family: d.font.family },
          callbacks: {
            title: (items) => `Tahun ${items[0].label}`,
            label: (c) => c.parsed.y === null ? 'Data belum tersedia' : `${formatNum(c.parsed.y)} ${item.satuan}`
          }
        }
      },
      scales: {
        x: { grid: { display: false }, border: { color: d.grid }, ticks: { color: d.tick, font: d.font } },
        y: {
          beginAtZero: !isLine,
          grid: { color: d.grid },
          border: { display: false },
          ticks: { color: d.tick, font: d.font, maxTicksLimit: 6, callback: (v) => Number(v).toLocaleString('id-ID', { maximumFractionDigits: 2 }) }
        }
      }
    }
  });
}

function renderSectorChart() {
  const sectors = Array.isArray(dashboardData.sectors) ? dashboardData.sectors : [];
  const legendEl = $('sectorLegend');

  if (sectors.length === 0) {
    if (sectorChartInstance) { sectorChartInstance.destroy(); sectorChartInstance = null; }
    chartState('sectorChartBox', 'sectorChart', '<i data-lucide="inbox"></i><strong>Data sektor belum tersedia</strong><p>Admin dapat mengisinya di panel admin.</p>');
    legendEl.innerHTML = '';
    return;
  }
  if (typeof Chart === 'undefined') {
    chartState('sectorChartBox', 'sectorChart', '<i data-lucide="triangle-alert"></i><strong>Grafik tidak dapat dimuat</strong><p>Muat ulang halaman untuk mencoba lagi.</p>');
    legendEl.innerHTML = '';
  } else {
    chartState('sectorChartBox', 'sectorChart', null);
    const d = chartDefaults();
    if (sectorChartInstance) sectorChartInstance.destroy();
    sectorChartInstance = new Chart($('sectorChart').getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: sectors.map((s) => s.label),
        datasets: [{ data: sectors.map((s) => s.value), backgroundColor: sectors.map((s) => s.color), borderColor: d.surface, borderWidth: 3, hoverOffset: 6 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '68%',
        animation: reduceMotion ? false : { duration: 700 },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: isDark() ? '#1B3A55' : '#002B49', padding: 10, cornerRadius: 10,
            callbacks: { label: (c) => ` ${c.label}: ${formatNum(c.parsed)}%` }
          }
        }
      }
    });
  }

  legendEl.innerHTML = sectors.map((s) => `
    <div class="legend-row">
      <span class="legend-dot" style="background:${esc(s.color)}"></span>
      <span>${esc(s.label)}</span>
      <strong>${formatNum(s.value)}%</strong>
    </div>`).join('');
}

// =====================================================================
// TABLE
// =====================================================================
function renderTable() {
  const thead = $('dataTableHead');
  const tbody = $('dataTableBody');
  const q = ($('tableSearch').value || '').trim().toLowerCase();
  const cat = $('tableCategoryFilter').value || 'all';
  const years = dashboardData.years;

  thead.innerHTML = `
    <tr>
      <th scope="col">Kategori</th>
      <th scope="col" class="name-h">Indikator strategis (satuan)</th>
      ${years.map((y) => `<th scope="col" class="r">${esc(y)}</th>`).join('')}
    </tr>`;

  const filtered = dashboardData.indicators.filter((item) => {
    const okCat = cat === 'all' || item.kategori === cat;
    const okText = item.nama.toLowerCase().includes(q) || item.kategori.toLowerCase().includes(q);
    return okCat && okText;
  });

  $('tableCount').textContent = `Menampilkan ${filtered.length} dari ${dashboardData.indicators.length} indikator`;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${years.length + 2}"><div class="state"><i data-lucide="search"></i><strong>Tidak ada indikator yang cocok</strong><p>Ubah kata kunci atau pilih kategori lain.</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((item) => `
    <tr data-id="${esc(item.id)}">
      <td><span class="tag">${esc(item.kategori)}</span></td>
      <td class="name-cell"><button type="button" class="link-btn" data-id="${esc(item.id)}">${esc(item.nama)}</button><span class="unit">${esc(item.satuan)}</span></td>
      ${years.map((_, i) => {
        const v = item.values[i];
        const empty = v === null || v === undefined || v === '';
        return `<td class="r${empty ? ' empty' : ''}">${empty ? '–' : formatNum(v)}</td>`;
      }).join('')}
    </tr>`).join('');
}

// =====================================================================
// INTERACTIONS
// =====================================================================
function focusIndicator(id) {
  const item = dashboardData.indicators.find((i) => i.id === id);
  if (!item) return;
  currentIndicatorId = id;
  currentChartType = item.chart_type || 'line';
  if (currentChartCategory !== 'all' && item.kategori !== currentChartCategory) {
    currentChartCategory = 'all';
    populateSelectors(true);
  } else {
    fillIndicatorSelect();
  }
  $('chartIndicatorSelect').value = id;
  renderMainChart();
  icons();
  $('visualisasi').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
}
window.focusIndicator = focusIndicator;

function syncThemeButton() {
  const btn = $('themeToggle');
  btn.setAttribute('aria-label', isDark() ? 'Beralih ke mode terang' : 'Beralih ke mode gelap');
}

function setupEvents() {
  $('themeToggle').addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('diksi_theme', dark ? 'dark' : 'light'); } catch (_) {}
    syncThemeButton();
    renderKpiCards();
    renderMainChart();
    renderSectorChart();
    icons();
  });

  const menuBtn = $('menuBtn');
  const mobileNav = $('mobileNav');
  const closeMenu = () => {
    mobileNav.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Buka menu');
  };
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  });
  mobileNav.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuBtn.focus(); } });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (m) => { if (m.matches) closeMenu(); });

  $('retryBtn').addEventListener('click', async () => {
    showBanner('Menghubungi server…');
    await loadDashboardData();
  });

  $('kpiGrid').addEventListener('click', (e) => {
    const card = e.target.closest('.kpi[data-id]');
    if (!card) return;
    e.preventDefault();
    focusIndicator(card.dataset.id);
  });

  $('dataTableBody').addEventListener('click', (e) => {
    const row = e.target.closest('tr[data-id]');
    if (row) focusIndicator(row.dataset.id);
  });

  $('categoryChips').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    currentChartCategory = chip.dataset.cat;
    document.querySelectorAll('#categoryChips .chip').forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    fillIndicatorSelect();
    const item = dashboardData.indicators.find((i) => i.id === currentIndicatorId);
    if (item) currentChartType = item.chart_type || 'line';
    renderMainChart();
  });

  $('chartIndicatorSelect').addEventListener('change', (e) => {
    const item = dashboardData.indicators.find((i) => i.id === e.target.value);
    currentIndicatorId = e.target.value;
    if (item && item.chart_type) currentChartType = item.chart_type;
    renderMainChart();
  });

  $('btnLineChart').addEventListener('click', () => { currentChartType = 'line'; renderMainChart(); });
  $('btnBarChart').addEventListener('click', () => { currentChartType = 'bar'; renderMainChart(); });

  $('tableSearch').addEventListener('input', renderTable);
  $('tableCategoryFilter').addEventListener('change', () => { renderTable(); icons(); });

  $('exportCsvBtn').addEventListener('click', () => {
    const cell = (s) => `"${String(s ?? '').replace(/"/g, '""')}"`;
    const lines = [
      ['Kategori', 'Indikator', 'Satuan', ...dashboardData.years].map(cell).join(';'),
      ...dashboardData.indicators.map((i) => [
        cell(i.kategori), cell(i.nama), cell(i.satuan),
        ...i.values.map((v) => (v === null || v === undefined ? '' : v))
      ].join(';'))
    ];
    const blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DIKSI_1501_Kerinci_' + dashboardData.years[0] + '_' + dashboardData.years[dashboardData.years.length - 1] + '.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
}

// Tandai tautan navigasi sesuai bagian yang sedang terlihat
function setupNavSpy() {
  const links = [...document.querySelectorAll('.nav a, .mobile-nav a[href^="#"]')];
  const sections = ['home', 'indikator', 'visualisasi', 'tabel-data', 'layanan'].map((id) => $(id)).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      links.forEach((a) => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + id)));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => io.observe(s));
}
