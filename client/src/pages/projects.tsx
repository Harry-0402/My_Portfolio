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
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group block rounded-xl p-6 transition-all duration-300 border hover:shadow-lg",
                  isDark 
                    ? "bg-dark-700 border-dark-600 hover:border-primary-500" 
                    : "bg-white border-gray-200 hover:border-primary-400"
                )}
                data-testid={`project-card-${project.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className={cn(
                    "text-2xl font-poppins font-bold transition-colors",
                    isDark ? "text-white group-hover:text-primary-400" : "text-dark-900 group-hover:text-primary-600"
                  )}>
                    {project.title}
                  </h3>
                  <ExternalLink className={cn(
                    "h-5 w-5 transition-all group-hover:translate-x-1",
                    isDark ? "text-gray-400 group-hover:text-primary-400" : "text-gray-500 group-hover:text-primary-600"
                  )} />
                </div>
                
                <p className={cn(
                  "mb-6 leading-relaxed",
                  isDark ? "text-gray-300" : "text-dark-500"
                )}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={cn(
                        "px-3 py-1 text-sm rounded-full font-medium",
                        isDark 
                          ? "bg-dark-600 text-gray-300 border border-dark-500" 
                          : "bg-primary-50 text-primary-700 border border-primary-200"
                      )}
                      data-testid={`project-tag-${index}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
