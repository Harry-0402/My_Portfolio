import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/lib/animated-section";
import { SkillBar } from "@/components/ui/skill-bar";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4",
                isDark ? "text-white" : "text-dark-900"
              )}>
                Hi, I'm <span className="text-primary">Harish Chavan</span>
              </h1>
              <h2 className={cn(
                "text-xl md:text-2xl font-poppins font-medium mb-6",
                isDark ? "text-gray-300" : "text-dark-600"
              )}>
                Actuarial Science Student
              </h2>
              <p className={cn(
                "text-lg mb-8 leading-relaxed max-w-2xl",
                isDark ? "text-gray-400" : "text-dark-500"
              )}>
                Detail-oriented and analytical undergraduate currently pursuing a B.Sc. in Actuarial Science. I have a solid foundation in mathematics, statistics, and financial modeling, complemented by hands-on experience in data analysis and risk assessment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-600 transition-colors">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className={cn(
                    "inline-flex items-center px-6 py-3 font-medium rounded-md transition-colors border",
                    isDark 
                      ? "bg-dark-700 text-primary border-primary hover:bg-dark-600" 
                      : "bg-white text-primary border-primary hover:bg-primary-50"
                  )}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="/images/profile-picture-closeup.jpg" 
                alt="Harish Chavan professional portrait" 
                className={cn(
                  "rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4",
                  isDark ? "border-dark-600" : "border-white"
                )}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <AnimatedSection className={cn(
        "py-20",
        isDark ? "bg-dark-700" : "bg-gray-100"
      )}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              Here's a selection of my recent work. Each project presented unique challenges and opportunities for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <article className="project-card">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                  alt="Real Estate Price Prediction project" 
                  className="w-full h-48 object-cover" 
                />
                <div className="project-overlay">
                  <a 
                    href="https://github.com/Harry-0402/Project_02" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white font-medium px-4 py-2 rounded-md border border-white hover:bg-white hover:text-primary transition-colors flex items-center"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className={cn(
                  "text-xl font-poppins font-semibold mb-2",
                  isDark ? "text-white" : ""
                )}>Real Estate Price Prediction</h3>
                <p className={cn(
                  "mb-4",
                  isDark ? "text-gray-300" : "text-dark-500"
                )}>A comprehensive model integrating Excel, Python, and R to predict real estate prices with high accuracy.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">Python</span>
                  <span className="tag">R</span>
                  <span className="tag">Excel</span>
                  <span className="tag">Data Analysis</span>
                </div>
              </div>
            </article>
            
            {/* Project Card 2 */}
            <article className="project-card">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                  alt="Excel projects" 
                  className="w-full h-48 object-cover" 
                />
                <div className="project-overlay">
                  <a 
                    href="https://github.com/Harry-0402/Projects_01" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white font-medium px-4 py-2 rounded-md border border-white hover:bg-white hover:text-primary transition-colors flex items-center"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className={cn(
                  "text-xl font-poppins font-semibold mb-2",
                  isDark ? "text-white" : ""
                )}>Excel Projects Collection</h3>
                <p className={cn(
                  "mb-4",
                  isDark ? "text-gray-300" : "text-dark-500"
                )}>A collection of Excel projects including Bike Sales Dashboard, Payroll System, and an interactive GradeBook.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">MS Excel</span>
                  <span className="tag">Data Visualization</span>
                  <span className="tag">Pivot Tables</span>
                  <span className="tag">Formulas</span>
                </div>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className={cn(
                "inline-flex items-center px-6 py-3 font-medium rounded-md transition-colors border",
                isDark 
                  ? "bg-dark-700 text-primary border-primary hover:bg-dark-600" 
                  : "bg-white text-primary border-primary hover:bg-primary-50"
              )}
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Skills</h2>
            <p className="section-description">
              My professional toolkit and technical expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className={cn(
                "text-xl font-poppins font-semibold mb-6",
                isDark ? "text-white" : ""
              )}>Technical Skills</h3>
              
              <SkillBar name="MS Excel" percentage={90} className={isDark ? "text-white" : ""} />
              <SkillBar name="Python" percentage={75} className={isDark ? "text-white" : ""} />
              <SkillBar name="R" percentage={70} className={isDark ? "text-white" : ""} />
              <SkillBar name="Data Analysis" percentage={85} className={isDark ? "text-white" : ""} />
            </div>
            
            <div>
              <h3 className={cn(
                "text-xl font-poppins font-semibold mb-6",
                isDark ? "text-white" : ""
              )}>Professional Skills</h3>
              
              <SkillBar name="Communication" percentage={85} className={isDark ? "text-white" : ""} />
              <SkillBar name="Leadership" percentage={80} className={isDark ? "text-white" : ""} />
              <SkillBar name="Decision Making" percentage={85} className={isDark ? "text-white" : ""} />
              <SkillBar name="Adaptability" percentage={90} className={isDark ? "text-white" : ""} />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
