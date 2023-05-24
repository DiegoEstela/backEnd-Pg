const { config } = require("dotenv");
config();

module.exports = {
  db: {
    vercel: process.env.POSTGRES_URL,
  },
};
