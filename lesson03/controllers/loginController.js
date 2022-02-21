const users = require("../db/users");

class LoginController{
    loginUser(req,res){
        res.render('login')
    }
    addUser({body}, res){
        // const emailDuplicated = users.some(user => user.email === body.email)
        // console.log(req.body)
        // if (emailDuplicated) {
        //     error = 'Email already in use, pick another one'
        //     res.redirect('/error')
        //     return
        // }
        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1})
        res.redirect('/users')
    }

}

module.exports = new LoginController();