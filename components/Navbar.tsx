import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillMessage, AiOutlineLogout } from 'react-icons/ai';
import { BiMessageAlt, BiSearch } from 'react-icons/bi';
import { IoMdAdd, IoMdNotifications } from 'react-icons/io';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';

import useAuthStore from '../store/authStore';
import { IUser } from '../types';
import { createOrGetUser } from '../utils';
import Logo from '../utils/textlogo2.png';
import { Avatar, Dropdown } from 'flowbite-react';
import { HiCog, HiCurrencyDollar, HiLogout, HiUsers, HiViewGrid } from 'react-icons/hi';
import { BsFillCameraVideoFill } from 'react-icons/bs';

const Navbar = () => {
  const [user, setUser] = useState<IUser | null>();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { userProfile, addUser, removeUser } = useAuthStore();
  
  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if(searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <div className='w-full mt-2 flex justify-between items-center border-b-2 border-gray-100 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt='logo'
            layout='responsive'
          />
        </div>
      </Link>

      <div className='relative hidden md:block'>
        <form
          onSubmit={handleSearch}
          className='absolute md:static top-10 -left-20 bg-white'
        >
        
          <div className="relative">
    <input  value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-[300px] md:w-[350px] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
      Your vibe or person?</label>
</div>
          <button
            onClick={handleSearch}
            className='absolute md:right-5 right-6 top-3 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div className='lg:block md:hidden hidden'>
      <Dropdown label="AIO"
      size="sm"
      
      >
 
  <Dropdown.Item icon={IoMdNotifications}>
    Notifications
  </Dropdown.Item>
  <Dropdown.Item icon={HiCog}>
    Settings
  </Dropdown.Item>
  <Dropdown.Item icon={HiUsers}>
    Contacts
  </Dropdown.Item>
  <Dropdown.Item icon={AiFillMessage}>
    Message
  </Dropdown.Item>
  <Link href={"https://eancrotv.epizy.com/create.html"}>
  <a target="_blank">
  <Dropdown.Item icon={BsFillCameraVideoFill}>
    Eancrotv
  </Dropdown.Item>
  </a>
  </Link>
</Dropdown>
      </div>
      
      <div>
        {user ? (
          
          <div className='flex  md:gap-10'>
            <Link href='/upload'>
              {/* <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center md:mr-5 mr-10 gap-2'> */}
              <button className="relative inline-flex items-center justify-center p-0.5 mb-1 mr-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Tunnelling
      <span className="inline-flex items-center justify-center w-4 h-4.5 ml-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
      <svg aria-hidden="true" className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
  </span>
  </span>
 
</button>
               
                {/* <IoMdAdd className='text-xl' />{' '} */}
                {/* <span >Upload </span> */}
                
             
            </Link>
            {user.image && (
              
                <div className='ml-10'>
                <Dropdown
  label={<Link href={`/profile/${user._id}`}><Image
    className='rounded-full cursor-pointer'
    src={user.image}
    alt='user'
    width={40}
    height={40}
  /></Link>}
  arrowIcon={true}
  inline={true}
  
>
  <Dropdown.Header>
  <span className="block truncate text-sm font-medium">
   
    {user.userName}
    </span>
    <span className="block text-sm font-small">
    {user.userName}@gmail.com
    </span>
  </Dropdown.Header>
  <Dropdown.Item>
    Dashboard
  </Dropdown.Item>
  <Dropdown.Item>
    Settings
  </Dropdown.Item>
  <Dropdown.Item>
    Earnings
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item>
  <button
                type='button'
                className=' p-2 cursor-pointer outline-none '
                onClick={() => {
                  googleLogout();
                  removeUser();
                }}
              >
                <div className='flex ml-5'>
                <AiOutlineLogout color='red' fontSize={21} />
                <span className='ml-1'>Logout</span></div>
              </button>
  </Dropdown.Item>
</Dropdown>
                </div>
                
              
              
            )}
            <div>
      
      </div>
              
          </div>
        ) : (
            <GoogleLogin
              onSuccess={(response) => createOrGetUser(response, addUser)}
              onError={() => console.log('Login Failed')}
            />
        )}
      </div>
    </div>
  );
};

export default Navbar;
