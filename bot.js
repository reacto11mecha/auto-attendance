const pptr = require("puppeteer");

const loginWrapper = require("./src/login");
const _chalkFN = require("./utils/chalk");

(async () => {
  const chalk = await _chalkFN();
  const infoFN = (txt) => console.log(`${chalk.blue("[INFO]")} ${txt}`);

  const browser = await pptr.launch();
  const page = await browser.newPage();

  const login = loginWrapper(page, infoFN);

  infoFN("Membuka website");
  await page.goto("https://demo3.e-belajar.id/login", {
    timeout: 0,
  });

  infoFN("Berhasil membuka website, memulai proses login");
  await login();
  infoFN("Terkonfirmasi berhasil login!");

  await browser.close();
})();
