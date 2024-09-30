const bcrypt = require('bcrypt');   //for encript password in database
const User = require('../models/User');
const saltRounds = 10;

async function signUp(req,res){
    try{
        console.log(req.body,'req.body');
        let password = bcrypt.hashSync(req.body.password,saltRounds);
        console.log(password, 'password');
        let user = new User(req.body);
        user.password = password;
        await user.save();
        // res.end("<h1>sign up successfully</h1>")
        res.redirect('/'); //path diya jata hai
    }catch(err){
        console.log(err.message);
    }
}

async function doLogin(req,res){
    try{
        console.log(req.body,'req.body');
        let user = await User.findOne({ email: req.body.email});
        if(!user){
            res.end("No such user exist");
        }else{
            let isMatch = await bcrypt.compare(req.body.password, user.password);
            console.log(isMatch, 'isMatch');
            if(isMatch){
                res.end("<h1>Login Successfull</h1>")
            }else{
                res.end("<h1>Incorrect Password</h1>");
            }
        // res.end("<h1>Login in process</h1>")
        }
     
    }catch(err){
        console.log(err.message);
    }
}

module.exports = {
    signUp,
    doLogin
}