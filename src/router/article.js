const express = require('express')
const controller = require('../controller/article')
const router = express.Router()

router.post('/createArticle', controller.createArticle);
router.get('/findArticle', controller.findAllArticle);
router.delete('/article', controller.removeArticle);
router.put('/editArticle', controller.editArticle);
router.get('/findCategoryArticle', controller.findCatogoryBasedArticle);
router.post('/createCategory', controller.createCategory);
router.get('/findCategory', controller.findAllCategory);


module.exports = router

