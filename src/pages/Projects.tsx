import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ganzyLogo from "@/assets/ganzy-logo.png";
import rocketProject from "@/assets/rocket-project.png";
import giveagoProject from "@/assets/giveago-project.png";

const Projects = () => {
  const projects = [
    {
      title: "Ganzy - CTO & Co-Founder",
      description: "A Decision Support System for Leaving Cert students. Adaptive scheduling, microskill breakdowns, and gamification. Overseeing the entire product lifecycle from Specs to VnV & QC. Leading a 5-person senior dev team and ensuring agile timelines are met.",
      image: ganzyLogo,
      tech: ["Python", "React", "AWS", "Agile", "TypeScript", "UI/UX Design"],
      highlight: true,
      featured: true
    },
    {
      title: "GiveAGo AI Build Jam (Jan 2026)",
      subtitle: "LazyMorning.com",
      description: "Built a functional AI automation tool in a 4-hour rapid prototyping sprint. Collaborated with a team of 5 to engineer an autonomous agent using Browser-use and Python. The system automates daily communication routines by scheduling randomized, context-aware messages to friends and family.",
      image: giveagoProject,
      tech: ["Python", "Browser-use", "AI Agents", "Rapid Prototyping"]
    },
    {
      title: "Custom PC Venture (Founder | 2019 - 2023)",
      description: "A self-funded hardware startup launched at age 14 by liquidating personal assets (consoles/electronics) to buy initial inventory. Scaled operations until a major setback involving an €1,100 fake cheque fraud wiped out all stock and capital. Demonstrated resilience by pivoting to small-scale repairs and device fixing to manually rebuild liquidity from zero. Successfully relaunched, navigating the 2020 global silicon shortage to eventually generate €8,000+ in revenue.",
      image: null,
      tech: ["Resilience", "Supply Chain Mgmt", "Hardware", "Sales"]
    },
    {
      title: "EduCat / ScreenPaws",
      description: "Mobile app concept turning screen time into micro-learning opportunities. Validated prototype built in 28 days—exploring gamification mechanics for educational engagement.",
      image: null,
      tech: ["Android", "Figma", "Product Design", "Prototyping"]
    },
    {
      title: "UCC Rocketry Society - Rocket Development",
      description: "Contributing to the design and development of a high-performance rocket. Responsibilities include Python programming for flight simulation and data analysis, 3D modeling of rocket components, and leading team coordination efforts.",
      image: rocketProject,
      tech: ["Python", "3D Modeling", "Team Leadership", "Component Sourcing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A showcase of ventures, builds, and creative endeavors
            </p>
          </div>

          {/* Featured Project - Ganzy */}
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={`featured-${index}`} className="overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 mb-12">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full max-w-xs h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">Featured Project</div>
                    <h3 className="text-2xl font-bold">Ganzy</h3>
                    <p className="text-lg text-primary font-semibold">Decision Support System for Leaving Cert Students</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <p className="text-lg font-bold text-primary">Co-Founder</p>
                      <p className="text-xs text-muted-foreground">& CTO</p>
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <p className="text-lg font-bold text-primary">5-Person</p>
                      <p className="text-xs text-muted-foreground">Senior Dev Team</p>
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <p className="text-lg font-bold text-primary">50k+</p>
                      <p className="text-xs text-muted-foreground">Organic TikTok Views</p>
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <p className="text-lg font-bold text-primary">Beta</p>
                      <p className="text-xs text-muted-foreground">Launch 2024</p>
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-secondary/5"
              >
                {project.image ? (
                  <div className="aspect-video overflow-hidden bg-muted flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.subtitle && (
                    <p className="text-sm font-medium text-primary">{project.subtitle}</p>
                  )}
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 Michal Szczepan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
