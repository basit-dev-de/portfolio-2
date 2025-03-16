import About from "@/components/About";
import CometAnimation from "@/components/CometAnimation";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import LanguageToggle from "@/components/LanguageToggle";
import ParticleBackground from "@/components/ParticleBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Background effects */}
      <ParticleBackground />
      <CometAnimation />

      {/* Theme and language toggles */}
      <ThemeToggle />
      <LanguageToggle />

      {/* Main content */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />

      {/* Footer */}
      <footer className="py-12 bg-card">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4" id="contact">
              {t("footer.getInTouch")}
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:basit.ali@toptal.com"
                className="p-3 rounded-full glass hover:scale-110 transition-transform duration-200"
                aria-label={t("footer.email")}
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/basit-ali-b61425354"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:scale-110 transition-transform duration-200"
                aria-label={t("footer.linkedin")}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="tel:+491628510633"
                className="p-3 rounded-full glass hover:scale-110 transition-transform duration-200"
                aria-label={t("footer.phone")}
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/basit-dev-de"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:scale-110 transition-transform duration-200"
                aria-label={t("footer.github")}
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
            <p className="mt-1">{t("footer.role")}</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full glass hover:scale-110 transition-transform duration-200 z-50"
          aria-label={t("scrollToTop")}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </main>
  );
};

export default Index;
