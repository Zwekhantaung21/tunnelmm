import React, { useState } from 'react';
import { NextPage } from 'next';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiFillSetting, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

import SuggestedAccounts from './SuggestedAccounts';
import Discover from './Discover';
import Footer from './Footer';
import useAuthStore from '../store/authStore';
import { BiNotification, BiSearch } from 'react-icons/bi';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { GiFlameTunnel } from 'react-icons/gi';
import { CircleLoader } from 'react-spinners';
const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
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
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      
      {showSidebar && (
        
        <div className='xl:w-400 w-50 flex flex-col justify-start mb-10 border-r-2 border-gray-200 xl:border-0 p-3 '>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4 mr-0'>
            {/* search bar */}
          <div className='relative absolute ml-5 md:hidden'>
        <form
          onSubmit={handleSearch}
          className=' md:static justify-center text-center bg-white'
        >
        
          <div className="relative">
    <input  value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-[300px] md:w-[350px] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
      Your vibe or person?</label>
</div>
          <button
            onClick={handleSearch}
            className='absolute md:right-10 right-10 top-3 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch />
          </button>
        </form>
      </div>
            <Link href='/'>
             
              <div className={pathname === '/' ? activeLink : normalLink}>
                <div className='flex items-center justify-center'>
                <p className='text-2xl '>
                <CircleLoader
  color="#006ee6"
  size={25}
/>
                </p>
                
                <span className='capitalize text-xl ml-2 xl:block'>
                  Tunneling
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
          
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
