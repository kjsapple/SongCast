var express = require('express');
var router = express.Router();
var ctrlCatalogue = require('../controllers/list');
var ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlCatalogue.homelist);
router.get('/songs/review/new', ctrlCatalogue.addReview);
router.get('/songs/BlindingLights', ctrlCatalogue.songsInfo); 
router.get('/songs/Bones', ctrlCatalogue.songsInfo1); 
router.get('/songs/wd', ctrlCatalogue.songsInfo2); 
router.get('/songs/idc', ctrlCatalogue.songsInfo3); 
router.get('/songs/songs-catalogue', ctrlCatalogue.catalogue);


/* Other pages */

router.get('/about', ctrlOthers.about);

module.exports = router;