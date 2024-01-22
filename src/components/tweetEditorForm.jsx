import TweetEditorInput from './tweetEditorInput'
import TweetEditorButtons from './tweetEditorButtons'
import { useState, useContext } from 'react'
import NweTweetContext from '../context/NweTweetContext';
import TweetsContext from '../context/TweetsContext';

export default function TweetEditorForm() {

    // const { initialData } = useContext(TweetsContext);
    const [tweetText, setTweetText] = useState('');

    const handleTweetInputChange = (text) => {
        setTweetText(text);
    }

    const handleButtonClick = () => {
        console.log("Text saisi :", tweetText);
        <NweTweetContext.Provider value={{ text: tweetText }} />
        // initialData.unshift(
        //     {
        //         id: 1,
        //         tweetAvatar: null,
        //         tweetTitle : "CNN",
        //         tweetGroup : null,
        //         tweetP : "@CNN . 7m",
        //         tweetText : tweetText,
        //         tweetImage : null,
        //         tweetComment : null,
        //         tweetFlech : null,
        //         tweetHeart : null,
        //         tweetShare : null,
        //         details: {
        //             comments: 57,
        //             fleche: 144,
        //             likes: 184,
        //         }
        //     },
        // )
        // console.log(initialData);
    }

    return (
        <>
            <div className="tweet-editor-form">
                <NweTweetContext.Provider value={{ text: tweetText }} >
                    <TweetEditorInput onInputChange={handleTweetInputChange} />
                    <TweetEditorButtons tweetText={tweetText} onButtonClick={handleButtonClick} />
                </NweTweetContext.Provider>
            </div>
        </>
    );
};