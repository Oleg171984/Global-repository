// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import AboutMe from './pages/AboutMe';
import ErrorBoundary from './components/ErrorBoundary';
import './App.scss'; // Імпортуємо SCSS стилі

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Router>
            <div className={isDarkMode ? 'dark' : 'light'}>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Головна</Link></li>
                            <li><Link to="/contacts">Контакти</Link></li>
                            <li><Link to="/about-me">Про мене</Link></li>
                        </ul>
                        <button onClick={toggleTheme}>
                            {isDarkMode ? 'Світла тема' : 'Темна тема'}
                        </button>
                    </nav>
                </header>

                <main>
                    <ErrorBoundary>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/about-me" element={<AboutMe />} />
                        </Routes>
                    </ErrorBoundary>
                </main>
            </div>
        </Router>
    );
}

export default App;
