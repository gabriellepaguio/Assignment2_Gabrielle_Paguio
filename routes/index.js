var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  // create a page for us
  res.render('index', { 
    title: 'Home'});
});

/* GET home page. */
app.get('/home', function(req, res, next) {
  // create a page for us
  res.render('index', { 
    title: 'Home'});
});

/* GET about me page. */
app.get('/about', function(req, res, next) {
  // routes to about_me ejs file under views
  res.render('about_me', { 
    title: 'About Me'});
});

/* GET contact us page. */
app.get('/contact', function(req, res, next) {
  // create a page for us
  res.render('contact', { 
    title: 'Contact'});
});

/* GET projects page. */
app.get('/projects', function(req, res, next) {
  // create a page for us
  res.render('projects', { 
    title: 'Projects'});
});

module.exports = app;


/* 
MVC --> Model View Controller
model --> to connect our logic
view --> pages
controller --> the logic behind our routes
*/