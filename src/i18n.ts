import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { getBrowserPreferredLng } from "./helpers/functions";

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        initImmediate: true,
        react: {
            useSuspense: true,
        },
        fallbackLng: getBrowserPreferredLng,
    });

export default i18n;
