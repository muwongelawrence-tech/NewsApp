import http from "./httpService";



export  function getNews(category){

  const apiEndpoint = `https://api.newscatcherapi.com/v2/search?q=${category}`;

  return  http.get(apiEndpoint , {
        headers: {
          'x-api-key':  process.env.api_key 
        }
      });


  

// }


// export  function getNews(category){

//   const apiEndpoint = 'https://bing-news-search1.p.rapidapi.com/news/search';

//   return  http.get(apiEndpoint , {
//     params: { q:category , freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
//       'X-RapidAPI-Key': '7507529ddbmshcbfec60de5109e4p12518djsn641fc69622fa'
//     }
//   });


  

}