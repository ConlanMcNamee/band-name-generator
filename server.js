'use strict';

var express = require("express");
var bodyparser = require("body-parser");
var Adjective = require("./lib/adjective.js");
var Verb = require("./lib/verb.js");
var Noun = require("./lib/noun.js");
var Review = require("./lib/review.js");
console.log(review);
var getRandomWord = require("./lib/getRandomWord.js");
var postRandomWord = require("./lib/postRandomWord.js");
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.listen(port, function() {
	console.log('server available at http://localhost:' + port);
});

app.use(express.static(__dirname + '/app/'));

var verb = new Verb();
var adjective = new Adjective();
var noun = new Noun();
var review = new Review();


app.get("/", function (req, res) {
	res.sendFile("index.html");
});
app.get('/adjective', function (req, res) {
	res.json(getRandomWord(adjective));
});
app.get('/verb', function (req,res) {
	res.json(getRandomWord(verb));
});
app.get('/noun', function (req,res) {
	res.json(getRandomWord(noun));
});
app.get('/review', function (req,res) {
	res.json(getRandomWord(review));
});

app.post('/adjective', function (req,res) {
	var word = postRandomWord(req.body.word, adjective);
	res.json(word);
});

app.post('/verb', function (req,res) {
	var word = postRandomWord(req.body.word, verb);
	res.json(word);
});
app.post('/noun', function (req,res) {
	var word = postRandomWord(req.body.word, noun);
	res.json(word);
});















