# Wah abot

_Wah abot_ (malas ah!) kirim pesan ke banyak orang.
Copy paste pesan satu-satu, menghabiskan energi dan watku.
Pakai saja Bot ini, kalau nomor WA-nya di-banned, tanggaung
jawab sendiri hehe.

# Persiapan

Install semua dependency

```
npm install
```

Isi data target di file CSV `data/target_batch.csv`.

# Running

Jalankan botnya dengan perintah:

````
node main.js
```

Tunggu sampai keluar QR Code.

Setelah itu scan QR Code untuk login ke WA Client (web)
dan pesan akan otomatis terkirim sesuai dengan data yang
ada di `data/target_batch.csv`.