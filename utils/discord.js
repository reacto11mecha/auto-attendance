const { Webhook, MessageBuilder } = require("discord-webhook-node");
const { WEBHOOK_URL, WEBSITE_URL } = require("../src/credentials");

if (WEBHOOK_URL) {
  const hook = new Webhook(WEBHOOK_URL);
  hook.setUsername("ABSEN OTOMATIS");

  const embedSuccess = new MessageBuilder()
    .setTitle("Absensi")
    .addField("Status Absensi", "Berhasil absen!")
    .addField("Halaman Website", WEBSITE_URL);

  module.exports = { hook, embedSuccess };
}
