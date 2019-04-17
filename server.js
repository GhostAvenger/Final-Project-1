const express = require('express');
const script = require('./functions');
const hbs = require('hbs');

const port = process.env.PORT || 8080;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('welcome.hbs');
});

app.get('/nasa', (request, response) => {
    response.render('nasa.hbs');
});

app.get('/cards', (request, response) => {
    response.render('cards.hbs');
});

app.get('/404', (request, response) => {
    response.send({
        error: 'Page not found'
    })
});

app.listen(port, () => {
    console.log(`Server is up on the port ${port}`)
});