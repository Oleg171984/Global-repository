import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AboutMe from './Component/AboutMe.jsx';
import TodoList from './Component/ TodoList.jsx';
import SwapiList from './Component/ SwapiList.jsx';
import Footer from "./Component/Footer.jsx";
import Navbar from "./Component/Navbar.jsx"; // імпорт компонента Navbar


const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <CssBaseline />
            <AboutMe darkMode={darkMode} setDarkMode={setDarkMode} />
            <TodoList />
            <SwapiList />
            <Footer />
        </ThemeProvider>
    );
};

export default App;
