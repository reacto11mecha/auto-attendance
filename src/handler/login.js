const {
  credentials: {
    USERNAME,
    PASSWORD,

    FORM_WRAPPER,
    INPUT_USERNAME,
    INPUT_PASSWORD,
    BUTTON_SUBMIT,

    SUCCESS_INDICATOR_ELEMENTS,
  },
} = require("../utils");

module.exports = async (page, chalk) => {
  chalk.infoFN("Mencari dialog login");
  await Promise.all([
    page.waitForSelector(FORM_WRAPPER),
    page.waitForSelector(INPUT_USERNAME),
    page.waitForSelector(INPUT_PASSWORD),
    page.waitForSelector(BUTTON_SUBMIT),
  ]);
  chalk.infoFN("Dialog login ditemukan, menulis username dan password");

  await page.type(INPUT_USERNAME, USERNAME);
  await page.type(INPUT_PASSWORD, PASSWORD);
  chalk.infoFN("Username dan password selesai di ketik, menekan tombol login");

  await Promise.all([
    page.click(BUTTON_SUBMIT),
    page.waitForNavigation({ waitUntil: "networkidle2" }),
  ]);
  chalk.infoFN(
    "Berhasil menekan tombol login, mengecek apakah berpindah halaman"
  );

  await Promise.all(
    SUCCESS_INDICATOR_ELEMENTS.map((element) => page.waitForSelector(element))
  );
  chalk.infoFN("Elemen terkonfirmasi bukan halaman login lagi");

  return new Date();
};
