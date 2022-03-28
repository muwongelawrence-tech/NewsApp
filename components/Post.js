import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

function Post({name , message, email  ,timestamp ,postImage}) {
    return (
        <div className = "flex flex-col">
           <div className = "p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
               <div className = "flex items-center space-x-2">
                   <Image
                     className = "rounded-full"
                      src = "/ml.jpg"
                      width = {40}
                      height = {40}
                      alt = ""
                   />
                   <div>
                       <p className = "font-medium text-gray-500">{name}</p>
                        <p className = "text-xs text-gray-400">
                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                   </div>
               </div>
               <h2 className = "text-md text-gray-500 pt-2">Message</h2>
               <p className = "pt-4 text-gray-600"> { message } </p>
           </div>

           { postImage && (
               <div className = "relative h-56 md:h-96 bg-white">
                   <Image
                   src = { postImage }
                   objectFit = "cover"
                   layout = "fill"
                    alt = "" 
                   />
               </div>
           )}

           {/* footer of post */}
           <div className = {`flex justify-between items-center 
             rounded-b-2xl bg-white shadow-md text-gray-400 border-t`}>
              <div className = "rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2">
                  <ThumbUpIcon className = "h-4" />
                  <p className = "text-xs sm:text-base">Like</p>
              </div>

              <div className = "rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2">
                <ChatAltIcon className = "h-4" />
                  <p className = "text-xs sm:text-base">comment</p>
              </div>

              <div className = "rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2">
                 <ShareIcon className = "h-4" />
                  <p className = "text-xs sm:text-base">share</p>
              </div>
           </div>

        </div>
    );
}

 
export default Post;
