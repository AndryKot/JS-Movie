const MovieList = require('../../models/movie');
// const GenredList = require('../../models/genred')
const dataFilms = require('../../resources/InfoFilms.json');
// const genredFilms = require('../../resources/FilmsGenred.json')
const cors = require('cors');

const express = require('express');
const fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

let pathToFile = "resources/InfoFilms.json"
let movieList = new MovieList();
movieList.setMovieList(dataFilms.list);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res, next)=>{       
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).json(movieList);
});

app.put('/', (req, res) => {
    let id = req.body.id;
    if(id){
        let options = req.body.options;
        let r = movieList.edit(id, options)
    
        if(!r.result){
            res.send(r.data);
        }
    
        writeFile().then(data=>{
            res.set("Access-Control-Allow-Origin", "*");
            res.send(data)
        });
    }
    else {
        res.send('Bad request');
    }
})

app.delete('/', (req, res) => {
    let id = req.body.id;
    if(id){
        let r = movieList.deleteMovie(id)

        if(!r.result){
            res.send(r.data);
        }
           
        writeFile().then(data=>{
            res.set("Access-Control-Allow-Origin", "*");
            res.send(data)
        })
    }
    else {
        res.send('Bad request');
    }   
})

app.post('/', (req, res) => {
    let movie = req.body.movie;
    console.log(req.body)
    if(movie){
        movieList.addMovie(movie);
    
        writeFile().then(data=>{
            res.set("Access-Control-Allow-Origin", "*");
            res.send(data)
        })
    }
    else {
        res.send('Bad request');
    }
})

app.post('/getByOptions', (req, res) => {
    let options = req.body.options;
    if(options){
        let foundedFilms = movieList.findByOtions(options)
        if(foundedFilms.length > 0)
            res.status(200).json(foundedFilms);
        else res.send('Films is not defined');
    } else {
        res.send('Bad request');
    }
})

function writeFile() {
    let prom = new Promise((resolve) => {
        fs.open(pathToFile, 'w', '0644', (err, file_handle)=>{
            if(!err){
                fs.write(file_handle, JSON.stringify(movieList), null, 'utf8',(err, written)=>{
                    if(!err){
                        resolve('Successfully');
                    } else {                      
                        resolve(err);
                    }
                })
            } else {
                resolve(err);
            }
        });
    })
    return prom;
}

module.exports = app;

// console.log("set:", movieList);

// movieList.deleteMovi("HO00000199");
// console.log("delete:", movieList);

// movieList.addMovie(value[0]);
// console.log("one item add:", movieList);

// movieList.addMovie(value);
// console.log("array add:", movieList);

// movieList.edit("HO00000205", {ID:"666", Title: "Hello world"});
// console.log("Edit item:", movieList);

// let options = { 
//     "Title": "Bomj Style"
// }

// let byOptions = movieList.findByOtions(options)
// console.log(byOptions);