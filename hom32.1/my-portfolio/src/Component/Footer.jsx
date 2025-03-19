import React from 'react';
import { Container, Grid, Button, Typography } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer>
            <Container id="contact" maxWidth="md" sx={{ mt: 5, py: 5, textAlign: 'center', backgroundColor: '#f1f1f1' }}>
                <Typography variant="h4" color="grey" sx={{ mb: 2 }}>Contact</Typography>
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                    <Grid item>
                        <Button variant="contained" startIcon={<Email />} href="mailto:your.email@example.com">
                            Email
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" startIcon={<LinkedIn />} href="https://linkedin.com/in/yourprofile" target="_blank">
                            LinkedIn
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" startIcon={<GitHub />} href="https://github.com/yourgithub" target="_blank">
                            GitHub
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
