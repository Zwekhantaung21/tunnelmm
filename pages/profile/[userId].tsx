import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import axios from 'axios';

import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NoResults';
import { IUser, Video } from '../../types';
import { Avatar, Button } from 'flowbite-react';
import { HiAdjustments, HiCloudDownload, HiUserCircle, HiUserGroup } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
// import { BASE_URL } from '../../utils';

interface IProps {
  data: {
    user: IUser;
    userVideos: Video[];
    userLikedVideos: Video[];
  };
}

const Profile = ({ data }: IProps) => {
  const [showUserVideos, setShowUserVideos] = useState<Boolean>(true);
  const [videosList, setVideosList] = useState<Video[]>([]);

  const { user, userVideos, userLikedVideos } = data;
  const videos = showUserVideos ? 'border-b-2 border-black' : 'text-gray-400';
  const liked = !showUserVideos ? 'border-b-2 border-black' : 'text-gray-400';

  useEffect(() => {
    const fetchVideos = async () => {
      if (showUserVideos) {
        setVideosList(userVideos);
      } else {
        setVideosList(userLikedVideos);
      }
    };

    fetchVideos();
  }, [showUserVideos, userLikedVideos, userVideos]);

  return (
    <div className='w-full'>
      <div className='flex gap-4 mb-4 bg-white w-full'>
        <div className='w-16 h-16 md:w-32 md:h-32 '>
          <Image
            width={120}
            height={120}
            layout='responsive'
            className='rounded-full'
            src={user.image}
            alt='user-profile'
          />
        </div>

        <div>
          <div className='text-md md:text-2xl md:mt-4 font-bold tracking-wider flex gap-2 items-center justify-center '>
            <span>{user.userName.replace(/\s+/g, '')} </span>
            <GoVerified className='text-blue-400 md:text-xl text-md' />
          </div>
          <p className='text-sm lowercase '> {user.userName}</p>
        </div>
        <div className='w-20 md:mt-4 md:ml-20'>
        <Button
      
    outline={false}
    gradientDuoTone="purpleToBlue"
    size="xs"
  >
    <span>Follow</span>
  </Button>
  
        </div>
       
      </div>
      <div>
      <blockquote className="text-xs lg:text-sm italic font-semibold text-gray-600 dark:text-white">
    <svg aria-hidden="true" className="w-4 h-4 lg:w-7 lg:h-7 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <p>"This is just a tesing stage for tunnel and all functions may not be used completely"</p>
</blockquote>
      </div>
      <div className='mt-3'>
        <Button.Group>
  <Button color="gray" size="xs">
    <HiUserGroup className="mr-0.5 h-8 w-full" />
    Followers 
    <span className='ml-2'>1.3K</span>
  </Button>
  <Button color="gray" size="xs">
    <BsFillFileEarmarkPostFill className="mr-0.5 h-8 w-full" />
    Posts
    <span className='ml-2'>10</span>
  </Button>
  <Button color="gray" size="xs"> 
    <AiFillStar className="mr-0.5 h-8 w-full" />
    Rating
    <span className='ml-2'>9.1</span>
  </Button>
</Button.Group>
        </div>
        <p className='mb-2 font-medium'>Followed By</p>
      <div className='mt-2 flex'>
        
      <Avatar.Group>
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
      rounded={true}
      stacked={true}
    />
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
      rounded={true}
      stacked={true}
    />
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
      rounded={true}
      stacked={true}
    />
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
      rounded={true}
      stacked={true}
    />
   
  </Avatar.Group>
  <p className='ml-3 font-light text-xs'>
    Juan,Juila and others are followed
  </p>
      </div>
      <div>
        <div className='flex gap-10 mb-10 mt-4 border-b-2 border-gray-100 bg-white w-full'>
          <p className={`text-xl font-semibold cursor-pointer ${videos} mt-2`} onClick={() => setShowUserVideos(true)}>
            Videos
          </p>
          <p className={`text-xl font-semibold cursor-pointer ${liked} mt-2`} onClick={() => setShowUserVideos(false)}>
            Liked
          </p>
        </div>
        <div className='flex gap-6 flex-wrap md:justify-start'>
          {videosList.length > 0 ? (
            videosList.map((post: Video, idx: number) => (
              <VideoCard key={idx} post={post} />
            ))
          ) : (
            <NoResults
              text={`No ${showUserVideos ? '' : 'Liked'} Videos Yet`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const res = await axios.get(`https://tunnelmm.vercel.app/api/profile/${userId}`);

  return {
    props: { data: res.data },
  };
};
export default Profile;
