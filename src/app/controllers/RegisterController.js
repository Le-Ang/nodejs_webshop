const Register = require('../models/Account');
const { multipleMongooseToObject} = require('../../util/mongoose')

class RegisterController {
    register(req, res) {
        res.render('register');
    }

    storeacc(req, res, next) {
        const register = new Register(req.body)
        register
            .save()
            .then(() => res.render('login/info'))
            .catch(next)
    }

}

module.exports = new RegisterController();