  import React, { useEffect, useRef, useState } from 'react';
  import { NextPage } from 'next';
  import Image from 'next/image';
  import Link from 'next/link';
  import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
  import { BsFillPlayFill, BsFillPauseFill, BsHeart } from 'react-icons/bs';
  import { GoLinkExternal, GoVerified } from 'react-icons/go';
  import { BsPlay } from 'react-icons/bs';
  import Detail from '../pages/detail/[id]';
  import { Video } from './../types';
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineStar } from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';
import { GiDrippingStar } from 'react-icons/gi';
import LikeButton from './LikeButton';
import useAuthStore from '../store/authStore';
import axios from 'axios';

import PostDetails from "../pages/detail/[id]";


  interface IProps {
    post: Video;
    isShowingOnHome?: boolean;
    
  }

  const VideoCard: NextPage<IProps> = ({ post: { caption, postedBy, video, _id, likes, comments }, isShowingOnHome }) => {
    const [playing, setPlaying] = useState(true);
    const [isHover, setIsHover] = useState(false);
    const [isVideoMuted, setIsVideoMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { userProfile }: any = useAuthStore();
    const handleLike = async (like: boolean) => {
      if (userProfile) {
        const res = await axios.put(`https://tunnelmm.vercel.app/api/like`, {
          userId: userProfile._id,
          postId: post._id,
          like
        });
        setPost({ ...post, likes: res.data.likes });
      }
    };


    const onVideoPress = () => {
      if (playing) {
        videoRef?.current?.pause();
        setPlaying(false);
      } else {
        videoRef?.current?.play();
        setPlaying(true);
      }
    };

    useEffect(() => {
      if (videoRef?.current) {
        videoRef.current.muted = isVideoMuted;
      }
    }, [isVideoMuted]);

    if(!isShowingOnHome) {
      return (
        <div>
          <Link href={`/detail/${_id}`}>
            <p className='mt-2 text-lg text-black-800 mb-3 cursor-pointer '>
              {caption}
            </p>
          </Link>
          <Link href={`/detail/${_id}`}>
            <video
              loop
              src={video.asset.url}
              className='w-[250px] md:w-full rounded-xl cursor-pointer'
            ></video>
          </Link>
              <div className=' gap-2 -mt-8 items-center ml-4'>
                <p className='text-white text-lg mb-5 font-medium flex gap-1 items-center'>
                  <GiDrippingStar className='text-4xl text-blue-500' />
                  {likes?.length || 0}
                </p>
                
              </div>
          <br />
        </div>
      )
    }

    return (
      <div className='flex  flex-col border-b-2 border-gray-200 pb-4'>
        <div>
          <div className='flex ml-0 gap-3 cursor-pointer font-semibold rounded '>
            <div className='md:w-16 md:h-16 w-10 h-10'>
              <Link href={`/profile/${postedBy?._id}`}>
                <>
                  <Image
                    width={62}
                    height={62}
                    className=' rounded-full'
                    src={postedBy?.image}
                    alt='user-profile'
                    layout='responsive'
                  />
                </>
              </Link>
            </div>
            <div>
              <Link href={`/profile/${postedBy?._id}`}>
              <div className=' xl:block'>
                <p className='flex gap-1 items-center text-md font-bold text-primary capitalize'>
                {postedBy.userName}{' '}{' '}
                  <GoVerified className='text-blue-400' />
                </p>
                <p className='lowercase text-gray-400 text-xs'>
                {postedBy.userName}
                </p>
              </div>
                
                
              </Link>
              
            </div>
            
          </div>
          <div className='md:ml-10 w-[auto]'>
              {/* <Link href={`/detail/${_id}`}>
                
                
              </Link> */}
              <p className='mt-2 mr-5 text-lg font-normal'>{caption}</p>
              {/* <span className="cursor-pointer bg-gray-100 text-gray-800 text-xs mt-2 font-semibold md:ml-10 px-1 py-1 rounded dark:bg-gray-700 text-blue-500">
             
              </span> */}
              </div>
        </div>

        <div className='lg:ml-20 flex gap-4 relative'>
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='rounded-3xl lg:rounded'
          >
            <Link href={`/detail/${_id}`}>
            <span className='float-right cursor-pointer text-sm flex text-blue-600'>Detail&nbsp;
            <GoLinkExternal className='mt-1'/> </span>
            </Link>
            <br className='block'/>
              <video
                muted
                controls={true}
                preload='auto'
                
                playsInline
                ref={videoRef}
                src={video.asset.url}
                // className='lg:w-[610px]  h-[150px] md:h-[400px] lg:h-[368px] w-[270px] rounded-3xl '
                className=' w-[300px] xl:w-[600px] rounded-3xl mb-2'
              ></video>
            

            {isHover && (
              <div className='absolute bottom-0 md:bottom-5 cursor-pointer left-0 md:left-14 lg:left-0 flex gap-40 lg:justify-between w-[100px] md:w-[50px] lg:w-[600px] p-3'>
                {/* {playing ? (
                  <div className='absolute bottom-[80%] left-[110%] lg:left-[42%] lg:bottom-[210%] cursor-pointer'>
                  <button onClick={onVideoPress}>
                    <BsFillPauseFill className='text-blue-600  text-5xl lg:text-7xl ' />
                  </button>
                  </div>
                ) : (
                  <div className='absolute bottom-[80%] left-[120%] lg:left-[42%] lg:bottom-[210%] cursor-pointer'>
                  <button onClick={onVideoPress}>
                    <BsFillPlayFill className='text-blue-600  text-5xl lg:text-7xl' />
                  </button>
                  </div>
                )} */}
                {/* {isVideoMuted ? (
                  <div>
                  <button onClick={() => setIsVideoMuted(false)}>
                    <HiVolumeOff className='text-blue-600 text-2xl lg:text-1xl' />
                  </button>
                  </div>
                ) : (
                  <div >
                  <button onClick={() => setIsVideoMuted(true)}>
                    <HiVolumeUp className='text-blue-600 text-2xl lg:text-2xl' />
                  </button>
                  </div>
                )} */}
              </div>
            )}
          </div>
        </div>
        <div className='mt-2  lg:mt-0 md:text-2xl text-2xl'>
          <div className='flex  ml-0  '>
         
           {userProfile &&  <LikeButton
                  likes={post.likes}
                  flex='flex'
                  handleLike={() => handleLike(true)}
                  handleDislike={() => handleLike(false)}
                />}
         
            
          <AiOutlineStar className='cursor-pointer text-blue-400  md:ml-40'/>&nbsp;
          <p className='text-xs text-gray-500 mt-1'> {likes?.length || 0}</p>

          <BiPaperPlane className='cursor-pointer  text-blue-400 md:ml-40 ml-20'/>&nbsp;
          <p className='text-xs text-gray-500 mt-1'> {comments?.length || 0}</p>

          <AiOutlineShareAlt className='cursor-pointer text-blue-400 md:ml-40 ml-20'/>&nbsp;
          <p className='text-xs text-gray-500 mt-1'>0</p>
          </div>
        </div>
      </div>
    );
  };

  export default VideoCard;
