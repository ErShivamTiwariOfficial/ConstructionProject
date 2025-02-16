import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        Hi: "Hi",
        Actions: "Actions",
      },
    },
    Hi: {
      translation: {
        Hi: "Hindi",
        Actions: "Kya Haal Hai?",
      },
    },
    sp: {
      translation: {
        Hi: "Hola",
        Actions: "Comportamiento",
      },
    },
    tl: {
      translation: {
        Hi: "హాయ్",
        Actions: "చర్యలు",
      },
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;


//index.jsx

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import i18n from "./components/LangConfig";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//app.jsx

// import React from "react";
// import "./styles.css";
// import { Translation } from "react-i18next";
// import ChangeLang from "./components/ChangeLang";
// export default function App() {
//   return (
//     <div className="App">
//       <Translation>{t => <ChangeLang t={t} />}</Translation>
//     </div>
//   );
// }
