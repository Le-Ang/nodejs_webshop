const { mongooseToObject } = require('../../util/mongoose')
const Account = require('../models/Account');

class LoginController {
    login(req,res){
        res.render('login')
    }
    info(req, res, next) {
        Account.findOne({slug: req.params.slug})
            .then(account =>
                res.render('login/info', { account: mongooseToObject(account) })
            )
            .catch(next)
    }
}

module.exports = new LoginController();