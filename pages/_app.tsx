import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';
import Topbutton from "../components/scroll";
import Link from 'next/link';

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
            <div className='scroll'>
            <Component {...pageProps} />
            <Topbutton/>

            {/* <div data-dial-init className="fixed bottom-6 right-24 group">
            <Link href='/upload'>    
    <button  type="button" data-dial-toggle="speed-dial-menu-dropdown-alternative" aria-controls="speed-dial-menu-dropdown-alternative" aria-expanded="false" className="flex items-center justify-center ml-auto text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
        <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
        <span className="sr-only">Open actions menu</span>
    </button>
    </Link>
</div> */}

          </div>

            

          </div>
        </div>
        
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
