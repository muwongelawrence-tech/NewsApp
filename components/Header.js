
import  Image  from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRef } from 'react';
import Avatar from './Avatar';




function Header() {

    const router = useRouter();

    const [ local , setLocal] = useState(false);
    const [ global , setGlobal] = useState(false);
    const [ sports , setSports] = useState(false);
    const [ entertainment , setEntertainment] = useState(false);

    const searchInputRef = useRef();

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;
    
        if(!term) return;
    
        router.push(`/search?term = ${ term }`);
        
    
    }



    return (
    <header className='sticky top-0 bg-white '>

      <div className='flex w-full p-6 items-center '>
       
        <Image 
            src = "/logo2.png"
            height = { 40 }
            width = { 100 }
            onClick = { () => router.push("/") }
            className = "cursor-pointer animate-bounce "
        />

        <form className= {`flex border border-gray-200 rounded-full 
        shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow`}>
            <input ref = { searchInputRef } type="text"
                className='flex-grow w-full focus:outline-none '
                />

                <XIcon className='h-7 text-gray-500 cursor-pointer transition duration-100 transform
                hover:scale-125 sm:mr-3 ' 

                onClick = { () => ( searchInputRef.current.value = "") }
                />

               <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex ' />

                <button hidden type='submit' onClick={ search }>Search </button>
        </form>

        <div className='text-gray-600 text-wrap'>
          <p className=''> hello ,</p>
          <p className=''> Muwonge Lawrence </p>
        </div>

        {/* Avatar */}
        <Avatar className = "ml-auto" url = "https://coaching.papareact.com/ai9" />


      </div>

      {/* <div className=' flex items-center space-x-4  md:space-x-6 justify-center text-gray-600 mb-3 border-b '>
           <p 
           className = { `headeroption ${ "activeoption" && local }`} 
           onClick = { (e) => {

             e.preventDefault();
             setLocal(true);
             setGlobal(false);
             setSports(false);
             setEntertainment(false);
             
          }}>Local News</p>

           <p className= { `headeroption ${ 'text-blue-500 border-blue-500 border-b-2' && global }`}  
            onClick = { (e) => {
             e.preventDefault();  
             setLocal(false);
             setGlobal(true);
             setSports(false);
             setEntertainment(false);
              
           }}>Global News </p>

           <p className= { `headeroption ${ "activeoption" && sports }`} 
           onClick = { (e) => {
            e.preventDefault();  
             setLocal(false);
             setGlobal(false);
             setSports(true);
             setEntertainment(false);

           }}>Sports News </p>

           <p className= { `headeroption ${ "activeoption" && entertainment }`} 
           onClick = { (e) => {

              e.preventDefault();
              setLocal(false);
              setGlobal(false);
              setSports(false);
              setEntertainment(true);

           }}>Entertainment</p>

         <p className= { `headeroption ${ "activeoption" && entertainment }`} 
           onClick = { (e) => {

              e.preventDefault();
              setLocal(false);
              setGlobal(false);
              setSports(false);
              setEntertainment(true);

           }}> Bitcion </p>
      </div> */}

    </header>
    );
}

export default Header;
