const convict = require('convict');
const { url } = require("convict-format-with-validator");

const schema = {
    app: {
        port: {
            doc: "The port to bind",
            format: "port",
            default: 4578,
            env: "PORT"
        }
    },
    db: {
        url: {
            default: "mongodb://localhost/article_app",
            env: "DB_URL"
        }
    }
}

convict.addFormat(url)
const config = convict(schema).validate({ allowed: "strict" })
module.exports = config;