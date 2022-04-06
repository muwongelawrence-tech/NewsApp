import http from "./httpService";

const apiEndpoint = 
`https://api.openweathermap.org/data/2.5/weather?q=Kampala&appid=${ process.env.weather_key}`;

export function getWeatherInformation(){

    return http.get(apiEndpoint);
}