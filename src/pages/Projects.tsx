import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import rocketProject from "@/assets/rocket-project.png";
import ganzyProject from "@/assets/ganzy-project.png";

const Projects = () => {
  const projects = [
    {
      title: "Ganzy - CTO",
      description: "Overseeing the entire product lifecycle from Specs to VnV & QC. Actively coding, resolving complex stack issues, managing the dev team, and ensuring agile timelines are met following agile software development methodologies. Serving as the technical liaison to the CEO.",
      image: ganzyProject,
      tech: ["Project Management", "Agile Development", "System Design", "Python", "Next.js", "TypeScript", "UI/UX Design", "Wireframing"]
    },
    {
      title: "UCC Rocketry Society - Rocket Development Project",
      description: "Contributing to the design and development of a high-performance rocket with the University College Cork Rocketry Society. Responsibilities include Python programming for flight simulation and data analysis, 3D modeling of rocket components, strategic sourcing of aerospace-grade components, and leading team coordination efforts to ensure project milestones are met efficiently.",
      image: rocketProject,
      tech: ["Python", "3D Modeling", "Team Leadership", "Component Sourcing", "Project Management"]
    }
    /* Uncomment to add more projects
    {
      title: "Project Two",
      description: "An innovative solution that streamlines workflows and improves productivity.",
      image: project2,
      tech: ["Next.js", "Node.js", "PostgreSQL"]
    },
    {
      title: "Project Three",
      description: "A creative project showcasing modern design principles and interactive features.",
      image: project3,
      tech: ["React", "Three.js", "WebGL"]
    }
    */
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
              A showcase of my recent work and creative endeavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-secondary/5"
              >
                <div className="aspect-video overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
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
