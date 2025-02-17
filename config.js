const dotenv = require('dotenv')
dotenv.config()

const envs = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DATABASE_URL,
  ENVIRONMENT: process.env.ENVIRONMENT || 'production'
}

module.exports = { PORT, DB_URL } = envs
