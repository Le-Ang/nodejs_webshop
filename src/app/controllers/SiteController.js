const Demo = require('../models/Demo');
const { multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
    //[Get]
    home(req, res,next){
        Demo.find({}).limit(3)
            .then((demos) => {
                res.render('home', {
                    demos: multipleMongooseToObject(demos),
                })                
            })
            .catch(next)        
        }    
}

module.exports = new SiteController();
