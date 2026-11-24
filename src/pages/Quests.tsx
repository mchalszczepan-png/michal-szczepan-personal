import { useEffect, type CSSProperties, type ReactNode } from "react";
import SiteHud from "@/components/SiteHud";
import vitruvianLogo from "@/assets/vitruvian-logo.png";
import sdgUcc from "@/assets/sdg-hackathon-ucc.jpg";
import sdgNational from "@/assets/sdg-hackathon-national.jpg";
import giveago from "@/assets/giveago-project.png";
import carecomply from "@/assets/carecomply-project.png";
import rocket from "@/assets/rocket-project.png";
import "@/styles/quests.css";

type Vars = CSSProperties & Record<`--${string}`, string>;
const v = (s: Vars) => s;

const Pin = ({ c = "", style }: { c?: string; style?: CSSProperties }) => (
  <i className={`pin ${c}`.trim()} style={style} />
);

const Chillies = ({ n }: { n: number }) => (
  <span className="chillies" role="img" aria-label={`Difficulty ${n} out of 5 chillies`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} className={`chilli${i > n ? " off" : ""}`} aria-hidden="true">
        <use href="#q-chilli" />
      </svg>
    ))}
  </span>
);

type Quest = {
  title: string;
  pin: string;
  meta: ReactNode;
  what: ReactNode;
  chips: ReactNode[];
  stack?: string;
  n: number;
  hard: ReactNode;
  learned: ReactNode;
  media: ReactNode;
};

