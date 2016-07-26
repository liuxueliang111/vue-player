/**
 * Created by kylin on 16/7/15.
 */

var express = require('express');
var router = express.Router();
var api = require('NeteaseCloudMusicApi').api


module.exports = function (app) {

    app.post('/song', function (req, res) {
        console.log(req.body.id);
        var id = req.body.id
        api.song(id,function(data){
            res.json(data)
        })
    });
    app.get('/song', function (req, res) {
        var id = req.query.id
        api.song(id,function(data){
            res.json(data)
        })
    });
    app.get('/lrc', function (req, res) {
        var id = req.query.id
        api.lrc(id,function(data){
            res.json(data)
        })
    });
    app.get('/search', function (req, res) {
        var name = req.query.name
        api.search(name,function(data){
            res.json(data)
        },10)
    });
};