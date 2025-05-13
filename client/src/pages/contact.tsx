import { MapPin, Mail, Phone, Linkedin, Github, Calendar, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/lib/animated-section";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-8 md:pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-dark-900">Contact Details</h1>
            <p className="text-lg text-dark-500">
              Feel free to reach out to me through any of the following methods.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white rounded-xl shadow-md p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Phone</h3>
                  <a href="tel:+917030430756" className="text-dark-500 hover:text-primary transition-colors">
                    +91 7030430756
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Email</h3>
                  <a href="mailto:hrchavan0402@gmail.com" className="text-dark-500 hover:text-primary transition-colors">
                    hrchavan0402@gmail.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Location</h3>
                  <p className="text-dark-500">Jalgaon, Maharashtra, India</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-center">Connect With Me</h2>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-primary transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-6">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-lg mb-1">LinkedIn Profile</h3>
                    <p className="text-dark-500">Connect with me professionally</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/harish-chavan-6852b4285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-600 font-medium"
                  >
                    View Profile →
                  </a>
                </div>
                
                <div className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-primary transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-6">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-lg mb-1">GitHub Profile</h3>
                    <p className="text-dark-500">Check out my projects and contributions</p>
                  </div>
                  <a
                    href="https://github.com/Harry-0402"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-600 font-medium"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
