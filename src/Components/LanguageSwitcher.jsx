import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";
import EN from "../assets/uk.svg";
import NL from "../assets/dutch.svg";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "nl", flag: <img width={25} src={NL} alt="Dutch flag" /> },
    { code: "en", flag: <img width={25} src={EN} alt="UK flag" /> },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[1];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    localStorage.setItem("language", code);
  };

  return (
    <div className="language-switcher">
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        {currentLanguage ? (
          currentLanguage.flag
        ) : (
          <img width={25} src={NL} alt="NL" />
        )}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages
            .filter((lang) => lang.code !== i18n.language)
            .map((lang) => (
              <li
                key={lang.code}
                onClick={(event) => {
                  event.stopPropagation();
                  changeLanguage(lang.code);
                }}
              >
                {lang.flag}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
