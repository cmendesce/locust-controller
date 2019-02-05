const bodyParser = require('body-parser')
const logger = require('morgan')
const express = require('express')
const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const locust = require('./locust')

app.post('/experiments', (req, res) => {
  const scenario = req.body
  locust.run(scenario)
  res.sendStatus(201)
})

const port = 3001
app.listen(port, () => console.log(`Locust controller listening on port ${port}`))