const quests: Quest[] = [
  {
    title: "Vitruvian",
    pin: "",
    meta: "Junction 2026 · Helsinki · AstraZeneca track · with Pavit Gogia",
    what: "Healthcare AI project built at Junction 2026 in Helsinki, on the AstraZeneca track.",
    chips: [
      "Fine-tuned Gemma LoRA, AUROC 0.96 on synthetic patients",
    ],
    n: 5,
    hard: "Fine-tuned a Gemma LoRA model within the time limit of the hackathon.",
    learned: "The AUROC of 0.96 was measured on synthetic patients, not on real patients.",
    media: (
      <>
        <div className="badge" style={v({ "--sc": "#e9742c", "--r": "-2.5deg" })}>
          <Pin c="y" />
          <div className="strap" />
          <div className="clip" />
          <div className="bd">
            <b>Junction 2026</b>
            <small>Helsinki</small>
            <div className="nm">
              Michal Szczepan<span>with Pavit Gogia</span>
            </div>
          </div>
        </div>
        <div className="sticker" style={v({ "--r": "7deg" })}>
          <img src={vitruvianLogo} alt="Vitruvian logo" />
        </div>
      </>
    ),
  },
  {
    title: "Remento",
    pin: "g",
    meta: "UCC SDG Hackathon qualifier and National Irish SDG Hackathon",
    what: "Swift app that uses weekly five-minute tests to track cognitive performance and flag possible early signs of dementia.",
    chips: [
      <><b>90</b>min build</>,
      <><b>€1,000</b>UCC qualifier</>,
      <><b>€3,000</b>national final</>,
      <><b>Best</b>Pitch</>,
    ],
    n: 4,
    hard: "Built with 90 minutes instead of the standard three hours, due to a scheduling issue.",
    learned: "Won the UCC qualifier, then the national final and Best Pitch. Total prize funding was €4,000.",
    media: (
      <>
        <figure className="pol" style={v({ "--ar": "1/1", "--r": "3deg" })}>
          <Pin />
          <img src={sdgUcc} alt="Remento team at the UCC SDG Hackathon" loading="lazy" />
          <figcaption>UCC SDG Hackathon qualifier, 1st place</figcaption>
        </figure>
        <figure className="pol" style={v({ "--ar": "4/5", "--r": "-2.5deg" })}>
          <Pin c="b" />
          <img src={sdgNational} alt="Remento team on stage at the National SDG Hackathon" loading="lazy" />
          <figcaption>National final: winner and Best Pitch</figcaption>
        </figure>
      </>
    ),
  },
  {
    title: "pc-from-anywhere",
    pin: "b",
    meta: "Open source · Tailscale, SSH, Termius, tmux",
    what: "Free, private setup for accessing a home PC from a phone or tablet. Published a one-shot Linux installation script and guide.",
    chips: [<><b>tmux</b>persistent sessions</>, <><b>Linux</b>one-shot install script</>],
    n: 2,
    hard: "The installation script covers Ubuntu, Debian, Fedora, Arch and several derivatives.",
    learned: "Documented the setup as a guide and a script so it can be repeated on another machine.",
    media: (
      <>
        <span className="dymo nv" style={v({ "--ds": "16px", "--r": "-3deg" })}>Tailscale + SSH + tmux</span>
        <span className="dymo" style={v({ "--ds": "16px", "--r": "2deg" })}>Linux install script</span>
        <span className="dymo rd" style={v({ "--ds": "16px", "--r": "-1deg" })}>Open source</span>
      </>
    ),
  },
  {
    title: "Claude Code tools",
    pin: "y",
    meta: "Open source · GitHub",
    what: "Tools to switch Claude Code between model providers, search and sync session history across projects, and resume sessions through different providers.",
    chips: [<><b>claude-glm-switcher</b>CLI</>, <><b>claude-session-search</b>shell tools</>, <><b>despecify-sessions</b>Claude Code skill</>],
    n: 3,
    hard: "Resuming a session through a different provider required removing the model tags stored in the session history.",
    learned: "claude-glm-switcher is MIT licensed and supports Anthropic, Z.ai, OpenRouter and LiteLLM backends, among others.",
    media: (
      <>
        <span className="dymo nv" style={v({ "--ds": "16px", "--r": "2deg" })}>claude-glm-switcher</span>
        <span className="dymo gn" style={v({ "--ds": "16px", "--r": "-3deg" })}>claude-session-search</span>
        <span className="dymo rd" style={v({ "--ds": "16px", "--r": "-1deg" })}>despecify-sessions</span>
      </>
    ),
  },
  {
    title: "LazyMornings",
    pin: "",
    meta: "GiveAGo AI Build Jam · team of 5",
    what: "Python messaging agent that schedules and sends randomized, context-aware messages to friends and family. Only the backend was built, using Python and Browser-use.",
    chips: [<><b>4 h</b>sprint</>, <><b>Browser-use</b>+ Python</>],
    n: 3,
    hard: "Built within four hours by a team of five.",
    learned: "Demonstrated a functional prototype integrating an agentic AI workflow.",
    media: (
      <figure className="pol solo" style={v({ "--ar": "3/2", "--r": "-3deg" })}>
        <Pin c="g" />
        <img src={giveago} alt="Michal building LazyMornings at the GiveAGo AI Build Jam" loading="lazy" />
        <figcaption>GiveAGo AI Build Jam</figcaption>
      </figure>
    ),
  },
  {
    title: "CareComply",
    pin: "b",
    meta: "NDRC Startup Sprint · with co-founder Jack",
    what: "Compliance tool for nursing homes, built at the NDRC Startup Sprint.",
    chips: [<><b>5</b>Directors of Nursing called</>, <><b>LEO Limerick</b>fast-track offer</>],
    n: 3,
    hard: "Cold-called five Directors of Nursing, from Dublin to Galway, before writing any code.",
    learned: "LEO Limerick offered fast-track investment. The offer was not accepted.",
    media: (
      <>
        <figure className="pol solo" style={v({ "--ar": "3/2", "--r": "2.5deg" })}>
          <Pin c="y" />
          <img src={carecomply} alt="The CareComply team at the NDRC Startup Sprint" loading="lazy" />
          <figcaption>NDRC Startup Sprint</figcaption>
        </figure>
        <span className="dymo rd" style={v({ "--ds": "15px", "--r": "-2deg" })}>Nursing home compliance</span>
      </>
    ),
  },
  {
    title: "Custom PC business",
    pin: "g",
    meta: "Founder & Technician · started at 13",
    what: "Started at 13 after identifying large markups on pre-built gaming PCs. Sourced components, assembled and benchmarked computers, handled customers and repaired systems.",
    chips: [<><b>€4,000+</b>revenue</>, <><b>€1,100</b>fake cheque</>],
    n: 4,
    hard: "A €1,100 cheque was flagged as fake a week later, after the PC had already been sent. The global chip shortage then raised component prices from €800 to €2,500+.",
    learned: "Adapted by moving from complete builds into repairs and individual component sales.",
    media: (
      <>
        <div className="cheque" style={v({ "--r": "-3deg" })}>
          <Pin />
          <div className="row"><span>Pay to the order of</span><span>No. ----</span></div>
          <div className="ln" />
          <div className="row"><span>Amount</span><span className="amt">€1,100</span></div>
          <div className="ln" />
          <span className="fake">Fake</span>
        </div>
        <div className="tag" style={v({ "--r": "2.5deg" })}>
          Started at 13<small>Custom PCs</small>
        </div>
      </>
    ),
  },
  {
    title: "UCC Rocketry",
    pin: "y",
    meta: "UCC Rocketry Society · team of five",
    what: "Designed a rocket from scratch, 3D printed the parts and calculated the trajectory.",
    chips: [<><b>3D</b>printed parts</>, <><b>Trajectory</b>calculation</>],
    n: 3,
    hard: "Designing the rocket from scratch as a team of five.",
    learned: "The rocket was launched at Lord Waterford's estate in January.",
    media: (
      <>
        <div className="sticker photo" style={v({ "--r": "-6deg", width: "132px", height: "132px" })}>
          <img src={rocket} alt="UCC Rocketry Society badge" />
        </div>
        <span className="dymo" style={v({ "--ds": "15px", "--r": "2deg" })}>3D printed parts</span>
      </>
    ),
  },
];

