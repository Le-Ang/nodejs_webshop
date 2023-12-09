const newsRouter = require('./news');
const loginRouter = require('./login');
const cartRouter = require('./cart')
const meRouter = require('./me');
const demosRouter = require('./demos');
const siteRouter = require('./site');

function route(app) {

    app.use('/cart', cartRouter)

    app.use('/login', loginRouter)

    app.use('/news', newsRouter)

    app.use('/me', meRouter)

    app.use('/demos', demosRouter)

    app.use('/', siteRouter)
}

module.exports = route;
