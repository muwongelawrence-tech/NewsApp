import http from "./httpService";

const apiEndpoint = 
`https://api.openweathermap.org/data/2.5/weather?q=Kampala&appid=${ process.env.weather_key}`;

const apiEndpoint2 =
`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Kampala&appid=${ process.env.weather_key }`;



export function getWeatherInformation(){

    return http.get(apiEndpoint);
}

//getting weather forecast

export function getWeatherForecast(){

    return http.get(apiEndpoint2);
}

