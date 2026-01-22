import { Mail, Github, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="text-muted-foreground mb-8">
            Let's discuss your next project or just say hello
          </p>

          <hr className="border-border mb-8" />

          <div className="max-w-xl">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out through any of these channels. I'm always open to 
              discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:mchalszczepan@gmail.com"
                className="flex items-center gap-4 p-4 border border-border bg-card hover:bg-muted no-underline"
              >
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">mchalszczepan@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://github.com/mchalszczepan-png"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border bg-card hover:bg-muted no-underline"
              >
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <Github className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/mchalszczepan-png</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/michal-szczepan-728189370"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border bg-card hover:bg-muted no-underline"
              >
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/michal-szczepan-728189370</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground text-sm">© 2025 Michal Szczepan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;