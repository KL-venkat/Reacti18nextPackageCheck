import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		backend: {
			// translation file path
			loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
		},
		//fallbackLng: "en",
		// disabled in production
		//debug: false,
		
		// translation into smaller pieces and load them on demand
		ns: ["common", "home", "profile","display"],

		// interpolation: {
		// 	espaceValue: false,
		// 	formatSeparator: ",",
		// },
		
		//if getting error regarding suspense call recommend to add UseSuspense:false
		// react: {
		// 	wait: true,
		// 	useSuspense:false    
		// },
	});

export default i18n;
