import React from 'react';

function HeaderOptions() {
    return (
      <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base 
      lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] '>
  
        
         {/* Right */}
  
         <div className='flex space-x-4 '>
             <p className='link'>Settings</p>
             <p className='link'>Tools</p>
         </div>
      </div>
    );
  }
  
  export default HeaderOptions;