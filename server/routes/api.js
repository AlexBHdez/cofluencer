const express = require('express');

const router = express.Router();
const FB = require('fb');

router.get('/private', (req, res) => {
  res.status(200).json({ message: 'Hola estas en la ruta' });
});

router.get('/ig/:igUserName', (req, res) => {
  const instaUser = ((igUserName, cb) => {
    FB.api(
      '/17841407080190618',
      {
        fields: `business_discovery.username( ${igUserName} ){username,biography,website,followers_count,media_count,media{caption, comments_count,like_count, media_url, media_type}}`,
        // incluir token en variable actual caduca 13 de abril de 2018.
        access_token: 'EAAZAp8OJ3y18BAERwJIlyVBAZARb6Q8I8KgVHDuZBrtsT42aNkgzcDToMZCYJWgH7T3A6D1ZAcZBdWlFqcCPQgMEOO81nGMvZCeOO7QuKZC747mOZBgeSBv5C6n5ZCZBg7jZBV3ZAiEUvpU3eGGZCtysv5mLU5ah5ekFJYXXNMU26wgzgqsFSmTQpMAFVx5ICFI9mXyqcZD',
      },
      (igUser) => {
        if (!igUser || igUser.error) {
          console.log(!igUser ? 'error occurred' : igUser.error);
          cb(igUser.error);
        } else {
          cb(null, igUser.business_discovery);
        }
      },
    );
  });
  instaUser(req.params.igUserName, (err, iguser) => {
    res.status(200).json({ iguser });
  });
});

module.exports = router;
