import React from "react";

import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";
import TextField from "@material-ui/core/TextField";

 function ReactPackageCheck() {
  const { t } = useTranslation();
  return (
    <div className="main">
    <div className="language-select">
        <LanguageSelect />
    </div>
    <div className="App">
      <div className="example-text">
        <p>{t("hello_welcome_to_react")}</p>
        <p>{t("this_is_an_example")}</p>
        <p>{t("error_message")}</p>
      </div>
    </div>
    </div>
  );
}
export default ReactPackageCheck;
