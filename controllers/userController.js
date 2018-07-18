// Setting up the controller
const express = require('express'); 
const router = express.Router(); 
const User = require('../models/user'); 
const Photo = require('../models/photos')

///////////////////////////////////////
//  USER INDEX ROUTE // 
router.get('/', (req, res) => {
  User.find({}, (err, foundUser) => {
    res.render('user/index.ejs', {
      user: foundUser
    });
  });
});
//////////////////////////////////////



///////////////////////////////////////
//  USER NEW ROUTE - shows new create page. // 
router.get('/new', (req, res) => {
  res.render('user/new.ejs') 
});
///////////////////////////////////////


///////////////////////////////////////
// SHOW ROUTE // 
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('user/show.ejs', {
      user: foundUser
    });
  });
});
///////////////////////////////////////



///////////////////////////////////////
// DELETE ROUTE - this is where you delete associated articles. 
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    console.log(deletedUser, ' this is the deletedUser')
    
    // we are collecting all of the photo Ids from the deletedUsers articles property
    const photoIds = [];
    for(let i =0; i < deletedUser.photos.length; i++){
      photoIds.push(deletedUser.photos[i].id)
    }

    Photo.remove({
      _id: {$in: photoIds}
    }, (err, data) => {
      res.redirect('/user')  
    

    });
  });
});
///////////////////////////////////////



///////////////////////////////////////
// EDIT ROUTE // 
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('user/edit.ejs', {
      user: foundUser
    });
  });
});
///////////////////////////////////////



///////////////////////////////////////
// PUT ROUTE //
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
    res.redirect('/user')
  });
});
///////////////////////////////////////



///////////////////////////////////////
// CREATE ROUTE // 
router.post('/', (req, res) => {
  User.create(req.body, (err, createUser) => {
    if(err) console.log('mongoose query error in user create route', err);
    else {
      console.log(createdUser)
      console.log('^^^ here is the user you created')
      res.redirect('/user'); 
    }
  });
});
///////////////////////////////////////


///////////////////////////////////////
// EXPORT ROUTER // 
module.exports = router; 
///////////////////////////////////////


















