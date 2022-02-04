const pptr = require("puppeteer");
const { chalk: _chalkFN, credentials } = require("../utils");

module.exports = async () => {
  const chalk = await _chalkFN();

  const browser = await pptr.launch();
  const page = await browser.newPage();

  chalk.infoFN(`Membuka website => ${credentials.WEBSITE_URL}`);
  await page.goto(credentials.WEBSITE_URL, {
    timeout: 0,
  });
  chalk.infoFN(`Website berhasil dibuka`);

  return { chalk, browser, page };
};
