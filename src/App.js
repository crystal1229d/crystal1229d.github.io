import { ThemeProvider } from 'styled-components';
import { MainPage } from './pages/MainPage'
import { useDarkMode } from './context/DarkModeContext';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/Theme';

function App() {
    const { darkMode } = useDarkMode();

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <MainPage />
        </ThemeProvider>
    )
}

export default App;