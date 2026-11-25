import { useEffect, type CSSProperties, type ReactNode } from "react";
import SiteHud from "@/components/SiteHud";
import "@/styles/work.css";
import ganzyLogo from "@/assets/ganzy-logo.png";
import liffeyLogo from "@/assets/liffey-trust-logo.png";
import hultLogo from "@/assets/hultprize-logo.png";
import uccCrest from "@/assets/ucc-crest.jpg";
import eypLogo from "@/assets/eyp-logo.png";
import sdgUcc from "@/assets/sdg-hackathon-ucc.jpg";
import newFrontiers from "@/assets/newfrontiers-celeb.jpg";
import sdgNational from "@/assets/sdg-hackathon-national.jpg";

type Vars = CSSProperties & Record<`--${string}`, string>;
const v = (o: Record<string, string>) => o as Vars;

type Pin = { c: string; kind?: "logo" | "dot" | "sq"; img?: string; alt?: string };
type Row = {
  when: string;
  pin: Pin;
  title: ReactNode;
  org: ReactNode;
  out: ReactNode;
  hero?: boolean;
};

const rows: Row[] = [
  {
    when: "Sep 2025 – present",
    hero: true,
    pin: { c: "#d13b2f", img: ganzyLogo, alt: "Ganzy logo" },
    title: "Co-Founder & CTO",
    org: "Ganzy",
    out: (
      <>
        I write the system specifications and the planner logic, and our <b>four developers</b> build from them. The maths, the pseudocode and the wireframes are mine, and so is checking that what gets built behaves the way we agreed. After research with students, I led the move to a US-first product.
      </>
    ),
  },
  {
    when: "Sep 2025 – present",
    pin: { c: "#1d56b3", kind: "dot" },
    title: "Class Representative",
    org: "Electrical & Electronic Engineering, UCC",
    out: "I built a shared database of learning materials for students who needed extra resources, and made condensed formula notes with a stripped-down list of everything people had to know. If I see someone struggling with something I have already fixed, I help.",
  },
  {
    when: "2025 – 2029",
    pin: { c: "#fff", kind: "sq", img: uccCrest, alt: "University College Cork crest" },
    title: "BE Electrical & Electronic Engineering",
    org: "University College Cork",
    out: (
      <>
        Current average: <b>Second Class Honours Grade 1</b>, three percentage points below a First-Class Honours grade. I am drawn to the electrical side. AI keeps demanding more power, and I want to be on the supply side of that problem, in power generation, energy storage and the grid.
      </>
    ),
  },
  {
    when: "",
    pin: { c: "#e6007e", img: hultLogo, alt: "Hult Prize logo" },
    title: "Campus Director, Hult Prize",
    org: "University College Cork",
    out: (
      <>
        Nobody had run the Hult Prize at UCC before, so there was no playbook. The early workshops had dozens of signups and almost nobody in the room, even the one where we flew in a director from Hult in London. We kept going, and the final had <b>five teams</b> pitching to a packed room, from a student loneliness app to an AI tool that spots invasive plants.
      </>
    ),
  },
  {
    when: "",
    pin: { c: "#16874d", img: liffeyLogo, alt: "Liffey Trust logo" },
    title: "Dr. Séamus McDermott Entrepreneurial Scholarship",
    org: "Liffey Trust",
    out: (
      <>
        Awarded <b>€9,000</b> by the Liffey Trust, Europe's first-ever accelerator programme. My application started with selling gum in school corridors and ended with Ganzy.
      </>
    ),
  },
  {
    when: "",
    pin: { c: "#d13b2f", kind: "dot" },
    title: "Developing an Entrepreneurial Mindset",
    org: "UCC module UW0007",
    out: "Taught by Gillian Barrett and Eamonn Curtin. I rebuilt EduCat with a new team and renamed it ScreenPaws. Each week we tested assumptions with potential users and practised pitching to the class. It was the first time I felt real social impact behind a project.",
  },
  {
    when: "",
    pin: { c: "#16874d", img: eypLogo, alt: "European Youth Parliament logo" },
    title: "European Youth Parliament delegate",
    org: "Munster Regional Session and National Session",
    out: (
      <>
        At the Munster Regional Session my committee drafted and defended legislation on Pegasus spyware. We then went to the National Session in <b>Dáil Éireann</b> to do the same for cyber security, broadcast live on Oireachtas TV. It felt like a hackathon for policy instead of code.
      </>
    ),
  },
  {
    when: "From 2020",
    pin: { c: "#d13b2f", kind: "dot" },
    title: "Founder & Technician",
    org: "Custom PC Sales & Repair Business",
    out: (
      <>
        Started at 13, in lockdown. I sold my PS3, PS4 and old laptop to pay for parts, built my own PC because the pre-built ones were marked up far past the cost of the components, and kept going, building two at a time with my friend Paul on marketing. It made more than <b>€4,000</b> over roughly 18 months, until a forged cheque and the global chip shortage emptied my workbench. I moved into repairs and selling parts.
      </>
    ),
  },
  {
    when: "Sep – Dec 2019",
    pin: { c: "#16874d", kind: "dot" },
    title: "Lunchtime shop",
    org: "St. Francis College, Rochestown",
    out: (
      <>
        My school had no canteen at all, so at 12 I bought gum and 7-Up in bulk from Dealz and sold it at lunch. Two classmates helped, and after paying them I still made over <b>€150</b> before Christmas. COVID closed the school before I could ask the principal for a proper stand.
      </>
    ),
  },
];

