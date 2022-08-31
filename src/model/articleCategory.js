const mongoose = require('mongoose');
const { Schema } = mongoose;
const categorySchema = new mongoose.Schema({
    'name': { 'type': String },
    'created_date': {'type': Date},
    'updated_date': {'type': Date}
});

module.exports = mongoose.model('ArticleCategory', categorySchema);