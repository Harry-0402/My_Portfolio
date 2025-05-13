import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/lib/animated-section";
import { SkillBar } from "@/components/ui/skill-bar";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 text-dark-900">
                Hi, I'm <span className="text-primary">Harish Chavan</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-poppins font-medium mb-6 text-dark-600">
                Actuarial Science Student
              </h2>
              <p className="text-lg text-dark-500 mb-8 leading-relaxed max-w-2xl">
                Detail-oriented and analytical undergraduate currently pursuing a B.Sc. in Actuarial Science. I have a solid foundation in mathematics, statistics, and financial modeling, complemented by hands-on experience in data analysis and risk assessment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-700 transition-colors">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-primary border border-primary font-medium rounded-md hover:bg-primary-50 transition-colors">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="John Doe professional portrait" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-white" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <AnimatedSection className="py-20 bg-gray-100">
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
                  <Link href="/projects" className="text-white font-medium px-4 py-2 rounded-md border border-white hover:bg-white hover:text-primary transition-colors">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-2">Real Estate Price Prediction</h3>
                <p className="text-dark-500 mb-4">A comprehensive model integrating Excel, Python, and R to predict real estate prices with high accuracy.</p>
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
                  <Link href="/projects" className="text-white font-medium px-4 py-2 rounded-md border border-white hover:bg-white hover:text-primary transition-colors">
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-2">Excel Projects Collection</h3>
                <p className="text-dark-500 mb-4">A collection of Excel projects including Bike Sales Dashboard, Payroll System, and an interactive GradeBook.</p>
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
            <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-white text-primary border border-primary font-medium rounded-md hover:bg-primary-50 transition-colors">
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
              <h3 className="text-xl font-poppins font-semibold mb-6">Technical Skills</h3>
              
              <SkillBar name="MS Excel" percentage={90} />
              <SkillBar name="Python" percentage={75} />
              <SkillBar name="R" percentage={70} />
              <SkillBar name="Data Analysis" percentage={85} />
            </div>
            
            <div>
              <h3 className="text-xl font-poppins font-semibold mb-6">Professional Skills</h3>
              
              <SkillBar name="Communication" percentage={85} />
              <SkillBar name="Leadership" percentage={80} />
              <SkillBar name="Decision Making" percentage={85} />
              <SkillBar name="Adaptability" percentage={90} />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
