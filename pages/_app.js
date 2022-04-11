import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import 'tailwindcss/tailwind.css';
import { Provider as AuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return ( 
  <AuthProvider session= { pageProps.session }>
      <Provider session={ pageProps.session }>
       <Component { ...pageProps } />
     </Provider>
  </AuthProvider>
  
  );
}

export default MyApp
