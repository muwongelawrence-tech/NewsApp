import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud,faCloudRain , faThunderstorm, faCloudSun,faCloudSunRain, faSun } from '@fortawesome/free-solid-svg-icons';
import { getWeatherForecast, getWeatherInformation } from '../services/weatherService';
import moment from "moment";
import { XIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

export default function WeatherApp() {


  const  searchCityRef = useRef();
  const [ weatherData , setWeatherData] = useState([]);
  const [ description , setDescription] = useState("");
  const [ weatherForecast , setWeatherForecast] = useState([]);
  const [ temp , setTemp] = useState(0);
  const [ min_temp , setMinTemp] = useState(0);
  const [ max_temp  , setMaxTemp ] = useState(0);
  const [ city , setCity ] = useState("kampala");
  const [ weatherIcon , setWeatherIcon ] = useState(faSun);
  const [ searchCity , setSearchCity] = useState(false);

  let componentMounted = true;

// get weather data 
const getWeatherData = async () => {

   const  { data } = await getWeatherInformation(city);

    if(componentMounted){

      setWeatherData(data);
      setDescription(data.weather[0].main);
      setTemp((data.main.temp - 273.15).toFixed(2));
      setMinTemp(( data.main.temp_min - 273.15).toFixed(2));
      setMaxTemp((data.main.temp_max -273.15).toFixed(2));

    }

    // console.log(weatherData);
    //  console.log(description);

   // setting weather icons 
    if( typeof data.weather[0].main != "undefined"){
      if(data.weather[0].main === "Clouds"){
           setWeatherIcon(faCloud);
      }
      else if(data.weather[0].main === "Thunderstorm"){
             setWeatherIcon(faThunderstorm);
      }
      else if(data.weather[0].main === "Rain"){
        setWeatherIcon(faCloudRain);
    
      }
      else if(data.weather[0].main === "Clear"){
        setWeatherIcon(faCloudSun);
      }
    }


    return () => {
      componentMounted = false;
    }

}


// getting weather forecast information.
const getWeatherForecastData = async () => {

   const { data : forecast } = await getWeatherForecast();
  
   if(componentMounted){
     setWeatherForecast(forecast);
     
   }

   return () => {
    componentMounted = false;
  }
   
  
}

const getNewCityData = async() => {

  //  console.log(searchCityRef.current.value);
   setCity(searchCityRef.current.value);
  const  { data } = await getWeatherInformation(city);

  if(componentMounted){

    setWeatherData(data);
    setDescription(data.weather[0].main);
    setTemp((data.main.temp - 273.15).toFixed(2));
    setMinTemp(( data.main.temp_min - 273.15).toFixed(2));
    setMaxTemp((data.main.temp_max -273.15).toFixed(2));

  }
   //console.log(weatherData);
  //  console.log(description);

  // setting weather icons 
  if( typeof data.weather[0].main != "undefined"){
    if(data.weather[0].main === "Clouds"){
         setWeatherIcon(faCloud);
    }
    else if(data.weather[0].main === "Thunderstorm"){
           setWeatherIcon(faThunderstorm);
    }
    else if(data.weather[0].main === "Rain"){
      setWeatherIcon(faCloudRain);
      Clear
    }
    else if(data.weather[0].main === "Clear"){
      setWeatherIcon(faCloudSun);
    }
  }


   return () => {
    componentMounted = false;
  }

}

// fetch data after rendering components in the DOM.
useEffect(() => {
      
  getWeatherData();
  // console.log(componentMounted);
  // getWeatherForecastData();
  // console.log(weatherForecast);
      
},[city ]);
 

// Date information
let getDate = new Date();

const search =  () => {
  setSearchCity(true);
}

const disableSearch = () => {
  setCity("kampala");
  setSearchCity(false);
}

  return (
    <div className='flex-col bg-gray-700 text-white rounded-md w-[400px] m-4 
    max-h-96 p-4  hidden md:inline-flex hover:scale-105 shadow-2xl'>
         
          <div className=' flex space-x-3  justify-between border-b  m-2'>

             <h2 className=' font-medium '> Weather </h2>

             { searchCity && (
              <>
                 <input  ref = { searchCityRef } type="text"
                 className='flex-grow w-full outline-none text-gray-600 rounded-md p-2  mb-1'
                 placeholder='Search city'
               />

               <XIcon className='h-7 text-gray-300 cursor-pointer transition duration-100 transform
                hover:scale-125 sm:mr-3 ' 

                onClick = { disableSearch }
                />

              </>
             )}

                 <SearchIcon 
                   className='h-6 text-gray-300  sm:inline-flex '
                   onClick= { (e) => {
                     e.preventDefault();

                     if(searchCity){
                         getNewCityData();
                     }
                     else {
                      search();
                     }
                    

                   }}
                  />

          </div>

          {/*  Weather information */}

          <div className =' text-center m-3  '>

              <h3 > { weatherData.name }  </h3>

              <p className='text-gray-200'>
                    { moment(getDate).format(" Do MMMM  YYYY, h:mm a") }
              </p>

          </div>

          <div className=' flex flex-col items-center m-2 '>

             <FontAwesomeIcon icon = { weatherIcon } className = "h-20 text-gray-300" />

             <h1> { temp } &deg; C</h1>

             <p className=' font-semibold '> { description } </p>

             <h1>  { min_temp }  &deg;C | { max_temp } &deg;C </h1>

             <p> Next day's  Forecast</p>

          </div>
          
      </div>
  );
}
