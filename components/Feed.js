import moment from 'moment';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';

import Posts from './Posts';

function Feed() {

    // Date information
let getDate = new Date();

    return (
        
        <div className = "  flex-grow  h-screen  pb-44 pt-6 mr-4 xl:mr-5 overflow-y-auto scrollbar-hide">
            <div className = "mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                 <marquee width="100%" direction="left" height="20px">
                     <h2 className='text-gray-600  font-bold text-xl cursor-pointer'>News Head Lines</h2>
                </marquee>

                 <Posts />
            </div>
             
            {/* weather information */}

        


        </div>
    );
}

export default Feed;
