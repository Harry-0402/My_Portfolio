import { AnimatedSection } from "@/lib/animated-section";
import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with product management, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "#",
      tags: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      description: "A mobile application that helps users track workouts, set goals, and monitor fitness progress.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "#",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Interactive dashboard for business analytics with real-time data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "#",
      tags: ["Vue.js", "D3.js", "Express"]
    },
    {
      id: 4,
      title: "Social Media App",
      description: "A social networking platform with real-time messaging, profile customization, and content sharing.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "#",
      tags: ["React", "Socket.io", "GraphQL", "MongoDB"]
    },
    {
      id: 5,
      title: "Task Management System",
      description: "A comprehensive project and task management tool for teams, featuring kanban boards, task assignments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "#",
      tags: ["Angular", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "Real-time weather application with location detection, forecasts, and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "#",
      tags: ["React", "Open Weather API", "Geolocation API"]
    }
  ];

  return (
    <>
      <section className="pt-28 pb-8 md:pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-dark-900">My Projects</h1>
            <p className="text-lg text-dark-500">
              I've worked on a diverse range of projects, from web applications to mobile experiences.
              Each project presented unique challenges and opportunities for growth.
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
