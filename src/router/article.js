const express = require('express')
const controller = require('../controller/article')
const user = express.Router()

user.post('/create', controller.createArticle)



module.exports = user

