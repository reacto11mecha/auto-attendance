require("dotenv").config();

const WEBSITE_URL = process.env.WEBSITE_URL;

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const WEBHOOK_URL = process.env.WEBHOOK_URL || null;

const FORM_WRAPPER = process.env.FORM_WRAPPER || "body";
const INPUT_USERNAME = process.env.INPUT_USERNAME || 'input[type="text"]';
const INPUT_PASSWORD = process.env.INPUT_PASSWORD || 'input[type="password"]';
const BUTTON_SUBMIT = process.env.BUTTON_SUBMIT || 'button[type="submit"]';

const indicator = process.env.SUCCESS_INDICATOR_ELEMENTS;

const SUCCESS_INDICATOR_ELEMENTS = indicator.includes(",")
  ? indicator.split(",").map((el) => el.trim())
  : [indicator.trim()] || ["body"];

if (!USERNAME || !PASSWORD || !WEBSITE_URL)
  throw new Error("Isi environment variable yang wajib!");

module.exports = {
  // Website URL
  WEBSITE_URL,

  // Authentication
  USERNAME,
  PASSWORD,

  // Discord webhook url
  WEBHOOK_URL,

  // Login elements
  FORM_WRAPPER,
  INPUT_USERNAME,
  INPUT_PASSWORD,
  BUTTON_SUBMIT,

  // Success Indicator
  SUCCESS_INDICATOR_ELEMENTS,
};
