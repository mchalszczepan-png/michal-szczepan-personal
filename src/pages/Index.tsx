import { Code, Palette, Rocket, Mail, Github, Linkedin, FileText } from "lucide-react";
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
                A passionate entrepreneur and engineering student, dedicated to finding simple solutions to people's complex problems.
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
            I'm a creative entrepreneur. I bring a unique perspective 
            to every project I work on. I believe in continuous learning and staying up-to-date 
            with the latest technologies and best practices.
          </p>
        </div>
      </section>
    <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me(Detailed)</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            There have been many things that interested me over my relatively short life (18 years). From soccer, to coding, to spending 3 months learning a single piano song just to find out that i should probably learn basics first.There have been a couple interests that have burned themselves into my brainhole permanently; Reading/Learning, entrepreneurship, and a sadistic little sport called rock climbing.I started reading in and abouts the age of 12. I started with a well known series called the wheel of time. It includes the first book i properly read, and it shot a love of reading right down into my brain stem. gathering information and learning has always been a passion of mine. I believe that without reading, we would completely stagnate as a civilisation. Maybe after a while we would even regress. Books provide us with knowledge from other peoples' mistakes. Without this knowledge, we are doomed to repeat the mistakes of our forefathers.Over the past couple years I've been researching different ways to improve one's memory and focus. If you think about it, what is the point of reading if you forget everything within the day? one of my goals is to have a good enough memory that its not a problem. Maybe even fix alzheimer's with it who knows?This ties into a topic that arguably spikes my enthusiasm the most; Solving people's problems, otherwise known as entrepreneurship. What do i mean? To me, entrepreneurship is fixing people's trides and tribulations first. And getting rewarded for it second. Help people, get paid, help more people. The joy you get from finally succeeding after trying and trying over and over is almost unmatched.
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
              <h3 className="text-2xl font-semibold mb-3">Reading</h3>
              <p className="text-muted-foreground">
                Learning more about how to better utilise and expand my skills to help people. 
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

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary-foreground" />
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
                <Code className="w-6 h-6 text-primary-foreground" />
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              "Python",
              "HTML",
              "CSS",
              "Entrepreneurship",
              "Digital Marketing",
              "Sales",
              "Public Speaking",
              "Electronics/Circuits",
              "Electrical Engineering",
              "Desktop & Laptop Assembly",
              "Troubleshooting",
              "Cooking"
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
          <p className="text-lg text-muted-foreground mb-8">
            My resume is currently a work in progress. Check back soon!
          </p>
          <Button size="lg" variant="outline" disabled>
            <FileText className="mr-2 h-5 w-5" />
            Download Unavailable
          </Button>
        </div>
      </section>

      {/* Testimonials Section - Coming Soon */}
      {/* <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-muted-foreground mb-4 italic">
                "Michal is an exceptional developer who brings creativity and technical expertise to every project."
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
                "Working with Michal was a pleasure. His attention to detail and problem-solving skills are outstanding."
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
                "Michal's ability to turn ideas into reality is remarkable. Highly recommend!"
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
      </section> */}

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
              <h3 className="font-bold text-lg mb-4">Michal Szczepan</h3>
              <p className="text-muted-foreground">Entrepreneur and engineering student passionate about solving complex problems.</p>
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
