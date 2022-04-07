import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { getWeatherForecast, getWeatherInformation } from '../services/weatherService';
import moment from "moment";

export default function WeatherApp() {

  const [ weatherData , setWeatherData] = useState([]);
  const [ weatherForecast , setWeatherForecast] = useState([]);
  const [ temp , setTemp] = useState(0);
  const [ min_temp , setMinTemp] = useState(0);
  const [ max_temp  , setMaxTemp ] = useState(0);

  let componentMounted = true;

  


  // get weather data 
const getWeatherData = async () => {

    const  { data } = await getWeatherInformation();

    if(componentMounted){

      setWeatherData(data);
      setTemp((data.main.temp - 273.15).toFixed(2));
      setMinTemp(( data.main.temp_min - 273.15).toFixed(2));
      setMaxTemp((data.main.temp_max -273.15).toFixed(2));

    }
     //  console.log(weatherData);
     return () => {
      componentMounted = false;
    }

}


// getting weather forecast information.
const getWeatherForecastData = async () => {

   const { data : forecast } = await getWeatherForecast();

     
   
   if(componentMounted){
     setWeatherForecast(forecast);
     console.log(weatherForecast);
   }

   return () => {
    componentMounted = false;
  }
   
  
}


// console.log( weatherData.weather[0].main);

// fetch data after rendering components in the DOM.
    useEffect(() => {
      
      getWeatherData();
      getWeatherForecastData();
          
    },[]);

    

// Date information
let getDate = new Date();
// let formattedDate = `${ getDate.getDay()} / ${ getDate.getMonth()} / ${getDate.getFullYear()}.`;


  return (
    <div className='flex flex-col   bg-white rounded-md w-[400px] m-4 
      max-h-96 p-4 text-gray-600 '>
         
          <div className='border-b  m-2'>
             <h2 className='text-gray-600 font-medium '> Weather </h2>
          </div>

          <div className =' text-center '>

              <h3 > { weatherData.name }  </h3>

              <p className='text-gray-600'>
                    { moment(getDate).format(" Do MMMM  YYYY, h:mm a") }
              </p>

          </div>

          <div className=' flex flex-col items-center m-2 '>

             <FontAwesomeIcon icon = { faCloudRain } className = "h-20 text-blue-500" />

             <h1> { temp } &deg; C</h1>

             <p className=' font-semibold '> { weatherData.weather[0].main } </p>

             <h1>  { min_temp }  &deg;C | { max_temp } &deg;C</h1>

             <p> Next day's  Forecast</p>
          </div>
         
        
       
      

       

    </div>
  );
}
