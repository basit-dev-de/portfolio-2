
import { Award, MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-1/2">
            <div className="terminal-card">
              <div className="terminal-card-header">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
                <div className="ml-2 text-xs opacity-70 font-mono">about.tsx</div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{t("about.title")}</h2>
              
              <p className="mb-6">
                {t("about.description")}
              </p>
              
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{t("about.location")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:basit.ali@toptal.com" className="hover:text-primary transition-colors">
                    basit.ali@toptal.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+4916285106330" className="hover:text-primary transition-colors">
                    +49 162 851 0633
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a 
                    href="https://linkedin.com/in/basit-ali-b61425354" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/basit-ali-b61425354
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-medium">{t("about.award")}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="terminal-card h-full">
              <div className="terminal-card-header">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
                <div className="ml-2 text-xs opacity-70 font-mono">languages.tsx</div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{t("about.languages")}</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{t("about.englishLanguage")}</span>
                    <span className="text-sm text-muted-foreground">{t("about.englishLevel")}</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{t("about.germanLanguage")}</span>
                    <span className="text-sm text-muted-foreground">{t("about.germanLevel")}</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{t("about.urduLanguage")}</span>
                    <span className="text-sm text-muted-foreground">{t("about.urduLevel")}</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">{t("education.title")}</h3>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">{t("education.degree")}</h4>
                    <span className="text-sm text-muted-foreground">{t("education.period")}</span>
                  </div>
                  <p className="text-muted-foreground">{t("education.university")}</p>
                  <p className="mt-2 text-sm">{t("education.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
