
import { Code2, Palette, Database, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section id="skills" className="py-20 relative">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("skills.title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="terminal-card">
            <div className="terminal-card-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <div className="ml-2 text-xs opacity-70 font-mono">frameworks.tsx</div>
            </div>
            
            <div className="flex items-start mb-4">
              <Code2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t("skills.frontendFrameworks")}</h3>
                <p className="mb-4 text-muted-foreground">
                  {t("skills.frontendDescription")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Gatsby</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="terminal-card">
            <div className="terminal-card-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <div className="ml-2 text-xs opacity-70 font-mono">ui_styling.tsx</div>
            </div>
            
            <div className="flex items-start mb-4">
              <Palette className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t("skills.uiStyling")}</h3>
                <p className="mb-4 text-muted-foreground">
                  {t("skills.uiDescription")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Bootstrap</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MUI</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Ant</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CSS-in-JS</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Emotion CSS</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="terminal-card">
            <div className="terminal-card-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <div className="ml-2 text-xs opacity-70 font-mono">state_management.tsx</div>
            </div>
            
            <div className="flex items-start mb-4">
              <Database className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t("skills.stateManagement")}</h3>
                <p className="mb-4 text-muted-foreground">
                  {t("skills.stateDescription")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Redux</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Context API</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">RTK Query</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React Query</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Apollo Client</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="terminal-card">
            <div className="terminal-card-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <div className="ml-2 text-xs opacity-70 font-mono">testing.tsx</div>
            </div>
            
            <div className="flex items-start mb-4">
              <Wrench className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t("skills.testingTools")}</h3>
                <p className="mb-4 text-muted-foreground">
                  {t("skills.testingDescription")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Jest</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Cypress</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React Testing Library</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Storybook</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="terminal-card">
            <div className="terminal-card-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <div className="ml-2 text-xs opacity-70 font-mono">architecture.tsx</div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">{t("skills.architecture")}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">{t("skills.architectureTitle")}</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>{t("skills.modularDesign")}</li>
                  <li>{t("skills.componentArchitecture")}</li>
                  <li>{t("skills.designPatterns")}</li>
                  <li>{t("skills.microfrontends")}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">{t("skills.performanceTitle")}</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>{t("skills.buildTools")}</li>
                  <li>{t("skills.codeSplitting")}</li>
                  <li>{t("skills.lazyLoading")}</li>
                  <li>{t("skills.webVitals")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
