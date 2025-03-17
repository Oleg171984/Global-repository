import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Container, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'; // Додано імпорт для Dialog та Dialog-компонентів
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null); 
    const [openDialog, setOpenDialog] = useState(false);
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    
    const handleMenuOpen = (event) => {
        setOpenMenu(event.currentTarget); 
    };

    
    const handleMenuClose = () => {
        setOpenMenu(null); 
    };

    
    const handleDialogOpen = () => {
        setOpenDialog(true); 
    };

    
    const handleDialogClose = () => {
        setOpenDialog(false); 
    };

    const handleRegister = () => {
       console.log('Реєстрація: ', { name, email, password });
        handleDialogClose();
    };

    return (
        <Container>
            <AppBar position="fixed" >
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Web Developer In
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Menu
                                anchorEl={openMenu} 
                                open={Boolean(openMenu)}
                                onClose={handleMenuClose} 
                            >
                                <MenuItem onClick={handleMenuClose}>Skills</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Todo</MenuItem>
                                <MenuItem onClick={handleMenuClose}>SWAPI</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
                            </Menu>
                            <Button color="inherit" variant="outlined" onClick={handleDialogOpen}>
                                Log In
                            </Button>
                            <Button color="secondary" variant="contained" onClick={handleDialogOpen}>
                                Sign Up
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Sign Up</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <Button onClick={handleRegister} color="primary">
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Navbar;
