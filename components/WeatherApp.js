import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
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


// fetch data after rendering components in the DOM.
    useEffect(() => {
      
      getWeatherData();
      // console.log(componentMounted);
      // getWeatherForecastData();
          
    },[city]);

    



const getNewCityData = async() => {

  //  console.log(searchCityRef.current.value);
  const  { data } = await getWeatherInformation(searchCityRef.current.value);

  if(componentMounted){

    setWeatherData(data);
    setDescription(data.weather[0].main);
    setTemp((data.main.temp - 273.15).toFixed(2));
    setMinTemp(( data.main.temp_min - 273.15).toFixed(2));
    setMaxTemp((data.main.temp_max -273.15).toFixed(2));

  }
   //console.log(weatherData);
  //  console.log(description);
   return () => {
    componentMounted = false;
  }

}
 

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
    <div className='flex-col bg-white rounded-md w-[400px] m-4 
    max-h-96 p-4 text-gray-600 hidden md:inline-flex '>
         
          <div className=' flex space-x-3  justify-between border-b  m-2'>

             <h2 className='text-gray-600 font-medium '> Weather </h2>

             { searchCity && (
              <>
                 <input  ref = { searchCityRef } type="text"
                 className='flex-grow w-full outline-none text-gray-400 '
                 placeholder='Search city'
               />

               <XIcon className='h-7 text-gray-500 cursor-pointer transition duration-100 transform
                hover:scale-125 sm:mr-3 ' 

                onClick = { disableSearch }
                />

              </>
             )}

                 <SearchIcon 
                   className='h-6 text-blue-500  sm:inline-flex '
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

          <div className =' text-center '>

              <h3 > { weatherData.name }  </h3>

              <p className='text-gray-600'>
                    { moment(getDate).format(" Do MMMM  YYYY, h:mm a") }
              </p>

          </div>

          <div className=' flex flex-col items-center m-2 '>

             <FontAwesomeIcon icon = { faCloudRain } className = "h-20 text-blue-500" />

             <h1> { temp } &deg; C</h1>

             <p className=' font-semibold '> { description } </p>

             <h1>  { min_temp }  &deg;C | { max_temp } &deg;C</h1>

             <p> Next day's  Forecast</p>

          </div>
          
      </div>
  );
}
