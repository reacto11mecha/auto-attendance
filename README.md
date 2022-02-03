# Auto Attendance

Sesuai nama repositorinya, ini adalah bot absen otomatis dengan menggunakan puppeteer.

### Latar belakang bot ini dibuat

Saya adalah siswa sekolah yang mengikuti proses belajar mengajar secara daring melalui website LMS (Learning Management System). Website itu dalam melaksanakan absensi cukup menyulitkan, sebagai siswa setiap mau absen harus logout dan login kembali agar bisa dianggap sudah absen. Jadi cukup membuang waktu hanya untuk melakukan hal itu berkali-kali untuk absen saja.

### Cara Kerja Bot

Bot ini sangat dibantu oleh library [puppeteer](https://github.com/puppeteer/puppeteer) sebagai Headless Chrome yang bisa mengunjungi web dan melakukan sesuatu di web tersebut layaknya manusia berinteraksi dengan web. Yang pertama kali dilakukan oleh botntya yaitu mengunjungi webnya.

![Membuka Website](assets/img/Membuka_Website.png)

Ketika webnya sudah selesai di kunjungi, bot akan mencari elemen-elemen yang bisa digunakan untuk mengetikan username/email dan password.

![Deteksi Elemen-Elemen HTML](assets/img/Elements_Recognize.png)

Ketika elemen-elemen yang dimaksud sudah sesuai maka selanjutnya adalah proses pengisiian username dan password, serta di kliknya tombol login.

![Isi Username Password dan login](assets/img/Isi_Username_dan_Password.png)

Ketika tombol login sudah diklik dan sudah dipastikan web berpindah halaman, selanjutnya akan mendeteksi elemen baru apakah berhasil login ke halaman setelah login dengan mendeteksi beberapa elemen yang ada.

![Second Recognize](assets/img/Second_Recognize.png)

Dan ketika ditemukan URL Discord Webhook, bot nya akan mengirimkan laporan ke discord bahwa proses absensi berhasil.

![Screenshot Discord](assets/img/Screenshot_Discord.jpg)

### Cara Pemakaian

Pertama gunakan repo template ini untuk membuat repo baru, bisa menggunakan tombol `Use this template` atau sedang fokus membaca, [generate disini](https://github.com/reacto11mecha/auto-attendance/generate). Di step ini buatlah repo github seperti biasa. Kira-kira tampilannya akan terlihat seperti ini.

![Generate from Template](assets/img/Generate_from_template.png)

Selanjutnya buatlah secrets github action ke halaman `settings`, scroll ke bawah sampai ke bagian `Secrets`, klik bagian `Actions`.

![Generate from Template](assets/img/Secrets_Actions.png)

Buatlah secret baru untuk memberikan data-data diperlukan untuk menjalankan botnya. Berikut ini list yang wajib ada dalam menggunakan bot ini.

- `WEBSITE_URL`: Url lengkap dimana halaman loginnya
- `USERNAME`: Username/email dari akun yang dipakai untuk absensi
- `PASSWORD`: Password dari akun yang dipakai untuk absensi

Konfigurasi lain yang dapat diberikan ke bot ini.

- `WEBHOOK_URL`: Discord Webhook url, tidak wajib sifatnya tapi bisa ditambahkan jika ada dan akan mengirimkan notifikasi jika berhasil
- `FORM_WRAPPER`: HTML Element patokan untuk kotak terluar formnya, default element `body`
- `INPUT_USERNAME`: HTML Element yang dijadikan kotak username/email formnya, default element `'input[type="text"]'`
- `INPUT_PASSWORD`: HTML Element yang dijadikan kotak password formnya, default element `'input[type="password"]'`
- `BUTTON_SUBMIT`: HTML Element yang dijadikan tombol submit formnya, default element `'button[type="submit"]'`
- `SUCCESS_INDICATOR_ELEMENTS`: HTML Element yang dicari setelah login untuk menandakan apakah sudah berhasil login atau belum. Jika element lebih dari satu pisahkan dengan koma (`,`), jika hanya satu isikan dengan element biasa saja. Default value hanya elemen `body`.

> Atau versi lebih simple ada di [.sample.env](.sample.env)

Selanjutnya adalah penyesuaian github action, nama filenya adalah `automator.yml` dengan path lengkapnya `.github/workflows/automator.yml`. Jangan diubah-ubah environment variable, ubah saja bagian yang optional.

![Bagian yang dimaksud](assets/img/Bagian_Yang_Dimaksud.png)

> Jika kamu tidak ada `WEBHOOK_URL` ataupun `FORM_WRAPPER`, maka komentari saja baris tersebut, karena saya sendiri menggunakan 2 variabel itu.

### Catatan

Bot ini hanya bisa digunakan apabila website belajar yang digunakan tidak terdapat bot detection atau website belajar yang absennya menggunakan metode login pada jam tertentu, jika yang dimaksud adalah mengisi suatu form absen semisal halnya google form yang digunakan untuk absen, bot ini bukanlah hal yang tepat.

### Local Development

Langkah pertama, fork atau clone terlebih dahulu.

```sh
# https
git clone https://github.com/reacto11mecha/auto-attendance.git

# SSH
git clone git@github.com:reacto11mecha/auto-attendance.git
```

Kedua, menginstall seluruh package yang dibutuhkan.

```sh
npm install
```

Ketiga, menyalin file `.sample.env` menjadi `.env` dan isikan sesuai field yang telah dijelaskan sebelumnya di [Cara Pemakaian](#cara-pemakaian).

### Disclaimer

Penegasan, **saya tidak bertanggung jawab atas hal-hal yang tidak anda inginkan, gunakan dengan bijak dan tepat!**

### Lisensi

Semua kode yang ada di repositori ini bernaung dibawah [MIT License](LICENSE).
