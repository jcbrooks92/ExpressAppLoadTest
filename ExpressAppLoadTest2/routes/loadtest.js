'use strict';
var express = require('express');
var router = express.Router();
const request = require('request');
const uuidv1 = require('uuid/v1');
const timestamp = require('time-stamp');
var process = require('process');


/* GET users listing. */
/* GET home page. */
router.get('/loadtest', function (req, res) {

    /*request('https://www.google.com', function (error, response, body,time=true) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        console.log("this time", response.timings);
        res.send(response);
    });*/
    var id = uuidv1();
    console.log(timestamp.utc('YYYY/MM/DD HH:mm:ss'), ' : starting request ', id ," on PID ", process.pid);
    request({
        uri: 'https://www.google.com',
        method: 'GET',
        time: true
    }, (err, resp) => {
            console.log(timestamp.utc('YYYY/MM/DD HH:mm:ss'), " ", id, " ", err || resp.timings);
            var data = { Response : resp.statusCode, Requesttime : resp.timings, PID: process.pid };
            res.send(data);
    });
   
   
});
module.exports = router;
