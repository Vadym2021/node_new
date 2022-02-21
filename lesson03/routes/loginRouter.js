const {Router} = require('express');
const users = require('../db/users')
const LoginController = require('../controllers/LoginController')
const loginMiddleware = require('../middleware/isUserValid')

const loginRouter = Router();

loginRouter.get('/', LoginController.loginUser);
loginRouter.post('/', loginMiddleware, LoginController.addUser);


module.exports = loginRouter;