const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./services/passport');

const app = express();

app.use(
  cookieSession({
    maxAge: 36000,
    keys: [keys.cookieKey]
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/youtubeRoute')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
