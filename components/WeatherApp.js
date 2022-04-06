import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { getWeatherInformation } from '../services/weatherService';

export default function WeatherApp() {

  const [ weatherData , setWeatherData] = useState([]);

  const getWeatherData = async () => {

    const  { data } = await getWeatherInformation();

     setWeatherData(data);

     console.log(weatherData);

}



// fetch data after rendering components in the DOM.
    useEffect(() => {

      getWeatherData();

    });


  return (
    <div className='flex flex-col   bg-white rounded-md w-[400px] m-4 
      max-h-96 p-4 text-gray-600 '>
         
          <div className='border-b  m-2'>
             <h2 className='text-gray-600 font-medium '> Weather </h2>
          </div>

          <div className =' text-center '>

              <h3 > { weatherData.name }  </h3>

              <p className='text-gray-600'>
                    Wednesday , April 5 ,2022
              </p>

          </div>

          <div className=' flex flex-col items-center m-2'>

             <FontAwesomeIcon icon = { faCloudRain } className = "h-20" />

             <h1> 33.08 &deg; C</h1>

             <p className=' font-semibold '> cloudy </p>

             <h1>  30.07  &deg;C | 33.70 &deg;C</h1>

             <p> Next day's  Forecast</p>




          </div>
         
        
       
      

       

    </div>
  );
}
