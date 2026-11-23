const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

const ADMIN_USERNAME = process.env.ADMIN_USER || 'admin1501';
const ADMIN_PASSWORD = process.env.ADMIN_PASS || 'bpskerinci1501';
const activeTokens = new Set();

app.use(express.json({ limit: '5mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const dataDir = process.env.VERCEL ? '/tmp/data' : path.join(__dirname, 'data');
const dbFile = path.join(dataDir, 'diksi_1501.json');

const INITIAL_DB = {
  lastUpdated: '23 Nov 2026',
  years: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
  indicators: [
    // 1. KEPENDUDUKAN
    { id: 'penduduk', kategori: 'Kependudukan', nama: 'Jumlah Penduduk', satuan: 'Jiwa', delta: '+1.500 jiwa dibanding 2024', chart_type: 'bar', color: '#002B49', insight: 'Jumlah penduduk Kabupaten Kerinci terus bertumbuh dari 237.791 jiwa (2018) menjadi 258.200 jiwa (2025).', values: [237791, 238882, 250259, 251911, 253863, 255796, 256700, 258200, null] },
    { id: 'penduduk_laki', kategori: 'Kependudukan', nama: 'Jumlah Penduduk Laki-laki', satuan: 'Jiwa', delta: '+725 jiwa dibanding 2023', chart_type: 'bar', color: '#005A9C', insight: 'Penduduk laki-laki Kabupaten Kerinci mencapai 128.734 jiwa pada tahun 2024.', values: [118656, 119196, 125647, 126371, 127245, 128009, 128734, null, null] },
    { id: 'penduduk_perempuan', kategori: 'Kependudukan', nama: 'Jumlah Penduduk Perempuan', satuan: 'Jiwa', delta: '+655 jiwa dibanding 2023', chart_type: 'bar', color: '#0093DD', insight: 'Penduduk perempuan Kabupaten Kerinci mencapai 127.966 jiwa pada tahun 2024.', values: [119135, 119686, 124612, 125540, 126618, 127787, 127966, null, null] },
    { id: 'rasio_jk', kategori: 'Kependudukan', nama: 'Rasio Jenis Kelamin (Sex Ratio)', satuan: 'Persen', delta: '100,50% pada tahun 2025', chart_type: 'line', color: '#0284C7', insight: 'Rasio jenis kelamin sebesar 100,50 menunjukkan terdapat sekitar 100-101 penduduk laki-laki per 100 penduduk perempuan.', values: [99.60, 99.80, 100.80, 100.70, 100.50, 100.70, 100.60, 100.50, null] },
    { id: 'ikg', kategori: 'Kependudukan', nama: 'Indeks Ketimpangan Gender (IKG)', satuan: 'Indeks', delta: '-0,03 poin dibanding 2023 (Membaik)', chart_type: 'line', color: '#68B92E', insight: 'Penurunan Indeks Ketimpangan Gender hingga 0,43 (2024) menunjukkan kesetaraan gender di Kerinci semakin membaik.', values: [0.51, 0.59, 0.59, 0.57, 0.57, 0.46, 0.43, null, null] },
    { id: 'gini_rasio', kategori: 'Kependudukan', nama: 'Gini Rasio', satuan: 'Indeks', delta: '0,287 pada tahun 2025', chart_type: 'line', color: '#F58220', insight: 'Gini rasio Kabupaten Kerinci terjaga rendah di bawah 0,30, menandakan ketimpangan pengeluaran penduduk tergolong rendah.', values: [0.32, 0.29, 0.28, 0.28, 0.28, 0.30, 0.29, 0.287, null] },
    { id: 'lpp', kategori: 'Kependudukan', nama: 'Laju Pertumbuhan Penduduk', satuan: 'Persen', delta: '0,64% pada tahun 2025', chart_type: 'line', color: '#005A9C', insight: 'Laju pertumbuhan penduduk Kabupaten Kerinci berada pada kisaran 0,60% hingga 0,64%.', values: [0.43, 0.40, 0.87, 0.49, 0.82, 0.70, 0.60, 0.64, null] },
    // 2. KETENAGAKERJAAN
    { id: 'tpak', kategori: 'Ketenagakerjaan', nama: 'Tingkat Partisipasi Angkatan Kerja (TPAK)', satuan: 'Persen', delta: '74,77% pada tahun 2025', chart_type: 'line', color: '#005A9C', insight: 'TPAK Kabupaten Kerinci mencapai 74,77% pada tahun 2025.', values: [71.14, 66.26, 69.55, 70.90, 73.53, 71.89, 77.64, 74.77, null] },
    { id: 'tpt', kategori: 'Ketenagakerjaan', nama: 'Tingkat Pengangguran Terbuka (TPT)', satuan: 'Persen', delta: '-0,09 poin persen dibanding 2024', chart_type: 'line', color: '#0093DD', insight: 'Tingkat Pengangguran Terbuka (TPT) Kabupaten Kerinci turun menjadi 2,42% pada tahun 2025.', values: [2.74, 2.63, 2.43, 2.32, 2.61, 2.48, 2.51, 2.42, null] },
    { id: 'rasio_ketergantungan', kategori: 'Ketenagakerjaan', nama: 'Rasio Ketergantungan', satuan: 'Persen', delta: '44,96% pada tahun 2022', chart_type: 'line', color: '#0284C7', insight: 'Rasio ketergantungan penduduk usia non-produktif terhadap penduduk usia produktif berada di kisaran 44-46%.', values: [46.66, 44.47, 46.01, 46.06, 44.96, null, null, null, null] },
    { id: 'penduduk_bekerja', kategori: 'Ketenagakerjaan', nama: 'Penduduk Bekerja', satuan: 'Jiwa', delta: '144.986 jiwa pada tahun 2025', chart_type: 'bar', color: '#68B92E', insight: 'Jumlah penduduk Kabupaten Kerinci yang bekerja mencapai 144.986 jiwa pada tahun 2025.', values: [125009, 118000, 127187, 130965, 136320, 137302, 149363, 144986, null] },
    { id: 'pengangguran', kategori: 'Ketenagakerjaan', nama: 'Jumlah Pengangguran', satuan: 'Jiwa', delta: '-261 jiwa dibanding 2024', chart_type: 'bar', color: '#F58220', insight: 'Jumlah pengangguran terbuka di Kabupaten Kerinci berkurang menjadi 3.590 jiwa pada tahun 2025.', values: [3595, 3236, 3167, 3107, 3677, 3485, 3851, 3590, null] },
    { id: 'angkatan_kerja', kategori: 'Ketenagakerjaan', nama: 'Jumlah Angkatan Kerja', satuan: 'Jiwa', delta: '148.576 jiwa pada tahun 2025', chart_type: 'bar', color: '#002B49', insight: 'Total angkatan kerja di Kabupaten Kerinci mencapai 148.576 jiwa pada tahun 2025.', values: [131048, 123186, 130354, 134072, 139997, 140787, 153214, 148576, null] },
    { id: 'bukan_angkatan_kerja', kategori: 'Ketenagakerjaan', nama: 'Bukan Angkatan Kerja', satuan: 'Jiwa', delta: '50.293 jiwa pada tahun 2025', chart_type: 'bar', color: '#64748B', insight: 'Penduduk usia kerja yang termasuk kategori bukan angkatan kerja sebanyak 50.293 jiwa.', values: [53153, 62738, 57073, 55031, 50309, 55062, 44115, 50293, null] },
    // 3. KEMISKINAN
    { id: 'garis_kemiskinan', kategori: 'Kemiskinan', nama: 'Garis Kemiskinan', satuan: 'Rp/Kapita/Bulan', delta: '+Rp 3.816 dibanding 2025', chart_type: 'bar', color: '#D97706', insight: 'Garis kemiskinan Kabupaten Kerinci meningkat dari Rp 617.362 (2025) menjadi Rp 621.178/kapita/bulan (2026).', values: [333978, 356059, 385571, 396168, 443400, 485838, 606095, 617362, 621178] },
    { id: 'kemiskinan', kategori: 'Kemiskinan', nama: 'Persentase Penduduk Miskin (P0)', satuan: 'Persen', delta: '8,00% pada tahun 2026', chart_type: 'line', color: '#F58220', insight: 'Persentase penduduk miskin Kabupaten Kerinci tercatat sebesar 7,48% pada 2025 dan 8,00% pada 2026.', values: [7.07, 7.13, 7.30, 7.71, 7.57, 7.54, 6.93, 7.48, 8.00] },
    { id: 'indeks_kedalaman_p1', kategori: 'Kemiskinan', nama: 'Indeks Kedalaman Kemiskinan (P1)', satuan: 'Poin', delta: '1,17 poin pada tahun 2026', chart_type: 'line', color: '#F59E0B', insight: 'Indeks Kedalaman Kemiskinan (P1) mengukur rata-rata kesenjangan pengeluaran penduduk miskin terhadap garis kemiskinan.', values: [0.72, 0.59, 1.05, 0.81, 1.22, 1.08, 1.00, 0.79, 1.17] },
    { id: 'indeks_keparahan_p2', kategori: 'Kemiskinan', nama: 'Indeks Keparahan Kemiskinan (P2)', satuan: 'Poin', delta: '0,26 poin pada tahun 2026', chart_type: 'line', color: '#B45309', insight: 'Indeks Keparahan Kemiskinan (P2) memberikan gambaran mengenai penyebaran pengeluaran di antara penduduk miskin.', values: [0.13, 0.10, 0.21, 0.15, 0.31, 0.27, 0.24, 0.14, 0.26] },
    { id: 'jumlah_miskin', kategori: 'Kemiskinan', nama: 'Jumlah Penduduk Miskin', satuan: 'Ribu Jiwa', delta: '19,87 ribu jiwa pada tahun 2026', chart_type: 'bar', color: '#EA580C', insight: 'Jumlah penduduk miskin di Kabupaten Kerinci tercatat sebanyak 18,28 ribu jiwa (2025) dan 19,87 ribu jiwa (2026).', values: [16.79, 17.00, 17.48, 18.45, 18.20, 18.21, 16.85, 18.28, 19.87] },
    // 4. IPM & PENDIDIKAN
    { id: 'uhh', kategori: 'IPM', nama: 'Umur Harapan Hidup (UHH)', satuan: 'Tahun', delta: '+0,19 tahun (73,85 th di 2026)', chart_type: 'line', color: '#0093DD', insight: 'Umur Harapan Hidup saat lahir penduduk Kabupaten Kerinci terus meningkat mencapai 73,85 tahun pada tahun 2026.', values: [69.65, 69.82, 72.64, 72.70, 72.94, 73.18, 73.39, 73.66, 73.85] },
    { id: 'rls', kategori: 'IPM', nama: 'Rata-rata Lama Sekolah (RLS)', satuan: 'Tahun', delta: '+0,05 tahun (8,81 th di 2026)', chart_type: 'line', color: '#0284C7', insight: 'Rata-rata Lama Sekolah penduduk usia 25 tahun ke atas meningkat menjadi 8,81 tahun pada 2026.', values: [8.20, 8.21, 8.55, 8.56, 8.57, 8.59, 8.60, 8.76, 8.81] },
    { id: 'pengeluaran_kapita', kategori: 'IPM', nama: 'Pengeluaran per Kapita Disesuaikan', satuan: 'Ribu Rupiah', delta: '+Rp 347 ribu (11.997 ribu di 2026)', chart_type: 'bar', color: '#002B49', insight: 'Pengeluaran riil per kapita disesuaikan mencapai Rp 11.997 ribu per tahun pada 2026.', values: [9961, 10198, 9995, 10184, 10570, 10965, 11441, 11650, 11997] },
    { id: 'ipm', kategori: 'IPM', nama: 'Indeks Pembangunan Manusia (IPM)', satuan: 'Poin', delta: '+0,59 poin (75,69 di 2026)', chart_type: 'line', color: '#005A9C', insight: 'IPM Kabupaten Kerinci meningkat konsisten dari 70,59 (2018) hingga mencapai 75,69 pada tahun 2026 (Kategori Tinggi).', values: [70.59, 70.95, 72.47, 72.72, 73.24, 73.77, 74.33, 75.10, 75.69] },
    { id: 'hls', kategori: 'IPM', nama: 'Harapan Lama Sekolah (HLS)', satuan: 'Tahun', delta: '+0,06 tahun (14,24 th di 2026)', chart_type: 'line', color: '#68B92E', insight: 'Harapan Lama Sekolah anak usia 7 tahun di Kabupaten Kerinci mencapai 14,24 tahun pada 2026.', values: [13.85, 13.86, 13.87, 13.88, 13.89, 13.91, 13.92, 14.18, 14.24] },
    { id: 'aps_7_12', kategori: 'Pendidikan (APS)', nama: 'Angka Partisipasi Sekolah (APS) 7-12 Tahun', satuan: 'Persen', delta: '99,27% pada tahun 2023', chart_type: 'line', color: '#005A9C', insight: 'Partisipasi sekolah kelompok umur 7-12 tahun (jenjang SD/sederajat) sangat tinggi di atas 99%.', values: [99.70, 99.75, 99.70, 99.40, 99.70, 99.27, null, null, null] },
    { id: 'aps_13_15', kategori: 'Pendidikan (APS)', nama: 'Angka Partisipasi Sekolah (APS) 13-15 Tahun', satuan: 'Persen', delta: '93,51% pada tahun 2023', chart_type: 'line', color: '#0093DD', insight: 'Partisipasi sekolah kelompok umur 13-15 tahun (jenjang SMP/sederajat) berada di kisaran 93,51% - 98,18%.', values: [98.09, 98.18, 97.41, 97.63, 93.71, 93.51, null, null, null] },
    { id: 'aps_16_18', kategori: 'Pendidikan (APS)', nama: 'Angka Partisipasi Sekolah (APS) 16-18 Tahun', satuan: 'Persen', delta: '73,46% pada tahun 2023', chart_type: 'line', color: '#68B92E', insight: 'Partisipasi sekolah kelompok umur 16-18 tahun (jenjang SMA/sederajat) sebesar 73,46% pada tahun 2023.', values: [77.25, 79.20, 78.05, 78.48, 71.84, 73.46, null, null, null] },
    // 5. PDRB
    { id: 'pdrb_growth', kategori: 'PDRB', nama: 'Pertumbuhan Ekonomi', satuan: 'Persen', delta: '4,57% pada tahun 2024', chart_type: 'bar', color: '#68B92E', insight: 'Pertumbuhan ekonomi Kabupaten Kerinci tetap solid di angka 4,57% pada tahun 2024.', values: [4.93, 4.23, 3.81, 3.69, 5.12, 4.66, 4.57, null, null] },
    { id: 'pdrb_perkapita', kategori: 'PDRB', nama: 'PDRB ADHB Per Kapita', satuan: 'Juta Rupiah', delta: '+Rp 3,95 Juta dibanding 2024', chart_type: 'line', color: '#002B49', insight: 'PDRB per kapita Atas Dasar Harga Berlaku Kabupaten Kerinci meningkat menjadi Rp 61,25 juta pada tahun 2025.', values: [39.56, 41.53, 41.80, 44.61, 48.16, 52.43, 57.30, 61.25, null] },
    { id: 'pdrb_adhb', kategori: 'PDRB', nama: 'PDRB Atas Dasar Harga Berlaku (ADHB)', satuan: 'Miliar Rupiah', delta: '+Rp 1.100,20 Miliar dibanding 2024', chart_type: 'bar', color: '#005A9C', insight: 'Nilai PDRB ADHB Kabupaten Kerinci meningkat dari Rp 14.710,03 miliar (2024) menjadi Rp 15.810,23 miliar (2025).', values: [9400.04, 9912.47, 10460.27, 11237.96, 12225.79, 13400.01, 14710.03, 15810.23, null] },
    { id: 'pdrb_adhk', kategori: 'PDRB', nama: 'PDRB Atas Dasar Harga Konstan (ADHK)', satuan: 'Miliar Rupiah', delta: '+Rp 363,34 Miliar dibanding 2024', chart_type: 'bar', color: '#0093DD', insight: 'Nilai PDRB ADHK 2010 Kabupaten Kerinci meningkat dari Rp 7.877,89 miliar (2024) menjadi Rp 8.241,23 miliar (2025).', values: [6089.60, 6336.54, 6567.28, 6822.79, 7125.01, 7500.03, 7877.89, 8241.23, null] }
  ],
  sectors: [
    { label: 'Pertanian, Kehutanan & Perikanan', value: 48.60, color: '#68B92E' },
    { label: 'Perdagangan Besar & Eceran', value: 14.25, color: '#005A9C' },
    { label: 'Konstruksi', value: 9.80, color: '#0093DD' },
    { label: 'Administrasi Pemerintahan', value: 8.45, color: '#F58220' },
    { label: 'Lapangan Usaha Lainnya', value: 18.90, color: '#94a3b8' }
  ],
  pdrbTriwulanan: [
    // ADHB Lapangan Usaha (2022 - 2025)
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2022', periode: 'Triwulan I', nilai: 2912.86 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2022', periode: 'Triwulan II', nilai: 3004.62 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2022', periode: 'Triwulan III', nilai: 3102.61 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2022', periode: 'Triwulan IV', nilai: 3205.70 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2022', periode: 'Jumlah', nilai: 12225.79 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2023', periode: 'Triwulan I', nilai: 3175.01 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2023', periode: 'Triwulan II', nilai: 3354.41 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2023', periode: 'Triwulan III', nilai: 3413.65 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2023', periode: 'Triwulan IV', nilai: 3464.94 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2023', periode: 'Jumlah', nilai: 13408.01 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2024', periode: 'Triwulan I', nilai: 3419.66 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2024', periode: 'Triwulan II', nilai: 3694.59 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2024', periode: 'Triwulan III', nilai: 3772.46 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2024', periode: 'Triwulan IV', nilai: 3823.30 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2024', periode: 'Jumlah', nilai: 14710.02 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2025', periode: 'Triwulan I', nilai: 3750.91 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2025', periode: 'Triwulan II', nilai: 3959.68 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2025', periode: 'Triwulan III', nilai: 4034.11 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2025', periode: 'Triwulan IV', nilai: 4065.53 },
    { pendekatan: 'Lapangan Usaha', jenis: 'ADHB', tahun: '2025', periode: 'Jumlah', nilai: 15810.23 },

    // ADHB Pengeluaran (2022 - 2025)
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2022', periode: 'Triwulan I', nilai: 2912.86 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2022', periode: 'Triwulan II', nilai: 3004.62 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2022', periode: 'Triwulan III', nilai: 3102.61 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2022', periode: 'Triwulan IV', nilai: 3205.70 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2022', periode: 'Jumlah', nilai: 12225.79 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2023', periode: 'Triwulan I', nilai: 3154.93 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2023', periode: 'Triwulan II', nilai: 3336.82 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2023', periode: 'Triwulan III', nilai: 3410.60 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2023', periode: 'Triwulan IV', nilai: 3503.21 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2023', periode: 'Jumlah', nilai: 13405.57 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2024', periode: 'Triwulan I', nilai: 3448.08 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2024', periode: 'Triwulan II', nilai: 3682.29 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2024', periode: 'Triwulan III', nilai: 3755.28 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2024', periode: 'Triwulan IV', nilai: 3833.60 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2024', periode: 'Jumlah', nilai: 14719.25 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2025', periode: 'Triwulan I', nilai: 3750.91 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2025', periode: 'Triwulan II', nilai: 3959.68 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2025', periode: 'Triwulan III', nilai: 4034.11 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2025', periode: 'Triwulan IV', nilai: 4065.53 },
    { pendekatan: 'Pengeluaran', jenis: 'ADHB', tahun: '2025', periode: 'Jumlah', nilai: 15810.23 }
  ]
};

function readDB() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify(INITIAL_DB, null, 2), 'utf-8');
    return INITIAL_DB;
  }
  const parsed = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));
  if (!parsed.pdrbTriwulanan) {
    parsed.pdrbTriwulanan = INITIAL_DB.pdrbTriwulanan;
    fs.writeFileSync(dbFile, JSON.stringify(parsed, null, 2), 'utf-8');
  }
  return parsed;
}

