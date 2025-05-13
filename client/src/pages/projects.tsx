import { AnimatedSection } from "@/lib/animated-section";
import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Real Estate Price Prediction and Analysis",
      description: "Developed a comprehensive real estate price prediction model by integrating Excel, Python, and R to leverage their respective strengths in data handling, statistical analysis, and visualization.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "https://github.com/Harry-0402/Project_02",
      tags: ["Python", "R", "Excel", "Data Analysis", "Regression Models"]
    },
    {
      id: 2,
      title: "Excel Projects Collection",
      description: "A collection of Excel projects including Bike Sales Dashboard, Payroll System, and an interactive GradeBook for business and data analysis applications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "https://github.com/Harry-0402/Projects_01",
      tags: ["MS Excel", "Data Visualization", "Pivot Tables", "Dashboard Design", "Financial Modeling"]
    }
  ];

  return (
    <>
      <section className="pt-28 pb-8 md:pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-dark-900">My Projects</h1>
            <p className="text-lg text-dark-500">
              I've worked on a diverse range of projects focusing on data analysis, statistical modeling, and financial systems.
              Each project allowed me to apply my analytical skills to solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="project-overlay">
                    <a 
                      href={project.link} 
                      className="text-white font-medium px-4 py-2 rounded-md border border-white hover:bg-white hover:text-primary transition-colors flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-2">{project.title}</h3>
                  <p className="text-dark-500 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
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
