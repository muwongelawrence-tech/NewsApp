import React from 'react';

import Posts from './Posts';

function Feed() {
    return (
        <div className = "flex-grow h-screen  pb-44 pt-6 mr-4 xl:mr-5 overflow-y-auto scrollbar-hide">
            <div className = "mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                 
                 

                 <marquee width="100%" direction="left" height="20px">
                 <h2 className='text-gray-600  font-bold text-xl cursor-pointer'>News Head Lines</h2>
                </marquee>

                 <Posts />
                 
            </div>
        </div>
    );
}

export default Feed;
