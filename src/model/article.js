const mongoose = require('mongoose');
const { Schema } = mongoose;
const articleSchema = new mongoose.Schema({
    'created_date': { 'type': Date },
    'heading': { 'type': String },
    'description': { 'type': String },
    'readTime': { 'type': String },
    'updated_date': { 'type': Date },
    'image': { 'type': String },
    'cateogories':[ {
        'type': Schema.Types.ObjectId,
        'ref': 'ArticleCategory'
    }],
    'verified': { 'type': Boolean },
    'newest': { 'type': Boolean },
    'trending': { 'type': Boolean }
});

module.exports = mongoose.model('Article', articleSchema);