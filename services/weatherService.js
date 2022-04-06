import http from "./httpService";

const apiEndpoint = "";

export function getWeatherData(){

    return http.get(apiEndpoint );
}