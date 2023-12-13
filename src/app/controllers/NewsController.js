const Blog = require('../models/Blog');
const { mongooseToObject } = require('../../util/mongoose')
const { multipleMongooseToObject} = require('../../util/mongoose')

class NewsController {
    //[Get]
    showblog(req,res,next){
        Blog.find({})
            .then(blogs =>
                res.render('blogs', { blogs: multipleMongooseToObject(blogs) })
            )
            .catch(next)
    }
    show(req, res, next) {
        Blog.findOne({slug: req.params.slug})
            .then(blogs =>
                res.render('blogs/blogshow', { blogs: mongooseToObject(blogs) })
            )
            .catch(next)
    }
    //[Get] /blogs/create
    create(req, res, next) {
        res.render('blogs/blogcreate')
    }

    //[Get] /blogs/store
    store(req, res, next) {
        req.body.image = `${req.body.image}`
        const blog = new Blog(req.body)
        blog
            .save()
            .then(() => res.redirect('/me/stored/blogs'))
            .catch(next)        
    }
    edit(req, res, next) {
        Blog.findById(req.params.id)
            .then(blog => res.render('blogs/blogedit',{
                blog: mongooseToObject(blog)
            }))
            .catch(next)
    }

    //[PUT] /blogs/:id
    update(req, res, next) {
        Blog.updateOne({_id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/blogs'))
            .catch(next)
    }

    //[DELETE] /blogs/:id
    delete(req, res, next) {
        Blog.delete({_id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[PATCH] /blogs/hanle-form-actions
    handleFormActions(req, res, next) {
        switch(req.body.action){
            case 'delete':
                Blog.delete({_id: { $in: req.body.blogIds} })
                    .then(() => res.redirect('back'))
                    .catch(next)                
                break;
            default:
                res.json({message: 'Action is invalid'})
        }
    }
}

module.exports = new NewsController();

