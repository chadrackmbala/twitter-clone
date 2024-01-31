import TweetEditorInput from './tweetEditorInput';
import TweetEditorButtons from './tweetEditorButtons';
import { useState, useContext } from 'react';
import NweTweetContext from '../context/NweTweetContext';
import TweetsContext from '../context/TweetsContext';
import TweetButton from './tweetButton';
import TweetEditorActions from "./tweetEditorActions";
import TweetEditorFormButton from "./tweetEditorFormButton";
import createData from '../utils/createData';
import UserContext from '../context/UserContext';


export default function TweetEditorForm() {

    let currentUser = useContext(UserContext);
    const { tweets, tweetSeter } = useContext(TweetsContext);
    const [inputText, setInputText] = useState("");

    function handleTweetInputChange(text) {
        setInputText(text);
    }

    const [newTweetData, setNewTweetData] = useState("");

    function handleButtonClick(e) {
        e.preventDefault();

        let newTweet = {
            id: 1,
            tweetAvatar: currentUser.userProfil,
            tweetTitle: currentUser.name,
            tweetGroup: null,
            tweetP: "@CNN . 7m",
            tweetText: inputText,
            tweetImage: null,
            tweetComment: tweets.tweetComment,
            tweetFlech: tweets.tweetFlech,
            tweetHeart: tweets.tweetHeart,
            tweetShare: tweets.tweetShare,
            details: {
                comments: 0,
                fleche: 0,
                likes: 0
            }
        }
        // console.log("New Tweet :", newTweet);
        setNewTweetData(newTweet)
        tweetSeter([newTweet, ...tweets]);

        console.log("New Tweet :", newTweetData);
    }

    return (
        <>
            <div className="tweet-editor-form">
                <form>
                    <TweetEditorInput onInputChange={handleTweetInputChange} />
                    <div className="tweet-editor-buttons">
                        <TweetEditorActions />
                        <TweetButton onButtonClick={handleButtonClick} style={"tweet-editor-button"} />
                    </div>
                </form>
            </div>
        </>
    );
};