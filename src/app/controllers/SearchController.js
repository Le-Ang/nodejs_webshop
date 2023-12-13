const Demo = require('../models/Demo');
const { multipleMongooseToObject} = require('../../util/mongoose')

class SearchController {
    //[Get]
    search(req, res,next){
        Demo.find({})
            .then(demos => {
                res.render('search', {
                    demos: multipleMongooseToObject(demos)})
            })
            .catch(next)
        // res.render('home');
    }
}

module.exports = new SearchController();