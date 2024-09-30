const express = require('express');
const path = require('path');
const connect = require('./connection');
const user = require('./routes/user');
const app = express();
connect();
app.use(user);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running on 3000");
    }
})