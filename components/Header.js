
import  Image  from 'next/image';
import React, { useState } from 'react';
import { MenuIcon } from "@heroicons/react/outline";
import Avatar from './Avatar';
import { signIn , signOut , useSession } from "next-auth/client";



function Header( { onChange , onPlatform }) {

  const[ session ] = useSession();


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
    <header className='sticky top-0 bg-gray-800  '>

      <div className='flex  p-3 items-center justify-between flex-wrap  '>
           
           <div className=''>
              <Image 
                src = "/logo1.jpg"
                height = { 40 }
                width = { 100 }
                className = "cursor-pointer hover:animate-bounce"
                alt =" "
            />
           </div>

                <ul className="hidden  md:inline-flex md:space-x-3  ">

                  <li className= {`nav__item ${ local && 'text-blue-600 border-blue-600 border-b-2'}`}
                     onClick={ (e) => {
                        e.preventDefault();
                        onChange ("uganda");
                        onPlatform(false);
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
                          onChange("Tesla");
                          onPlatform(false);
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
                          onChange ("sports");
                          onPlatform(false);
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
                            onChange ("Entertainment");
                            onPlatform(false);
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
                          onChange ("bitcoin");
                          onPlatform(false);
                          setLocal(false);
                          setGlobal(false);
                          setSports(false);
                          setEntertainment(false);
                          setBitCoin(true);
                       } }
                   >Bitcoin</li>
                 </ul>

                 <div  onClick = { !session ? signIn : signOut } className='text-gray-300 text-wrap hover:text-gray-100 cursor-pointer'>
                    <p className=' font-serif text-lg'> hello ,</p>
                    <p className=' font-mono '> 
                     { session ? `${ session.user.name }`: "Sign In" }
                    </p>
                </div>

                <div className=''>

                  {/* Avatar */}
                  <Avatar className = "ml-auto" url = { session ? session.user.image :"/avt.png"} />
                </div>

                
                  {/* collapsible bar */}
                <div 
                className=' sm:hidden border-2 border-blue-400 rounded text-blue-500 hover:text-blue-300 active:text-blue-300 '
                onClick ={ collapse }
                >
                  <MenuIcon className = "h-6 " />
                </div>

              { showmenu && (
                  <ul className={` sm:hidden w-full p-3  `}>

                  <li className="nav__item2"
                   onClick = { (e) => {
                    e.preventDefault();
                     onChange ("uganda");
                     onPlatform(false);
                   }}
                  >Local News </li>

                  <li className="nav__item2"
                          onClick = { (e) => {
                          e.preventDefault();
                             onChange ("Tesla");
                             onPlatform(false);
                           }}
                  > Global News</li>

                  <li className="nav__item2"
                     onClick = { (e) => {
                      e.preventDefault();
                       onChange ("sports");
                       onPlatform(false);
                     }}
                  > Sports News </li>

                  <li className="nav__item2"
                     onClick = { (e) => {
                      e.preventDefault();
                       onChange ("Entertainment");
                       onPlatform(false);
                     }}
                  > Entertainment</li>

                  <li className="nav__item2"
                        onClick = { (e) => {
                          e.preventDefault();
                           onChange ("bitcoin");
                           onPlatform(false);
                         }}
                  > Bitcoin </li>

                  <li className="nav__item2"
                        onClick = { (e) => {
                          e.preventDefault();
                           onPlatform(true);
                         }}
                  > Weather </li>
                </ul>
              )}

      </div>



    </header>
    );
}

export default Header;



