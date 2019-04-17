const request = require('request');

var getImages = (query, callback) => {
    request({
        url: 'https://images-api.nasa.gov/search?q=' + encodeURIComponent('Earth'),
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cannot connect to Nasa API');
        }
        else if (body.collection.metadata.total_hits === 0) {
            callback('Cannot find requested images');
        }
        else {
            for (images in body.collection.items) {
                var x = document.createElement("IMG");
                x.setAttribute("src", "body.collection.items[images].links[0].href");
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                x.setAttribute("alt", "The Pulpit Rock");
                document.body.appendChild(x);
            }
        }
    });
};

var getCards = (numOfCards, callback) => {
    console.log('Loading Cards');
    request({
        url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=' + encodeURIComponent(3),
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cannot connect to Cards API');
        }
        else if (len(body.cards) === 0) {
            callback('Cannot request 0 cards');
        }
        else {
            for (card in body.cards) {
                var x = document.createElement("IMG");
                x.setAttribute("src", "body.cards[card].image)");
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                x.setAttribute("alt", "The Pulpit Rock");
                document.body.appendChild(x);
            }
        }
    });
};

module.exports = {
    getImages,
    getCards
};