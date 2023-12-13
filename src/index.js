const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const SortMiddleWare = require('./app/middlewares/SortMiddleware')

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'))

//Custom middleware
app.use(SortMiddleWare)

app.use(morgan('combined'));

app.engine('hbs', handlebars.engine({ 
    extname: '.hbs',
    helpers: require('./helpers/handlebars')
    }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
app.use("/img", express.static(path.join(__dirname, "/public/img")));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
