import React, { useCallback } from 'react';

const EmojiVote = ({ emoji, onVote, votes }) => {
    // Запам'ятовуємо функцію кліку, щоб не створювалася наново при кожному рендері
    const handleClick = useCallback(() => {
        onVote(emoji); // Викликаємо функцію голосування з App.jsx
    }, [emoji, onVote]);

    return (
        <div>
            <button onClick={handleClick} style={{ fontSize: '2rem' }}>
                {emoji}
            </button>
            <p>{votes} голосів</p>
        </div>
    );
};

export default EmojiVote;
