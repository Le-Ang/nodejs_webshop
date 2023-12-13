const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: { type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    password: { type: String, require: true},
    name: {type: String, require: true},
    birthday: {type: Date, require: true},
    address: {type: String, require: true},
    phone: {type: String, require: true},
    slug: { type: String, slug: 'username', unique: true},
}, 
{
    collection:'accounts'
});

mongoose.plugin(slug);
module.exports = mongoose.model('Account', AccountSchema)