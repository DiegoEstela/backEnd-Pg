const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
  connectionString: db.vercel + "?sslmode=require",
});

module.exports = pool;
