const {Pool} = require('pg')

const pool = new Pool({
    user: "postgres",
    password: "ReXbxURTza83LncOVWFR",
    host: "containers-us-west-122.railway.app",
    port:6727,
    database: "railway"
})

module.exports = pool;