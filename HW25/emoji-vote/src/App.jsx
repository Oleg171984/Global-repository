import React from "react";
import EmojiVote from "./components/ EmojiVote.jsx";

function App() {
    return (
        <div>
            <EmojiVote emojis={["😃", "😊", "😎", "🤩", "😍"]} />
        </div>
    );
}

export default App;
