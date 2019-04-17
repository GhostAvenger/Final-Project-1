const express = require('express');
const script = require('./functions');
const hbs = require('hbs');

const port = process.env.PORT || 8080;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    console.log('User requested welcome page');
    response.render('welcome.hbs');
});

app.get('/nasa', (request, response) => {
    console.log('User requested nasa page');
    response.render('nasa.hbs');
});

app.get('/cards', (request, response) => {
    console.log('User requested cards page');
    response.render('cards.hbs');
});

app.get('/404', (request, response) => {
    console.log('User requested error page');
    response.send({
        error: 'Page not found'
    })
});

app.listen(port, () => {
    console.log(`Server is up on the port ${port}`)
});