# Klontong, the fullstack project.

Sebuah toko klontong ingin masuk ke abad 21, mereka ingin menjual barang mereka online.

### Details

Secara basic:

> Sebagai anak owner toko klontong, saya butuh mengatur barang yang kami jual di sebuah table.

Dari perspective engineer, anggaplah ini hanya sebuah CRUD.

Ini adalah stack frontend yang kamu harus gunakan untuk proyek ini:

- Vue/React
- ~~Vuex~~Pinia/Redux
- ExpressJS

### More technical details

Seluruh tim telah setuju dengan beberapa spek dan limitasi teknikal:

- Semua payload untuk request dan response adalah JSON.
- Ada skema data.
- Ada data sekitar 100 produk yang butuh di manage, gunakan teknik paginasi.
- Halaman-halaman yang ditetapkan:
  - List semua produk
  - Detil produk
  - Tambah produk
  - Login/Register

Contoh skema:

```json
{
  "id": 86,
  "CategoryId": 14,
  "categoryName": "Cemilan",
  "sku": "MHZVTK",
  "name": "Ciki ciki",
  "description": "Ciki ciki yang super enak, hanya di toko klontong kami",
  "weight": 500,
  "width": 5,
  "length": 5,
  "height": 5,
  "image": "https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b",
  "harga": 30000
}
```

Jangan lupa, tim kamu bersifat internasional, jadi kerjakan
sebaik mungkin menggunakan bahasa Inggris.
(Walaupun iya sih, test ini ditulis menggukan bahasa Indonesia, tapi...)

### Extra features

Tim kamu tidak ada yang mengharapkannya. Tetapi it will be nice to see:

- State persistence, dimana data tidak hilang jika di refresh, contoh: menggunakan Local Storage.
- Responsive UI/UX, di Indonesia kebanyakan orang yang beli di toko klontong online, menggunakan HP.
- Fungsi search untuk di halaman list all produk.

KISS (Keep It Simple Stupid) - Jangan lupa target audience-nya kemungkinan gaptek.

### Important Notice!

- Mohon buat instruction steps untuk run program dan flow testing.
- Pastikan ada user yang bisa dipakai untuk testing dan berikan login infonya di dalam ReadMe kalian.
- Pastikan sudah ada seeder produk-produknya.

### What we care about

Gunakan library apapun yang kamu biasa gunakan jika ini aplikasi production nyata.
Code design dan cleanliness lebih penting dibanding pemilihan library yang "benar".
Selalu strive to use best practices!

Oh iya, kami tidak terlalu peduli dengan Internet Explorer.

Be cool and happy coding!

### step Aplikai

1. login ke aplikasi terlibih dahulu sebelum access home

user yang bisa di pake:
email: bejo@mgmail.com
password : 12345

2. setelah login kita bisa melihat daftar produk yang yag berjumlah 100 produk

3. kita juga bisa melihat detail produk dengan menekan tombol yang ada di setiap card produk

4. kita juga bisa mencara cari produk yang kita inginkan sesuai dengan nama produk

5. kita juga bisa menambahkan produk dengan cara menekan tombol + add produk yang ada di samping tombol search

6. jika selesai dengan melihat produk kita bisa logout dengan menekan tombol logout disamping tombol home
