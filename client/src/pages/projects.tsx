import { AnimatedSection } from "@/lib/animated-section";
import { ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const projects = [
    {
      id: 1,
      title: "Real Estate Price Prediction and Analysis",
      description: "Developed a comprehensive real estate price prediction model by integrating Excel, Python, and R to leverage their respective strengths in data handling, statistical analysis, and visualization.",
      link: "https://github.com/Harry-0402/Project_02",
      tags: ["Python", "R", "Excel", "Data Analysis", "Regression Models"]
    },
    {
      id: 2,
      title: "Excel Projects Collection",
      description: "A collection of Excel projects including Bike Sales Dashboard, Payroll System, and an interactive GradeBook for business and data analysis applications.",
      link: "https://github.com/Harry-0402/Projects_01",
      tags: ["MS Excel", "Data Visualization", "Pivot Tables", "Dashboard Design", "Financial Modeling"]
    }
  ];

  return (
    <>
      <section className="pt-28 pb-8 md:pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={cn("text-4xl md:text-5xl font-bold font-poppins mb-4", isDark ? "text-white" : "text-dark-900")}>
              My Projects
            </h1>
            <p className={cn("text-lg", isDark ? "text-gray-300" : "text-dark-500")}>
              I've worked on a diverse range of projects focusing on data analysis, statistical modeling, and financial systems.
              Each project allowed me to apply my analytical skills to solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article 
                key={project.id} 
                className={cn(
                  "rounded-lg overflow-hidden transition-all duration-300 border",
                  isDark ? "bg-dark-700 border-dark-600" : "bg-white border-gray-200"
                )}
                data-testid={`project-card-${project.id}`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block py-6 px-6 font-poppins font-bold text-2xl transition-all duration-300 flex items-center justify-between group",
                    isDark 
                      ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800" 
                      : "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700"
                  )}
                  data-testid={`project-link-${project.id}`}
                >
                  <span>{project.title}</span>
                  <ExternalLink className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="p-6">
                  <p className={cn("mb-4 leading-relaxed", isDark ? "text-gray-300" : "text-dark-500")}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={cn(
                          "px-3 py-1 text-sm rounded-full font-medium transition-colors",
                          isDark 
                            ? "bg-dark-600 text-gray-200 border border-dark-500" 
                            : "bg-primary-50 text-primary-700 border border-primary-200"
                        )}
                        data-testid={`project-tag-${index}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
