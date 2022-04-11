
import  Image  from 'next/image';
import React, { useState } from 'react';
import Avatar from './Avatar';



function Header() {


    const [ local , setLocal] = useState(true);
    const [ global , setGlobal] = useState(false);
    const [ sports , setSports] = useState(false);
    const [ entertainment , setEntertainment] = useState(false);
    const [ bitcoin ,setBitCoin] = useState(false);
    const [showmenu , setShowmenu] = useState(false);
    
    // collapsing the navbar on a mobile device
    const collapse = (e) => {
      e.preventDefault();
      const show = showmenu === false ? true : false 
      setShowmenu(show) ;
    };

   return (
    <header className='sticky top-0 bg-white  '>

      <div className='flex  p-3 items-center justify-between flex-wrap  '>
           
           <div className=''>
              <Image 
                src = "/logo2.png"
                height = { 40 }
                width = { 100 }
                onClick = { () => router.push("/") }
                className = "cursor-pointer animate-bounce "
            />
           </div>

                <ul className="hidden  md:inline-flex md:space-x-3  ">

                  <li className= {`nav__item ${ local && 'text-blue-600 border-blue-600 border-b-2'}`}
                     onClick={ (e) => {
                        e.preventDefault();
                        setLocal(true);
                        setGlobal(false);
                        setSports(false);
                        setEntertainment(false);
                        setBitCoin(false);
                     } }
                  >Local News </li>

                  <li className= {`nav__item ${ global && 'text-blue-600 border-blue-600 border-b-2'}`}
                        onClick={ (e) => {
                          e.preventDefault();
                          setLocal(false);
                          setGlobal(true);
                          setSports(false);
                          setEntertainment(false);
                          setBitCoin(false);
                       } }
                  >Global News</li>

                   <li className= {`nav__item ${ sports && 'text-blue-600 border-blue-600 border-b-2'}`}
                         onClick={ (e) => {
                          e.preventDefault();
                          setLocal(false);
                          setGlobal(false);
                          setSports(true);
                          setEntertainment(false);
                          setBitCoin(false);
                       } }
                   > Sports News </li>

                   <li className= {`nav__item ${ entertainment && 'text-blue-600 border-blue-600 border-b-2'}`}
                          onClick={ (e) => {
                            e.preventDefault();
                            setLocal(false);
                            setGlobal(false);
                            setSports(false);
                            setEntertainment(true);
                            setBitCoin(false);
                         } }
                   >Entertainment</li>

                   <li className= {`nav__item ${ bitcoin && 'text-blue-600 border-blue-600 border-b-2'}`}
                        onClick={ (e) => {
                          e.preventDefault();
                          setLocal(false);
                          setGlobal(false);
                          setSports(false);
                          setEntertainment(false);
                          setBitCoin(true);
                       } }
                   >Bitcoin</li>
                 </ul>

                 <div className='text-gray-600 text-wrap'>
                    <p className=''> hello ,</p>
                    <p className=''> Muwonge Lawrence </p>
                </div>

                <div className=''>

                  {/* Avatar */}
                  <Avatar className = "ml-auto" url = "" />
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
                  <li className="nav__item2">Local News </li>
                  <li className="nav__item2"> Global News</li>
                  <li className="nav__item2"> Sports News </li>
                  <li className="nav__item2"> Entertainment</li>
                  <li className="nav__item2"> Bitcoin </li>
                </ul>
              )}

      </div>



    </header>
    );
}

export default Header;



