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
    when: "Ongoing",
    hero: true,
    pin: { c: "#d13b2f", img: ganzyLogo, alt: "Ganzy logo" },
    title: "Co-founder & CTO",
    org: "Ganzy, with Jack Garvey (CEO)",
    out: (
      <>
        <b>100+</b> Leaving Cert students on day one. New Frontiers Phase 2. Relaunched Nov 2026.
      </>
    ),
  },
  {
    when: "2026",
    pin: { c: "#16874d", img: liffeyLogo, alt: "Liffey Trust logo" },
    title: "Dr Séamus McDermott Entrepreneurial Scholar",
    org: "Liffey Trust + UCC",
    out: (
      <>
        <b>€9,000</b> scholarship.
      </>
    ),
  },
  {
    when: "Nov 2025 – Mar 2026",
    pin: { c: "#e6007e", img: hultLogo, alt: "Hult Prize logo" },
    title: "Hult Prize Campus Director",
    org: "UCC",
    out: (
      <>
        Ran UCC’s <b>first-ever</b> Hult Prize. 5 teams pitched; winners Windhover went to the nationals.
      </>
    ),
  },
  {
    when: "Sep 2025 – present",
    pin: { c: "#1d56b3", kind: "dot" },
    title: "Class Representative",
    org: "Electrical & Electronic Eng., UCC",
    out: <b>Elected two years running.</b>,
  },
  {
    when: "Sep – Nov 2025",
    pin: { c: "#d13b2f", kind: "dot" },
    title: "Entrepreneurial Mindshift",
    org: "UCC elective, UW0007",
    out: (
      <>
        Built the EduCat / ScreenPaws prototype in <b>28 days</b>.
      </>
    ),
  },
  {
    when: "2025 – 2029",
    pin: { c: "#fff", kind: "sq", img: uccCrest, alt: "University College Cork crest" },
    title: "BE Electrical & Electronic Eng.",
    org: "UCC, Cork",
    out: (
      <>
        Four-year degree. Standing so far: <b>1:2</b>.
      </>
    ),
  },
  {
    when: "Oct 2023 & Feb 2024",
    pin: { c: "#16874d", img: eypLogo, alt: "European Youth Parliament logo" },
    title: "European Youth Parliament delegate",
    org: "Regional session, then National Session",
    out: (
      <>
        National Session held in <b>Dáil Éireann</b>. Topic: cyber security.
      </>
    ),
  },
  {
    when: "2020 – 2022",
    pin: { c: "#d13b2f", kind: "dot" },
    title: "Founder, custom PC business",
    org: "Started at 13",
    out: (
      <>
        <b>€4,000+</b> revenue. Survived a <b>€1,100</b> fake-cheque scam.
      </>
    ),
  },
];

type Sticky = { bg: string; r: string; pen: string; h: string; p: ReactNode; ok?: boolean };

const shipped: Sticky[] = [
  { bg: "#bfe3c9", r: "-1.8deg", pen: "#1d56b3", ok: true, h: "MVP launch", p: <><em>100+</em> Leaving Cert students on day one</> },
  { bg: "#fbe98a", r: "1.6deg", pen: "#232a37", ok: true, h: "New Frontiers Phase 2", p: <>Enterprise Ireland. <em>Youngest founders ever</em> accepted</> },
  { bg: "#bcd9f2", r: "-1deg", pen: "#232a37", ok: true, h: "PostHog Startup Plan", p: <><em>$50k+</em> in credits</> },
  { bg: "#f8c9cf", r: "2.1deg", pen: "#1d56b3", ok: true, h: "Relaunch, Nov 2026", p: <>after ~<em>3</em> UI overhauls</> },
];

const doing: Sticky[] = [
  { bg: "#fbe98a", r: "1.4deg", pen: "#232a37", h: "Ganzy app", p: "One Expo codebase: web, iOS, Android" },
  { bg: "#fcd2a0", r: "-2deg", pen: "#1d56b3", h: "Backend", p: "Convex + Clerk sign-in" },
  { bg: "#bfe3c9", r: "1deg", pen: "#232a37", h: "AI chat", p: "Drafts titles, steps, dates. Voice dictation" },
  { bg: "#bcd9f2", r: "-1.5deg", pen: "#1d56b3", h: "Telemetry", p: "PostHog. Replay only if opted in" },
  { bg: "#f8c9cf", r: "1.8deg", pen: "#232a37", h: "Specs", p: "Requirements, user stories, decision records" },
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
                <b>Michal Szczepan</b>, co-founder &amp; CTO of Ganzy. Studying electrical &amp; electronic engineering at UCC, Cork.
                <span className="ca">
                  The Ganzy team-room wall. Whiteboard: my career so far. Sticky notes: where Ganzy is at.
                </span>
              </p>
            </div>

            <aside className="cv" aria-label="CV and links">
              <Tape cls="tl2" />
              <Tape cls="tr2" />
              <h2>Michal Szczepan</h2>
              <p className="r">
                Co-founder &amp; CTO, Ganzy
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
                UCC SDG Hackathon: 1st place. My first hackathon.
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
                      Career timeline
                      <svg viewBox="0 0 150 12" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M1 7 C 40 2 90 11 149 4" fill="none" stroke="#1d56b3" strokeWidth="3.600" strokeLinecap="round" />
                      </svg>
                    </h2>
                    <p>newest on top</p>
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
                      No dates written up<span>(still on the board)</span>
                    </h3>
                    <ul>
                      <li>
                        <b>Student Council President</b>St Francis College
                      </li>
                      <li>
                        <b>Leaving Cert 613 / 625</b>Douglas Community School
                      </li>
                      <li>
                        <b>UCC Rocketry Society</b>Python flight sim, 3D modelling
                      </li>
                      <li>
                        <b>SDG Hackathons</b>UCC 1st (€1,000), then national champions + Best Pitch
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
                    <p className="ca ink">where it is at, in sticky notes</p>
                  </div>
                </div>

                <div className="cols">
                  <div className="col">
                    <h3 className="lab mk ink" style={v({ "--r": "-1.8deg" })}>Shipped</h3>
                    <ul>
                      {shipped.map((s) => (
                        <StickyNote key={s.h} s={s} />
                      ))}
                    </ul>
                  </div>

                  <div className="col">
                    <h3 className="lab mk ink" style={v({ "--r": "1.2deg" })}>Doing</h3>
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
                        <p className="ca ink">Publish Ganzy on Google Play and the Apple App Store</p>
                      </li>
                      <li className="sticky" style={v({ "--bg": "#c9e8f5", "--r": "1.8deg", "--pen": "#2f6fb5" })}>
                        <h4 className="mk ink">Winter exams</h4>
                        <p className="ca ink">1:1 average in my engineering exams</p>
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
                    Ganzy on the big screen, New Frontiers
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
                    National SDG Hackathon finals. We won.
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
