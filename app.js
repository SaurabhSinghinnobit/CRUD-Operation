const express = require('express');  // Here importing the express framework
// mongo is an ODM(Object document mapper)It will connect the javascript object to a Mongodb database document.
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
 
// In url express framework of node js connect to the mongodb and AlienDBex is the name of database
// which run on different machines we also mention IP add. here machine is localhost
const url = 'mongodb://localhost/AlienDBex'
 
const app = express(); // Here initialising the express object.

// mongoose.connect('mongodb://localhost/dbname', function(err) {
//     if (err) throw err;
// });
 
// Here stabilise a connection to the database and also check the conne
mongoose.connect(url,{useNewUrlParser:true}, function(err) {
    if(err){
      console.log("Here connection is not correct");
    }
   })

// To hold the connection
const con = mongoose.connection
 
//Now when connection is established then the 'on' event is another event,close or open event.
con.on('open',() =>{
   console.log('connected...');
});

// If connection is not established then error is..
con.on('error',(err) => { 
   console.log('Your connection is wrong' + err)
});

// if you can't use json property then use this.. here we add middleware i want to use json here.
//app.use(express.json())
app.use(bodyParser.json())
 
// It will be used for routing purposes.
const alienRoter = require('./routes/aliens')

// Here '/' is used for homeRout // http://localhost:9000
app.use('/',alienRoter)
 
// server is listen on this port number
app.listen(9000, () => {
   console.log('server started perfectly..')
})


