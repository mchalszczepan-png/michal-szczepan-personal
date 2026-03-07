import Navigation from "@/components/Navigation";
import { Award, GraduationCap, Trophy, Users, BookOpen } from "lucide-react";
import hultprizeLogo from "@/assets/hultprize-logo.png";
import eypLogo from "@/assets/eyp-logo.png";
import stFrancisCrest from "@/assets/stfrancis-crest.png";
import douglasCrest from "@/assets/douglas-crest.jpg";
import uccCrest from "@/assets/ucc-crest.jpg";
import liffeyTrustLogo from "@/assets/liffey-trust-logo.png";
import ganzyLogo from "@/assets/ganzy-logo.png";
import newfrontiersCeleb from "@/assets/newFrontiersCeleb.jpg";
import sdgHackathonUcc from "@/assets/sdgHackathonUccWin.jpg";
import sdgHackathonNational from "@/assets/sdgHackathonNationalWin.jpg";
import hultTatianaWorkshop from "@/assets/tatianaHultWorkshopStorytelling.jpg";
import hultGroupPhoto from "@/assets/hultPrizeGroupPhoto.jpg";
import hultJudgePhoto from "@/assets/hultPrizeJudgePhoto.jpg";
import entrepreneurialMindshift from "@/assets/educatElectiveModulePresentation.jpg";

