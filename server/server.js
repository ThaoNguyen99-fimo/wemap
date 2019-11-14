const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const cors = require('cors')
var request = require('request');
const stylecdn = require('../test_mapbox/style-cdn.json')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname, './map.html'))
})
app.get('/map2', (req, res) => {
    res.sendFile(path.join(__dirname, './map2.html'))
})
app.get('/', (req, res) => {
    res.send(stylecdn)
})
app.post('/reverse', (req, res) => {
    request(`https://api.geocode.earth/v1/reverse?api_key=ge-5673e2c135b93a30&point.lat=${req.body.lat}&point.lon=${req.body.lon}&sources=osm`).pipe(res)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))