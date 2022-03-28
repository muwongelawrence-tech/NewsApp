import Image from 'next/image';
import React from 'react';

function SidebarRow({ image ,Icon ,title }) {
    return (
        <div className = {`flex items-center space-x-2 p-4 hover:bg-gray-200 
        rounded-xl cursor-pointer active:border-b-2 active:border-blue-500
        `}>
            { image && (
                <Image
                    src = "/ml.jpg"
                    height = {30}
                    width = {30}
                    alt = ""
                    objectFit = "contain"
                    layout = "fixed"
                    className = "rounded-full"
               />
            )}

            { Icon && (
                    <Icon
                    className = "h-8 w-8 text-blue-500"
                  />
            )}

             <p className = "hidden sm:inline-flex font-medium">
                 {title}
             </p>

        </div>
    )
}

export default SidebarRow;
