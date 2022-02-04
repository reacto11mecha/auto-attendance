const { _botBuilder, _login } = require("../src/handler");
const { discord, credentials } = require("../src/utils");

(async () => {
  const bot = await _botBuilder();
  const login = await _login(bot.page, bot.chalk);

  bot.chalk("Terkonfirmasi berhasil login!");

  if (credentials.WEBHOOK_URL) discord.successLogin(login);

  await bot.browser.close();
})();
