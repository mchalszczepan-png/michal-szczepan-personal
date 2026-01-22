import Navigation from "@/components/Navigation";
import { Award, GraduationCap, Trophy, Users } from "lucide-react";
import hultprizeLogo from "@/assets/hultprize-logo.png";
import eypLogo from "@/assets/eyp-logo.png";
import stFrancisCrest from "@/assets/stfrancis-crest.png";
import douglasCrest from "@/assets/douglas-crest.jpg";
import uccCrest from "@/assets/ucc-crest.jpg";
import liffeyTrustLogo from "@/assets/liffey-trust-logo.png";

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

  const achievements = [
    {
      title: "Dr. Séamus McDermott Entrepreneurial Scholar 2026",
      organization: "The Liffey Trust & University College Cork",
      value: "Valued at €9,000. Awarded to 1 student per year.",
      description: "Selected as the 2026 recipient for demonstrating exceptional potential in entrepreneurship and social impact. This award recognizes my track record with Ganzy (EdTech) and my bootstrap PC venture, validating my commitment to 'education for life' and job creation in the Irish economy.",
      badges: ["Social Impact", "Entrepreneurship", "Scholarship"],
      current: true
    }
  ];

  const education = [
    {
      title: "BE Electrical & Electronic Engineering",
      institution: "University College Cork (UCC) | 2025 - 2029",
      details: "First Class Honours (1:1) Average / 3.92 GPA",
      highlights: [
        "Sem 1 Electives: \"Essentials of AI\" (Ethics & Agents) and \"Developing an Entrepreneurial Mindset\"",
        "Sem 2 Electives: French at Intermediate Level",
        "Activities: 1st Year Engineering Academic Rep, Rocketry Society, Mountaineering Society, WARPS Society"
      ],
      image: uccCrest,
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
      image: douglasCrest
    },
    {
      title: "Junior Cycle",
      institution: "St. Francis College Rochestown | 2021 - 2023",
      details: "Distinction in Maths; Higher Merit in Science, English, Geography, Business, and French",
      highlights: [
        "Leadership: Student Council President, Green Schools Committee, Debating Club"
      ],
      image: stFrancisCrest
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">My Experience</h1>
          <p className="text-muted-foreground mb-8">
            Leadership roles, academic achievements, and milestones
          </p>

          <hr className="border-border mb-8" />

          {/* Achievements Section */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Achievements
            </h2>
            {achievements.map((item, index) => (
              <div key={index} className="p-4 border-2 border-primary bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-white border border-border flex items-center justify-center overflow-hidden">
                    <img src={liffeyTrustLogo} alt="Liffey Trust" className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      {item.current && (
                        <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground">2026</span>
                      )}
                    </div>
                    <p className="text-primary text-sm font-medium">{item.organization}</p>
                    <p className="text-sm font-semibold mt-1">{item.value}</p>
                    <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.badges.map((badge, bIndex) => (
                        <span key={bIndex} className="px-2 py-0.5 text-xs border border-border bg-muted">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-border mb-8" />

          {/* Leadership Section */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Leadership
            </h2>
            <div className="space-y-4">
              {leadership.map((item, index) => (
                <div key={index} className="p-4 border border-border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white border border-border flex items-center justify-center overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold">{item.title}</h3>
                        {item.current && (
                          <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground">Current</span>
                        )}
                      </div>
                      <p className="text-primary text-sm">{item.organization}</p>
                      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-border mb-8" />

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div key={index} className="p-4 border border-border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white border border-border flex items-center justify-center overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold">{item.title}</h3>
                        {item.current && (
                          <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground">Current</span>
                        )}
                      </div>
                      <p className="text-primary text-sm">{item.institution}</p>
                      <p className="text-foreground font-semibold mt-2">{item.details}</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                        {item.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
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

export default Experience;