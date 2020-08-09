
const db = require('../db');
module.exports.login = (req, res) =>{
    res.render('auth/login')
}

module.exports.postLogin = (req, res) =>{
   var email =  req.body.email;
   var pass = req.body.pass;
   var user = db.get('users').find({email: email}).value();

   if(!user){
       res.render('auth/login',{
           errors: [
               'user does not exit'
           ],
           values: req.body
       });
       return;
   }
   if(user.pass !== pass){
       res.render('auth/login',{
           errors: [
               'Wrong pass'
           ],
           values: req.body
       });
       return;
   }
   res.redirect('/users');
}