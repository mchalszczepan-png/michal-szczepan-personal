import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SiteHud from "@/components/SiteHud";
import "@/styles/home.css";

type Cart = "work" | "quests" | "sketch";

const ORDER: Cart[] = ["work", "quests", "sketch"];

const INFO: Record<Cart, { title: string; text: string; to: string }> = {
  work: {
    title: "World 1 · The Workbench",
    text: "Roles, degree and the PC business started at 14. Circuit boards, terminals and hardware.",
    to: "/work",
  },
  quests: {
    title: "World 2 · Side Quests",
    text: "Hackathons and builds: Vitruvian, Remento, pc-from-anywhere and more. Main quest: Ganzy.",
    to: "/quests",
  },
  sketch: {
    title: "World 3 · The Sketchbook",
    text: "Maths, books, drawing and creative writing. The off-duty save file.",
    to: "/sketchbook",
  },
};

const TROPHY =
  "M6 2h12v2h3v4a4 4 0 0 1-4 4h-.3A6 6 0 0 1 13 15.9V18h4v2H7v-2h4v-2.1A6 6 0 0 1 7.300 12H7a4 4 0 0 1-4-4V4h3zM5 6v2a2 2 0 0 0 1 1.700V6zm14 0h-1v3.700A2 2 0 0 0 19 8z";

const ACHIEVEMENTS: { b: string; rest?: string; small: string }[] = [
  { b: "100+ Leaving Cert students on day 1", rest: " of the Ganzy MVP launch", small: "Started as a Leaving Cert study planner. Relaunched Nov 2026." },
  { b: "Enterprise Ireland New Frontiers Phase 2", small: "2026 · youngest founders ever accepted" },
  { b: "PostHog Startup Plan: $50k+ credits", small: "2026" },
  { b: "Dr Séamus McDermott Entrepreneurial Scholar", small: "2026 · Liffey Trust + UCC · €9,000" },
  { b: "Hult Prize Campus Director, UCC", small: "Nov 2025–Mar 2026 · ran UCC's first-ever Hult Prize, 5 teams pitched" },
  { b: "National SDG Hackathon champions", small: "plus Best Pitch · iOS app built in 100 minutes" },
];

