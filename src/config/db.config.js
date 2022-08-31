const { connect, connection } = require('mongoose')
const config = require('./app.config')
const dbUrl = config.get('db.url')

module.exports = () => {
    connect(`${dbUrl}`)
    connection.on('connected', () => {
        console.log(`DB has been connected${dbUrl}`)
    })
}