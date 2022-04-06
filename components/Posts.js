import React, { useEffect, useState } from 'react';

//import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../firebase';

import { getNews } from '../services/NewsService';

import Post from './Post';


function Posts( ) {

  const [ newPosts ,setNewPosts] = useState([]);

  const getData = async () => {

    const { data : localNews } = await getNews();

    // newPosts = localNews.articles;

    setNewPosts( localNews.articles);

    console.log(localNews.articles);

   }

   // fetch data after rendering components in the DOM.
   useEffect(() => {

      getData();

   });

  

    return (

        <div className = "">
            
            { newPosts.map(({ id , title , summary, media , link , published_date , country }) => (
                <Post 

                 key = { id }
                 title = { title }
                 summary = { summary }
                 media = { media }
                 link = { link }
                 published_date = { published_date }
                 country = { country }

                 />
            ))}
            
        </div>
    ); 
}

export default Posts;


