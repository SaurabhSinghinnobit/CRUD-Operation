const express = require('express');  // Here importing the express framework
// mongo is ODM(Object document mapper)It will connect the javascript object to Mongodb database document.
const mongoose = require('mongoose');

// In url express framework of nodejs connect to the mongodb and AlienDBex is the name of database 
// which run on different machine we also mention IP add. here machie is localhost 
const url = 'mongodb://localhost/AlienDBex' 

const app = express(); // Here initialising the express object.

// Here stablise a connection to the database.
mongoose.connect(url,{useNewUrlParser:true})

// To hold the connection
const con = mongoose.connection

//now when connection is establise then the 'on' event is other event,close or open event.
con.on('open',() =>{
    console.log('connected...');
});

// if can't use json property use then use this.. here we add middleware i want to use json here.
app.use(express.json())

// It will use for routing purpose.
const alienRoter = require('./routes/aliens')
app.use('/aliens',alienRoter)

// server is listen on this port number
app.listen(9000, () => {
    console.log('server started perfectly..')
})
