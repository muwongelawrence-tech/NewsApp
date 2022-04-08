import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import WeatherApp from '../components/WeatherApp';

 export default  function Home() {
   
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Best News </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Rendering  async errors using toastify */}

      <ToastContainer />
     
     {/* Header */}

        <Header/>

        {/* main section */}

     <main className = " flex  overflow-y-auto scrollbar-hide ">

       {/* Sidebar */}
         {/* <Sidebar/> */}

         {/* Feed */}
            <Feed />

         {/* Weather data */}
          {/* <WeatherApp /> */}
  
        
       

    </main>

  

    </div>
  );
}



// getting the data from the server.

// export async function getServerSideProps(){ 

//   const data = 
//   await fetch(`https://api.newscatcherapi.com/v2/search?q=uganda`
//   ).then(response => response.json());

//   // After the SERVER has rendered.....
//   //pass the results to the client.
//   return {
//     props:{
//       results: data
//     }
//   }

// }
