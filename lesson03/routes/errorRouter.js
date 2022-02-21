const {Router} = require('express');
// const error = require('../db/users')

const errorRouter = Router();

errorRouter.get('/', (req, res) => {
    // const filter = users.find(user => user.id === +req.params.userId)
    res.render('error', {error});
});


module.exports = errorRouter;