require("dotenv").config();

// const { PORT, DB_URI, DB_URI_TEST, NODE_ENV } = process.env;
const { DB_URI, PORT, ACCESS_TOKEN } = process.env;
module.exports = {
  PORT,DB_URI,ACCESS_TOKEN
  // DB_URI: NODE_ENV === "testing" ? DB_URI_TEST : DB_URI,
};
