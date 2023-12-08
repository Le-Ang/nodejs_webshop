const Demo = require('../models/Demo');
const { multipleMongooseToObject} = require('../../util/mongoose')

class MeController {
    //[Get]/me/stored/Demos
    storedDemos(req, res, next) {
        Promise.all([Demo.find({}).sortable(req), 
            Demo.countDocumentsDeleted()])
            .then(([demos, deletedCount])=>{
                res.render('me/stored-demos', {
                    deletedCount,
                    demos: multipleMongooseToObject(demos)})
            })
            .catch(next)
    }

    //[Get]/me/trash/Demos
    trashDemos(req, res, next) {
        Demo.findDeleted({})
            .then(demos => res.render('me/trash-demos', {
                demos: multipleMongooseToObject(demos)
            }))
            .catch(next)
    }
}

module.exports = new MeController();
