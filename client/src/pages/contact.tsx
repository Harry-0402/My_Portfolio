import { MapPin, Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { AnimatedSection } from "@/lib/animated-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact-sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              "rounded-xl shadow-md p-8 mt-12",
              isDark ? "bg-dark-700" : "bg-white"
            )}>
              <h2 className={cn(
                "text-2xl font-poppins font-semibold mb-2 text-center",
                isDark ? "text-white" : ""
              )}>
                Send Me a Message
              </h2>
              <p className={cn(
                "text-center mb-8",
                isDark ? "text-gray-300" : "text-dark-500"
              )}>
                Have a question or want to work together? Fill out the form below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={cn(
                        "block text-sm font-medium mb-2",
                        isDark ? "text-gray-200" : "text-dark-700"
                      )}
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className={cn(
                        isDark 
                          ? "bg-dark-600 border-dark-500 text-white placeholder:text-gray-400" 
                          : "bg-white border-gray-300"
                      )}
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className={cn(
                        "block text-sm font-medium mb-2",
                        isDark ? "text-gray-200" : "text-dark-700"
                      )}
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={cn(
                        isDark 
                          ? "bg-dark-600 border-dark-500 text-white placeholder:text-gray-400" 
                          : "bg-white border-gray-300"
                      )}
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="subject" 
                    className={cn(
                      "block text-sm font-medium mb-2",
                      isDark ? "text-gray-200" : "text-dark-700"
                    )}
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className={cn(
                      isDark 
                        ? "bg-dark-600 border-dark-500 text-white placeholder:text-gray-400" 
                        : "bg-white border-gray-300"
                    )}
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className={cn(
                      "block text-sm font-medium mb-2",
                      isDark ? "text-gray-200" : "text-dark-700"
                    )}
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    rows={5}
                    className={cn(
                      isDark 
                        ? "bg-dark-600 border-dark-500 text-white placeholder:text-gray-400" 
                        : "bg-white border-gray-300"
                    )}
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full",
                    isDark
                      ? "bg-primary-600 hover:bg-primary-700"
                      : "bg-primary hover:bg-primary-600"
                  )}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
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
