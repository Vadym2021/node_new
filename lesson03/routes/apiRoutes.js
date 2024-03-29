const {Router} = require('express');
const userRouter = require('./userRouter')
const loginRouter = require('./loginRouter')
const errorRouter = require('./errorRouter')

const routes = Router();


routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/error', errorRouter);

routes.use((req, res) => {
    res.render('notFound')
})

routes.get('/', (req, res) => {
    res.send('Hello from server')
});



module.exports = routes;

