const { _botBuilder, _login, _logout } = require("../src/handler");
const { discord, credentials } = require("../src/utils");

(async () => {
  const bot = await _botBuilder();

  await _login(bot.page, bot.chalk);
  bot.chalk.infoFN("Terkonfirmasi berhasil login!");

  const logout = await _logout(bot.page, bot.chalk);
  bot.chalk.infoFN("Terkonfirmasi berhasil logout!");

  if (credentials.WEBHOOK_URL) discord.successLogout(logout);

  await bot.browser.close();
})();
