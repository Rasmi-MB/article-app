const path = require('path')
const filepath = path.join(__dirname, '../../public/')
const Article = require('../model/article');
module.exports = {

    createArticle: async (req, res) => {
        try {

           req.body.image=filepath+req.files.image.name
           console.log('test',req.body)
                let image = req.files.image;
                image.mv(filepath + req.files.image.name )
                console.log('files',filepath + req.files.image.name)  
                const article = new Article({
                    'heading': req.body.heading,
                    'description': req.body.description,
                    'readTime': req.body.readTime,
                    'image': req.body.image,
                    'cateogories': req.body.cateogory,
                    'verified': req.body.verified,
                    'newest': req.body.newest,
                    'trending': req.body.trending,
                    'created_date': new Date(),
                    'updated_date': new Date()
                });
        
                await article.save();
         
          
        } catch (error) {
           console.log(error)
        }
    },

  
}

