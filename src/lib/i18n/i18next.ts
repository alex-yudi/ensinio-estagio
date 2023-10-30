import i18next from "i18next";
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

//Import all translation files
import Portuguese from "./locales/pt/ns1.json"
import English from "./locales/en/ns1.json";
import Spanish from "./locales/es/ns1.json"
import { populateDataCards } from "../../utils/populateDataCards";


const alternativeApi = 'https://cute-tan-leopard-shoe.cyclic.app';
const localHost = 'http://localhost:3000/items'

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        partialBundledLanguages: true,
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
        },
        backend: {
            loadPath: alternativeApi,
            parse: populateDataCards,
        }
    });

export default i18next;