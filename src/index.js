const path = require('path');
const morgan = require('morgan');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const { engine } = require('express-handlebars');
const db = require('./config/db');
const router = require('./routes');

//connect to db
  db.connect();   




// routes init
router(app);


app.use(express.urlencoded());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
//template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, './resources', 'views'));

console.log(__dirname);



app.listen(3000);
