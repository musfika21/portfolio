import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Custom hook to use the theme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    // Load theme from localStorage on mount (optional: uncomment for persistence)
    useEffect(() => {
        // const savedTheme = localStorage.getItem('theme');
        // if (savedTheme) {
        //     setIsDark(savedTheme === 'dark');
        // }
    }, []);

    // Toggle theme function (optional: uncomment localStorage save below)
    const toggleTheme = () => {
        setIsDark(prev => {
            // localStorage.setItem('theme', !prev ? 'dark' : 'light');  // Save on toggle
            return !prev;
        });
    };

    // Theme colors object
    const theme = {
        isDark,
        toggleTheme,
        colors: isDark ? {
            // Dark Mode Colors - Sophisticated slate palette
            bg: {
                primary: '#080808',       // Deep black (darkest background)
                secondary: '#3A3A3A',     // Charcoal gray
                card: '#4C5B6C',          // Slate blue
                cardHover: '#667579',     // Muted blue-gray on hover
            },
            text: {
                primary: '#D0CDC9',       // Warm light gray (highest contrast)
                secondary: '#9FA4A3',     // Cool medium gray
                muted: '#717B7F',         // Blue-tinted gray
            },
            accent: {
                primary: '#667579',       // Muted blue-gray
                secondary: '#4C5B6C',     // Slate blue
                border: '#717B7F',        // Blue-tinted gray
            }
        } : {
            // Light Mode Colors - Clean and elegant
            bg: {
                primary: '#D0CDC9',       // Warm light gray (lightest)
                secondary: '#9FA4A3',     // Cool medium gray
                card: '#D0CDC9',          // Warm light gray
                cardHover: '#918981',     // Warm taupe on hover
            },
            text: {
                primary: '#080808',       // Deep black (highest contrast)
                secondary: '#3A3A3A',     // Charcoal gray
                muted: '#4C5B6C',         // Slate blue
            },
            accent: {
                primary: '#4C5B6C',       // Slate blue
                secondary: '#667579',     // Muted blue-gray
                border: '#717B7F',        // Blue-tinted gray
            }
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;