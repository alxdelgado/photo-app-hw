const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/user'); 
mongoose.connection.on('connected', () => {
  console.log('mongoose is connected from the server'); 
});

mongoose.connection.on('disconnected', () => {
  console.log('mongoose is disconnected from the server'); 
});

mongoose.connection.on('error', (error) => {
  console.log(error, 'error connecting to mongodb server');
});