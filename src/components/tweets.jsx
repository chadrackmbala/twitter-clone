import React from 'react';
import Tweet from './tweet';
import tweetsData from '../utils/tweetsData';

export default function Tweets() {
    return (
        <>
            {/* <Tweet name="Mbala" /> */}
            <div>
                {tweetsData.map((tweeObject, index) => {
                    return <Tweet tweet={tweeObject} key={index}/>
                })}
            </div>
        </>
    );
};