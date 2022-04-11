import http from "./httpService";



export  function getNews(){

  const apiEndpoint = "https://api.newscatcherapi.com/v2/search?q=bitcoin";
  
  return  http.get(apiEndpoint , {
        headers: {
          'x-api-key':  process.env.api_key 
        }
      });


  

}