const Experience = () => {
  const leadership = [
    {
      title: "CTO & Technical Lead",
      organization: "GANZY",
      description: "Leading technical development on ganzy.ie, a revolutionary student study planner that shows students exactly what to do day-by-day to achieve their target results. Responsible for system specifications, product management, organizing developers, AI parsing systems, telemetry systems, and complex algorithms. Built and deployed the front page website with AWS Amplify.",
      image: ganzyLogo,
      current: true
    },
    {
      title: "Hult Prize Campus Director",
      organization: "UCC",
      description: "Organized UCC's first-ever Hult Prize competition, a mini-accelerator for social entrepreneurship. Ran workshops with guest speakers including a director flown in from Hult London, and culminated in a packed pitching event with 5 teams competing for the $1M prize.",
      image: hultprizeLogo,
      period: "Nov 2025 - Mar 2026"
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
      title: "New Frontiers Enterprise Ireland Phase 2",
      organization: "Enterprise Ireland",
      value: "Youngest ever participants in New Frontiers history",
      description: "Selected for Ireland's premier entrepreneur development programme. At 18 and 20 years old, my co-founder and I beat over 500 applications to become the youngest ever accepted. From April to September 2026, we'll receive invaluable mentorship, hone our business skills, and work toward expanding GANZY to the United States.",
      badges: ["Entrepreneurship", "Mentorship", "US Expansion"],
      image: newfrontiersCeleb,
      current: true
    },
    {
      title: "National SDG Hackathon Champions",
      organization: "Higher Education Authority (HEA)",
      value: "€4,000 total winnings, Unanimous Best Pitch",
      description: "Won both the UCC-wide and National SDG Hackathons with Remento, an app that detects early signs of Dementia and Alzheimer's through weekly cognitive tests. Built a fully functional iOS app with AI voice analysis in just 100 minutes. Won €1,000 at UCC, then €3,000 at nationals with a unanimous 'Best Pitch' vote from all five judges.",
      badges: ["Hackathon", "Healthcare", "AI/ML"],
      images: [sdgHackathonUcc, sdgHackathonNational],
      team: "With Jack Garvey & Nathan Manley"
    },
    {
      title: "Dr. Séamus McDermott Entrepreneurial Scholar 2026",
      organization: "The Liffey Trust & University College Cork",
      value: "Valued at €9,000. Awarded to 1 student per year.",
      description: "Selected as the 2026 recipient for demonstrating exceptional potential in entrepreneurship and social impact. This award recognizes my track record with Ganzy (EdTech) and my bootstrap PC venture, validating my commitment to 'education for life' and job creation in the Irish economy.",
      badges: ["Social Impact", "Entrepreneurship", "Scholarship"],
      current: true
    }
  ];

  const hultPrizeJourney = {
    summary: "Organized UCC's first-ever Hult Prize competition from scratch, no playbook, no predecessor. The Hult Prize challenges students to create for-profit businesses solving UN Sustainable Development Goals, with a $1M grand prize.",
    challenges: "Early workshops had dozens of signups but nearly empty rooms. 'Oh yeah I'll be there' doesn't put people in seats. Learned that real interest only shows through attendance or money, relentless follow-up is essential.",
    highlights: [
      "Flew in Tatiana Chavez from Hult London for a storytelling workshop",
      "Final event packed with 25+ attendees and 5 competing teams",
      "Winner (Windhover - AI invasive plant detection) advanced to nationals",
      "Ideas ranged from student loneliness apps to bio-waste-to-energy in Zimbabwe"
    ],
    images: [
      { src: hultTatianaWorkshop, caption: "Storytelling workshop with Tatiana Chavez" },
      { src: hultGroupPhoto, caption: "Final competition teams" },
      { src: hultJudgePhoto, caption: "Judges deliberation (ran 40 mins instead of 15!)" }
    ]
  };

  const electiveModules = [
    {
      title: "UW0007: Developing an Entrepreneurial Mindshift",
      institution: "University College Cork | Sept - Nov 2025",
      description: "An elective that delivered on its promise of a genuine mind shift. From networking games on day one to building EduCat (screen time → micro-learning app) with a team in Figma, every session was hands-on.",
      highlights: [
        "Learned from multi-millionaire entrepreneurs Donal Daly and Pat Lynch",
        "Key insight: 'Nothing easy in life is meaningful', relentless persistence is everything",
        "Built EduCat prototype: merging educational games with parental screen time controls",
        "Discovered the power of observation in team dynamics during chaos exercises"
      ],
      image: entrepreneurialMindshift
    }
  ];

  const education = [
    {
      title: "BE Electrical & Electronic Engineering",
      institution: "University College Cork (UCC) | 2025 - 2029",
      details: "1:2 Second Class Honours | 68% Average | 3.88 GPA | ",
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
      details: "613/625 Points, Top 2% Nationally",
      highlights: [
        "H1 (A) in Maths (93%), Applied Maths (91%), Biology (92%), Chemistry (94%), and Polish (98.7%)",
        "H2 (B) in Physics and French",
        "Key Project: Mathematical Modelling Analysis, Comprehensive study modelling Poland's population growth using iterative methods and advanced differential equations",
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
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div key={index} className={`p-4 border bg-card ${item.current ? 'border-2 border-primary' : 'border-border'}`}>
                  <div className="flex items-start gap-4">
                    {item.image && (
                      <div className="w-20 h-20 shrink-0 bg-white border border-border flex items-center justify-center overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    {item.images && (
                      <div className="flex gap-2 shrink-0">
                        {item.images.map((img, imgIndex) => (
                          <div key={imgIndex} className="w-16 h-20 bg-white border border-border flex items-center justify-center overflow-hidden">
                            <img src={img} alt={`${item.title} ${imgIndex + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        {item.current && (
                          <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground">Current</span>
                        )}
                      </div>
                      <p className="text-primary text-sm font-medium">{item.organization}</p>
                      <p className="text-sm font-semibold mt-1">{item.value}</p>
                      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                      {item.team && (
                        <p className="text-sm text-muted-foreground mt-1 italic">{item.team}</p>
                      )}
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
          </div>

          <hr className="border-border mb-8" />

          {/* Hult Prize Journey Section */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Hult Prize UCC, Campus Director
            </h2>
            <div className="p-4 border border-border bg-card">
              <p className="text-muted-foreground text-sm mb-4">{hultPrizeJourney.summary}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">The Challenge</h4>
                <p className="text-muted-foreground text-sm">{hultPrizeJourney.challenges}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  {hultPrizeJourney.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4">
                {hultPrizeJourney.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="text-center">
                    <div className="w-full aspect-square bg-white border border-border flex items-center justify-center overflow-hidden mb-1">
                      <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-muted-foreground">{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>
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
                <div key={index} className={`p-4 border bg-card ${item.current ? 'border-2 border-primary' : 'border-border'}`}>
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
                        {item.period && (
                          <span className="px-2 py-0.5 text-xs border border-border text-muted-foreground">{item.period}</span>
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

          {/* Elective Modules Section */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Elective Modules
            </h2>
            <div className="space-y-4">
              {electiveModules.map((item, index) => (
                <div key={index} className="p-4 border border-border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 shrink-0 bg-white border border-border flex items-center justify-center overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-primary text-sm">{item.institution}</p>
                      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
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

          <hr className="border-border mb-8" />

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div key={index} className={`p-4 border bg-card ${item.current ? 'border-2 border-primary' : 'border-border'}`}>
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
