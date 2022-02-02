require("dotenv").config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

if (!USERNAME || !PASSWORD) throw new Error("Required username and password");

module.exports = { USERNAME, PASSWORD };