const Index = () => {
  const [sel, setSel] = useState<Cart>("work");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Michal Szczepan — Select your world";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("input,textarea,select,[contenteditable]")) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const step = (d: number) =>
        setSel((s) => ORDER[(ORDER.indexOf(s) + d + ORDER.length) % ORDER.length]);
      if (e.key === "ArrowRight") {
        step(1);
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        step(-1);
        e.preventDefault();
      } else if (e.key === "Enter" && !t?.closest("a,button")) {
        navigate(INFO[sel].to);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [sel, navigate]);

  const step = (d: number) => setSel((s) => ORDER[(ORDER.indexOf(s) + d + ORDER.length) % ORDER.length]);
  const info = INFO[sel];

  return (
    <div className="pg-home">
      <SiteHud world="home" />
      <main className="stage" id="stage">
        <div className="console">
          <div className="console-top">
            <span className="brand">MS-1 HANDHELD <i>P1</i></span>
            <span className="pw">POWER <span className="led" /></span>
          </div>
          <div className="console-mid">
            <div className="dpad" role="group" aria-label="Choose a world">
              <button className="u" tabIndex={-1} aria-hidden="true">▲</button>
              <button className="l" onClick={() => step(-1)} aria-label="Previous cartridge">◀</button>
              <button className="r" onClick={() => step(1)} aria-label="Next cartridge">▶</button>
              <button className="d" tabIndex={-1} aria-hidden="true">▼</button>
            </div>

            <div className="screen">
              <div className="scr-bar"><span>P1 · Michal</span><span className="blink">Select your world</span><span>Cork, Ireland</span></div>
              <div className="scr-body">
                <div>
                  <p className="kicker">Player 1</p>
                  <h1 tabIndex={-1}>Michal Szczepan</h1>
                  <p className="role">Co-founder &amp; CTO of <b>Ganzy</b></p>
                  <p className="pitch">I'm building the companion app that helps high schoolers with ADHD stay locked in. Electrical engineering student at UCC. Self-taught backend programmer. Hackathon addict.</p>
                  <h2><span>Achievements unlocked</span></h2>
                  <ul className="ach">
                    {ACHIEVEMENTS.map((a) => (
                      <li key={a.b}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d={TROPHY} /></svg>
                        <div><b>{a.b}</b>{a.rest}<small>{a.small}</small></div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="dialog" aria-live="polite">
                    <span className="d-tag">World info</span>
                    <h3>{info.title}</h3>
                    <p>{info.text}</p>
                    <Link className="go" to={info.to}>▶ PRESS A TO LOAD</Link>
                  </div>
                  <div className="links">
                    <h2><span>Contact</span></h2>
                    <ul>
                      <li><a href="https://linkedin.com/in/michal-szczepan-728189370" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                      <li><a href="https://github.com/mchalszczepan-png" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                      <li><a href="/Michal_Szczepan_CV.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a></li>
                      <li><a href="https://ganzy.app" target="_blank" rel="noopener noreferrer">ganzy.app</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="abtns" role="group" aria-label="Controls">
              <button className="b" onClick={() => setSel("work")} aria-label="Back to first cartridge"><span>B</span></button>
              <button className="a" onClick={() => navigate(info.to)} aria-label="Load selected world"><span>A</span></button>
            </div>
          </div>

          <div className="shelf">
            <p className="shelf-h">Insert a cartridge</p>
            <div className="carts">
              <Link className={`cart${sel === "work" ? " sel" : ""}`} to="/work" data-w="work" onMouseEnter={() => setSel("work")} onFocus={() => setSel("work")}>
                <div className="cart-wrap"><div className="cart-body"><span className="cart-ridges" />
                  <div className="cart-label">
                    <svg className="art" viewBox="0 0 64 64" fill="none" stroke="#5dffa4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="18" y="18" width="28" height="28" rx="2" /><path d="M26 18v-8M38 18v-8M26 46v8M38 46v8M18 26h-8M18 38h-8M46 26h8M46 38h8" /><circle cx="32" cy="32" r="4" fill="#d99a4b" stroke="none" /></svg>
                    <div><span>World 1</span><b>The Workbench</b></div>
                  </div>
                  <div className="cart-pins" /></div></div>
              </Link>
              <Link className={`cart${sel === "quests" ? " sel" : ""}`} to="/quests" data-w="quests" onMouseEnter={() => setSel("quests")} onFocus={() => setSel("quests")}>
                <div className="cart-wrap"><div className="cart-body"><span className="cart-ridges" />
                  <div className="cart-label">
                    <svg className="art" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6l20 7v16c0 14-9 23-20 29C21 52 12 43 12 29V13z" fill="#b8322a" stroke="#1d1b16" strokeWidth="3" strokeLinejoin="round" /><path d="M32 16v34M22 28h20" stroke="#f0c75e" strokeWidth="4" strokeLinecap="round" /></svg>
                    <div><span>World 2</span><b>Side Quests</b></div>
                  </div>
                  <div className="cart-pins" /></div></div>
              </Link>
              <Link className={`cart${sel === "sketch" ? " sel" : ""}`} to="/sketchbook" data-w="sketch" onMouseEnter={() => setSel("sketch")} onFocus={() => setSel("sketch")}>
                <div className="cart-wrap"><div className="cart-body"><span className="cart-ridges" />
                  <div className="cart-label">
                    <svg className="art" viewBox="0 0 64 64" fill="none" stroke="#26334f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 48l4-12 28-28 8 8-28 28z" fill="#f6d675" /><path d="M42 8l8 8M14 36l8 8" /><path d="M8 56c8-4 12 2 20-1s14-3 22 0" stroke="#d6453d" /></svg>
                    <div><span>World 3</span><b>Sketchbook</b></div>
                  </div>
                  <div className="cart-pins" /></div></div>
              </Link>
            </div>
          </div>
        </div>
        <p className="foot-note">← → CHOOSE · ENTER LOAD · THE HUD FOLLOWS YOU EVERYWHERE</p>
      </main>
    </div>
  );
};

export default Index;
