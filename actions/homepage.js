'use strict'

const {Action} = require('actionhero')
const showdown = require('showdown')
const fs = require('fs')
const path = require('path')

module.exports = class Track extends Action {
  constructor () {
    super()
    this.name = 'homepage'
    this.description = 'I render the README as an HTML page'

    const converter = new showdown.Converter()
    converter.setFlavor('github')
    const markdown = fs.readFileSync(path.join(__dirname, '..', 'README.md'))
    this.html = converter.makeHtml(markdown.toString())
  }

  outputExample () {
    return {200: 'ok'}
  }

  async run (data) {
    data.connection.rawConnection.responseHeaders.push(['Content-Type', 'html'])
    data.response = this.html
  }
}
