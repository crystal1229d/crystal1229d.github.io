import { useDarkMode } from '../../../context/DarkModeContext';
import { NavBarWrapper, ToggleButton } from './index.styles';

export const TopNavBar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <NavBarWrapper>
            <ToggleButton onClick={toggleDarkMode} darkMode={darkMode ? 'dark' : 'light'} />
        </NavBarWrapper>
    )
}