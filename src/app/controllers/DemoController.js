const Demo = require('../models/Demo');
const { mongooseToObject } = require('../../util/mongoose')

class DemoController {
    //[Get]
    show(req, res, next) {
        Demo.findOne({slug: req.params.slug})
            .then(demo =>
                res.render('demos/show', { demo: mongooseToObject(demo) })
            )
            .catch(next)
    }
    //[Get] /demos/create
    create(req, res, next) {
        res.render('demos/create')
    }

    //[Get] /demos/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
        const demo = new Demo(req.body)
        demo
            .save()
            .then(() => res.redirect('/me/stored/demos'))
            .catch(next)        
    }
    edit(req, res, next) {
        Demo.findById(req.params.id)
            .then(demo => res.render('demos/edit',{
                demo: mongooseToObject(demo)
            }))
            .catch(next)
    }

    //[PUT] /demos/:id
    update(req, res, next) {
        Demo.updateOne({_id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/demos'))
            .catch(next)
    }

    //[DELETE] /demos/:id
    delete(req, res, next) {
        Demo.delete({_id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DELETE] /demos/:id/force
    forceDestroy(req, res, next) {
        Demo.deleteOne({_id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[PATCH] /demos/:id/restore
    restore(req, res, next) {
        Demo.restore({_id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[PATCH] /demos/hanle-form-actions
    handleFormActions(req, res, next) {
        switch(req.body.action){
            case 'delete':
                Demo.delete({_id: { $in: req.body.demoIds} })
                    .then(() => res.redirect('back'))
                    .catch(next)                
                break;
            default:
                res.json({message: 'Action is invalid'})
        }
    }
}

module.exports = new DemoController();
