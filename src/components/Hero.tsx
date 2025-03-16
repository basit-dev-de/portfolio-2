import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [showChevron, setShowChevron] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowChevron(false);
      } else {
        setShowChevron(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-6 relative">
          <img
            src="/profile.jpg"
            alt={t("hero.name")}
            className="w-40 h-40 rounded-full border-4 border-primary/50 object-cover animate-float"
          />
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-pulse"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="block">
            {t("hero.greeting")} {t("hero.name")}
          </span>
          <span className="text-2xl md:text-3xl font-normal text-primary animate-fade-in">
            {t("hero.title")}
          </span>
        </h1>

        <p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          {t("hero.description")}
        </p>

        <div
          className="flex gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
          >
            {t("navigation.contact")}
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-all hover:translate-y-[-2px]"
          >
            {t("navigation.viewWork")}
          </a>
        </div>
      </div>

      {showChevron && (
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10"
          onClick={scrollToNext}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      )}
    </section>
  );
};

export default Hero;
