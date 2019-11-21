'use strict';
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
/* GET home page. */
router.get('/loadtest', function (req, res) {

    request('http://www.google.com', function (error, response, body,time) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        console.log(time.timingPhases);
        res.send(response);
    });
});
module.exports = router;
