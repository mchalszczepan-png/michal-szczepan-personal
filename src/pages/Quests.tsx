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
    what: "A healthcare AI project built with Pavit Gogia at Junction 2026 in Helsinki, on the AstraZeneca track.",
    chips: [
      "Fine-tuned Gemma LoRA, AUROC 0.96 on synthetic patients",
    ],
    n: 5,
    hard: "We had to fine-tune a Gemma LoRA model inside the time limit of the hackathon.",
    learned: "The AUROC of 0.96 was measured on synthetic patients, not on real ones, so it says nothing yet about real patients.",
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
    what: "A Swift app that uses weekly five-minute tests to track cognitive performance and flag possible early signs of dementia. All three of us on the team have relatives affected by dementia.",
    chips: [
      <><b>90</b>min build</>,
      <><b>€1,000</b>UCC qualifier</>,
      <><b>€3,000</b>national final</>,
      <><b>Best</b>Pitch</>,
    ],
    n: 4,
    hard: "UCC had a scheduling issue, so we had 90 minutes to build while every other team had three hours.",
    learned: "We won the UCC qualifier, then the national final and Best Pitch, with €4,000 in prizes in total. Winning was a bonus. The real takeaway was that a team focused on a problem it cares about can build something in less time than it takes to do your shopping.",
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
    title: "Patch Pitchathon",
    pin: "y",
    meta: "Patch Pitchathon · with Ian Cullinane and Dylan O'Riordan",
    what: "An adaptive learning system that works like a personal, AI-driven curriculum builder, to get people learning hands-on skills outdoors. People protect what they care about, and they care about what they experience firsthand.",
    chips: [<><b>45</b>min build</>, <><b>1st</b>place</>],
    n: 3,
    hard: "We went from no idea to a finished pitch and a working demo in 45 minutes.",
    learned: "We won it. It also cemented my obsession with building universal learning engines, which is the problem I want to spend the rest of my life on.",
    media: (
      <>
        <span className="dymo nv" style={v({ "--ds": "16px", "--r": "-2deg" })}>Idea to demo in 45 min</span>
        <span className="dymo gn" style={v({ "--ds": "16px", "--r": "3deg" })}>Winner</span>
      </>
    ),
  },
  {
    title: "pc-from-anywhere",
    pin: "b",
    meta: "Open source · Tailscale, SSH, Termius, tmux",
    what: "A free, terminal-based setup that lets me use my home PC from a phone or tablet. I published a guide and a one-shot Linux installation script so anyone can copy it.",
    chips: [<><b>tmux</b>persistent sessions</>, <><b>Linux</b>one-shot install script</>],
    n: 2,
    hard: "One installation script had to work on Ubuntu, Debian, Fedora, Arch and several derivatives.",
    learned: "I wrote the guide and the script around Tailscale, OpenSSH, tmux, TPM, Resurrect and Continuum, so the setup can be repeated on another machine.",
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
    what: "Three small open-source tools for Claude Code. One switches between model providers, one searches and syncs session history across projects, and one lets a session resume through a different provider.",
    chips: [<><b>claude-glm-switcher</b>CLI</>, <><b>claude-session-search</b>shell tools</>, <><b>despecify-sessions</b>Claude Code skill</>],
    n: 3,
    hard: "A stored session remembers which model it ran on, so resuming it through another provider meant removing the model tags from the session history.",
    learned: "claude-glm-switcher is MIT licensed and works with Anthropic, Z.ai, OpenRouter and LiteLLM backends, among others.",
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
    what: "A Python agent that schedules and sends randomized, context-aware messages to friends and family, like a happy birthday text to your nan on her birthday. Only the backend got built, using Python and Browser-use.",
    chips: [<><b>4 h</b>sprint</>, <><b>Browser-use</b>+ Python</>],
    n: 3,
    hard: "A team of five had four hours to build it.",
    learned: "It was a sharp reminder of how much you can build in a tiny window when you strip away everything except the problem and your tools.",
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
    meta: "NDRC Startup Sprint at ENGINE Limerick · with co-founder Jack",
    what: "A compliance tool for nursing homes. Jack and I showed up at ENGINE Limerick with no idea, recruited a team and picked nursing home rosters.",
    chips: [<><b>5</b>Directors of Nursing called</>, <><b>LEO Limerick</b>fast-track offer</>],
    n: 3,
    hard: "Instead of jumping into code, we spent Saturday cold-calling five Directors of Nursing, from Dublin to Galway. They were running complex rosters on WhatsApp.",
    learned: "We pitched them a fix and changed the product around what hurt most. The LEO Limerick director offered to fast-track us for investment, and we did not take the offer. Don't write a line of code until you have spoken to the people who will use the thing.",
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
    title: "EduCat and ScreenPaws",
    pin: "b",
    meta: "TECS competition, then UCC module UW0007",
    what: "A phone app that stays locked until kids finish short educational games. I have watched my sister grow up with screens in her hands, and I wanted parents to have a simple way to make that time count.",
    chips: [<><b>28</b>days to build</>, <><b>0</b>Kotlin before</>, <><b>Figma</b>prototype</>],
    n: 4,
    hard: "In 6th year, a friend and I had 28 days to build an Android prototype without knowing a single line of Kotlin, on top of school. We did not win.",
    learned: "I rebuilt it for a UCC module with a new team and renamed it ScreenPaws. This time we slowed down, mapped the problem and talked to users. The people around an idea shape it as much as the idea itself.",
    media: (
      <>
        <span className="dymo nv" style={v({ "--ds": "16px", "--r": "-2deg" })}>Kotlin in 28 days</span>
        <span className="dymo rd" style={v({ "--ds": "16px", "--r": "2deg" })}>ScreenPaws</span>
      </>
    ),
  },
  {
    title: "Custom PC business",
    pin: "g",
    meta: "Founder & Technician · started at 13",
    what: "Lockdown, age 13, and I wanted a gaming PC. I sold my PS3, PS4 and old laptop at a car boot sale to pay for parts, then saw that pre-built PCs were marked up far past what the components cost, with €800 builds selling for €1,200 or more. So I built my own and sold it for a €100 profit, then did it again, building two at a time with my friend Paul on marketing.",
    chips: [<><b>€4,000+</b>revenue</>, <><b>€1,100</b>fake cheque</>],
    n: 4,
    hard: "Two hits landed almost together. A customer paid with a €1,100 cheque that the bank flagged as fake a week later, after the PC was long gone in a British parcel sorting centre. Then the global chip shortage pushed the parts for an €800 build past €2,500.",
    learned: "I learned more from staring at my empty workbench than from any sale: negotiation, fraud awareness, basic accounting and the reality of supply chains. After a week of bashing my head against the wall, I moved into small repairs and flipping individual parts. Less margin, but still enough cash.",
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
    what: "Our team of five in the UCC Rocketry Society designed a rocket from scratch, 3D printed the parts and calculated its trajectory.",
    chips: [<><b>3D</b>printed parts</>, <><b>Trajectory</b>calculation</>],
    n: 3,
    hard: "Starting from nothing meant the parts and the numbers were ours to work out.",
    learned: "We launched it at Lord Waterford's estate in January.",
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
                  <p>Hackathons, competitions, software projects and a business.</p>
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
