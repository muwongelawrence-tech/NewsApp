import http from "./httpService";

const apiEndpoint = 
`https://api.openweathermap.org/data/2.5/weather?q=Kampala&appid=${ process.env.weather_key}`;

const apiEndpoint2 =
`api.openweathermap.org/data/2.5/forecast/daily?q=Kampala&cnt=7&appid=${ process.env.weather_key}`;

export function getWeatherInformation(){

    return http.get(apiEndpoint);
}

//getting weather forecast

export function getWeatherForecast(){

    return http.get(apiEndpoint2);
}