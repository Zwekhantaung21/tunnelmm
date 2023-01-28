import React, { useState } from 'react';
import { NextPage } from 'next';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiFillSetting, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Image from 'next/image';
import SuggestedAccounts from './SuggestedAccounts';
import Discover from './Discover';
import Footer from './Footer';
import useAuthStore from '../store/authStore';
import { BiNotification, BiSearch } from 'react-icons/bi';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { GiFlameTunnel } from 'react-icons/gi';
import { CircleLoader } from 'react-spinners';
import tbite from '../public/t-bite.png';
import qr from "../public/qrcode.png"
const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(false);
  
  const { pathname } = useRouter();
  const { fetchAllUsers, allUsers }: any = useAuthStore();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const activeLink = '  items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#006ee6] rounded';
  
  const normalLink = ' items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if(searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <div>
      <div
        className='block ml-2 mt-3 text-xl'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle className='text-blue-500 text-2xl'/> :  <Image
            className='cursor-pointer'
            src={tbite}
            width={35} 
            height={35} 
            
          />}
      
         
      </div>
      
      {showSidebar && (
        
        <div className='xl:w-400 w-50 flex flex-col justify-start mb-10 xl:border-r-2 border-gray-200  xl:border-gray-100 p-3 '>
          <div className='xl:border-b-2 border-gray-100 xl:pb-4 mr-0'>
            
            {/* search bar */}
          <div className='relative absolute ml-5 md:hidden'>
          <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" id="floating_outlined" className="block w-full p-4 pl-10 text-sm text-gray-900 border md:w-[350px] border-gray-300 rounded-lg bg-transparent bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 peer" placeholder=" "  >
        </input>
        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
      </label>
        <button  onClick={handleSearch} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
      </div>
            <Link href='/'>
             
              <div className={pathname === '/' ? activeLink : normalLink}>
                <div className='flex items-center justify-center '>
                <p className='text-2xl '>
                <CircleLoader
  color="#006ee6"
  size={25}
/>
                </p>
                
                <span className='capitalize  text-xl ml-2 xl:block'>
                  Tunnelling
                </span></div>
              </div>
              
            </Link>
          </div>
          
          <Discover />
          <div className='md:hidden'>
          <div className={pathname === '/' ? activeLink : normalLink}>
          <div className='flex items-center '>
                <p className='text-2xl md:hidden'>
                  <BiNotification />
                </p>
                
                <span className='capitalize text-xl md:hidden ml-2'>
                  Notifications
                </span>
              </div>
              </div>

              <div className={pathname === '/' ? activeLink : normalLink}>
              <div className= 'flex items-center'>
                <p className='text-2xl md:hidden '>
                  <AiFillSetting />
                </p>
                
                <span className='capitalize text-xl md:hidden ml-2'>
                  Setting
                </span>
              </div>
              </div>

              <div className={pathname === '/' ? activeLink : normalLink}>
              <div className='flex items-center'>
                <p className='text-2xl md:hidden'>
                  <BsFillCameraVideoFill />
                </p>
                
                <span className='capitalize text-xl md:hidden ml-2'>
                  Eancro TV
                </span>
              </div>
        </div>
        </div>

          <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
         
          <Footer /><br />
          <div>
          <Image
                  width={120}
                  height={120}
                  className=' rounded'
                  src={qr}
                  alt='user-profile'
                
                />
          </div>
        
        </div>
      )}
    </div>
  );
};

export default Sidebar;
