const mongoose = require('mongoose');
const Schema = mongoose.Schema;

async function connection(){
    try{
        await mongoose.connect(`mongodb://localhost:27017/batch3-30-sep`);
        console.log("database connected");
    }catch(err){
        console.log(err);
    }
}

module.exports = connection;