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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Project Card 1 */}
            <a
              href="https://github.com/Harry-0402/Project_02---SuperStore-Sales-Analysis"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group block rounded-xl p-6 transition-all duration-300 border hover:shadow-lg",
                isDark 
                  ? "bg-dark-800 border-dark-600 hover:border-primary-500" 
                  : "bg-white border-gray-200 hover:border-primary-400"
              )}
              data-testid="project-card-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={cn(
                  "text-2xl font-poppins font-bold transition-colors",
                  isDark ? "text-white group-hover:text-primary-400" : "text-dark-900 group-hover:text-primary-600"
                )}>
                  SuperStore Sales Analysis
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
                Comprehensive sales analysis of a retail superstore using data analytics techniques to uncover insights, trends, and patterns in sales performance.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className={cn(
                  "px-3 py-1 text-sm rounded-full font-medium",
                  isDark 
                    ? "bg-dark-600 text-gray-300 border border-dark-500" 
                    : "bg-primary-50 text-primary-700 border border-primary-200"
                )}>Data Analysis</span>
                <span className={cn(
                  "px-3 py-1 text-sm rounded-full font-medium",
                  isDark 
                    ? "bg-dark-600 text-gray-300 border border-dark-500" 
                    : "bg-primary-50 text-primary-700 border border-primary-200"
                )}>Sales Analytics</span>
                <span className={cn(
                  "px-3 py-1 text-sm rounded-full font-medium",
                  isDark 
                    ? "bg-dark-600 text-gray-300 border border-dark-500" 
                    : "bg-primary-50 text-primary-700 border border-primary-200"
                )}>Excel</span>
                <span className={cn(
                  "px-3 py-1 text-sm rounded-full font-medium",
                  isDark 
                    ? "bg-dark-600 text-gray-300 border border-dark-500" 
                    : "bg-primary-50 text-primary-700 border border-primary-200"
                )}>Visualization</span>
              </div>
            </a>
            
            {/* Project Card 2 */}
            <a
              href="https://github.com/Harry-0402/Projects_01"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group block rounded-xl p-6 transition-all duration-300 border hover:shadow-lg",
                isDark 
                  ? "bg-dark-800 border-dark-600 hover:border-primary-500" 
                  : "bg-white border-gray-200 hover:border-primary-400"
              )}
              data-testid="project-card-2"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={cn(
                  "text-2xl font-poppins font-bold transition-colors",
                  isDark ? "text-white group-hover:text-primary-400" : "text-dark-900 group-hover:text-primary-600"
                )}>
                  Excel Projects Collection
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
                A collection of Excel projects including Bike Sales Dashboard, Payroll System, and an interactive GradeBook.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className={cn(
                  "px-3 py-1 text-sm rounded-full font-medium",
                  isDark 
                    ? "bg-dark-600 text-gray-300 border border-dark-500" 
                    : "bg-primary-50 text-primary-700 border border-primary-200"
                )}>MS Excel</span>
                <span className={cn(
                  "px-3 py-1 text-sm rounded-full font-medium",
                  isDark 
                    ? "bg-dark-600 text-gray-300 border border-dark-500" 
                    : "bg-primary-50 text-primary-700 border border-primary-200"
                )}>Data Visualization</span>
                <span className={cn(
                  "px-3 py-1 text-sm rounded-full font-medium",
                  isDark 
                    ? "bg-dark-600 text-gray-300 border border-dark-500" 
                    : "bg-primary-50 text-primary-700 border border-primary-200"
                )}>Pivot Tables</span>
                <span className={cn(
                  "px-3 py-1 text-sm rounded-full font-medium",
                  isDark 
                    ? "bg-dark-600 text-gray-300 border border-dark-500" 
                    : "bg-primary-50 text-primary-700 border border-primary-200"
                )}>Formulas</span>
              </div>
            </a>
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
