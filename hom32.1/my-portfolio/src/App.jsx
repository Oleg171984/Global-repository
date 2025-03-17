import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AboutMe from './AboutMe';
import TodoList from './ TodoList.jsx';
import SwapiList from './ SwapiList';
import Footer from "./Footer.jsx";
import Navbar from "./Navbar"; // імпорт компонента Navbar


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
