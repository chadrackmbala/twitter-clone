import React from 'react';
import Tweet from './tweet';
// import tweetsData from '../utils/tweetsData';
import UserService from '../utils/tweetsData';
import { Group, Comments, FLeche, Heart, Share } from '../icons/index';
import { newyorkTime, tweetImage, tweetProfilePhoto, tweetLogo } from '../images/index';

export default function Tweets() {
  const data = UserService.getUsers();
  data.unshift(
    {
      id: 5,
      tweetAvatar: tweetProfilePhoto,
      tweetTitle: "CNN",
      tweetGroup: Group,
      tweetP: "@CNN . 7m",
      tweetText: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
      tweetImage: null,
      tweetComment: Comments,
      tweetFlech: FLeche,
      tweetHeart: Heart,
      tweetShare: Share,
      details: {
        comments: 57,
        fleche: 144,
        likes: 184,
      }
    },
  )
  return (
    <>
      <div>
        {data.map((tweeObject, index) => {
          return <Tweet tweet={tweeObject} key={index} />
        })}
      </div>
    </>
  );
};