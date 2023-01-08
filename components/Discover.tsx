import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';

const Discover: NextPage = () => {
  const router = useRouter();
  const { topic } = router.query;

  const activeTopicStyle = 'xl:border-2 hover:bg-primary xl:border-[#0055b3] px-3 py-2 rounded xl:rounded-2xl flex items-center gap-2 justify-center cursor-pointer text-[#0055b3]';
  const topicStyle = 'xl:border-2 hover:bg-primary xl:border-gray-200 px-3 py-2 rounded xl:rounded-2xl flex items-center gap-2 justify-center cursor-pointer text-black';

  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <p className='text-gray-500 font-semibold m-3 mt-4  xl:block'>
        Popular Topics
      </p>
      <div className='flex gap-3 flex-wrap'>
        {topics?.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={topic === item.name ? activeTopicStyle : topicStyle}>
              <span className='font-bold text-2xl xl:text-md hidden xl:flex'>
                {/* {item.icon} */}
              </span>
              <span className={`font-medium text-md  xl:block `}>
                <span className=''>#</span>{item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
