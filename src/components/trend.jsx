import React from "react"

export default function Trend(props) {
    console.log(props.trend.content);
    return (
        <>
            {/* <div className="trend">
                <div className="tweet-avatar">
                    <img src={props.tweet.tweetAvatar} alt="" />
                </div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title">
                            <h3>{props.tweet.tweetTitle}</h3>
                            <img src={props.tweet.tweetGroup} alt="" />

                            <p>{props.tweet.tweetP}</p>
                        </div>
                        <p className="tweet-text">
                        {props.tweet.tweetText}
                        </p>
                        <img src={props.tweet.tweetImage} className="tweet-image"  />
                    </div>
                </div>
            </div> */}
        </>
    )
}