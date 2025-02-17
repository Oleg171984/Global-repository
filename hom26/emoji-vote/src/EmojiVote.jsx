import React, { useState, useCallback, useMemo } from 'react';

const EmojiVote = ({ emoji }) => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);
    const emojiLabel = useMemo(() => {
        return `${emoji} - Голосів: ${count}`;
    }, [emoji, count]);

    return (
        <div>
            <button onClick={handleClick} style={{ fontSize: '2rem' }}>
                {emoji}
            </button>
            <p>{emojiLabel}</p>
        </div>
    );
};

export default EmojiVote;