function writeDB(data) {
  data.lastUpdated = new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf-8');
}

function requireAuth(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!activeTokens.has(token)) return res.status(401).json({ error: 'Sesi tidak valid.' });
  next();
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = crypto.randomBytes(24).toString('hex');
    activeTokens.add(token);
    return res.json({ success: true, token });
  }
  return res.status(401).json({ success: false, error: 'Username atau password salah!' });
});

app.get('/api/dashboard', (req, res) => {
  res.json(readDB());
});

app.post('/api/indicators', requireAuth, (req, res) => {
  const db = readDB();
  const { kategori, nama, satuan, delta, chart_type, color, insight, values } = req.body;
  db.indicators.push({
    id: 'ind_' + Date.now(),
    kategori,
    nama,
    satuan,
    delta: delta || 'Data terbaru BPS',
    chart_type: chart_type || 'line',
    color: color || '#005A9C',
    insight: insight || '',
    values: values.map(v => (v === null || v === '' || isNaN(v) ? null : Number(v)))
  });
  writeDB(db);
  res.json({ success: true });
});

app.put('/api/indicators/:id', requireAuth, (req, res) => {
  const db = readDB();
  const idx = db.indicators.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Data tidak ditemukan' });

  db.indicators[idx] = {
    ...db.indicators[idx],
    ...req.body,
    values: req.body.values.map(v => (v === null || v === '' || isNaN(v) ? null : Number(v)))
  };
  writeDB(db);
  res.json({ success: true });
});

