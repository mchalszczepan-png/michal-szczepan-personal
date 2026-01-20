import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap, Users } from "lucide-react";
import hultprizeLogo from "@/assets/hultprize-logo.png";
import eypLogo from "@/assets/eyp-logo.png";
import stFrancisCrest from "@/assets/stfrancis-crest.png";

const Experience = () => {
  const leadership = [
    {
      title: "Hult Prize Campus Director",
      organization: "UCC",
      description: "Running a mini-accelerator for social entrepreneurship at University College Cork. Organizing events, mentoring teams, and connecting students with global entrepreneurship opportunities.",
      image: hultprizeLogo,
      current: true
    },
    {
      title: "European Youth Parliament Delegate",
      organization: "National Session - Dáil Éireann",
      description: "Selected delegate at the National Session held in Dáil Éireann (Irish Parliament). Drafted and debated cyber security legislation with peers from across Ireland.",
      image: eypLogo
    },
    {
      title: "Student Council President",
      organization: "St. Francis College",
      description: "Led the student body, organized school-wide initiatives, and served as the primary liaison between students and administration.",
      image: stFrancisCrest
    }
  ];

  const education = [
    {
      title: "BE Electrical & Electronic Engineering",
      institution: "University College Cork (UCC) | 2025 - 2029",
      details: "First Class Honours (1:1) Average / 3.92 GPA",
      highlights: [
        "Electives: \"Essentials of AI\" (Ethics & Agents) and \"Developing an Entrepreneurial Mindset\"",
        "Activities: 1st Year Engineering Academic Rep, Rocketry Society, Mountaineering Society, WARPS Society"
      ],
      icon: GraduationCap,
      current: true
    },
    {
      title: "Leaving Certificate (High School Diploma)",
      institution: "Douglas Community School | 2024 - 2025",
      details: "613/625 Points — Top 2% Nationally",
      highlights: [
        "H1 (A) in Maths (93%), Applied Maths (91%), Biology (92%), Chemistry (94%), and Polish (98.7%)",
        "H2 (B) in Physics and French",
        "Key Project: Mathematical Modelling Analysis — Comprehensive study modelling Poland's population growth using iterative methods and advanced differential equations",
        "Activities: Dungeons & Dragons Club"
      ],
      icon: Award
    },
    {
      title: "Junior Cycle",
      institution: "St. Francis College Rochestown | 2021 - 2023",
      details: "Distinction in Maths; Higher Merit in Science, English, Geography, Business, and French",
      highlights: [
        "Leadership: Student Council President, Green Schools Committee, Debating Club"
      ],
      icon: Award
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
                Experience
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Leadership roles, academic achievements, and milestones
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Leadership
            </h2>
            <div className="space-y-6">
              {leadership.map((item, index) => (
                <Card key={index} className="overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 overflow-hidden bg-white">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        {item.current && (
                          <span className="px-2 py-1 text-xs rounded-full bg-primary text-primary-foreground font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <CardDescription className="text-base font-medium text-primary">
                        {item.organization}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-20">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        {item.current && (
                          <span className="px-2 py-1 text-xs rounded-full bg-primary text-primary-foreground font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <CardDescription className="text-base font-medium text-primary">
                        {item.institution}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-20">
                    <p className="text-lg font-semibold text-foreground mb-3">{item.details}</p>
                    <ul className="space-y-1">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
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

export default Experience;
