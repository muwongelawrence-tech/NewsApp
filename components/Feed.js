import moment from 'moment';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';

import Posts from './Posts';

function Feed() {

    // Date information
let getDate = new Date();

    return (
        
        <div className = " flex flex-grow  space-x-3 h-screen  pb-44 pt-6 mr-4 xl:mr-5 overflow-y-auto scrollbar-hide">
            <div className = "mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                 <marquee width="100%" direction="left" height="20px">
                     <h2 className='text-gray-600  font-bold text-xl cursor-pointer'>News Head Lines</h2>
                </marquee>

                 <Posts />
            </div>
             
            {/* weather information */}

          <div className='flex flex-col   bg-white rounded-md w-[400px] m-4 
                   max-h-96 p-4 text-gray-600 '>
         
          <div className='border-b  m-2'>
             <h2 className='text-gray-600 font-medium '> Weather </h2>
          </div>

          <div className =' text-center '>

              <h3 > London  </h3>

              <p className='text-gray-600'>
                    { moment(getDate).format(" Do MMMM  YYYY, h:mm a") }
              </p>

          </div>

          <div className=' flex flex-col items-center m-2 '>

             <FontAwesomeIcon icon = { faCloudRain } className = "h-20 text-blue-500" />

             <h1> 33.50 &deg; C</h1>

             <p className=' font-semibold '>  clouds </p>

             <h1>  33.00 &deg;C | 33.57 &deg;C</h1>

             <p> Next day's  Forecast</p>
          </div>
          
      </div>


        </div>
    );
}

export default Feed;
