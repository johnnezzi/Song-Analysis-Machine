const apiRouter = require('express').Router();
const { getLyricsCont } = require('../controllers/lyrics.js');

apiRouter.get('/analysis', getLyricsCont);

module.exports = apiRouter;
