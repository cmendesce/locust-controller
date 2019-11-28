# Locust Controller

Locust controller is a dynamic load generation  handler for [Locust](https://locust.io).

## Getting started

The simple scenario below will send to Locust 200 users at time 0s, will increase to 400 at time 30s and finally will drop all at time 60s.

```json
{
  "name": "simple scenario",
  "host": "http://<locust-host-here>",
  "steps": [
  {
    "time": 0,
    "users": 200,
    "rate": 100
  },
  {
    "time": 30,
    "users": 400,
    "rate": 100
  },
  {
    "time": 60,
    "users": 0,
    "rate": 1
  }]
}
```

## Running locally

Prepare your scenario using the template file `scenario.json`. Modify the host and create each step according load you want to create.

With your scenario, run the bellow command. 

```
node local.js
```
