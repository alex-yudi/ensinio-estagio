import i18next from "i18next";
import { initReactI18next } from "react-i18next"
//Import all translation files
import Portuguese from "./locales/pt/ns1.json"
import English from "./locales/en/ns1.json";
import Spanish from "./locales/es/ns1.json"

i18next
    .use(initReactI18next)
    .init({
        lng: "pt",
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
    });

export default i18next;