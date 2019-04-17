const request = require('request');

var getImages = (query, callback) => {
    request({
        url: '"https://images-api.nasa.gov/search?q=' + encodeURIComponent(query),
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cannot connect to rest-countries API');
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Cannot find requested country');
        }
        else if (body.status !== 'ZERO_RESULTS') {
            callback(undefined, {
                image1: collection.items[0].links.href,
                image2: collection.items[1].links.href,
                image3: collection.items[2].links.href,
                image4: collection.items[3].links.href
            })
        }
    });
};