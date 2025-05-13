import { AnimatedSection } from "@/lib/animated-section";

export default function EducationPage() {
  const educationItems = [
    {
      id: 1,
      period: "2018 - 2022",
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      description: "Graduated with honors. Specialized in software engineering and human-computer interaction.",
      skills: ["Algorithm Design", "Web Development", "Data Structures", "Object-Oriented Programming"]
    },
    {
      id: 2,
      period: "2022 - 2023",
      institution: "Design Institute",
      degree: "Certificate in User Experience Design",
      description: "Advanced program focused on user research, prototyping, and interaction design principles.",
      skills: ["User Research", "Prototyping", "UI/UX Design", "Wireframing"]
    },
    {
      id: 3,
      period: "2023",
      institution: "Tech Academy",
      degree: "Full-Stack Development Bootcamp",
      description: "Intensive program covering modern web development technologies and best practices.",
      skills: ["React", "Node.js", "MongoDB", "RESTful APIs"]
    }
  ];

  return (
    <>
      <section className="pt-28 pb-8 md:pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-dark-900">Education</h1>
            <p className="text-lg text-dark-500">
              My academic journey that has shaped my knowledge and skills in the tech industry.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {educationItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <span className="block text-primary font-poppins font-semibold">{item.period}</span>
                    <span className="block text-dark-400">{item.institution}</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8 border-l-0 md:border-l-2 border-primary-100">
                    <h3 className="text-xl font-poppins font-semibold mb-2">{item.degree}</h3>
                    <p className="text-dark-500 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, index) => (
                        <span key={index} className="tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-dark-900">Certifications</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <span className="text-primary font-semibold">2023</span>
                </div>
                <h3 className="font-semibold mb-2">AWS Certified Solutions Architect</h3>
                <p className="text-dark-500 text-sm">Amazon Web Services</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <span className="text-primary font-semibold">2022</span>
                </div>
                <h3 className="font-semibold mb-2">Google UX Design Professional Certificate</h3>
                <p className="text-dark-500 text-sm">Google / Coursera</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <span className="text-primary font-semibold">2021</span>
                </div>
                <h3 className="font-semibold mb-2">Meta Front-End Developer Certificate</h3>
                <p className="text-dark-500 text-sm">Meta / Coursera</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <span className="text-primary font-semibold">2020</span>
                </div>
                <h3 className="font-semibold mb-2">Scrum Master Certification</h3>
                <p className="text-dark-500 text-sm">Scrum Alliance</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