app.delete('/api/indicators/:id', requireAuth, (req, res) => {
  const db = readDB();
  db.indicators = db.indicators.filter(i => i.id !== req.params.id);
  writeDB(db);
  res.json({ success: true });
});

app.put('/api/years', requireAuth, (req, res) => {
  const db = readDB();
  if (Array.isArray(req.body.years) && req.body.years.length >= 2) {
    db.years = req.body.years;
    writeDB(db);
    return res.json({ success: true });
  }
  res.status(400).json({ error: 'Format tahun tidak valid' });
});

app.put('/api/sectors', requireAuth, (req, res) => {
  const db = readDB();
  if (Array.isArray(req.body.sectors)) {
    db.sectors = req.body.sectors;
    writeDB(db);
    return res.json({ success: true });
  }
  res.status(400).json({ error: 'Data sektor tidak valid' });
});

app.put('/api/pdrb-triwulanan', requireAuth, (req, res) => {
  const db = readDB();
  if (Array.isArray(req.body.pdrbTriwulanan)) {
    db.pdrbTriwulanan = req.body.pdrbTriwulanan;
    writeDB(db);
    return res.json({ success: true, count: db.pdrbTriwulanan.length });
  }
  res.status(400).json({ error: 'Format data PDRB Triwulanan tidak valid' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    readDB();
    console.log(`SERVER AKTIF di http://localhost:${PORT}`);
  });
}

module.exports = app;