import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translation.en.json'
import translationKO from './translation.ko.json'
import userData from '../data/db.json';

const resources = {
    en: { 
        translation: translationEN, 
    }, 
    ko: {
        translation: translationKO 
    }
}

const { DefaultLanguage } = userData.meta;

i18n
.use(initReactI18next)
.init({
    resources,  // 번역파일 
    lng: DefaultLanguage,  // 디폴트 언어 
    keySeparator: false,
    interpolation: { escapeValue: false },
})

export default i18n;