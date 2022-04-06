import http from "./httpService";

const apiEndpoint = "https://api.newscatcherapi.com/v2/search?q=uganda";

export function getNews(){

    return http.get(apiEndpoint , {
        headers: {
          'x-api-key': `${ process.env.api_key }`
        }
      });

}