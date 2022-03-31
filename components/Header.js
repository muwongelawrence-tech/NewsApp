
import  Image  from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React from 'react';
import { useRef } from 'react';
import Avatar from './Avatar';




function Header() {

    const router = useRouter();

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
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            height = { 40 }
            width = { 120 }
            onClick = { () => router.push("/") }
            className = "cursor-pointer"
        />

        <form className= {`flex border border-gray-200 rounded-full 
        shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow`}>
            <input ref = { searchInputRef } type="text"
                className='flex-grow w-full focus:outline-none '
                />

                <XIcon className='h-7 text-gray-500 cursor-pointer transition duration-100 transform
                hover:scale-125 sm:mr-3 ' 

                onClick = {() => ( searchInputRef.current.value = "")}
                />

               <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex ' />

                <button hidden type='submit' onClick={ search }>Search </button>
        </form>

        {/* Avatar */}
        <Avatar className = "ml-auto" url = "https://coaching.papareact.com/ai9" />


      </div>

    </header>
    );
}

export default Header;
