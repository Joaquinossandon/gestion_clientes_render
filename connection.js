const { Pool } = require('pg')
const envs = require('./config')

const pool = new Pool({
  connectionString: envs.DB_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = pool
