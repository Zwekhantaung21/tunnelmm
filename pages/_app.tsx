import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import ScrollToTop from '../components/scroll';


const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);  

  if (isSSR) return null;
  

 

  
  return (
    <GoogleOAuthProvider clientId='264290868593-dmul9pko0nu30e786o4mgtiq9uhnj1t1.apps.googleusercontent.com'>
     
      <div className='xl:w-[1400px] m-auto overflow-hidden h-[100vh]'>
        <Navbar />
        <div className='flex gap-6 md:gap-20 '>
          <div className='h-[92vh] overflow-auto xl:overflow-hidden xl:hover:overflow-auto'>
            <Sidebar />
          </div>
          
          <div className='mt-4 mr-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
            <div >
            
            <Component {...pageProps}  />
            <ScrollToTop/>

          </div>
 
          

          </div>
         
        </div>
        
      </div>
      
    </GoogleOAuthProvider>
  );
};

export default MyApp;
