export default function TweetEditorInput({ onInputChange }) {
    const valueText = "What’s happening?"

    const handleInputChange = (e) => {
        onInputChange(e.target.value);
    }

    return (
        <>
            <input type="text" className="tweet-editor-input" placeholder={valueText}
                onChange={handleInputChange}
            />
        </>
    );
};