type Sticky = { bg: string; r: string; pen: string; h: string; p: ReactNode; ok?: boolean };

const shipped: Sticky[] = [
  { bg: "#fbe98a", r: "1.6deg", pen: "#232a37", ok: true, h: "New Frontiers Phase 2", p: <>Enterprise Ireland. <em>Youngest person</em> ever accepted, at 18</> },
  { bg: "#bfe3c9", r: "-1.8deg", pen: "#1d56b3", ok: true, h: "US-first strategy", p: <>Moved there after talking to <em>students</em></> },
  { bg: "#bcd9f2", r: "-1deg", pen: "#232a37", ok: true, h: "Validation post", p: <>About <em>100</em> upvotes and <em>50</em> comments in two days</> },
  { bg: "#f8c9cf", r: "2.1deg", pen: "#1d56b3", ok: true, h: "Planner logic", p: <>Written out in maths, pseudocode and wireframes</> },
  { bg: "#fcd2a0", r: "-1.2deg", pen: "#232a37", ok: true, h: "Hard feedback", p: <>Mentors said our validation was weak and our market too narrow. They were <em>right</em>, so we restructured</> },
];

const doing: Sticky[] = [
  { bg: "#fbe98a", r: "1.4deg", pen: "#232a37", h: "Planner", p: "What a student should do next, across academics, college goals, activities, deadlines and the time they have" },
  { bg: "#fcd2a0", r: "-2deg", pen: "#1d56b3", h: "System specifications", p: "Exact requirements and behaviour for the developers to build from" },
  { bg: "#bfe3c9", r: "1deg", pen: "#232a37", h: "Development tasks", p: "Requirements broken into tasks for four developers" },
  { bg: "#bcd9f2", r: "-1.5deg", pen: "#1d56b3", h: "Implementation review", p: "Checking what gets built against what we agreed" },
];

const StickyNote = ({ s }: { s: Sticky }) => (
  <li className="sticky" style={v({ "--bg": s.bg, "--r": s.r, "--pen": s.pen })}>
    {s.ok && (
      <svg className="ok" aria-hidden="true">
        <use href="#work-tick" />
      </svg>
    )}
    <h4 className="mk ink">{s.h}</h4>
    <p className="ca ink">{s.p}</p>
  </li>
);

const Tape = ({ cls }: { cls: string }) => <i className={`tp ${cls}`} aria-hidden="true" />;

