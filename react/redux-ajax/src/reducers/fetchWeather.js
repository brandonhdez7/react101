import axios from 'axios';

const APIKEY = '482c145ce8edf1d69ea5168f9d06460c';
onst weatherUrl = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${APIKEY}&zip=`;

function fetchWeather (zipCode){
    console.log(zipCode);
    return{
        type: 'GET_WEATHER'
    }
}

export default fetchWeather;