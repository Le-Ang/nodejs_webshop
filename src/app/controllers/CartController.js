class CartController {
    index(req, res) {
        res.render('cart');
    }

    show(req, res) {
        res.send('NEW DETAIL!');
    }
}

module.exports = new CartController();