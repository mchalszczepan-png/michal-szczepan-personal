import { Code, Palette, Rocket, Mail, Github, Linkedin, FileText, Users, TrendingUp, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";
import ganzyLogo from "@/assets/ganzy-logo.png";

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
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Michal Szczepan
                </span>
              </h1>
              <p className="text-2xl font-semibold text-foreground">
                Engineering Student & EdTech Founder
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bridging the gap between technical engineering and entrepreneurial strategy. Turning problems into ventures.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link to="/projects">View Projects</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src={profilePhoto} 
                  alt="Michal Szczepan" 
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Ganzy */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Project</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">My flagship venture in EdTech</p>
          
          <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex items-center justify-center">
                <img 
                  src={ganzyLogo} 
                  alt="Ganzy - EdTech Platform"
                  className="w-full max-w-sm h-auto object-contain rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Ganzy</h3>
                  <p className="text-xl text-primary font-semibold">Decision Support System for Leaving Cert Students</p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Adaptive scheduling, microskill breakdowns, and gamification—empowering students to achieve their academic goals with data-driven insights.
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-2xl font-bold text-primary">Co-Founder</p>
                    <p className="text-sm text-muted-foreground">& CTO</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-2xl font-bold text-primary">5-Person</p>
                    <p className="text-sm text-muted-foreground">Senior Dev Team</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-2xl font-bold text-primary">50k+</p>
                    <p className="text-sm text-muted-foreground">Organic TikTok Views</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-2xl font-bold text-primary">Beta</p>
                    <p className="text-sm text-muted-foreground">Launch 2024</p>
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {["Python", "React", "AWS", "Agile"].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button asChild>
                  <Link to="/projects">Learn More →</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I'm an Engineering Student at UCC achieving a 1:1 Grade (GPA 3.92), and the CTO of Ganzy—an EdTech startup revolutionizing how students prepare for exams. I bring a unique perspective combining technical engineering expertise with entrepreneurial strategy, always focused on creating real value through innovation.
          </p>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4 bg-muted/30">
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
              <h3 className="text-2xl font-semibold mb-3">Reading</h3>
              <p className="text-muted-foreground">
                Learning more about how to better utilise and expand my skills to help people. 
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries and finding creative solutions to challenging problems.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Entrepreneurship</h3>
              <p className="text-muted-foreground">
                Solving people's problems and creating value through innovative business solutions.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Sports</h3>
              <p className="text-muted-foreground">
                Staying active and pushing physical limits through various sports and activities.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Networking</h3>
              <p className="text-muted-foreground">
                Socialising and making new contacts to build meaningful professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              "Python",
              "React",
              "TypeScript",
              "AWS",
              "HTML/CSS",
              "Agile Development",
              "Entrepreneurship",
              "Digital Marketing",
              "Sales",
              "Public Speaking",
              "Electronics/Circuits",
              "Electrical Engineering",
              "Team Leadership",
              "Product Strategy"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 text-base rounded-lg bg-card border border-border text-foreground font-medium hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
          <p className="text-lg text-muted-foreground mb-8">
            View my full CV to learn more about my experience and qualifications.
          </p>
          <Button size="lg" asChild>
            <a href="/Michal_Szczepan_CV.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              View CV
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in collaborating or investing? Let's connect and create something impactful.
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
              <h3 className="font-bold text-lg mb-4">Michal Szczepan</h3>
              <p className="text-muted-foreground">Engineering student and EdTech founder passionate about turning problems into ventures.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                <li><Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="mailto:mchalszczepan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com/mchalszczepan-png" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/michal-szczepan-728189370" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Michal Szczepan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
