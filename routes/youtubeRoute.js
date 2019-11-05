const { google } = require('googleapis');
const keys = require('../config/keys');
const youtube = google.youtube({
  version: 'v3',
  auth: keys.youtubeKey
});

module.exports = app => {
  app.post('/api/videos', async (req, res) => {
    let list = req.body;
    let youtubeList = [];
    for (let item of list) {
      youtube.search.list(
        {
          part: 'snippet',
          q: `${item.name} ${item.artists[0].name} live`
        },
        (err, data) => {
          if (err) {
            console.error('Error: ' + err);
          }
          if (data) {
            console.log(data);
          }
        }
      );
    }
  });
};
