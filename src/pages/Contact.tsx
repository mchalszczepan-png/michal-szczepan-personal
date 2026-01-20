import { Mail, Github, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or just say hello
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these channels. I'm always open to 
                  discussing new projects, creative ideas, or opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:mchalszczepan@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">mchalszczepan@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/mchalszczepan-png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/mchalszczepan-png</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/michal-szczepan-728189370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/michal-szczepan-728189370</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Michal Szczepan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
