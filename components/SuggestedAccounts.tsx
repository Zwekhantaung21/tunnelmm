import React, { useEffect } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';

import { IUser } from '../types';

interface IProps {
  fetchAllUsers: () => void;
  allUsers: IUser[];
}

const SuggestedAccounts: NextPage<IProps> = ({ fetchAllUsers, allUsers }) => {
  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  const users = allUsers
    .sort(() => 0.5 - Math.random())
    .slice(0, allUsers.length);

  return (
    <div className='xl:border-b-2 border-gray-100 pb-4'>
      <p className='text-gray-500 font-semibold m-3 mt-4  xl:block'>
        Suggested accounts
      </p>
      <div>
        {users?.slice(0, 3).map((user: IUser) => (
          <Link href={`/profile/${user._id}`} key={user._id}>
            <div className='flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded'>
              <div className='w-8 h-8'>
                <Image
                  width={34}
                  height={34}
                  className='rounded-full'
                  src={user.image}
                  alt='user-profile'
                  layout='responsive'
                />
              </div>

              <div className=' xl:block'>
                <p className='flex gap-1 items-center text-md font-bold text-primary capitalize'>
                  {user.userName.replace(/\s+/g, '')}{' '}
                  <GoVerified className='text-blue-400' />
                  <button type="button" className="py-1 px-2 text-xs font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Follow</button>
                </p>
                <p className='lowercase text-gray-400 text-xs'>
                  {user.userName}
                </p>
              </div>
            </div>
          </Link>
        ))}
        {/* <Link href={`./image`}>
        <span>See more</span>
        </Link> */}
       
      </div>
    </div>
  );
};

export default SuggestedAccounts;
