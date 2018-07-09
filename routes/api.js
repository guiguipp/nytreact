// const router = require("express").Router()
const express = require("express")
const app = express();
const db = require("../models/");


// const router = express.Router();

/*    .ajax({
        method: 'GET',
        url: ""
    }).then(function(resp){
        console.log(resp)
    })
 */
console.log("Getting the routes")

// get list of articles from the db
app.get("/articles", function(req,res) {
    db.Article.find({})
    .then(function(dbArticle){
        res.json(dbArticle);
    })
    .catch(function(err){
        res.json(err);
    })
})

// add a new article to the db
app.post("/articles", function(req,res) {
    res.send({type:"POST"})
})

// update an article in the db
app.put("/articles/:id", function(req,res) {
    res.send({type:"PUT"})
})

// delete an article from the db
app.delete("/articles/:id", function(req,res) {
    res.send({type:"DELETE"})
})  

module.exports = app;