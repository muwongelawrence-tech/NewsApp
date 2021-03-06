import React from 'react';


import Posts from './Posts';

function Feed( { newPosts , headLines  }) {
 
  return (
        
        <div className = "  flex-grow  h-screen  pb-44 pt-6 mr-4 xl:mr-5 overflow-y-auto scrollbar-hide">
            <div className = "mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                 <marquee width="100%" direction="left" height="20px">
                     <h2 className='text-gray-600  font-bold text-xl cursor-pointer font-serif'>
                         { headLines }
                     </h2>
                </marquee>

                 <Posts newPosts = { newPosts } />
            </div>
          </div>
    );
}

export default Feed;
