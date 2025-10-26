import { Code, Palette, Rocket, Mail, Github, Linkedin, Twitter, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Michal Szczepan
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A passionate developer and creative problem solver dedicated to building 
                innovative solutions and bringing ideas to life through code.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src={profilePhoto} 
                  alt="Michael Szczepan" 
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I'm a developer with a passion for creating elegant solutions to complex problems. 
            With a strong foundation in both design and development, I bring a unique perspective 
            to every project I work on. I believe in continuous learning and staying up-to-date 
            with the latest technologies and best practices.
          </p>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">What I Love</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Coding</h3>
              <p className="text-muted-foreground">
                Building robust applications with clean, maintainable code and exploring new 
                frameworks and technologies.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Design</h3>
              <p className="text-muted-foreground">
                Creating beautiful, intuitive user interfaces that provide exceptional user 
                experiences.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries and finding creative solutions to challenging problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
              { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
              { category: "Tools & Other", skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"] }
            ].map((group, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted text-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download my resume to learn more about my experience and qualifications.
          </p>
          <Button size="lg" variant="outline">
            <FileText className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground mb-4 italic">
                "Michael is an exceptional developer who brings creativity and technical expertise to every project."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">CEO, Tech Corp</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground mb-4 italic">
                "Working with Michael was a pleasure. His attention to detail and problem-solving skills are outstanding."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20" />
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-muted-foreground">CTO, Startup Inc</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground mb-4 italic">
                "Michael's ability to turn ideas into reality is remarkable. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Designer, Creative Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have a project in mind? Let's create something amazing together.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-card/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Michael Szczepan</h3>
              <p className="text-muted-foreground">Developer & Designer passionate about creating beautiful digital experiences.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="mailto:michael@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Michael Szczepan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
