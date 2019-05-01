const monk = require('monk')

const connString = 'mongodb://127.0.0.1:27017/krediti'

const db = monk(connString)

module.exports = db