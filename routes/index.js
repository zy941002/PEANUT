var express = require('express');
var path = require(`path`)
var music = path.join(__dirname, '../public/music');
var fs  = require(`fs`);

/* GET home page. */
module.exports = function(app) {
  app.get(`/music`,(req,res,next)=>{
    fs.readdir(music,(err,music)=>{
      if (err){
        console.log(err);
      } else{
        res.render(`music`, { music });
      }
    });
  });
};