import React, { useMemo } from 'react';
import EmojiVote from './EmojiVote';

const EmojiVoting = () => {
    const emojis = useMemo(() => ['😀', '😊', '😎', '😍', '😢'], []);
    return (
        <div>
            <h1>Голосування за смайлик</h1>
            {emojis.map((emoji, index) => (
                <EmojiVote key={index} emoji={emoji} />
            ))}
        </div>
    );
};

export default EmojiVoting;
