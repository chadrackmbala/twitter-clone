import React from 'react';
import Tweet from './tweet';
// import tweetsData from '../utils/tweetsData';
import UserService from '../utils/tweetsData';


export default function Tweets() {
    const data = UserService.getUsers();
    return (
        <>
            {/* <Tweet name="Mbala" /> */}
            <div>
                {data.map((tweeObject, index) => {
                    return <Tweet tweet={tweeObject} key={index}/>
                })}
            </div>
        </>
    );
};