const users = require("../db/users");

class userController {
    renderUsers(req, res) {
        res.render('users', {users})
    }

    getUserById(req,res){
        const user = users.find(user => user.id === +req.params.userId);
        res.render('usersDetails', {user});
    }

}

module.exports = new userController();