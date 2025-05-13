import { AnimatedSection } from "@/lib/animated-section";

export default function EducationPage() {
  const educationItems = [
    {
      id: 1,
      period: "2022 - 2025",
      institution: "K.B.C.N.M.U, Jalgaon",
      degree: "B.Sc. in Actuarial Science",
      description: "Currently pursuing undergraduate degree with focus on mathematics, statistics, and financial modeling.",
      skills: ["Statistics", "Mathematics", "Financial Modeling", "Data Analysis"]
    },
    {
      id: 2,
      period: "2021 - 2022",
      institution: "K.S.K.W College, Nashik",
      degree: "HSC (Class XII)",
      description: "Completed Higher Secondary Certificate with 80.17% marks.",
      skills: ["Mathematics", "Statistics", "Physics", "Chemistry"]
    },
    {
      id: 3,
      period: "2019 - 2020",
      institution: "High School Ranjangaon, Jalgaon",
      degree: "SSC (Class X)",
      description: "Completed Secondary School Certificate with 90.20% marks.",
      skills: ["Mathematics", "Science", "Language Arts", "Social Studies"]
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
                  <span className="text-primary font-semibold">May 2025</span>
                </div>
                <h3 className="font-semibold mb-2">Python</h3>
                <p className="text-dark-500 text-sm">CERT-5C6ECA00</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <span className="text-primary font-semibold">May 2025</span>
                </div>
                <h3 className="font-semibold mb-2">R Programming for Beginners</h3>
                <p className="text-dark-500 text-sm">CERT: 8330139</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <span className="text-primary font-semibold">May 2025</span>
                </div>
                <h3 className="font-semibold mb-2">Excel</h3>
                <p className="text-dark-500 text-sm">CERT-8A3C66B9</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
