// Setting up the controller
const express = require('express'); 
const router = express.Router(); 

const User = require('../models/user'); 
const Photo = require('../models/photos');

///////////////////////////////////////
//  USER INDEX ROUTE // 
router.get('/', async (req, res, next) => {

  try {
    const foundUser = await User.find({});
      res.render('user/index.ejs', {
        user: foundUser
    });
  } catch(err) {
    next(err)
  }

});
//////////////////////////////////////



///////////////////////////////////////
//  USER NEW ROUTE - shows new create page. // 
router.get('/new', async (req, res, next) => {

  try {
    const newUser = await User.find({});
    res.render('user/new.ejs')
  } catch(err) {
    next(err)
  }
 
});
///////////////////////////////////////


///////////////////////////////////////
// SHOW ROUTE // 
router.get('/:id', async (req, res) => {

  try {
    const showUser = await User.findById(req.params.id);
      res.render('user/show.ejs', {
      user: showUser
    });

  } catch(err) {

  }

});
///////////////////////////////////////



///////////////////////////////////////
// DELETE ROUTE - this is where you delete associated articles. 
router.delete('/:id', async (req, res) => {


  try {

    const deletedUser = await User.findByIdAndRemove(req.params.id)
    res.redirect('/user')

  } catch(err) {

    res.send(err)

  }

});
///////////////////////////////////////



///////////////////////////////////////
// EDIT ROUTE // 
router.get('/:id/edit', async (req, res) => {

  try {
    const editUser = await User.findById(req.params.id)
      res.render('user/edit.ejs', {
      user: foundUser
    });

  } catch(err) {
    res.send(err)

  }

});
///////////////////////////////////////



///////////////////////////////////////
// PUT/UPDATE ROUTE //
router.put('/:id', async (req, res) => {

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/user')

  } catch(err) {
    res.send(err)
  }

});
///////////////////////////////////////



///////////////////////////////////////
// CREATE ROUTE // 
router.post('/', async (req, res) => {

  try {
    const createdUser = await User.create(req.body)
    res.redirect('/user')
  } catch(err) {
    res.send(err)
  }

});
///////////////////////////////////////


///////////////////////////////////////
// EXPORT ROUTER // 
module.exports = router; 
///////////////////////////////////////


















