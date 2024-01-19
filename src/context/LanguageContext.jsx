import { createContext, useContext, useState } from 'react';
import userData from '../data/db.json';
import i18n from '../locales/i18n';

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    const {
        meta: { DefaultLanguage }
    } = userData;
    const [currentLanguage, setCurrentLanguage] = useState(DefaultLanguage);
    
    const changeLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('ko');
            setCurrentLanguage('ko');
            return;
        }

        if (i18n.language === 'ko') {
            i18n.changeLanguage('en');
            setCurrentLanguage('en');
            return;
        }
    }

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext);