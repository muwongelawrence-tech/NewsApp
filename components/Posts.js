import React, { useEffect, useState } from 'react';

//import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../firebase';

import Post from './Post';

function Posts() {

    const [ newPosts , setNewPosts] = useState([])

    // const [ realtimePosts ] = useCollection(
    //     db.collection("posts").orderBy("timestamp" , "desc"),
    // );

    
    useEffect(() =>{
        db.collection('posts').orderBy("timestamp","desc")
        .onSnapshot(snapshot => setNewPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            data : doc.data(),
   
        }))) )
       },[]);

       console.log(newPosts);

    return (

        <div className = "">
            { newPosts.map(({id , data : {name ,message, email ,timestamp ,postImage}})=> (
                <Post 
                 key = { id }
                 name = { name }
                 message = {message}
                 email = {email}
                 timestamp = {timestamp}
                 postImage = {postImage}
                 />
            ))}
            
        </div>
    ); 
}

export default Posts;
