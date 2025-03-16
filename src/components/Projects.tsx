
import { Code, GitBranch } from "lucide-react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: t("projects.list.0.title"),
      description: t("projects.list.0.description"),
      tech: ["React", "Redux", "Micro Frontends", "TypeScript"],
      role: t("projects.role"),
      company: "S&P Global"
    },
    {
      title: t("projects.list.1.title"),
      description: t("projects.list.1.description"),
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      role: t("projects.developer"),
      company: "iPlex"
    },
    {
      title: t("projects.list.2.title"),
      description: t("projects.list.2.description"),
      tech: ["React", "Redux", "Node.js"],
      role: t("projects.developer"),
      company: "iPlex"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("projects.title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="terminal-card h-full flex flex-col">
              <div className="terminal-card-header">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
                <div className="ml-2 text-xs opacity-70 font-mono">project_{index + 1}.tsx</div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-xl">{project.title}</h3>
                </div>
                
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-1">{t("projects.technologies")}:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-auto">
                  <GitBranch className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.role} @ {project.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
