const { USERNAME, PASSWORD } = require("./credentials");

module.exports = (page, infoFN) => async () => {
  infoFN("Mencari dialog login");
  await Promise.all([
    page.waitForSelector(".auth-form-wrapper"),
    page.waitForSelector('input[type="text"]'),
    page.waitForSelector('input[type="password"]'),
    page.waitForSelector('button[type="submit"]'),
  ]);
  infoFN("Dialog login ditemukan, menulis username dan password");

  await page.type('input[type="text"]', USERNAME);
  await page.type('input[type="password"]', PASSWORD);
  infoFN("Username dan password selesai di ketik, menekan tombol login");

  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation({ waitUntil: "networkidle2" }),
  ]);
  infoFN("Berhasil menekan tombol login, mengecek apakah berpindah halaman");

  await Promise.all([
    page.waitForSelector(".navbar"),
    page.waitForSelector(".navbar-content"),
    page.waitForSelector(".sidebar-toggler"),
    page.waitForSelector(".page-content"),
  ]);
  infoFN("Elemen terkonfirmasi bukan halaman login lagi");
};
