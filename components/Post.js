import Image from 'next/image';
import moment from "moment";
import React from 'react';

function Post({ title , summary, media , link , published_date , country }) {
    return (
        <div className = "flex flex-col pb-2 bg-white  mt-5 rounded-md shadow-sm  text-gray-500 overflow-hidden">
            
           <div className='' >

               <img src= { media } 
                  className = " w-full h-full object-cover"
                  alt="" 
               />
            
           </div>

           <div className='p-3'>

               <p className='text-lg font-semibold text-gray-700 m-2'> {title} </p>

               <p className='text-justify'>{ summary } </p>

               <a href= { link }
                className =" text-blue-400 hover:underline"
               > Read More.. </a>

           </div >

           <div className='flex justify-between p-2 border-t'>
               <p> <span className='text-blue-700'> country : </span>{ country  }</p>
               <p> { moment(published_date).format("MMMM Do YYYY, h:mm a") } </p>
           </div>

          

        </div>
    );
}

 
export default Post;
