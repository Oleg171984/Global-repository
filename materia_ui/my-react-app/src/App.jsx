import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './Navbar.jsx';
import MainSection from './MainSection.jsx';
import MainContent from './MainContent.jsx';
import CardList from './CardList.jsx';
import Footer from './Footer.jsx';

const theme = createTheme();

function App() {
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <main style={{ paddingTop: '64px' }}>
                <MainSection />
                <MainContent />
                <CardList />
            </main>
            <Footer value={value} handleChange={handleChange} />
        </ThemeProvider>
    );
}

export default App;
