const pptr = require("puppeteer");

const loginWrapper = require("./src/login");

(async () => {
  const browser = await pptr.launch({
    headless: false,
  });
  const page = await browser.newPage();

  const login = loginWrapper(page);

  console.log("Membuka website");
  await page.goto("https://demo3.e-belajar.id/login", {
    timeout: 0,
  });

  console.log("Berhasil membuka website, proses login dimulai.....");
  await login();
  console.log("Berhasil login !");

  await browser.close();
})();
