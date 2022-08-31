const path = require('path')
const filepath = path.join(__dirname, '../../public/')
const Article = require('../model/article');
const Category = require('../model/articleCategory');
const { ObjectId } = require('mongodb')
module.exports = {

    //creating new articles
    createArticle: async (req, res) => {
        try {
            let category = [];
            req.body.image = filepath + req.files.image.name
            let image = req.files.image;
            image.mv(filepath + req.files.image.name)
            for await (ele of req.body.cateogory) {
                category.push(ele);
            }
            const article = new Article({
                'heading': req.body.heading,
                'description': req.body.description,
                'readTime': req.body.readTime,
                'image': req.body.image,
                'cateogories': category,
                'verified': req.body.verified,
                'newest': req.body.newest,
                'trending': req.body.trending,
                'created_date': new Date(),
                'updated_date': new Date()
            });

            await article.save();
            return;
        } catch (error) {
            console.log(error)
            return res.send(error);
        }
    },

    //Listing of all articles
    findAllArticle: async (req, res) => {
        try {
            const articles = await Article.find().populate('cateogories');
            if (articles) {
                return res.send(articles);
            }

        } catch (error) {
            return res.send(error);
        }

    },

    //Removing an article from the database
    removeArticle: async (req, res) => {
        try {
            const delArticle = await Article.findByIdAndRemove(req.query.id);

        } catch (error) {
            console.log(error);
            return res.send(error);
        }

    },

    //Edit an article
    editArticle: async (req, res) => {
        try {
            let category = [];
            req.body.image = filepath + req.files.image.name
            let image = req.files.image;
            image.mv(filepath + req.files.image.name)
            for await (ele of req.body.cateogory) {
                category.push(ele);
            }
            const article = await Article.findByIdAndUpdate({
                '_id': req.query.id
            }, {
                'heading': req.body.heading,
                'description': req.body.description,
                'readTime': req.body.readTime,
                'image': req.body.image,
                'cateogories': category,
                'verified': req.body.verified,
                'newest': req.body.newest,
                'trending': req.body.trending,
                'updated_date': new Date()
            });

            await article.save();
            return;
        } catch (error) {
            console.log(error)
            return res.send(error);
        }
    },

    // Listing of articles based on each category and multiple categories.
    findCatogoryBasedArticle: async (req, res) => {
        try {
            const articles = await Article.find({ 'cateogories': { '$in': req.body.category } }).populate('cateogories');
            if (articles) {
                return res.send(articles);
            }

        } catch (error) {
            return res.send(error);
        }

    },

    //creating categories
    createCategory: async (req, res) => {
        try {
            const category = new Category({
                'name': req.body.name,
                'created_date': new Date(),
                'updated_date': new Date()
            });

            await category.save();
            return;

        } catch (error) {
            console.log(error);
            return res.send(error);
        }

    },
    
    //Listing categories
    findAllCategory: async (req, res) => {
        try {
            const categories = await Category.find();
            if (categories) {
                return res.send(categories);
            }

        } catch (error) {
            return res.send(error);
        }

    }
}

