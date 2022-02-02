const { Webhook, MessageBuilder } = require("discord-webhook-node");
const { WEBHOOK_URL } = require("../src/credentials");

const hook = new Webhook(WEBHOOK_URL);
hook.setUsername("ABSEN OTOMATIS");
hook.setAvatar("https://avatars.githubusercontent.com/u/48118327?v=4");

const embedSuccess = new MessageBuilder()
  .setTitle("Absensi")
  .addField("Status Absensi", "Berhasil absen!");

module.exports = { hook, embedSuccess };
