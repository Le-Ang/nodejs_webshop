class LoginController {
    index(req, res) {
        res.render('login');
    }

    show(req, res) {
        res.send('NEW DETAIL!');
    }
}

module.exports = new LoginController();