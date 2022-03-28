
import  Image  from 'next/image';

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid";

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";

import HeaderIcon from './HeaderIcon';


function Header() {

    return (
        <div className= "sticky top-0 z-50 bg-white  flex items-center p-2 lg:px-5 shadow-md">
            {/* left */}
              <div className = "flex items-center">
                  <Image
                     src = "https://links.papareact.com/5me"
                    layout = "fixed"
                     height = {40}
                     width = {40}
                     alt = ""
                  />
                    
                  <div className = "flex ml-2 items-center rounded-full bg-gray-100 p-2">
                      <SearchIcon className = "h-6 text-gray-600" />
                      <input 
                      type="text" 
                      placeholder= "search facebook...."
                      className = "hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                       />
                  </div>
              </div>

            {/* center */}
               <div className = "flex justify-center flex-grow">
                   <div className = "flex space-x-6 md:space-x-2">
                        <HeaderIcon active Icon = {HomeIcon} />
                        <HeaderIcon Icon = {FlagIcon} />
                        <HeaderIcon Icon = {PlayIcon} />
                        <HeaderIcon Icon = {ShoppingCartIcon} />
                        <HeaderIcon Icon = {UserGroupIcon} />
                   </div>
               </div>

            {/*  Right */}
             <div className = "flex items-center sm:space-x-2 justify-end">
                 <Image
                    src = "/ml.jpg"
                    height = {40}
                    width = {40}
                    alt = ""
                    objectFit = "contain"
                    className = "rounded-full "
                 />
                  <p className = "whitespace-nowrap font-semibold pr-3 text-gray-500">
                      Muwonge Lawrence
                 </p>

                 <ViewGridIcon className = "icon"/>
                 <ChatIcon  className = "icon"/>
                 <BellIcon  className = "icon"/>
                 <ChevronDownIcon className = "icon"/>
             </div>
        </div>
    );
}

export default Header;
