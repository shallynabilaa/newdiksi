# DIKSI 1501 — Dashboard Data Strategis Kab. Kerinci

Dashboard indikator data strategis Kabupaten Kerinci (BPS). Express + penyimpanan file JSON. Halaman publik di `/`, panel admin di `/admin.html`.

## Jalankan lokal

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm start
```

Buka http://localhost:3000. Panel admin: http://localhost:3000/admin.html.

Tanpa env, login admin memakai kredensial default pengembangan (lihat `server.js`). Jangan dipakai di production.

## Environment variable

| Nama | Wajib | Keterangan |
| --- | --- | --- |
| `ADMIN_USER` | Ya, di production | Username admin |
| `ADMIN_PASS` | Ya, di production | Password admin. Pakai password panjang dan acak |
| `NODE_ENV` | - | Isi `production` untuk deploy. Server menolak start jika `ADMIN_USER`/`ADMIN_PASS` kosong |
| `PORT` | - | Port server. Default `3000` (Render mengisinya otomatis) |

Token login berlaku 12 jam. Login dibatasi 10 percobaan gagal per 15 menit per IP.

## Deploy ke Render

1. Push repo ke GitHub.
2. Di Render: **New > Blueprint**, pilih repo ini. `render.yaml` membuat web service `newdiksi` (plan free).
   Alternatif manual: **New > Web Service**, runtime Node, build `npm install`, start `npm start`, health check path `/healthz`.
3. Isi `ADMIN_USER` dan `ADMIN_PASS` di tab **Environment** (nilainya tidak disimpan di repo). `NODE_ENV=production` sudah diset oleh `render.yaml`.
4. Tunggu deploy selesai. Cek `https://<nama-service>.onrender.com/healthz` (harus `ok`).

Plan free akan tidur setelah beberapa menit tanpa trafik. Request pertama setelah itu lambat (cold start).

## Catatan data

Di Render, data disimpan di `/tmp/data/diksi_1501.json` pada filesystem yang bersifat sementara. Setiap restart atau deploy ulang, data kembali ke data awal bawaan di `server.js` (`INITIAL_DB`), dan semua perubahan lewat panel admin hilang.

Lokal, data disimpan di `data/diksi_1501.json` dan tidak ditimpa saat server start. Untuk data permanen di production, pindahkan penyimpanan ke database (mis. Postgres) atau pasang persistent disk (plan berbayar).

## Endpoint

- `GET /healthz` — health check
- `GET /api/dashboard` — data publik
- `POST /api/login` — login admin, mengembalikan token
- `POST /api/indicators`, `PUT /api/indicators/:id`, `DELETE /api/indicators/:id`, `PUT /api/years`, `PUT /api/sectors` — butuh header `Authorization: Bearer <token>`
