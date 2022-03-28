import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { db, storage } from '../firebase';

import firebase from 'firebase';

function InputBox() {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const [imageToPost ,setImageToPost] = useState(null);

    const sendPost = (e) => {
        e.preventDefault();

        if(!inputRef.current.value) return;

        db.collection("posts").add({
          message: inputRef.current.value,
          name: "Muwonge Lawrence",
          email: "muwongelawrence44@gmail.com",
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
             if(imageToPost){
               const uploadTask = storage.ref(`posts/${doc.id}`)
               .putString(imageToPost ,'data_url');

               removeImage();

               uploadTask.on("state_change",
               null,
               (error) => console.error(error),
               () => {
                 // the upload completes
                 storage.ref(`posts/${doc.id}`).getDownloadURL().then(url => {
                   db.collection("posts").doc(doc.id).set({
                     postImage: url },{ merge:true })
                 })
               }

               );
             }
        });
 
        inputRef.current.value = "";
        
    };

    const addImageToPost = (e) => {
           e.preventDefault();
           const reader  = new FileReader();
           if(e.target.files[0]){
             reader.readAsDataURL(e.target.files[0]);
           }

           reader.onload = (readerEvent) => {
               setImageToPost(readerEvent.target.result)
           }
    };

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className = "bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className = "flex space-x-4  p-4 items-center ">
            <Image 
              className = "rounded-full"
              src = "/ml.jpg"
              width = {40}
              height = {40}
              layout = "fixed"
              alt = ""
            /> 
             <form className = "flex flex-1">
                  <input type = "text"
                  ref = { inputRef }
                  className = "rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none "
                   placeholder = {`What's on your mind Muwonge Lawrence`}
                   />
                   <button 
                   type = "submit"
                    hidden
                    onClick = {sendPost}
                   >
                      Submit
                   </button>
             </form>

              { imageToPost && (
                <div 
                 onClick = { removeImage }
                 className = {`flex flex-col filter hover:brightness-110 
                     transition duration-150 transform hover:scale-105 cursor-pointer`}
                >
                   <Image 
                    src = {imageToPost} 
                    className = " object-contain"
                    height = {20}
                    width = { 20 }
                    alt = "" 
                   />
                    
                    <p className = "text-xs text-red-500 text-center"> Remove</p>

                </div>
              )}

            </div>

            <div className = "flex justify-evenly p-3 border-t">
                <span className = "bg-blue-500 text-white w-20 p-2  rounded-md text-center cursor-pointer" onClick = {sendPost} >
                  send
                </span>

                <div className = "flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2">
                  <VideoCameraIcon className = "h-7 text-red-500"/>
                  <p
                   className = "text-xs sm:text-sm xl:text-base"
                  >Live Video</p>
                </div>
                
                <div 
                onClick = { () => filePickerRef.current.click() }
                className = "flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2">
                   <CameraIcon className = "h-7 text-green-400"/>
                  <p
                   className = "text-xs sm:text-sm xl:text-base"
                  >Photo/Video</p>

                  <input ref = {filePickerRef} onChange = { addImageToPost } type = "file" hidden/>

                </div>

                <div className = "flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2">
                   <EmojiHappyIcon className = "h-7 text-yellow-300"/>
                   <p
                   className = "text-xs sm:text-sm xl:text-base"
                   >Feeling/Activity</p>
                </div>

                
            </div>
        </div>
    );
}

export default InputBox;
