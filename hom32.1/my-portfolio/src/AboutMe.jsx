import React from 'react';
import { Container, Grid, Paper, Avatar, Typography } from '@mui/material';
import Navbar from "./Navbar.jsx";

const AboutMe = ({ darkMode, setDarkMode }) => {
    return (
        <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Container maxWidth="lg" justifyContent="center" sx={{ mt: 12, textAlign: 'center' }}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Paper sx={{ p: 3, textAlign: 'center' }}>
                            <Avatar
                                src="/your-photo.jpg"
                                alt="Your Name"
                                sx={{ width: 120, height: 120, margin: 'auto' }} // Фотографія
                            />
                            <Typography variant="h4" sx={{ mt: 2 }}>
                                Кучугурний Олег
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                                Front-End Developer
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                Привіт! Я розробник фронтенду з досвідом роботи з React, Redux, та Material UI.
                                Прагну створювати зручні та сучасні веб-додатки.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AboutMe;
