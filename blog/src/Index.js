const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000
const handlebars = require('express-handlebars');

const methodOverride = require('method-override');

const route  = require('./routes');
const db = require('./config/db');

//connect to db 

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger 

app.use(morgan('combined'))

// template engine 
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
      sum: (a,b) => a + b,
}
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));

// route init 
route(app);


app.listen(port, () => {
  console.log(` Example App listening at http://localhost:${port}`)
})