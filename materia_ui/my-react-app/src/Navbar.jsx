import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginDialog from './LoginDialog.jsx';

const Navbar = ({ handleClickOpen }) => {
    return (
        <AppBar position="fixed">cd
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Web Developer In
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
                            Long In
                        </Button>
                        <LoginDialog />
                        <Button color="secondary" variant="contained">
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