const Quests = () => {
  useEffect(() => {
    document.title = "Projects: Michal Szczepan";
  }, []);

  return (
    <div className="pg-quests">
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <symbol id="q-chilli" viewBox="0 0 32 32">
            <path d="M21.500 8.500C26.600 10.400 28 15.600 25 21.200 21.800 27 14 30.400 4.800 28.800 10.800 26.800 14.800 23.400 16.200 18.800 17.400 14.800 17.400 11 21.500 8.500Z" style={{ fill: "var(--body)", stroke: "var(--line)", strokeWidth: 1.5, strokeLinejoin: "round" }} />
            <path d="M22.800 12.600C24.400 15.200 23.800 18 22 20.400" style={{ fill: "none", stroke: "rgba(255,255,255,.55)", strokeWidth: 1.5, strokeLinecap: "round" }} />
            <path d="M19.200 9.800C20 6.800 22.600 6.200 24 7.600 24.200 9.200 22.200 10.600 19.200 9.800Z" style={{ fill: "var(--stem)", stroke: "var(--line)", strokeWidth: 1.2, strokeLinejoin: "round" }} />
            <path d="M22.200 7C21.800 4.800 23 3 25.200 2.600" style={{ fill: "none", stroke: "var(--stem)", strokeWidth: 2.2, strokeLinecap: "round" }} />
          </symbol>
        </defs>
      </svg>
      <SiteHud world="quests" />
      <main className="q-main">
        <div className="q-wrap">
          <div className="frame">
            <div className="board">
              <div className="q-head">
                <h1 className="dymo big" tabIndex={-1}>Projects</h1>
                <div className="q-legend">
                  <Pin c="b" />
                  <p>Hackathons, software projects and a business.</p>
                  <p>
                    Difficulty:
                    <span className="chillies" aria-hidden="true">
                      <svg className="chilli"><use href="#q-chilli" /></svg>
                      <svg className="chilli"><use href="#q-chilli" /></svg>
                      <svg className="chilli off"><use href="#q-chilli" /></svg>
                    </span>
                  </p>
                </div>
              </div>

              <div className="quests">
                {quests.map((q) => (
                  <section className="cl" key={q.title}>
                    <article className="card">
                      <Pin c={q.pin} />
                      <h3>{q.title}</h3>
                      <p className="meta">{q.meta}</p>
                      <p className="what">{q.what}</p>
                      <ul className="chips">
                        {q.chips.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                      {q.stack && <p className="stack">{q.stack}</p>}
                      <div className="diff">
                        <span>Difficulty</span>
                        <Chillies n={q.n} />
                      </div>
                      <dl className="notes">
                        <dt>What made it hard</dt>
                        <dd>{q.hard}</dd>
                        <dt>What I learned</dt>
                        <dd>{q.learned}</dd>
                      </dl>
                    </article>
                    <div className="media">{q.media}</div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quests;
