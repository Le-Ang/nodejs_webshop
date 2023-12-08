const Demo = require('../models/Demo');
const { multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
    //[Get]
    home(req, res,next){
        Demo.find({})
            .then(demos => {
                res.render('home', {
                    demos: multipleMongooseToObject(demos)})
            })
            .catch(next)
        // res.render('home');
    }
    //[Get]/Search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
