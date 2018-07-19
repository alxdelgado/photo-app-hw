const express = require('express'); 
const router = express.Router(); 

const Photo = require('../models/photos'); 
const User = require('../models/user'); 

///////////////////////////////////////
// PHOTO INDEX ROUTE // 
router.get('/', async (req, res) => {

  try {
    const foundPhoto = await Photo.find({});
      res.render('photos/index.ejs', {
      photos: foundPhoto
  });


  } catch(err) {

    res.send(err)

  }

});
///////////////////////////////////////



///////////////////////////////////////
// PHOTO NEW ROUTE // 
router.get('/new', async (req, res, next) => {

  try {
    const newPhoto = await Photo.find({});
      res.render('photos/new.ejs', {
      photos: allPhotos
    });

  } catch(err) {
    next(err)
  }

});
///////////////////////////////////////



///////////////////////////////////////
// PHOTO CREATE ROUTE // 
router.post('/', async (req, res) => {

  try {
    const createPhoto = await Photo.findById(req.body.userId);
    res.redirect('/photos')

  } catch(err) {

    res.send(err)

  }

});
///////////////////////////////////////



///////////////////////////////////////
// PHOTOS SHOW ROUTE // 
router.get('/:id', async (req, res) => {

  try {
    const showUser = await Photo.findById(req.params.id)
      res.render("photos/show.ejs", {  
      photos: foundPhotos,
      user: foundUser 
    
      });  

  } catch(err) {

    res.send(err)

  }

});
///////////////////////////////////////



///////////////////////////////////////
// PHOTO DELETE ROUTE // 
router.delete('/:id', async (req, res) => {

  try {

    const deletePhoto = await Photo.findByIdAndRemove(req.params.id)
    res.redirect('/photos')

  } catch(err) {

    res.send(err)
  }

});
///////////////////////////////////////



///////////////////////////////////////
// EDIT ROUTE // 
router.get('/:id/edit', async (req, res) => {

  try {
    const editPhoto = await Photo.findById(req.params.id);
      res.render('photos/edit.ejs', {
      photo: editPhotos,
      user: allUsers,
      photoUser: foundPhotoUser 
  }); 

  } catch(err) {

    res.send(err)
  }

});
///////////////////////////////////////



///////////////////////////////////////
// PHOTO UPDATE ROUTE - we want to update the users photo list // 
router.put('/:id', async (req, res) => {

  try {

    const updatePhoto = await Photo.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/photos/' + req.params.id);

  } catch(err) {

    res.send(err)


  }

});
///////////////////////////////////////



///////////////////////////////////////
// EXPORT ROUTER // 
module.exports = router; 
///////////////////////////////////////






