import Avatar from "./avatar"
import TweetEditorForm from "../components/tweetEditorForm"

export default function TweetEditor() {
    return (
        <>
            <div className="tweet-editor">
                <Avatar />
                <TweetEditorForm />
            </div>
        </>
    )
}