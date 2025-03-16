
import { BriefcaseIcon, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  
  return (
    <section id="experience" className="py-20 relative bg-secondary/50">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("experience.title")}</h2>
        
        <div className="space-y-12">
          {/* S&P Global */}
          <div className="terminal-card">
            <div className="terminal-card-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <div className="ml-2 text-xs opacity-70 font-mono">experience_sp_global.tsx</div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="flex items-center gap-2 mb-1">
                  <BriefcaseIcon className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-xl">{t("experience.spGlobal.company")}</h3>
                </div>
                <p className="text-muted-foreground mb-2">{t("experience.spGlobal.title")}</p>
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{t("experience.spGlobal.period")}</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{t("experience.spGlobal.location")}</div>
              </div>
              
              <div className="md:w-3/4">
                <p className="mb-4">
                  {t("experience.spGlobal.description")}
                </p>
                
                <h4 className="font-medium mb-2">{t("experience.achievements")}:</h4>
                <ul className="list-disc list-inside space-y-2 ml-1 mb-4">
                  <li>{t("experience.spGlobal.achievement1")}</li>
                  <li>{t("experience.spGlobal.achievement2")}</li>
                  <li>{t("experience.spGlobal.achievement3")}</li>
                  <li>{t("experience.spGlobal.achievement4")}</li>
                  <li>{t("experience.spGlobal.achievement5")}</li>
                </ul>
                
                <div>
                  <h4 className="font-medium mb-2">{t("experience.technologies")}:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Redux</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Storybook</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Jest</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Cypress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* iPlex */}
          <div className="terminal-card">
            <div className="terminal-card-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <div className="ml-2 text-xs opacity-70 font-mono">experience_iplex.tsx</div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="flex items-center gap-2 mb-1">
                  <BriefcaseIcon className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-xl">{t("experience.iplex.company")}</h3>
                </div>
                <p className="text-muted-foreground mb-2">{t("experience.iplex.title")}</p>
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{t("experience.iplex.period")}</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{t("experience.iplex.location")}</div>
              </div>
              
              <div className="md:w-3/4">
                <p className="mb-4">
                  {t("experience.iplex.description")}
                </p>
                
                <h4 className="font-medium mb-2">{t("experience.achievements")}:</h4>
                <ul className="list-disc list-inside space-y-2 ml-1 mb-4">
                  <li>{t("experience.iplex.achievement1")}</li>
                  <li>{t("experience.iplex.achievement2")}</li>
                  <li>{t("experience.iplex.achievement3")}</li>
                  <li>{t("experience.iplex.achievement4")}</li>
                  <li>{t("experience.iplex.achievement5")}</li>
                </ul>
                
                <div>
                  <h4 className="font-medium mb-2">{t("experience.technologies")}:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Redux</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
