import http from "./httpService";



export  function getNews(category){

  const apiEndpoint = `https://api.newscatcherapi.com/v2/search?q=${category}`;

  return  http.get(apiEndpoint , {
        headers: {
          'x-api-key':  process.env.api_key 
        }
      });


  

}