import http from "./httpService";



const apiEndpoint2 =
`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Kampala&appid=${ process.env.weather_key }`;



export function getWeatherInformation(city){

    const apiEndpoint = 
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ process.env.weather_key}`;

    return http.get(apiEndpoint);
}

//getting weather forecast

export function getWeatherForecast(){

    return http.get(apiEndpoint2);
}

