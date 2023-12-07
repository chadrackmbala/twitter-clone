import React from "react";
import FollowButton from './follow-button';

export default function Follower({ follower }) {
    console.log(follower.content);
    console.log(follower.icon);
    const avatar = follower.avatar;
    return (
        <>
            <div className="follower">
                <div className="follower-origin">
                  <img src={avatar} alt="" className="follow-avatar" />
                  <div>
                    <div className="tweet-title">
                        <h3>{follower.title}</h3>
                        <img src={follower.icon} alt="" />
                    </div>
                    <div>
                      <p className="gray-text">{follower.content}</p>
                    </div>
                  </div>
                </div>
             
              <FollowButton style={"right-sidebar-button"} />
            </div>
          
        </>
    )
}