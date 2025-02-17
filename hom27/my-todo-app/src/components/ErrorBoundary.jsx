// src/components/ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        // Оновлюємо стан, щоб відобразити помилку.
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, errorInfo) {
        // Логування помилки або інші дії
        console.error("Error caught by Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Щось пішло не так.</h1>
                    <p>{this.state.errorMessage}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
