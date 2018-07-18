const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const methodOverride = require('method-override'); 
const port = 4500; 

// Require db
require('./db/db'); 

// Require middleware. 
app.use(bodyParser.urlencoded({extended: false})); 
app.use(methodOverride('_method'));

app.listen(port, () => {
  console.log('Server is running on port 4500')
});

// main index page 
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Controller
const userController = require('./controllers/userController');
app.use('/user', userController); 






