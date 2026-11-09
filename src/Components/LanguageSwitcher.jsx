import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const languages = [
  { code: "nl", label: "Nederlands" },
  { code: "en", label: "English" },
];

// i18next's detector already persists the choice in localStorage ("i18nextLng")
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-switcher">
      {languages.map(({ code, label }, index) => {
        const isActive = i18n.resolvedLanguage === code;
        return (
          <Fragment key={code}>
            {index > 0 && <span aria-hidden="true">|</span>}
            <button
              className={isActive ? "active" : ""}
              onClick={() => !isActive && i18n.changeLanguage(code)}
              aria-label={label}
              aria-pressed={isActive}
            >
              {code.toUpperCase()}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
