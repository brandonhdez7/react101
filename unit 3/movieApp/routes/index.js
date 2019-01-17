var express = require('express');
var router = express.Router();
// our node module is in gitignore
const apiKey = require('./config');
const apiBaseUrl = 'http://api.themoviedb.org/3';
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300'
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
console.log(nowPlayingUrl)


const request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(nowPlayingUrl,(error,response,body)=>{
    // console.log(typeof(body));
    const parsedData = JSON.parse(body);
    // console.log(parsedData);
    // we now have the data from movieApi.
    // lets send it over to the view/EJS!
    res.render('now_playing',{
      parsedData: parsedData.results,
      imageBaseUrl: imageBaseUrl
    });
    // res.json(parsedData)
  });
  // res.render('index', { title: 'Express' });
});
module.exports = router;

