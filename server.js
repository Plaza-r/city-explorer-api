'use strict'

console.log('Our frist server');

require('dotenv').config(); // makes it possible to go in  dotenv files and get the port

const express = require('express'); // requiring express library lin
const cors = require('cors'); // require imports cors allows share info, middleware
const app = express();
//const weatherData = require('./data/weather.json'); //lab 8 no longer use
//const { response } = require('express'); dont think I need
const getWeather = require('./weather.js');
const getMovies = require('./movie.js');

app.use(cors());// use middleware

const PORT = process.env.PORT || 3002; //define port

app.get('/weather', weatherHandler);//module
app.get('/movies', movieHandler);//module

async function weatherHandler (req, res) {
    let searchQueryCity = req.query.searchQueryCity;
    try {
        let response =  await getWeather(searchQueryCity);
       res.send(response); 
    } catch (error) {
       console.log(error); 
    }
}

async function movieHandler (req, res) {
    let movieQueryCity = req.query.movieQueryCity;
    try {
        let response =  await getMovies(movieQueryCity);
       res.send(response); 
    } catch (error) {
       console.log(error); 
    }
}

 
    


app.get('*', (request, response) => {
    response.send('Does Not Compute');
});

app.use((error, request, response, next) => {
    response.status(500).send('this is the error', error.message); 
});
//video said to add

app.listen(PORT, () => console.log(`listening on port ${PORT}`));


//console.log(weatherData); dont think i need anymore
// app.get('/weatherData', (request, response) => {
//     const searchQuery = request.query.searchQuery;
    
//     console.log(searchQuery);

//     let searchResult = weatherData.find(object => object.city_name === searchQuery);
//     console.log(searchResult);
    
//     const result = searchResult.data.map(dayObj => new Forecast(dayObj));
//     response.status(200).send(result); // send it back to original request
//     console.log(result);
// })modify to async ? 0_o
//-----------------------
// class Forecast {
//     constructor(weatherObject){ 
//     this.datetime = weatherObject.datetime;
//     this.description = weatherObject.weather.description;
//     }       
// }
// moved to weather.js