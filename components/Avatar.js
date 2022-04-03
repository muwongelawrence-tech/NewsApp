import React from 'react';

function Avatar({ url, className }) {
  return (
    <img 
     loading='lazy'
     src = "/ml.jpg"
     className= {`h-10 rounded-full  cursor-pointer  
     transition duration-150 transform hover:scale-110 ${ className }`}
     alt = "profile pic"
    />


  );
}

export default Avatar;