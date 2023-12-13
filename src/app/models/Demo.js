const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const DemoSchema = new Schema({
    _id: { type: Number, },
    name: { type: String, require: true, maxLength: 255},
    description: { type: String, maxLength: 600},
    cost: {type: Number},
    image: { type: String, maxLength: 255},
    image1: { type: String, require: true},
    image2: { type: String, require: true},
    level: { type: String, maxLength: 255},
    slug: { type: String, slug: 'name', unique: true},
}, 
{
    _id: false,
    timestamps: true,
});

//Custom query helpers
DemoSchema.query.sortable = function(req){
    if(req.query.hasOwnProperty('_sort')){
        const isValidType = ['asc', 'desc'].includes(req.query.type)
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        })
    }

    return this
}

//add plugins
mongoose.plugin(slug);

DemoSchema.plugin(AutoIncrement)
DemoSchema.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all',
    })

module.exports = mongoose.model('Demo', DemoSchema)