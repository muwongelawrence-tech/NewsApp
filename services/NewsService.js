import http from "./httpService";

export function getNews(){

    return http.get("https://api.newscatcherapi.com/v2/search?q=uganda");

}