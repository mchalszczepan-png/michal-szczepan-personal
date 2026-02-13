import Navigation from "@/components/Navigation";
import ganzyLogo from "@/assets/ganzy-logo.png";
import rocketProject from "@/assets/rocket-project.png";
import giveagoProject from "@/assets/giveago-project.png";
import carecomplyProject from "@/assets/carecomply-project.png";

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
      title: "CareComply — NDRC Startup Sprint (Feb 2026)",
      description: "Built CareComply at the NDRC Startup Sprint hackathon at ENGINE Limerick — a roster management system for large nursing home groups that integrates health standard compliance directly into staff scheduling. Our team validated the concept by cold-calling directors of nursing at five homes nationwide, discovering that most still managed rosters via WhatsApp or whiteboards. We built a working demo on the day, pitched it successfully, and received interest from a Local Enterprise Office director for potential investment shortlisting.",
      image: carecomplyProject,
      tech: ["Hackathon", "Healthcare", "SaaS", "Compliance"]
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
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">My Projects</h1>
          <p className="text-muted-foreground mb-8">
            A showcase of ventures, builds, and creative endeavors
          </p>

          <hr className="border-border mb-8" />

          {/* Featured Project - Ganzy */}
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={`featured-${index}`} className="mb-8 p-6 border-2 border-primary bg-card">
              <span className="text-sm uppercase tracking-wide text-primary font-semibold">Featured Project</span>
              <div className="grid md:grid-cols-[180px_1fr] gap-6 mt-4">
                <div className="flex items-start justify-start">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full max-w-[180px] h-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Ganzy</h2>
                  <p className="text-primary text-lg mb-3">Decision Support System for Leaving Cert Students</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="p-2 border border-border">
                      <strong>Co-Founder</strong> & CTO
                    </div>
                    <div className="p-2 border border-border">
                      <strong>5-Person</strong> Senior Dev Team
                    </div>
                    <div className="p-2 border border-border">
                      <strong>10k+</strong> Organic TikTok Views
                    </div>
                    <div className="p-2 border border-border">
                      <strong>Beta</strong> Launch March 2026
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <strong>Tech:</strong> {project.tech.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr className="border-border mb-8" />

          {/* Other Projects */}
          <h2 className="text-xl font-bold mb-4">Other Projects</h2>
          <div className="space-y-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="p-4 border border-border bg-card">
                <div className="flex flex-col md:flex-row gap-4">
                  {project.image && (
                    <div className="md:w-1/4 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full max-w-[150px] h-auto object-contain"
                      />
                    </div>
                  )}
                  <div className={project.image ? "md:w-3/4" : "w-full"}>
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-sm text-primary mb-2">{project.subtitle}</p>
                    )}
                    <p className="text-muted-foreground text-sm mb-3">
                      {project.description}
                    </p>
                    <p className="text-sm">
                      <strong>Tech:</strong> {project.tech.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

export default Projects;
