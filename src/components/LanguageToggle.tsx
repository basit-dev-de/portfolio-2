
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  useEffect(() => {
    // Set the initial language
    i18n.changeLanguage(currentLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "de" : "en";
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-5 right-16 z-50 p-2 rounded-full transition-all duration-300 hover:scale-110 glass"
      aria-label={t("language.switch", { lang: currentLang === "en" ? t("language.de") : t("language.en") })}
    >
      <Globe className="w-5 h-5 text-white dark:text-white light:text-gray-800" />
      <span className="sr-only">
        {currentLang === "en" ? t("language.de") : t("language.en")}
      </span>
    </button>
  );
};

export default LanguageToggle;
