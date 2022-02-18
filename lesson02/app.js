const express = require('express');
const path = require('path')
const {engine} = require('express-handlebars')

const users = [];


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, 'static')));
console.log(path.join(__dirname, 'static'))
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));


app.get('/welcome', (req, res) => {
    res.send('Hello from server')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/users', (req, res) => {

    // const filter = users.find(user => user.id === +req.params.userId)
    res.render('users', {users});

});

app.get('/users/:userId', (req, res) => {
    const user = users.find(user => user.id === +req.params.userId)
    res.render('usersDetails', {user});
});

app.get('/error', (req, res) => {

    // const filter = users.find(user => user.id === +req.params.userId)
    res.render('error', {error});

});

app.post('/login', ({body}, res) => {

    const emailDuplicated = users.some(user => user.email === body.email)
    // console.log(req.body)
    if (emailDuplicated) {
        error = 'Email already in use, pick another one'
        res.redirect('/error')
        return
    }
    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1})
    res.redirect('/users')
})

app.use((req, res) => {
    res.render('notFound')
})


app.listen(5200, () => {
    console.log('Serves has started on PORT 5200')
})