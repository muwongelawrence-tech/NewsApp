
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
    const [showmenu ,setShowmenu] = useState(false);

    const collapse = (e) => {
      e.preventDefault();
      const show = showmenu === false ? true : false 
      setShowmenu(show) ;
    };

   return (
    <header className='sticky top-0 bg-white  '>

      <div className='flex  p-6 items-center justify-between flex-wrap  '>
           
           <div className=''>
              <Image 
                src = "/logo2.png"
                height = { 40 }
                width = { 100 }
                onClick = { () => router.push("/") }
                className = "cursor-pointer animate-bounce "
            />
           </div>

                <ul className="hidden  md:inline-flex md:space-x-3  p-4">
                  <li className="nav__item"><a href="#">Local News </a></li>
                  <li className="nav__item"><a href="#"> Global News</a></li>
                   <li className="nav__item"><a href="#"> Sports News</a></li>
                   <li className="nav__item"><a href="#"> Entertainment</a></li>
                   <li className="nav__item"><a href="#"> Bitcoin</a></li>
                 </ul>

                 <div className='text-gray-600 text-wrap'>
                    <p className=''> hello ,</p>
                    <p className=''> Muwonge Lawrence </p>
                </div>

                <div className=''>

                  {/* Avatar */}
                  <Avatar className = "ml-auto" url = "https://coaching.papareact.com/ai9" />
                </div>

                
                  {/* collapsible bar */}
                <div 
                className=' sm:hidden border rounded text-blue-600 hover:text-blue-300 active:text-blue-300 '
                onClick ={ collapse }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>

              { showmenu && (
                  <ul className={` sm:hidden w-full p-3 text-gray-300 `}>
                  <li className="nav__item2"><a href="#">Local News </a></li>
                  <li className="nav__item2"><a href="#"> Global News</a></li>
                  <li className="nav__item2"><a href="#"> Sports News </a></li>
                  <li className="nav__item2"><a href="#"> Entertainment</a></li>
                  <li className="nav__item2"><a href="#"> Bitcoin</a></li>
                </ul>
              )}

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



