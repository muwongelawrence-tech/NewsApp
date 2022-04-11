import React  from 'react';

import Post from './Post';


 function Posts( { newPosts }) {
    // { id , title , summary, media , link , published_date , country }
   return (

        <div className = "">
        
            { newPosts.map(({ id , title , summary, media , link , published_date , country }) => (
                <>
                { media && (
                     <Post 
                     key = {  id }
                     title = { title }
                     summary = {summary}
                     media = { media }
                     link = { link }
                     published_date = { published_date }
                     country = { country}
                     />
                )}
                </>
                
                
            ))}
            
        </div>
    ); 
}

export default Posts;


