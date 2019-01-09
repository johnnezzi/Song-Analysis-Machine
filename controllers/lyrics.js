const { getLyrics, getAnalysis, toneAnalyzer } = require('../utils/index.js');

exports.getLyricsCont = (req, res, next) => {
  getLyrics(req.query.q_track, req.query.q_artist)
    .then(lyrics => {
      console.log(lyrics)
      const song = lyrics.data.message.body.lyrics.lyrics_body;
      return song.replace(/\n/g, '');
    })
    .then(res => {
      return getAnalysis(toneAnalyzer, res, false);
    })
    .then(analysis => {
      const {
        tones
      } = analysis.document_tone.tone_categories[0]
      const formatedTones = tones.map(({score, ...restTone}) =>{
        return {...restTone, score: Math.round(score*100)}
      })
      console.log(formatedTones)
      res.status(201).render('pages/analyze.ejs', {tones:formatedTones});
    })
    .catch(err => console.log(err));
};