const Work = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Michal Szczepan: Work";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="pg-work">
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <defs>
          <symbol id="work-tick" viewBox="0 0 22 22">
            <path d="M2.500 11.500 L8 18 L20 3" fill="none" stroke="currentColor" strokeWidth="3.400" strokeLinecap="round" strokeLinejoin="round" />
          </symbol>
          <filter id="work-blur6" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
          <filter id="work-blur2" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
      </svg>

      <SiteHud world="work" />

      <main id="work">
        <div className="wall">
          <div className="skirt" aria-hidden="true" />

          <div className="head">
            <div className="sheet">
              <Tape cls="tl2" />
              <Tape cls="tr2" />
              <h1 className="mk ink">Work</h1>
              <svg className="ul ink" viewBox="0 0 300 22" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 8 C 80 2 190 12 298 5" fill="none" stroke="#d13b2f" strokeWidth="5" strokeLinecap="round" />
                <path d="M28 18 C 110 12 200 20 272 14" fill="none" stroke="#d13b2f" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <p className="sub ink">
                <b>Michal Szczepan</b>, Co-Founder &amp; CTO of Ganzy. Electrical &amp; Electronic Engineering student at UCC, Cork.
                <span className="ca">
                  I write specifications, planner maths and wireframes for a team of four developers, and I have been building things since I was 12.
                </span>
              </p>
            </div>

            <aside className="cv" aria-label="CV and links">
              <Tape cls="tl2" />
              <Tape cls="tr2" />
              <h2>Michal Szczepan</h2>
              <p className="r">
                Co-Founder &amp; CTO, Ganzy
                <br />
                Cork, Ireland
              </p>
              <ul>
                <li>
                  <a href="/Michal_Szczepan_CV.pdf">
                    CV <span>PDF</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/michal-szczepan-728189370" target="_blank" rel="noopener noreferrer">
                    LinkedIn <span>↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mchalszczepan-png" target="_blank" rel="noopener noreferrer">
                    GitHub <span>↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://ganzy.app" target="_blank" rel="noopener noreferrer">
                    ganzy.app <span>↗</span>
                  </a>
                </li>
              </ul>
            </aside>

            <figure className="print sq hdr-photo" style={v({ "--r": "-3deg" })}>
              <Tape cls="t" />
              <img
                src={sdgUcc}
                alt="Michal, Jack Garvey and Nathan Manley at a round table with laptops at the UCC SDG Hackathon"
                width={800}
                height={800}
              />
              <figcaption className="ca ink" style={v({ "--cr": "1.5deg" })}>
                UCC SDG Hackathon qualifier: 1st place and €1,000
              </figcaption>
            </figure>
          </div>

          <div className="stage">
            <div className="wb">
              <div className="frame">
                <div className="board">
                  <svg className="ghosts" viewBox="0 0 1000 1500" preserveAspectRatio="none" aria-hidden="true">
                    <g filter="url(#work-blur6)" fill="none" strokeLinecap="round">
                      <path d="M-20 160 C 200 120 420 190 700 140 S 960 110 1040 150" stroke="#8d9bb0" strokeOpacity=".13" strokeWidth="40" />
                      <path d="M-20 520 C 250 560 500 480 760 540 S 980 560 1040 520" stroke="#9aa6b6" strokeOpacity=".11" strokeWidth="50" />
                      <path d="M-30 880 C 220 830 380 940 640 880 S 940 830 1040 900" stroke="#8d9bb0" strokeOpacity=".11" strokeWidth="44" />
                      <path d="M-20 1240 C 300 1290 520 1210 800 1270 S 980 1290 1040 1250" stroke="#9aa6b6" strokeOpacity=".11" strokeWidth="54" />
                    </g>
                    <g filter="url(#work-blur2)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".11" strokeWidth="3">
                      <path d="M700 70 C 760 50 820 100 880 70" stroke="#2f5fb0" />
                      <circle cx="900" cy="700" r="46" stroke="#2f8a58" />
                      <path d="M80 1180 h120 M80 1198 h86" stroke="#232a37" />
                      <path d="M420 960 l60 -24 l12 42 z" stroke="#c0453a" />
                    </g>
                  </svg>

                  <div className="sh ink">
                    <h2 id="tl-h" className="mk">
                      Timeline
                      <svg viewBox="0 0 150 12" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M1 7 C 40 2 90 11 149 4" fill="none" stroke="#1d56b3" strokeWidth="3.600" strokeLinecap="round" />
                      </svg>
                    </h2>
                    <p>Experience and education</p>
                  </div>

                  <ol className="tv ink" aria-labelledby="tl-h">
                    {rows.map((r) => {
                      const kind = r.pin.kind ?? "logo";
                      return (
                        <li key={r.when + String(r.title)} className={r.hero ? "row hero" : "row"}>
                          <div className="when mk">{r.when}</div>
                          <div className="rail">
                            <i className={kind === "logo" ? "pin" : `pin ${kind}`} style={v({ "--c": r.pin.c })}>
                              {r.pin.img && <img src={r.pin.img} alt={r.pin.alt ?? ""} />}
                            </i>
                          </div>
                          <div className="nt">
                            <h3 className="mk">{r.title}</h3>
                            <span className="org">{r.org}</span>
                            <p className="out">{r.out}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>

                  <aside className="undated ink" aria-labelledby="und-h">
                    <h3 id="und-h" className="mk">
                      Additional
                    </h3>
                    <ul>
                      <li>
                        <b>Student Council President</b>St. Francis College, Rochestown. I ran the council's meetings and took students' ideas to the school management board
                      </li>
                      <li>
                        <b>Leaving Certificate 613 / 625</b>Top 2% nationally across nine subjects. Maths and Applied Maths both 95% or higher
                      </li>
                      <li>
                        <b>UCC Rocketry Society</b>Our team of five designed a rocket from scratch, 3D printed the parts, calculated the trajectory and launched it at Lord Waterford's estate in January
                      </li>
                      <li>
                        <b>SDG Hackathons</b>UCC qualifier (€1,000) and national final (€3,000), with Best Pitch. Remento, built in 90 minutes against everyone else's three hours
                      </li>
                      <li>
                        <b>Patch Pitchathon</b>Winner. Idea to working demo and pitch in 45 minutes
                      </li>
                      <li>
                        <b>NDRC Startup Sprint</b>CareComply. We cold-called five Directors of Nursing before writing any code
                      </li>
                      <li>
                        <b>Spark Startup Lab</b>UCC's startup accelerator. I was one of about 15 students picked, with weekly workshops leading to a final pitch to a panel of experts
                      </li>
                      <li>
                        <b>Cork Entrepreneur Meetup</b>Founders who meet every Saturday to talk business. I am there every week
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
              <div className="tray" aria-hidden="true">
                <svg viewBox="0 0 320 52" fill="none">
                  <g transform="rotate(-1.5 36 34)"><rect x="0" y="22" width="62" height="18" rx="5" fill="#232a37" /><rect x="0" y="22" width="14" height="18" rx="4" fill="#3a4357" /><rect x="62" y="26" width="10" height="10" rx="2" fill="#232a37" opacity=".85" /><rect x="6" y="26" width="48" height="2" fill="#fff" opacity=".25" /></g>
                  <g transform="rotate(0.8 118 34)"><rect x="82" y="22" width="62" height="18" rx="5" fill="#1d56b3" /><rect x="82" y="22" width="14" height="18" rx="4" fill="#2c6ed0" /><rect x="144" y="26" width="10" height="10" rx="2" fill="#1d56b3" opacity=".85" /><rect x="88" y="26" width="48" height="2" fill="#fff" opacity=".25" /></g>
                  <g transform="rotate(-0.8 200 34)"><rect x="164" y="22" width="62" height="18" rx="5" fill="#d13b2f" /><rect x="164" y="22" width="14" height="18" rx="4" fill="#e55648" /><rect x="226" y="26" width="10" height="10" rx="2" fill="#d13b2f" opacity=".85" /><rect x="170" y="26" width="48" height="2" fill="#fff" opacity=".25" /></g>
                  <g transform="rotate(1.2 282 34)"><rect x="246" y="22" width="62" height="18" rx="5" fill="#16874d" /><rect x="246" y="22" width="14" height="18" rx="4" fill="#26a463" /><rect x="308" y="26" width="10" height="10" rx="2" fill="#16874d" opacity=".85" /><rect x="252" y="26" width="48" height="2" fill="#fff" opacity=".25" /></g>
                </svg>
                <svg className="eraser" viewBox="0 0 90 40" fill="none">
                  <rect x="2" y="12" width="86" height="26" rx="4" fill="#2b2f38" />
                  <rect x="2" y="2" width="86" height="16" rx="4" fill="#6f7a86" />
                  <rect x="2" y="12" width="86" height="7" fill="#9aa4ae" />
                  <path d="M14 25 H76" stroke="#fff" strokeOpacity=".2" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div className="side">
              <section className="kb" aria-labelledby="kb-h">
                <div className="kb-top">
                  <span className="lg">
                    <img src={ganzyLogo} alt="Ganzy logo" />
                  </span>
                  <div>
                    <h2 id="kb-h" className="mk ink">Ganzy</h2>
                    <p className="ca ink">Companion app for high-schoolers with ADHD</p>
                  </div>
                </div>

                <div className="cols">
                  <div className="col">
                    <h3 className="lab mk ink" style={v({ "--r": "-1.8deg" })}>Done</h3>
                    <ul>
                      {shipped.map((s) => (
                        <StickyNote key={s.h} s={s} />
                      ))}
                    </ul>
                  </div>

                  <div className="col">
                    <h3 className="lab mk ink" style={v({ "--r": "1.2deg" })}>In progress</h3>
                    <ul>
                      {doing.map((s) => (
                        <StickyNote key={s.h} s={s} />
                      ))}
                    </ul>
                  </div>

                  <div className="col">
                    <h3 className="lab mk ink" style={v({ "--r": "-.8deg" })}>Next</h3>
                    <ul>
                      <li className="sticky" style={v({ "--bg": "#fcd2a0", "--r": "-2.4deg", "--pen": "#d13b2f" })}>
                        <h4 className="mk ink">App stores</h4>
                        <p className="ca ink">Publish on Google Play and the Apple App Store</p>
                      </li>
                      <li className="sticky" style={v({ "--bg": "#c9e8f5", "--r": "1.8deg", "--pen": "#2f6fb5" })}>
                        <h4 className="mk ink">Winter exams</h4>
                        <p className="ca ink">1:1 average in the winter engineering exams</p>
                      </li>
                      <li className="slot" aria-hidden="true" />
                    </ul>
                    <div className="pad" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </section>

              <div className="snaps">
                <figure className="print" style={v({ "--r": "-2.6deg" })}>
                  <Tape cls="t" />
                  <img
                    src={newFrontiers}
                    alt="Michal and Jack Garvey in front of the Ganzy title slide at the New Frontiers event"
                    width={1280}
                    height={1706}
                  />
                  <figcaption className="ca ink red" style={v({ "--cr": "-1.5deg" })}>
                    Jack Garvey and me at New Frontiers, Enterprise Ireland
                  </figcaption>
                </figure>
                <figure className="print" style={v({ "--r": "2.2deg" })}>
                  <Tape cls="t" />
                  <img
                    src={sdgNational}
                    alt="Three team members standing in front of the National SDG Hackathon showcase finals screen"
                    width={800}
                    height={1066}
                  />
                  <figcaption className="ca ink grn" style={v({ "--cr": "1.5deg" })}>
                    National Irish SDG Hackathon final: winner, Best Pitch and €3,000
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
