import React from 'react';
import Image from "next/image";

function Avatar({ url, className }) {
  return (

    <Image
       src = { url }
        height = { 60 }
        width = { 60 }
       loading ="lazy"
       objectFit ="cover"
       className= {`h-10 rounded-full  cursor-pointer  
          transition duration-150 transform hover:scale-110 ${ className }`}
        alt = "profile pic"
     />

    // <img 
    //  loading='lazy'
    //  src = { url || "/ml.jpg" }
    //  className= {`h-10 rounded-full  cursor-pointer  
    //  transition duration-150 transform hover:scale-110 ${ className }`}
    //  alt = "profile pic"
    // />


  );
}

export default Avatar;