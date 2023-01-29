import React from 'react';
import axios from 'axios';

import VideoCard from '../components/VideoCard';
import ImageCard from '../components/ImageCard';
import { BASE_URL } from '../utils';
import { Video } from '../types';
import NoResults from '../components/NoResults';
import ScrollToTop from '../components/scroll';
interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {

  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length 
        ? videos?.map((video: Video) => (
         <div>
           <ImageCard post={video} isShowingOnHome key={video._id} /> 
           <VideoCard post={video} isShowingOnHome key={video._id} /> 
          
         </div>
         
          
         
         
        )) 
        : <NoResults text={`No Videos`} />}
        
    </div>
    
    
  );
 
    
  
};
<ScrollToTop/>
export default Home;

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`https://tunnelmm.vercel.app/api/post`);

  if(topic) {
    response = await axios.get(`https://tunnelmm.vercel.app/api/discover/${topic}`);
  }
  
  return {
    props: { videos: response.data },
  };
};
