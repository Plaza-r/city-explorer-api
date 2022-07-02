'use strict'

const axios = require('axios');

async function getWeather ({lat, lon, cityName}) {
    try {
        
       


        let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&days=3&lat=${lat}&lon=${lon}&units=I`;

        console.log(url, 'url ==')

        
        
        let weatherObject = await axios.get(url);

        console.log(weatherObject, 'CITY WEATHER TWO')


        let selectedCity = weatherObject.data.data.map(dailyWeather => {
            return new Forecast(dailyWeather);
        });
    console.log(selectedCity);
        return selectedCity;
    } catch (error) {
        console.log(error.message);
    }

}

class Forecast {
    constructor(weatherObject) {
        this.date = weatherObject.datetime;
        this.description = weatherObject.weather.description;
        this.temp = weatherObject.temp;
        this.min_temp = weatherObject.min_temp;
        this.max_temp = weatherObject.max_temp;
        console.log(weatherObject);
    }
}



// class Forecast {
//     constructor(weatherObject){ 
//     this.datetime = weatherObject.datetime;
//     this.description = weatherObject.weather.description;
//     }       
    
module.exports = getWeather;