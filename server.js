'use strict'

console.log('Our frist server');

require('dotenv').config(); // makes it possible to go in  dotenv files and get the port

const express = require('express'); // requiring express library lin
const cors = require('cors'); // require imports cors allows share info, middleware
const app = express();
const weatherData = require('./data/weather.json');
const { response } = require('express');
app.use(cors());

const PORT = process.env.PORT || 3002; //define port


console.log(weatherData);

class Forecast {
    constructor(weatherObject){ 
    this.datetime = weatherObject.datetime;
    this.description = weatherObject.weather.description;
    }       
}

app.get('/weatherData', (req, res) => {
    const searchQuery = request.query.searchQuery;
    console.log('searchQuery', searchQuery);
    let searchResult = weatherData.find(object => object.city_name.toLowerCase() === searchQuery.tolowerCase());
    console.log(searchResult);
})
const result = searchResult.data.map(dayObj => new Forecast(dayObj));
//const result = new Forecast(searchResult);
response.status(200).send(result);
console.log(result);


app.get('*', (req, res) => {
    response.send('Does Not Compute');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
