const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Setting the Templating Engine
app.set('view engine', 'ejs');
app.set('views', 'views')

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./contollers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', adminRouter);
app.use('/', shopRouter);

app.use(errorController.get404);

app.listen(3000, ()=>{
    console.log('http://localhost:3000');
});