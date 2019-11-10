const GenredList = require('../../models/genred');
const genredFilms = require('../../resources/FilmsGenred.json');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const GANREDLIST = new GenredList();
GANREDLIST.setGenredList(genredFilms.list);

app.get('/', (req, res)=>{
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).json(GANREDLIST);
})

module.exports = app;
