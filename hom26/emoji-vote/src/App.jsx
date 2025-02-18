import React, { useMemo, useState, useCallback } from 'react';
import EmojiVote from './EmojiVote';

const EmojiVoting = () => {
    const emojis = useMemo(() => ['😀', '😊', '😎', '😍', '😢'], []);

    const [votes, setVotes] = useState(
        emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {})
    );

    const handleVote = useCallback((emoji) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [emoji]: prevVotes[emoji] + 1,
        }));
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Центруємо по вертикалі
            textAlign: 'center',
        }}>
            <h1>Голосування за смайлик</h1>

            {/* Контейнер для смайликів */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
            }}>
                {emojis.map((emoji) => (
                    <EmojiVote key={emoji} emoji={emoji} onVote={handleVote} votes={votes[emoji]} />
                ))}
            </div>

            {/* Відображення загальних результатів */}
            <h2>Результати голосування:</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {emojis.map((emoji) => (
                    <li key={emoji}>
                        {emoji}: {votes[emoji]} голосів
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmojiVoting;
