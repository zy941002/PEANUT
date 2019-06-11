const express = require('express');
const path = require(`path`);
const fs  = require(`fs`);
const paths = require('./config');
const music = path.join(__dirname, '../public/music');

/* GET home page. */
module.exports = function(app) {
  paths.map(route => {
    app.get(`${route}`, (req, res, next) => {
      let data;
      switch (route) {
        case '/':
          data = paths;
          break;
        default:
          break;
      }
      res.render(path.join(__dirname, `../views${route}`), { data });
      next();
    });
  });

  app.get(`/music`, (req, res, next) => {
    fs.readdir(music, (err, music) => {
      if (err) {
        console.log(err);
        return;
      }
      res.render(`music`, { music });
    });
  });
};