import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import Portuguese from "../Translation/Portuguese.json";
import English from "../Translation/English.json";
import Spanish from "../Translation/Spanish.json"


i18next.use(initReactI18next)
    .init({
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
        lng: "pt", //default language
    });

export default i18next;