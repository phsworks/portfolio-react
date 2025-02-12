import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css"; // Import the CSS file for styling
import EN from '../assets/uk.svg'
import NL from '../assets/dutch.svg'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", flag: <img width={25} src={EN} alt="EN" /> },
    { code: "nl", flag: <img width={25} src={NL} alt="NL" /> },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {currentLanguage.flag}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages
            .filter((lang) => lang.code !== currentLanguage.code)
            .map((lang) => (
              <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
                {lang.flag}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
