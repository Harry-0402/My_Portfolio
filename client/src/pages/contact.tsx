import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import { AnimatedSection } from "@/lib/animated-section";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <section className="pt-28 pb-8 md:pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold font-poppins mb-4",
              isDark ? "text-white" : "text-dark-900"
            )}>
              Contact Details
            </h1>
            <p className={cn(
              "text-lg",
              isDark ? "text-gray-300" : "text-dark-500"
            )}>
              Feel free to reach out to me through any of the following methods.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className={cn(
              "rounded-xl shadow-md p-8 mb-12",
              isDark ? "bg-dark-700" : "bg-white"
            )}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4",
                    isDark ? "bg-dark-600" : "bg-primary-100"
                  )}>
                    <Phone className={cn(
                      "h-8 w-8",
                      isDark ? "text-primary-400" : "text-primary"
                    )} />
                  </div>
                  <h3 className={cn(
                    "font-medium text-lg mb-2",
                    isDark ? "text-white" : ""
                  )}>
                    Phone
                  </h3>
                  <a 
                    href="tel:+917030430756" 
                    className={cn(
                      "hover:text-primary transition-colors",
                      isDark ? "text-gray-300" : "text-dark-500"
                    )}
                  >
                    +91 7030430756
                  </a>
                </div>
                
                <div className="text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4",
                    isDark ? "bg-dark-600" : "bg-primary-100"
                  )}>
                    <Mail className={cn(
                      "h-8 w-8",
                      isDark ? "text-primary-400" : "text-primary"
                    )} />
                  </div>
                  <h3 className={cn(
                    "font-medium text-lg mb-2",
                    isDark ? "text-white" : ""
                  )}>
                    Email
                  </h3>
                  <a 
                    href="mailto:hrchavan0402@gmail.com" 
                    className={cn(
                      "hover:text-primary transition-colors",
                      isDark ? "text-gray-300" : "text-dark-500"
                    )}
                  >
                    hrchavan0402@gmail.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4",
                    isDark ? "bg-dark-600" : "bg-primary-100"
                  )}>
                    <MapPin className={cn(
                      "h-8 w-8",
                      isDark ? "text-primary-400" : "text-primary"
                    )} />
                  </div>
                  <h3 className={cn(
                    "font-medium text-lg mb-2",
                    isDark ? "text-white" : ""
                  )}>
                    Location
                  </h3>
                  <p className={isDark ? "text-gray-300" : "text-dark-500"}>
                    Jalgaon, Maharashtra, India
                  </p>
                </div>
              </div>
            </Card>

            <Card className={cn(
              "rounded-xl shadow-md p-8",
              isDark ? "bg-dark-700" : "bg-white"
            )}>
              <h2 className={cn(
                "text-2xl font-poppins font-semibold mb-6 text-center",
                isDark ? "text-white" : ""
              )}>
                Connect With Me
              </h2>
              
              <div className="flex flex-col gap-8">
                <div className={cn(
                  "flex items-center p-4 rounded-lg border transition-all duration-300",
                  isDark 
                    ? "border-dark-600 hover:border-primary-500" 
                    : "border-gray-100 hover:border-primary"
                )}>
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mr-6",
                    isDark ? "bg-dark-600" : "bg-primary-100"
                  )}>
                    <Linkedin className={cn(
                      "h-6 w-6",
                      isDark ? "text-primary-400" : "text-primary"
                    )} />
                  </div>
                  <div className="flex-grow">
                    <h3 className={cn(
                      "font-medium text-lg mb-1",
                      isDark ? "text-white" : ""
                    )}>
                      LinkedIn Profile
                    </h3>
                    <p className={isDark ? "text-gray-300" : "text-dark-500"}>
                      Connect with me professionally
                    </p>
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
                
                <div className={cn(
                  "flex items-center p-4 rounded-lg border transition-all duration-300",
                  isDark 
                    ? "border-dark-600 hover:border-primary-500" 
                    : "border-gray-100 hover:border-primary"
                )}>
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mr-6",
                    isDark ? "bg-dark-600" : "bg-primary-100"
                  )}>
                    <Github className={cn(
                      "h-6 w-6",
                      isDark ? "text-primary-400" : "text-primary"
                    )} />
                  </div>
                  <div className="flex-grow">
                    <h3 className={cn(
                      "font-medium text-lg mb-1",
                      isDark ? "text-white" : ""
                    )}>
                      GitHub Profile
                    </h3>
                    <p className={isDark ? "text-gray-300" : "text-dark-500"}>
                      Check out my projects and contributions
                    </p>
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
