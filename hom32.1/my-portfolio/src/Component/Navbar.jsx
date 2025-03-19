import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Container, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7 } from '@mui/icons-material';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [darkMode, setDarkMode] = useState(false); // Стейт для теми

    const handleMenuOpen = (event) => {
        setOpenMenu(event.currentTarget);
    };

    const handleMenuClose = () => {
        setOpenMenu(null);
    };

    const handleDialogOpen = (type) => {
        setIsSignUp(type === 'signUp');
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleRegister = () => {
        console.log('Реєстрація: ', { name, email, password });
        handleDialogClose();
    };

    const handleLogin = () => {
        console.log('Вхід: ', { email, password });
        handleDialogClose();
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed">
                <Container maxWidth="lg" >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Web Developer In
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', ml: 'auto' }}> {/* Додано ml: 'auto' для вирівнювання вправо */}
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={() => setDarkMode(!darkMode)}
                                aria-label="toggle dark mode"
                            >
                                {darkMode ? <Brightness7 /> : <Brightness4 />} {/* Зміна іконки в залежності від теми */}
                            </IconButton>
                            <Menu
                                anchorEl={openMenu}
                                open={Boolean(openMenu)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}><a href="#about-me" style={{ textDecoration: 'none', color: 'inherit' }}>AboutMe</a></MenuItem>
                                <MenuItem onClick={handleMenuClose}><a href="#todo-list" style={{ textDecoration: 'none', color: 'inherit' }}>Todo</a></MenuItem>
                                <MenuItem onClick={handleMenuClose}><a href="#swapi" style={{ textDecoration: 'none', color: 'inherit' }}>SWAPI</a></MenuItem>
                                <MenuItem onClick={handleMenuClose}><a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a></MenuItem>
                            </Menu>
                            <Button color="inherit" variant="outlined" onClick={() => handleDialogOpen('logIn')}>
                                Log In
                            </Button>
                            <Button color="secondary" variant="contained" onClick={() => handleDialogOpen('signUp')}>
                                Sign Up
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>{isSignUp ? 'Sign Up' : 'Log In'}</DialogTitle>
                <DialogContent>
                    {isSignUp && (
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Name"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    )}
                    <TextField
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={isSignUp ? handleRegister : handleLogin}
                        color="primary"
                    >
                        {isSignUp ? 'Register' : 'Log In'}
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default Navbar;
