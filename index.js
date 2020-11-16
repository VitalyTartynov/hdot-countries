const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3200;

var countries = [
    { name: 'Common QA', url: 'hdot-public-qa.azurewebsites.net/', imageUrl: ''},
    { name: 'Indonesia', url: 'tokobintang.co.id/', imageUrl: ''},
    { name: 'Nigeria', url: 'quickdrinks.com/', imageUrl: ''}
]

app.get('/api', (req, res, next) => {
    res.send('Hello world');
});

app.get('/countries', cors(), function(req, res, next) {
    res.send(countries);
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});