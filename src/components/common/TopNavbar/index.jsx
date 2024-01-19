import { useTranslation } from 'react-i18next';
import { useDarkMode } from '../../../context/DarkModeContext';
import { useLanguage } from '../../../context/LanguageContext';
import { LanguageSelector, NavBarWrapper, ToggleButton } from './index.styles';

export const TopNavBar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { currentLanguage, changeLanguage } = useLanguage();

    const { t } = useTranslation();

    return (
        <NavBarWrapper>
            <LanguageSelector defaultValue={currentLanguage} onChange={changeLanguage}>
                <option value='Korean'>{t('language-ko')} 🇰🇷</option>
                <option value='English'>{t('language-en')} 🇺🇸</option>
            </LanguageSelector>
            <ToggleButton onClick={toggleDarkMode} darkMode={darkMode ? 'dark' : 'light'} />
        </NavBarWrapper>
    )
}