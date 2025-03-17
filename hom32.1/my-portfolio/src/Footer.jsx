import React from 'react';
import { Container, Grid, Button, Typography } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer>
            <Container maxWidth="md" sx={{ mt: 5, py: 3, textAlign: 'center', color: '#f5f5f5' }}>
                <Typography variant="body1" color="primary">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</Typography>
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
                    <Grid item>
                        <Button variant="text" startIcon={<Email />} href="mailto:your.email@example.com">
                            Email
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="text" startIcon={<LinkedIn />} href="https://linkedin.com/in/yourprofile" target="_blank">
                            LinkedIn
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="text" startIcon={<GitHub />} href="https://github.com/yourgithub" target="_blank">
                            GitHub
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
