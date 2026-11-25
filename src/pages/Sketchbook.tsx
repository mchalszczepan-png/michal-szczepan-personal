import { useEffect, useState } from "react";
import SiteHud from "@/components/SiteHud";
import "@/styles/sketchbook.css";

type Hack = { name: string; sub?: string; done: boolean };

const INITIAL_HACKS: Hack[] = [
  { name: "Junction 2026", sub: "Helsinki, AstraZeneca track", done: true },
  { name: "GiveAGo AI Build Jam", sub: "LazyMornings", done: true },
  { name: "UCC and National Irish SDG Hackathons", sub: "winner, Best Pitch", done: true },
  { name: "Patch Pitchathon", sub: "winner", done: true },
];

const Tick = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M5 17l7 8L28 6" />
  </svg>
);

const Sketchbook = () => {
  const [hacks, setHacks] = useState<Hack[]>(INITIAL_HACKS);

  useEffect(() => {
    const previous = document.title;
    document.title = "Sketchbook: Michal Szczepan";
    return () => {
      document.title = previous;
    };
  }, []);

  const toggle = (i: number) =>
    setHacks((hs) => hs.map((h, j) => (j === i ? { ...h, done: !h.done } : h)));

  return (
    <div className="pg-sketch">
      <SiteHud world="sketch" />
      <main className="s-wrap" aria-label="Sketchbook">
        <header className="s-head">
          <h1>
            Sketchbook
            <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 12C40 4 70 18 110 10s70 6 100 0 60 6 88 0" />
            </svg>
          </h1>
          <p className="sub">Interests and activities</p>
        </header>

        <div className="sgrid">
          <section className="note n-math" aria-label="Maths">
            <h2>
              Maths
            </h2>
            <div className="math-bd">
              <div>
                <p className="eq">∫ x² dx = x³/3 + C</p>
                <p className="eq">
                  e<sup>iπ</sup> + 1 = 0
                </p>
                <p className="eq">
                  <span className="r">a² + b² = c²</span>
                </p>
              </div>
              <svg className="graph" viewBox="0 0 220 190" role="img" aria-label="Hand-drawn parabola on axes">
                <path d="M20 168V16M8 160h200" />
                <path d="M12 24l8-10 8 10M200 152l10 8-10 8" />
                <path d="M42 24Q110 250 178 24" stroke="#2a5fa8" strokeWidth="3" />
                <path d="M110 130v-14M98 130h24" strokeDasharray="3 4" strokeWidth="1.6" />
                <text x="124" y="40" fontFamily="Caveat,cursive" fontSize="24" fill="#c2382d" stroke="none">
                  y = x²
                </text>
              </svg>
            </div>
          </section>

          <section className="note n-books" aria-label="Reading shelf">
            <h2>Reading</h2>
            <div className="shelf">
              <svg
                viewBox="0 0 400 210"
                role="img"
                aria-label="A shelf of books with spines marked psychology, sales and entrepreneurship"
              >
                <g className="spine">
                  <rect x="14" y="40" width="46" height="150" rx="3" fill="#c2382d" />
                  <rect x="14" y="40" width="46" height="150" rx="3" fill="none" stroke="#7d1f18" strokeWidth="2" />
                  <path d="M14 62h46M14 168h46" stroke="#f0d7a0" strokeWidth="2" />
                  <text transform="translate(44 176) rotate(-90)" fontFamily="Kalam,cursive" fontWeight="700" fontSize="14" fill="#fff4dc">
                    general reading
                  </text>
                </g>
                <g className="spine">
                  <rect x="64" y="20" width="52" height="170" rx="3" fill="#2f5a4f" />
                  <rect x="64" y="20" width="52" height="170" rx="3" fill="none" stroke="#1b3a32" strokeWidth="2" />
                  <circle cx="90" cy="34" r="8" fill="none" stroke="#e1b04f" strokeWidth="2" />
                  <circle cx="90" cy="34" r="2.5" fill="#e1b04f" />
                  <text transform="translate(98 174) rotate(-90)" fontFamily="Kalam,cursive" fontWeight="700" fontSize="18" fill="#f0d7a0">
                    books
                  </text>
                </g>
                <g className="spine">
                  <rect x="120" y="58" width="34" height="132" rx="3" fill="#2a5fa8" />
                  <rect x="120" y="58" width="34" height="132" rx="3" fill="none" stroke="#173a6b" strokeWidth="2" />
                  <text transform="translate(144 180) rotate(-90)" fontFamily="Patrick Hand,cursive" fontSize="17" fill="#fff">
                    psychology
                  </text>
                </g>
                <g className="spine">
                  <rect x="158" y="34" width="36" height="156" rx="3" fill="#e1b04f" />
                  <rect x="158" y="34" width="36" height="156" rx="3" fill="none" stroke="#8a5f12" strokeWidth="2" />
                  <text transform="translate(184 178) rotate(-90)" fontFamily="Patrick Hand,cursive" fontSize="17" fill="#33200f">
                    sales
                  </text>
                </g>
                <g className="spine">
                  <rect x="198" y="48" width="42" height="142" rx="3" fill="#7a4a7e" />
                  <rect x="198" y="48" width="42" height="142" rx="3" fill="none" stroke="#4a2a4e" strokeWidth="2" />
                  <text transform="translate(226 180) rotate(-90)" fontFamily="Patrick Hand,cursive" fontSize="17" fill="#fff">
                    entrepreneurship
                  </text>
                </g>
                <g transform="rotate(14 290 168)">
                  <rect x="262" y="132" width="76" height="52" rx="3" fill="#d9d0b4" stroke="#8a8168" strokeWidth="2" />
                  <path d="M270 144h56M270 154h44M270 164h50" stroke="#8a8168" strokeWidth="2" />
                </g>
                <path d="M4 192h392" stroke="#5a3a1f" strokeWidth="8" strokeLinecap="round" />
                <path d="M4 200h392" stroke="rgba(0,0,0,.18)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <p>
              <b>Psychology, sales and entrepreneurship</b>, plus general books.
            </p>
          </section>

          <section className="note n-draw" aria-label="Drawing">
            <h2>Drawing</h2>
            <svg className="sketchbox" viewBox="0 0 360 240" role="img" aria-label="A pencil sketch of a rocket with construction lines and a dimension arrow">
              <path className="fine" d="M20 214h320M180 14v206" />
              <path className="fine" d="M120 160l-48 40M240 160l48 40" />
              <path d="M180 26c24 30 34 74 30 128h-60c-4-54 6-98 30-128z" />
              <circle cx="180" cy="86" r="13" />
              <circle cx="180" cy="86" r="9" strokeWidth="1.2" />
              <path d="M150 154l-32 40 32-6zM210 154l32 40-32-6z" />
              <path d="M162 154v18h36v-18" />
              <path d="M168 172l-6 24M180 172v28M192 172l6 24" strokeWidth="1.6" />
              <path d="M146 100q-4 20 0 40M214 100q4 20 0 40" strokeWidth="1" opacity=".5" />
              <path d="M262 26v128M254 34l8-10 8 10M254 146l8 10 8-10" stroke="#c2382d" />
              <text x="272" y="96" fontFamily="Caveat,cursive" fontSize="22" fill="#c2382d" stroke="none">
                h = ?
              </text>
              <g strokeWidth="1.2" opacity=".5">
                <path d="M276 200l16 6M284 214l22 4M270 214l14 8" />
              </g>
            </svg>
            <span className="cap">Pencil sketch</span>
          </section>

          <section className="note n-write" aria-label="Creative writing">
            <h2>Creative writing</h2>
            <p className="tt">Untitled</p>
            <div className="lines" aria-hidden="true">
              <svg viewBox="0 0 300 18"><path d="M2 10c10-8 12 8 22 0s12 8 22 0 12 6 22 0 10 8 20 0 12 6 22 0 10 6 20 0 12 8 22 0 10 6 20 0 12 6 22 0 14 6 20 0" /></svg>
              <svg viewBox="0 0 300 18"><path d="M2 10c10-8 12 8 22 0s12 8 22 0 12 6 22 0 10 8 20 0 12 6 22 0 10 6 20 0 12 8 22 0 10 6 20 0" /></svg>
              <svg viewBox="0 0 300 18">
                <path d="M2 10c10-8 12 8 22 0s12 8 22 0 12 6 22 0 10 8 20 0 12 6 22 0 10 6 20 0 12 8 22 0 10 6 20 0 12 6 22 0 14 6 20 0" />
                <path d="M2 9H282" stroke="#c2382d" strokeWidth="2.6" opacity=".85" />
              </svg>
              <svg viewBox="0 0 300 18"><path d="M2 10c10-8 12 8 22 0s12 8 22 0 12 6 22 0 10 8 20 0 12 6 22 0 10 6 20 0 12 8 22 0 10 6 20 0 12 6 22 0" /></svg>
              <svg viewBox="0 0 300 18"><path d="M2 10c10-8 12 8 22 0s12 8 22 0 12 6 22 0 10 8 20 0 12 6 22 0 10 6 20 0" /></svg>
            </div>
                      </section>

          <section className="note n-hack" aria-label="Hackathons">
            <h2>Hackathons</h2>
            <ul className="checks">
              {hacks.map((h, i) => (
                <li key={h.name}>
                  <button type="button" aria-pressed={h.done} onClick={() => toggle(i)}>
                    <span className="bx"><Tick /></span>
                    <span>
                      {h.name}
                      {h.sub && <small>{h.sub}</small>}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="note n-web" aria-label="Web design">
            <h2>Web design</h2>
            <svg className="wire" viewBox="0 0 360 180" role="img" aria-label="A hand-drawn website wireframe">
              <rect x="6" y="6" width="348" height="168" rx="8" />
              <path d="M6 32h348" />
              <circle cx="22" cy="19" r="4" /><circle cx="36" cy="19" r="4" /><circle cx="50" cy="19" r="4" />
              <rect x="24" y="48" width="170" height="14" rx="3" />
              <path d="M24 74h140M24 86h120M24 98h132" />
              <rect x="24" y="116" width="64" height="24" rx="12" stroke="#c2382d" />
              <rect x="216" y="48" width="122" height="104" rx="6" />
              <path d="M216 152l40-44 28 28 22-18 32 34" />
              <circle cx="302" cy="72" r="8" />
              <path d="M100 128l14-6" stroke="#c2382d" />
              <text x="118" y="140" fontFamily="Caveat,cursive" fontSize="20" fill="#c2382d" stroke="none">
                wireframe
              </text>
            </svg>
            <p>Wireframing and web design. Personal website built with TypeScript and React.</p>
          </section>

          <section className="note n-rep" aria-label="Class representative">
            <h2>Class Representative</h2>
            <p>Electrical &amp; Electronic Engineering, UCC. Built a shared database of learning materials for students who needed extra resources.</p>
            <span className="cap">Sep 2025 to present</span>
          </section>

          <section className="note n-learn" aria-label="Learning to program">
            <h2>Programming</h2>
            <p>Python (primary), basic JavaScript, TypeScript, HTML and CSS. Studying backend development through Boot.dev.</p>
            <div className="code" aria-hidden="true">
              primary = "Python"<br />
              studying = "Boot.dev"
            </div>
          </section>
        </div>

        <div className="s-foot">
          <span>Links:</span>
          <a href="https://www.linkedin.com/in/michal-szczepan-728189370" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/mchalszczepan-png" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/Michal_Szczepan_CV.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a>
        </div>
      </main>
    </div>
  );
};

export default Sketchbook;
