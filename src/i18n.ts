import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { getBrowserPreferredLng } from "./helpers/functions";
import enRes from "./locales/en/translation.json"
import geoRes from "./locales/ka/translation.json"
import ruRes from "./locales/ru/translation.json"

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        initImmediate: true,
        fallbackLng: getBrowserPreferredLng,
        resources: {
            en: { translation: enRes },
            ru: { translation: ruRes },
            ka: { translation: geoRes }
        }
    });

export default i18n;
