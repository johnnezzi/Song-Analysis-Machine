const { version, iam_apikey, musicapi } = require('../config');
const axios = require('axios');

// class constructor from watson used for request for tone
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

exports.getLyrics = (track, artist) => {
  const baseUrl = 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get';
  return axios.get(
    `${baseUrl}?apikey=${musicapi}&q_track=${track}&q_artist=${artist}`
  );
};

const defaultUrl = 'https://gateway-lon.watsonplatform.net/tone-analyzer/api';

exports.toneAnalyzer = new ToneAnalyzerV3({
  version,
  iam_apikey,
  url: defaultUrl
});

exports.getAnalysis = (toneAnalyzer, tone_input, sentenceAnalysis) => {
  return new Promise((resolve, reject) => {
    toneAnalyzer.tone(
      {
        tone_input,
        content_type: 'text/plain'
      },
      function(err, tone) {
        if (err) reject(err);
        else resolve(tone);
      }
    );
  });
};
