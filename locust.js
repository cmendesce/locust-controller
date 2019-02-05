const axios = require('axios')
const logger = require('pino')()

const run = (scenario) => {
  logger.info(`starting scenario ${scenario.name} on locust instance ${scenario.host}`)
  const host = scenario.host
  let interval = scenario.steps[0].interval * -1
  for (let step of scenario.steps) {
    interval += step.interval
    setTimeout(swarm, interval, host, step.users, step.rate)
    logger.info(`step scheduled to swarm with ${step.users} users at rate of ${step.rate} in the next ${interval} ms`)
  }
}

const swarm = (host, user, rate) => {
  console.log(host, user, rate, new Date())

  axios({
    baseURL: 'localhost:8089',
    url: '/swarm',
    method: 'post',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
}

module.exports = {run}