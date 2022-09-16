import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// import translationEN from "../public/locales/en/translation.json";
// import translationAR from "../public/locales/ar/translation.json";
// import translationFR from "../public/locales/fr/translation.json";

import translationFR from "./Languages/fr/translation.json";
import translationEN from "./Languages/en/translation.json";
import translationAR from "./Languages/ar/translation.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "ar", "fr"];


const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  },
  fr: {
    translation: translationFR
  }
};
console.log(resources);
  i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng:"en",

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
 });

export default i18n;