const { USERNAME, PASSWORD } = require("./credentials");

module.exports = (page) => async () => {
  await Promise.all([
    page.waitForSelector(".auth-form-wrapper"),
    page.waitForSelector('input[type="text"]'),
    page.waitForSelector('input[type="password"]'),
    page.waitForSelector('button[type="submit"]'),
  ]);

  await page.type('input[type="text"]', USERNAME);
  await page.type('input[type="password"]', PASSWORD);

  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation({ waitUntil: "networkidle2" }),
  ]);

  await Promise.all([
    page.waitForSelector(".navbar"),
    page.waitForSelector(".navbar-content"),
    page.waitForSelector(".sidebar-toggler"),
    page.waitForSelector(".page-content"),
  ]);
};
