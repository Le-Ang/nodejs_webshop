const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {type: String},
    image:{type: String},
    description:{type: String},
    content:{type: String},
    slug: { type: String, slug: 'title', unique: true},
}, 
{
    collection:'blogs',
    timestamps: true,
});

mongoose.plugin(slug);
module.exports = mongoose.model('Blog', BlogSchema)