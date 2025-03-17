import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const SwapiList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((data) => setCharacters(data.results))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Star Wars Characters</Typography>
            <Card sx={{ p: 3 }}>
                <CardContent>
                    <List>
                        {characters.map((char, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={char.name} secondary={`Height: ${char.height} cm, Mass: ${char.mass} kg`} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SwapiList;
