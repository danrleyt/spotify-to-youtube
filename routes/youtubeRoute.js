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
      const data = await youtube.search.list({
        part: 'snippet',
        q: `${item.name} ${item.artists[0].name} live`,
        maxResults: 1
      });
      youtubeList.push(data.data.items[0].id.videoId);
    }
    res.send(youtubeList);
  });
};
