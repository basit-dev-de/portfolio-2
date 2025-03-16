
import { GraduationCap, Award, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  
  return (
    <section id="education" className="py-20 relative bg-secondary/50">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("education.sectionTitle")}</h2>
        
        <div className="terminal-card mb-8">
          <div className="terminal-card-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <div className="ml-2 text-xs opacity-70 font-mono">education.tsx</div>
          </div>
          
          <div className="flex items-start mb-6">
            <GraduationCap className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
            <div>
              <div className="flex flex-wrap justify-between items-start gap-2">
                <h3 className="text-xl font-bold">{t("education.degree")}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{t("education.period")}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{t("education.university")}</p>
              <div className="mt-4">
                <p>
                  {t("education.graduationDetails")}
                </p>
                <p className="mt-2">
                  {t("education.focusAreas")}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="terminal-card">
          <div className="terminal-card-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <div className="ml-2 text-xs opacity-70 font-mono">awards.tsx</div>
          </div>
          
          <div className="flex items-start">
            <Award className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">{t("education.awardsTitle")}</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <h4 className="font-semibold">{t("education.goldMedalTitle")}</h4>
                    <div className="text-sm text-muted-foreground">{t("education.awardYear")}</div>
                  </div>
                  <p className="text-muted-foreground">{t("education.university")}</p>
                  <p className="mt-1 text-sm">{t("education.goldMedalDescription")}</p>
                </div>
                
                <div>
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <h4 className="font-semibold">{t("education.professionalDevelopmentTitle")}</h4>
                    <div className="text-sm text-muted-foreground">{t("education.ongoing")}</div>
                  </div>
                  <p className="mt-1 text-sm">
                    {t("education.professionalDevelopmentDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
