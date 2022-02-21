const users = require("../db/users");

function isUserValid(req, res, next) {
    try {
        const {firstName, password, email} = req.body;
        const emailDuplicated = users.some(user => user.email === email)

        if (!firstName || !password) {
            throw new Error('login or password is not provided')
        }
        if (password.length < 6) {
            throw new Error('Not valid password')
        }
        if (emailDuplicated) {
            throw new Error('Email already in use, pick another one')
        }
        next()
    } catch (err) {
        console.log(err.message)
        res.status(400).send(err.message)
    }
}

module.exports = isUserValid;