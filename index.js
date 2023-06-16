const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

let events = [];

app.use(express.static('dist'));

app.get('/getEvents', (req, res) => {
    console.log('/getEvents');
    fs.readFile('./events.json', (err, data) => {
        if (err) {
            res.send([]);
        } else {
            events = JSON.parse(data)
            res.send(events);
        }
    });
});

app.listen(port);
console.log('ok');