const { Pool } = require('pg')
const envs = require('./config')

const pool = new Pool({
  host: envs.DB_HOST,
  user: envs.DB_USER,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
  port: envs.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = pool
