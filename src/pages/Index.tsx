import { Mountain, BookOpen, Lightbulb, Brain, Users, Hammer, Mail, Github, Linkedin, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Theme Toggle */}
      <div className="pt-20 px-4 flex justify-end max-w-4xl mx-auto">
        <ThemeToggle />
      </div>
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src={profilePhoto} 
                alt="Michal Szczepan" 
                className="w-48 h-48 object-cover border-2 border-border"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 text-foreground">
                Michal Szczepan
              </h1>
              <p className="text-xl text-primary mb-4">
                Engineering Student & EdTech Founder
              </p>
              <p className="text-muted-foreground mb-6">
                Bridging the gap between technical engineering and entrepreneurial strategy. Turning problems into ventures.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link to="/projects" className="px-4 py-2 bg-primary text-primary-foreground border border-primary hover:bg-primary/90 no-underline">
                  View Projects
                </Link>
                <Link to="/contact" className="px-4 py-2 bg-background text-foreground border border-border hover:bg-muted no-underline">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border max-w-4xl mx-auto" />

      {/* About Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm an Engineering Student at UCC achieving a 1:1 Grade (GPA 3.92), and the CTO of Ganzy—an EdTech startup revolutionizing how students prepare for exams. I bring a unique perspective combining technical engineering expertise with entrepreneurial strategy, always focused on creating real value through innovation.
          </p>
        </div>
      </section>

      <hr className="border-border max-w-4xl mx-auto" />

      {/* Skills Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-border bg-card">
              <h3 className="text-lg font-semibold mb-3 text-primary">Technical (Core)</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>Electronics/Circuits</li>
                <li>System Specification</li>
                <li>Wireframing (Figma)</li>
              </ul>
            </div>

            <div className="p-4 border border-border bg-card">
              <h3 className="text-lg font-semibold mb-3 text-primary">Technical (Learning/Familiar)</h3>
              <p className="text-xs text-muted-foreground mb-2">Managing teams using these stacks as CTO</p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>AWS</li>
                <li>SQL</li>
              </ul>
            </div>

            <div className="p-4 border border-border bg-card">
              <h3 className="text-lg font-semibold mb-3 text-primary">Business & Entrepreneurship</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Business Management</li>
                <li>Sales & Negotiation</li>
                <li>Event Planning</li>
                <li>Fraud Awareness</li>
                <li>Supply Chain Management</li>
              </ul>
            </div>

            <div className="p-4 border border-border bg-card">
              <h3 className="text-lg font-semibold mb-3 text-primary">Marketing & Creative</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Digital Marketing Strategy</li>
                <li>Content Creation</li>
                <li>Script Writing</li>
                <li>Advertising</li>
                <li>Public Speaking & Debating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border max-w-4xl mx-auto" />

      {/* Interests Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Things I Love</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <Mountain className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Gravity Checks (Rock Climbing)</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                A genuinely petrifying sport where I analyze the earth's gravity by falling spectacularly. It teaches me that failing 200 times is just part of the process before the final send.
              </p>
            </div>
            
            <div className="p-4 border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Epic Reads</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                I don't just read, I devour information. From the massive Wheel of Time series to deep dives on psychology, management, and technology.
              </p>
            </div>
            
            <div className="p-4 border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Problem Solving</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                To me, entrepreneurship is simply solving problems for people. There's nothing quite like the satisfaction of cracking a difficult challenge.
              </p>
            </div>

            <div className="p-4 border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Brain Optimization</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                I am obsessed with how the brain works. I actively research and practice memory techniques and mnemonics.
              </p>
            </div>

            <div className="p-4 border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Networking</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                I love meeting new people and establishing connections. It expands my horizons and allows me to make new friends.
              </p>
            </div>

            <div className="p-4 border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <Hammer className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Hard Work</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Just getting into the deep end and working on something for hours on end. A glorious feeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border max-w-4xl mx-auto" />

      {/* Resume Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground mb-6">
            View my full CV to learn more about my experience and qualifications.
          </p>
          <a 
            href="/Michal_Szczepan_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground border border-primary hover:bg-primary/90 no-underline"
          >
            <FileText className="h-4 w-4" />
            View CV
          </a>
        </div>
      </section>

      <hr className="border-border max-w-4xl mx-auto" />

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-8 border border-border bg-card">
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or investing? Let's connect and create something impactful.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-4 py-2 bg-primary text-primary-foreground border border-primary hover:bg-primary/90 no-underline"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-3">Michal Szczepan</h3>
              <p className="text-muted-foreground text-sm">Engineering student and EdTech founder passionate about turning problems into ventures.</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Connect</h3>
              <div className="flex gap-4">
                <a href="mailto:mchalszczepan@gmail.com" className="text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com/mchalszczepan-png" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/michal-szczepan-728189370" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Michal Szczepan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;