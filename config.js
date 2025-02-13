const dotenv = require('dotenv')
dotenv.config()

const envs = {
  PORT: process.env.PORT || 3000,
  DB_PORT: process.env.DB_PORT || 5432,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'postgres',
  DB_NAME: process.env.DB_NAME || 'postgres'
}

module.exports = { PORT, DB_PORT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } =
  envs
