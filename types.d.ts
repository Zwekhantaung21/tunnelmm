export interface Video {
    caption: string;
    isVideo: boolean; // add this property
    isImage: boolean; // add this property
    type: string;
    video: {
      asset: {
        _id: string;
        url: string;
        type: VideoType;
      };
    };
    _id: string;
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
    likes: {
      postedBy: {
        _id: string;
        userName: string;
        image: string;
      };
    }[];
    comments: {
      comment: string;
      _key: string;
      postedBy: {
        _ref: string;
      };
    }[];
    userId: string;
  }
  
  export interface IUser {
    _id: string;
    _type: string;
    userName: string;
    image: string;
  }
  