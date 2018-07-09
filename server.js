const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// // Connect to the Mongo DB
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/nyreact-app'
// mongoose.connect(uri, {userNewUrlParse:true});
mongoose.connect(uri)

app.use("/api", require("./routes/api"))
/*
app.get("/articles", function(req,res) {
  res.send({type:"GET"})
  
})*/



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
