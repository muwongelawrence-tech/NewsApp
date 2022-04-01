import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

export default function Home({ results }) {

   console.log(results);

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Best News </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     {/* Header */}

        <Header/>

        {/* main section */}

     <main className = "flex">
       {/* Sidebar */}
         {/* <Sidebar/> */}
       {/* Feed */}
        <Feed />
        
       {/* Widgets */}

       {/* <Widgets /> */}
    </main>

    </div>
  );
}



// getting the data from the server.

export async function getServerSideProps(){ 

  const data = 
  await fetch(`https://api.newscatcherapi.com/v2/search?q=uganda`
  ).then(response => response.json());

  // After the SERVER has rendered.....
  //pass the results to the client.
  return {
    props:{
      results: data
    }
  }

}
