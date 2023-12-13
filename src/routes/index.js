const newsRouter = require('./news');
const loginRouter = require('./login');
const cartRouter = require('./cart')
const meRouter = require('./me');
const demosRouter = require('./demos');
const siteRouter = require('./site');
const registerRouter = require('./register');
const searchRouter = require('./search');

function route(app) {

    app.use('/search', searchRouter)

    app.use('/cart', cartRouter)

    app.use('/register', registerRouter)

    app.use('/login', loginRouter)

    app.use('/blogs', newsRouter)

    app.use('/me', meRouter)

    app.use('/demos', demosRouter)

    app.use('/', siteRouter)
}

module.exports = route;
