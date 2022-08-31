const { app } = require('./app')
const { appConfig } = require('./config')
const port = appConfig.get('app.port');


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})