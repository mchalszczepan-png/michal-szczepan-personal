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
    meta: "Built at Junction 2026, AstraZeneca track · Helsinki · with Pavit Gogia",
    what: "Helps Finnish GPs write complete cancer referrals. Voice dictation becomes a structured referral, and a cancer-risk aid cites NICE NG12.",
    chips: [
      "Fine-tuned Gemma LoRA, AUROC 0.96 on synthetic patients",
      <><b>100+</b>days suspected-cancer wait</>,
      <><b>41</b>of them at the GP</>,
    ],
    stack: "React · Convex · Modal · Gemini / MedGemma",
    n: 5,
    hard: "In Finland the wait for a cancer diagnosis is over 100 days, and 41 of those are spent at the GP. GPs can't order an MRI, so the referral is everything. If it's vague, it gets sent back. We had one hackathon to turn a GP talking into a full referral, plus a risk check that shows where it got its answer.",
    learned: "I fine-tuned my first Gemma LoRA and got AUROC 0.96. Then I had to be honest about it. 78 synthetic patients are not real patients. A good start, nothing more (yet).",
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
    meta: "UCC SDG Hackathon, then National SDG Hackathon · with Jack Garvey & Nathan Manley",
    what: "An iOS app built in 90 minutes to spot early signs of dementia: a weekly 5-minute test plus voice analysis. My first hackathon.",
    chips: [
      <><b>90</b>min build</>,
      <><b>1st</b>UCC, €1,000</>,
      <><b>National</b>champions</>,
      <><b>Best</b>Pitch</>,
    ],
    n: 4,
    hard: "Everyone else got 3 hours. We got 90 minutes, thanks to a scheduling mix-up at UCC. A whole iOS app in Swift, voice analysis included, at my first ever hackathon.",
    learned: "Keep it small. One 5-minute test a week was enough. We won UCC, then nationals, and took Best Pitch too (still proud of that one).",
    media: (
      <>
        <figure className="pol" style={v({ "--ar": "1/1", "--r": "3deg" })}>
          <Pin />
          <img src={sdgUcc} alt="Remento team at the UCC SDG Hackathon" loading="lazy" />
          <figcaption>UCC SDG Hackathon, 1st place</figcaption>
        </figure>
        <figure className="pol" style={v({ "--ar": "4/5", "--r": "-2.5deg" })}>
          <Pin c="b" />
          <img src={sdgNational} alt="Remento team on stage at the National SDG Hackathon" loading="lazy" />
          <figcaption>National champions + Best Pitch</figcaption>
        </figure>
      </>
    ),
  },
  {
    title: "pc-from-anywhere",
    pin: "b",
    meta: "Open source · Tailscale + SSH + tmux",
    what: "Use my PC from my phone on a 3 to 4 hour daily commute. Open-source guide and setup script on GitHub.",
    chips: [<><b>3–4 h</b>commute, daily</>, <><b>tmux-resurrect</b>restores sessions</>],
    n: 2,
    hard: "My PC is at home. I'm commuting 3 to 4 hours a day. Every time the connection dropped or the PC restarted, my sessions on the phone died with it.",
    learned: "You don't need anything fancy. Tailscale, SSH and tmux did the job. Writing it up as a guide and a setup script turned my fix into something other people can use.",
    media: (
      <>
        <span className="dymo nv" style={v({ "--ds": "16px", "--r": "-3deg" })}>Tailscale + SSH + tmux</span>
        <span className="dymo" style={v({ "--ds": "16px", "--r": "2deg" })}>3–4 h commute</span>
        <span className="dymo rd" style={v({ "--ds": "16px", "--r": "-1deg" })}>Open source</span>
      </>
    ),
  },
  {
    title: "Hermes Agent vector DB",
    pin: "y",
    meta: "Give(a)Go OpenClaw build-athon · presented",
    what: "A vector database behind Hermes Agent: safe LLM access to company data.",
    chips: [<><b>Presented</b>at the build-athon</>],
    n: 3,
    hard: "Giving an AI agent access to company data without it seeing stuff it shouldn't. In one build-athon.",
    learned: "Access rules go in at the start. Bolting them on afterwards is how data leaks.",
    media: (
      <>
        <div className="badge" style={v({ "--sc": "#2f6fb5", "--r": "2deg" })}>
          <Pin />
          <div className="strap" />
          <div className="clip" />
          <div className="bd">
            <b>OpenClaw build-athon</b>
            <small>Give(a)Go</small>
            <div className="nm">
              Michal Szczepan<span>presenter</span>
            </div>
          </div>
        </div>
        <span className="dymo gn" style={v({ "--ds": "16px", "--r": "-3deg" })}>Vector DB</span>
      </>
    ),
  },
  {
    title: "GiveAGo AI Build Jam",
    pin: "",
    meta: "Give(a)Go · January 2026",
    what: "Built a browser-use agent at the AI Build Jam.",
    chips: [<b>Jan 2026</b>, <><b>Browser-use</b>agent</>],
    n: 3,
    hard: "Getting an agent to click around a real browser, live, inside one jam.",
    learned: "Watching an agent use a browser shows you very fast what it can and can't do. Some of it is magic. Some of it is a toddler with a mouse.",
    media: (
      <figure className="pol solo" style={v({ "--ar": "3/2", "--r": "-3deg" })}>
        <Pin c="g" />
        <img src={giveago} alt="Michal coding at the GiveAGo AI Build Jam" loading="lazy" />
        <figcaption>AI Build Jam, Jan 2026</figcaption>
      </figure>
    ),
  },
  {
    title: "CareComply",
    pin: "b",
    meta: "NDRC Startup Sprint · February 2026",
    what: "A nursing roster and compliance tool, built during the Startup Sprint.",
    chips: [<b>Feb 2026</b>, <><b>Roster</b>+ compliance</>],
    n: 3,
    hard: "Before writing any code, Jack and I cold-called five Directors of Nursing, from Dublin to Galway. Then the roster had to follow the compliance rules too, or nobody would touch it.",
    learned: "Validate before you build. Those calls were worth more than any feature. LEO Limerick offered us fast-track investment off the back of it (we didn't take it).",
    media: (
      <>
        <figure className="pol solo" style={v({ "--ar": "3/2", "--r": "2.5deg" })}>
          <Pin c="y" />
          <img src={carecomply} alt="The CareComply team at the NDRC Startup Sprint" loading="lazy" />
          <figcaption>NDRC Startup Sprint</figcaption>
        </figure>
        <span className="dymo rd" style={v({ "--ds": "15px", "--r": "-2deg" })}>Nursing roster</span>
      </>
    ),
  },
  {
    title: "Custom PC business",
    pin: "g",
    meta: "2020 to 2022 · started at 13",
    what: "Built and sold custom PCs, a business I started at 13 during lockdown.",
    chips: [<><b>€4,000+</b>revenue</>, <><b>€1,100</b>fake cheque, survived</>],
    n: 4,
    hard: "Someone paid with a fake cheque. The bank flagged it a week later, when the PC was already sitting in a parcel sorting centre in Britain. Then the silicon shortage pushed builds from €800 to €2,500+.",
    learned: "A sale isn't final until the money clears. I rebuilt from repairs and flipping parts, and still got the business past €4,000 in revenue.",
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
          Started at 13<small>2020 to 2022</small>
        </div>
      </>
    ),
  },
  {
    title: "UCC Rocketry",
    pin: "y",
    meta: "UCC Rocketry & Space Exploration Society · est. 2024",
    what: "A Python flight simulator and 3D modelling for the society.",
    chips: [<><b>Python</b>flight sim</>, <><b>3D</b>modelling</>],
    n: 3,
    hard: "Getting a Python simulation to behave like a real rocket before anything gets built.",
    learned: "Simulate first, build second. It's a lot cheaper to crash a rocket in code.",
    media: (
      <>
        <div className="sticker photo" style={v({ "--r": "-6deg", width: "132px", height: "132px" })}>
          <img src={rocket} alt="UCC Rocketry and Space Exploration Society badge" />
        </div>
        <span className="dymo" style={v({ "--ds": "15px", "--r": "2deg" })}>Python flight sim</span>
      </>
    ),
  },
];

const Quests = () => {
  useEffect(() => {
    document.title = "Side Quests · Michal Szczepan";
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
                <h1 className="dymo big" tabIndex={-1}>Side quests</h1>
                <div className="q-legend">
                  <Pin c="b" />
                  <p>Hackathons, builds and one business, pinned up.</p>
                  <p>
                    Chillies are how hard it was:
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
