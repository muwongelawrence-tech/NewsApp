import React, { useEffect, useState } from 'react';

import Post from './Post';


 function Posts( { newPosts }) {

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


