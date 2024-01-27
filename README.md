# WAabot

_Abot_ (malas) kirim pesan ke banyak orang, pakai aja bot ini.

# Persiapan

Install semua dependency

```
npm install
```

Isi data target di file CSV `data/target_batch.csv`.

# Running

Jalankan botnya dengan perintah:

```
node main.js
```

Tunggu sampai keluar QR Code.

Setelah itu scan QR Code untuk login ke WA Client (web)
dan pesan akan otomatis terkirim sesuai dengan data yang
ada di `data/target_batch.csv`.