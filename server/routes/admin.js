const express = require('express');
const router = express.Router();
const game = require('../models/addGame').Game;
const controllers = require('../controller/controllers')
const multer = require('multer');

const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, DIR);
    },
    filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
    }
});
//post game
router.post('/admin/addgame',upload.array('files', 10),controllers.addGame)
//Edit game
router.patch('/admin/editGame/:gameID',controllers.editGame)
//Delete game
router.delete('/admin/deleteGame/:gameID',controllers.deleteGame)
//get all games
router.get('/admin/getGames',controllers.getGames)
//get One game
router.get('/admin/getGames/:gameID',controllers.getOneGame)
//post News
router.post('/admin/addnews',upload.array('files', 10),controllers.addNews)
//edit news
router.patch('/admin/editNews/:newsID',controllers.editNews)
//delete news
router.delete('/admin/deleteNews/:newsID',controllers.deleteNews)
//get all news
router.get('/admin/getNews',controllers.getNews)
//get one news
router.get('/admin/getNews/:newsID',controllers.getOneNews)
//download
router.get('/download/:gameID',controllers.downloadGame)
//post question
router.post('/Faq',controllers.submitQuestion)
//comment
router.post('/comment/:gameID',controllers.commentedGame);
//get comment by gameID
router.get('/getComment/:gameID',controllers.getCommentByGameID);
//rating
router.post('/rating/:gameID',controllers.ratingGame)
// get rating by gameID
router.get('/getRating/:gameID',controllers.getRatingByGameID);
//edit rating
router.patch('/editedRating/:ratingID',controllers.editedRating);

module.exports = router;