import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider ({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        switchDarkMode(!darkMode);
    }

    useEffect(() => {
        const isDarkMode =
            localStorage.theme === 'dark'
            || (!('theme' in localStorage)
            && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDarkMode);
        switchDarkMode(isDarkMode);
    }, [])

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

function switchDarkMode(darkTheme) {
    if (darkTheme) {
        document.body.setAttribute('data-theme', 'dark-mode');
        localStorage.theme = 'dark';
        console.log('dark')
    } else {
        document.body.removeAttribute('data-theme');
        localStorage.theme = 'light';
        console.log('light')
    }
}

export const useDarkMode = () => useContext(DarkModeContext);