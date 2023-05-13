const dotenv = require('dotenv').config();

module.exports = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_DATABASE: process.env.DB_DATABASE || "jwd",
  DB_USERNAME: process.env.DB_USERNAME || "owen",
  DB_PASSWORD: process.env.DB_PASSWORD || "bd123"
}