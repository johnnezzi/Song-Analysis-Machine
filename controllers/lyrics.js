const { getLyrics, getAnalysis, toneAnalyzer } = require('../utils/index.js');

exports.getLyricsCont = (req, res, next) => {
  getLyrics(req.query.q_track, req.query.q_artist)
    .then(lyrics => {
      const song = lyrics.data.message.body.lyrics.lyrics_body;
      return song.replace(/\n/g, '');
    })
    .then(res => {
      return getAnalysis(toneAnalyzer, res, false);
    })
    .then(analysis => {
      res.status(201).send({ analysis });
    })
    .catch(err => console.log(err));
};
