const express = require('express');
const router = express.Router();
const game = require('../models/addGame').Game;
const controllers = require('../controller/controllers')
//post game
router.post('/admin/addgame',controllers.addGame)
//Edit game
router.patch('/admin/editGame/:gameID',controllers.editGame)
//Delete game
router.delete('/admin/deleteGame/:gameID',controllers.deleteGame)
//get all games
router.get('/admin/getGames',controllers.getGames)
//get One game
router.get('/admin/getGames/:gameID',controllers.getOneGame)
//post News
router.post('/admin/addnews',controllers.addNews)
//edit news
router.patch('/admin/editNews/:newsID',controllers.editNews)
//delete news
router.delete('/admin/deleteNews/:newsID',controllers.deleteNews)
//get all news
router.get('/admin/getNews',controllers.getNews)
//get one news
router.get('/admin/getNews/:newsID',controllers.getOneNews)


module.exports = router;