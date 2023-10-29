import i18next from "i18next";
import { initReactI18next } from "react-i18next"
import HttpApi from 'i18next-http-backend';

//Import all translation files
import Portuguese from "./locales/pt/ns1.json"
import English from "./locales/en/ns1.json";
import Spanish from "./locales/es/ns1.json"
import { fetchDataCards } from "../../utils/translateReq";

i18next
    .use(HttpApi)
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

fetchDataCards(1)
fetchDataCards(2)
fetchDataCards(3)


export default i18next;