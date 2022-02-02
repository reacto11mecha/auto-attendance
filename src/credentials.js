require("dotenv").config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

if (!USERNAME || !PASSWORD || !WEBHOOK_URL)
  throw new Error("Seluruh environment variable dibutuhkan!");

module.exports = { USERNAME, PASSWORD, WEBHOOK_URL };
