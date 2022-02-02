const pptr = require("puppeteer");

const { WEBSITE_URL } = require("./src/credentials");
const loginWrapper = require("./src/login");
const _chalkFN = require("./utils/chalk");
const { hook, embedSuccess } = require("./utils/discord");

(async () => {
  const chalk = await _chalkFN();
  const infoFN = (txt) => console.log(`${chalk.blue("[INFO]")} ${txt}`);

  const browser = await pptr.launch();
  const page = await browser.newPage();

  const login = loginWrapper(page, infoFN);

  infoFN(`Membuka website => ${WEBSITE_URL}`);
  await page.goto(WEBSITE_URL, {
    timeout: 0,
  });

  infoFN("Berhasil membuka website, memulai proses login");
  await login();
  infoFN("Terkonfirmasi berhasil login!");

  hook.send(embedSuccess);

  await browser.close();
})();
