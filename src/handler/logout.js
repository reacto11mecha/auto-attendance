const {
  credentials: {
    LOGOUT_BOX,
    LOGOUT_BUTTON,
    CONFIRM_LOGOUT_BUTTON,

    FORM_WRAPPER,
    INPUT_USERNAME,
    INPUT_PASSWORD,
    BUTTON_SUBMIT,
  },
} = require("../utils");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = async (page, chalk) => {
  chalk.infoFN("Mencari box logout");
  await page.waitForSelector(LOGOUT_BOX);

  chalk.infoFN("Box logout ditemukan, memencet box logout");
  await page.click(LOGOUT_BOX);

  chalk.infoFN("Box logout ditemukan, mencari tombol logout");
  await page.waitForSelector(LOGOUT_BUTTON);

  chalk.infoFN("Tombol logout ditemukan, memencet tombol logout");
  await page.click(LOGOUT_BUTTON);

  chalk.infoFN(
    "Berhasil menekan tombol logout, mengecek apakah dialog konfirmasi logout muncul"
  );
  await page.waitForSelector(CONFIRM_LOGOUT_BUTTON);
  await sleep(1500);

  chalk.infoFN(
    "Tombol konfirmasi logout ditemukan, memencet tombol komfirmasi logout"
  );
  await page.click(CONFIRM_LOGOUT_BUTTON);

  await page.waitForNavigation({ waitUntil: "networkidle2" });
  chalk.infoFN(
    "Berhasil berpindah halaman, mengecek apakah kembali ke halaman login"
  );

  await Promise.all([
    page.waitForSelector(FORM_WRAPPER),
    page.waitForSelector(INPUT_USERNAME),
    page.waitForSelector(INPUT_PASSWORD),
    page.waitForSelector(BUTTON_SUBMIT),
  ]);
  chalk.infoFN("Terkonfirmasi bukan halaman login lagi, berhasil absen keluar");

  return new Date();
};
