const { Pool } = require('pg')
const envs = require('./config')

const poolOptions = {
  connectionString: envs.DB_URL
}

if (envs.ENVIRONMENT === 'production') {
  poolOptions.ssl = {
    rejectUnauthorized: false
  }
}

const pool = new Pool(poolOptions)


module.exports = pool
