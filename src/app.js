const express = require('express')
const { dbConfig } = require('./config')
const articleRouter = require('./router/article')
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express()

dbConfig()

app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', articleRouter)

module.exports = { app }
