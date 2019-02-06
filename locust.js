const fetch = require('node-fetch')
const FormData = require('form-data')
const logger = require('pino')()

const run = (scenario) => {
  logger.info(`starting scenario ${scenario.name} on locust instance ${scenario.host}`)
  const host = scenario.host
  
  for (let step of scenario.steps) {
    let milliseconds = step.time * 1000
    setTimeout(swarm, milliseconds, host, step.users, step.rate) 
  }
  setTimeout(stop, scenario.duration * 1000, host)
}

const stop = async (host) => {
  fetch(`${host}/stop`).then(() => {
    logger.info('stoped')
  })
}

const swarm = async (host, users, rate) => {
  const form = new FormData()
  form.append('locust_count', users)
  form.append('hatch_rate', rate)
  const opts = {
    method: 'POST',
    body: form
  }
  fetch(`${host}/swarm`, opts).then(() => {
    logger.info(`starting swarm with ${users} users at rate of ${rate}`)
  })
}

module.exports = {run}