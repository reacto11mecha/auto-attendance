# Auto Attendance

Bot absen otomatis dengan menggunakan puppeteer.

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

// TODO: Penjelasan bagaimana cara pemakaiannya

### Local Development

// TODO: Penjelasan bagaimana mendevelop aplikasi secara local
