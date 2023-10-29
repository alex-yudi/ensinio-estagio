import i18next from "i18next";
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';

//Import all translation files
import Portuguese from "./locales/pt/ns1.json"
import English from "./locales/en/ns1.json";
import Spanish from "./locales/es/ns1.json"
import { fetchDataCards } from "../../utils/translateReq";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        saveMissing: true,
        resources: {
            en: {
                translation: English,
            },
            pt: {
                translation: Portuguese,
            },
            es: {
                translation: Spanish,
            },
        },
        detection: {
            order: ['localStorage', 'navigator', 'sessionStorage', 'querystring', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
            lookupLocalStorage: 'i18nextLng',
        }
    });

fetchDataCards()

export default i18next;