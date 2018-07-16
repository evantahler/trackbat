'use strict'
const {Action, api} = require('actionhero')

module.exports = class Track extends Action {
  constructor () {
    super()
    this.name = 'track'
    this.description = 'track a wayward http request'
    this.matchExtensionMimeType = false
  }

  outputExample () {
    return {200: 'ok'}
  }

  async run (data) {
    const host = data.connection.rawConnection.req.headers.host
    const referer = data.connection.rawConnection.req.headers.referer || '-'
    const url = data.connection.rawConnection.req.url
    const method = data.connection.rawConnection.req.method
    const ip = data.connection.remoteIP

    let [track] = await api.models.track.findOrCreate({
      where: {host, url, referer, method, ip}
    })

    track.count++
    await track.save()

    data.response = { track: track.apiData() }
  }
}
