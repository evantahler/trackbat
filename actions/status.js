'use strict'

const ActionHero = require('actionhero')
const path = require('path')
const packageJSON = require(path.normalize(path.join(__dirname, '..', 'package.json')))

module.exports = class RandomNumber extends ActionHero.Action {
  constructor () {
    super()
    this.name = 'status'
    this.description = 'I will return some basic information about the API'
    this.outputExample = {
      'id': '192.168.2.11',
      'actionheroVersion': '9.4.1',
      'uptime': 10469
    }
  }

  async run (data) {
    const api = ActionHero.api

    data.response.nodeStatus = data.connection.localize('Node Healthy')
    data.response.problems = []

    data.response.id = api.id
    data.response.actionheroVersion = api.actionheroVersion
    data.response.uptime = new Date().getTime() - api.bootTime
    data.response.name = packageJSON.name
    data.response.description = packageJSON.description
    data.response.version = packageJSON.version
  }
}
