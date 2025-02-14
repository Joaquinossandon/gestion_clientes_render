const express = require('express')
const app = express()
const envs = require('./config')
const pool = require('./connection')
const cors = require('cors')

app.use(cors())

app.get('/', async (req, res) => {
  const query = 'SELECT * FROM cliente'
  const result = await pool.query(query)

  res.json(result.rows)
})

app.listen(envs.PORT, () => {
  console.log(`Server is running on port ${envs.PORT}`)
})
