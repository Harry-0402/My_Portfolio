import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import { AnimatedSection } from "@/lib/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Submit the form data to the backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again later.",
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
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-dark-900">Get In Touch</h1>
            <p className="text-lg text-dark-500">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-dark-600 mb-2 font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    {...form.register("name")}
                    placeholder="John Smith"
                    className={form.formState.errors.name ? "border-red-300" : ""}
                  />
                  {form.formState.errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-dark-600 mb-2 font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="john@example.com"
                    className={form.formState.errors.email ? "border-red-300" : ""}
                  />
                  {form.formState.errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-dark-600 mb-2 font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    {...form.register("subject")}
                    placeholder="Project Inquiry"
                    className={form.formState.errors.subject ? "border-red-300" : ""}
                  />
                  {form.formState.errors.subject && (
                    <p className="mt-1 text-red-500 text-sm">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-dark-600 mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    className={form.formState.errors.message ? "border-red-300" : ""}
                  />
                  {form.formState.errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-xl font-poppins font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-dark-500">Jalgaon, Maharashtra, India</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <a href="mailto:hrchavan0402@gmail.com" className="text-dark-500 hover:text-primary transition-colors">
                      hrchavan0402@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <a href="tel:+917030430756" className="text-dark-500 hover:text-primary transition-colors">
                      +91 7030430756
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-poppins font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/harish-chavan-6852b4285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/Harry-0402"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
