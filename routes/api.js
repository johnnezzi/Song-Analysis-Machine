const apiRouter = require('express').Router();
const { getLyricsCont } = require('../controllers/lyrics.js');

apiRouter.get('/lyricsAnalysis', getLyricsCont);

module.exports = apiRouter;
