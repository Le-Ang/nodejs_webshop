const newsRouter = require('./news');
const meRouter = require('./me');
const demosRouter = require('./demos');
const siteRouter = require('./site');

function route(app) {

    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/demos', demosRouter);

    app.use('/', siteRouter);
}

module.exports = route;
