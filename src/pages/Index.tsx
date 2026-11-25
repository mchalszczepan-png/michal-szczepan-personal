import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import ganzyLogo from "@/assets/ganzy-logo.png";
import hultGroupPhoto from "@/assets/hult-group-photo.jpg";
import DesktopMenuBar from "@/components/DesktopMenuBar";
import "@/styles/home.css";

/** Free-floating windows are used only at this width and up; below it they stack. */
const DESKTOP_QUERY = "(min-width: 1280px)";

type WinId = "about" | "ganzy" | "recog" | "photo";
type Pos = { x: number; y: number };

/** Starting positions inside the desk (below the 40px menu bar). */
const START: Record<WinId, Pos> = {
  about: { x: 72, y: 36 },
  ganzy: { x: 700, y: 60 },
  recog: { x: 120, y: 496 },
  photo: { x: 716, y: 496 },
};
const START_ORDER: WinId[] = ["photo", "recog", "ganzy", "about"];

const useIsDesktop = () => {
  const [desktop, setDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return desktop;
};

const ICONS: { to: string; label: string; file?: boolean; svg: ReactNode }[] = [
  {
    to: "/work",
    label: "Work",
    svg: (
      <>
        <rect x="6" y="10" width="52" height="34" rx="3" fill="#fff" stroke="#24211C" strokeWidth="2.5" />
        <path d="M14 30h36" stroke="#24211C" strokeWidth="2" />
        <circle cx="18" cy="30" r="3.5" fill="#F26B1D" stroke="#24211C" strokeWidth="1.5" />
        <circle cx="32" cy="30" r="3.5" fill="#2E5AA7" stroke="#24211C" strokeWidth="1.5" />
        <circle cx="46" cy="30" r="3.5" fill="#3E7D5A" stroke="#24211C" strokeWidth="1.5" />
        <path d="M14 20h12M38 20h10" stroke="#9A917F" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 44l-6 14M44 44l6 14M32 44v14" stroke="#24211C" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    to: "/quests",
    label: "Projects",
    svg: (
      <>
        <rect x="5" y="9" width="54" height="44" rx="3" fill="#C8955C" stroke="#24211C" strokeWidth="2.5" />
        <rect x="10" y="14" width="44" height="34" fill="#D9AE78" />
        <rect x="14" y="18" width="14" height="13" fill="#fff" stroke="#24211C" strokeWidth="1.5" transform="rotate(-5 21 24)" />
        <rect x="33" y="17" width="15" height="11" fill="#F4C94A" stroke="#24211C" strokeWidth="1.5" transform="rotate(4 40 22)" />
        <rect x="26" y="33" width="16" height="12" fill="#BFD7EA" stroke="#24211C" strokeWidth="1.5" transform="rotate(-3 34 39)" />
        <circle cx="21" cy="19" r="2.2" fill="#D64532" />
        <circle cx="40" cy="18" r="2.2" fill="#2E5AA7" />
        <circle cx="34" cy="34" r="2.2" fill="#3E7D5A" />
      </>
    ),
  },
  {
    to: "/sketchbook",
    label: "Sketchbook",
    svg: (
      <>
        <rect x="12" y="7" width="42" height="52" rx="3" fill="#fff" stroke="#24211C" strokeWidth="2.5" />
        <path d="M20 15v40M27 15v40M34 15v40M41 15v40M48 15v40M18 20h34M18 27h34M18 34h34M18 41h34M18 48h34" stroke="#A9C3DE" strokeWidth="1" />
        <path d="M22 44c5-10 10 2 15-8s8-4 10-6" fill="none" stroke="#F26B1D" strokeWidth="2.5" strokeLinecap="round" />
        <g fill="#fff" stroke="#24211C" strokeWidth="2">
          <circle cx="12" cy="15" r="3" />
          <circle cx="12" cy="25" r="3" />
          <circle cx="12" cy="35" r="3" />
          <circle cx="12" cy="45" r="3" />
        </g>
      </>
    ),
  },
  {
    to: "/contact",
    label: "Contact",
    svg: (
      <>
        <rect x="7" y="15" width="50" height="34" rx="3" fill="#fff" stroke="#24211C" strokeWidth="2.5" />
        <path d="M8 17l24 18 24-18" fill="none" stroke="#24211C" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="44" y="20" width="9" height="10" fill="#F26B1D" stroke="#24211C" strokeWidth="1.5" />
      </>
    ),
  },
  {
    to: "/Michal_Szczepan_CV.pdf",
    label: "CV",
    file: true,
    svg: (
      <>
        <path d="M14 6h26l12 12v40H14z" fill="#fff" stroke="#24211C" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M40 6v12h12" fill="#F6F1E6" stroke="#24211C" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M20 26h22M20 32h26M20 38h18" stroke="#9A917F" strokeWidth="2" strokeLinecap="round" />
        <rect x="18" y="44" width="22" height="10" rx="2" fill="#D64532" stroke="#24211C" strokeWidth="1.5" />
        <text x="29" y="52" fontFamily="Figtree,sans-serif" fontSize="7.5" fontWeight="700" fill="#fff" textAnchor="middle">PDF</text>
      </>
    ),
  },
];

const RECOGNITION = [
  { badge: "NF", bg: "#FBE3CF", title: "New Frontiers Phase 2, Enterprise Ireland", text: "Youngest person ever accepted, at 18, with Ganzy." },
  { badge: "€9k", bg: "#F9EDBF", title: "Dr. Séamus McDermott Entrepreneurial Scholarship", text: "€9,000 from the Liffey Trust, Europe's first-ever accelerator programme." },
  { badge: "1st", bg: "#D9E8DE", title: "National Irish SDG Hackathon, winner and Best Pitch", text: "With Remento, an app for early signs of dementia. We had 90 minutes to build while every other team had three hours." },
  { badge: "HP", bg: "#DCE5F3", title: "Campus Director, Hult Prize at UCC", text: "UCC's first Hult Prize. It went from three people at the first workshop to five teams pitching at a packed final." },
  { badge: "PP", bg: "#EBDDF1", title: "Patch Pitchathon, winner", text: "From no idea to a finished pitch and a working demo in 45 minutes." },
];

const Index = () => {
  const desktop = useIsDesktop();
  const deskRef = useRef<HTMLElement>(null);
  const winRefs = useRef<Partial<Record<WinId, HTMLElement | null>>>({});
  const drag = useRef<{ id: WinId; pointer: number; sx: number; sy: number; ox: number; oy: number } | null>(null);

  const [pos, setPos] = useState<Record<WinId, Pos>>(START);
  const [order, setOrder] = useState<WinId[]>(START_ORDER);
  const [closed, setClosed] = useState<Set<WinId>>(new Set());

  useEffect(() => {
    document.title = "Michal Szczepan";
  }, []);

  /** Keep a window fully inside the desk so nothing ends up off-screen. */
  const clamp = useCallback((id: WinId, p: Pos): Pos => {
    const desk = deskRef.current;
    const win = winRefs.current[id];
    if (!desk || !win) return p;
    const maxX = Math.max(0, desk.clientWidth - win.offsetWidth);
    const maxY = Math.max(0, desk.clientHeight - win.offsetHeight);
    return { x: Math.min(Math.max(0, p.x), maxX), y: Math.min(Math.max(0, p.y), maxY) };
  }, []);

  useEffect(() => {
    if (!desktop) return;
    const onResize = () =>
      setPos((prev) => {
        const next = { ...prev };
        (Object.keys(next) as WinId[]).forEach((id) => (next[id] = clamp(id, next[id])));
        return next;
      });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [desktop, clamp]);

  const raise = (id: WinId) => setOrder((o) => (o[o.length - 1] === id ? o : [...o.filter((w) => w !== id), id]));

  const onBarDown = (id: WinId) => (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!desktop || e.button !== 0 || (e.target as HTMLElement).closest("button")) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { id, pointer: e.pointerId, sx: e.clientX, sy: e.clientY, ox: pos[id].x, oy: pos[id].y };
  };
  const onBarMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.pointer !== e.pointerId) return;
    const next = clamp(d.id, { x: d.ox + e.clientX - d.sx, y: d.oy + e.clientY - d.sy });
    setPos((p) => ({ ...p, [d.id]: next }));
  };
  const onBarUp = () => {
    drag.current = null;
  };

  const focused = order[order.length - 1];

  const renderWin = ({ id, title, label, className, children, as = "section" }: { id: WinId; title: string; label: string; className: string; children: ReactNode; as?: "section" | "figure" }) => {
    if (closed.has(id)) return null;
    const Tag = as;
    const style: CSSProperties | undefined = desktop
      ? { left: pos[id].x, top: pos[id].y, zIndex: 2 + order.indexOf(id) }
      : undefined;
    return (
      <Tag
        ref={(el: HTMLElement | null) => { winRefs.current[id] = el; }}
        className={`win ${className}${focused === id ? " focus" : ""}`}
        style={style}
        aria-label={label}
        onPointerDown={() => raise(id)}
        onFocus={() => raise(id)}
      >
        <div className="bar" onPointerDown={onBarDown(id)} onPointerMove={onBarMove} onPointerUp={onBarUp} onPointerCancel={onBarUp}>
          <div className="dots">
            <button type="button" className="close" aria-label={`Close ${label} window`} onClick={() => setClosed((c) => new Set(c).add(id))} />
            <i aria-hidden="true" />
            <i aria-hidden="true" />
          </div>
          <div className="title">{title}</div>
        </div>
        <div className="body">{children}</div>
      </Tag>
    );
  };

  return (
    <div className="pg-home">
      <DesktopMenuBar />

      <main className="desktop" ref={deskRef}>
        <nav className="icons" aria-label="Pages">
          {ICONS.map((ic) => {
            const inner = (
              <>
                <svg viewBox="0 0 64 64" aria-hidden="true">{ic.svg}</svg>
                <span>{ic.label}</span>
              </>
            );
            return ic.file ? (
              <a key={ic.to} className="icon" href={ic.to} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : (
              <Link key={ic.to} className="icon" to={ic.to}>{inner}</Link>
            );
          })}
        </nav>

        {renderWin({
          id: "about",
          title: "About Michal",
          label: "About",
          className: "about",
          children: (
            <>
              <img className="me" src={profilePhoto} alt="Michal Szczepan" />
              <div>
                <h1>Michal Szczepan</h1>
                <p className="role"><b>Co-founder and CTO of Ganzy.</b> Electrical and Electronic Engineering student at University College Cork.</p>
                <p className="more">I grew up in Cork. At 12 I noticed my school had no canteen at all, so I bought gum and 7-Up in bulk and sold it at lunch. At 13, stuck at home in lockdown, I sold my consoles and started building custom PCs.</p>
                <p className="more">Now I write the specifications and the planner logic for Ganzy, and our four developers build from them. I do it alongside a full-time degree.</p>
                <div className="btns">
                  <Link className="btn primary" to="/work">See my work</Link>
                  <a className="btn" href="/Michal_Szczepan_CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                  <Link className="btn" to="/contact">Get in touch</Link>
                </div>
              </div>
            </>
          ),
        })}

        {renderWin({
          id: "ganzy",
          title: "Ganzy",
          label: "Ganzy",
          className: "ganzy",
          children: (
            <>
              <div className="head">
                <img src={ganzyLogo} alt="Ganzy logo" />
                <div>
                  <h2>Ganzy</h2>
                  <p><a href="https://ganzy.app" target="_blank" rel="noopener noreferrer">ganzy.app</a></p>
                </div>
              </div>
              <p className="desc">A companion app that helps high-school students with ADHD. It started with my own frustration in secondary school: plenty of effort, and no system for what to study next.</p>
              <dl>
                <dt>Role</dt><dd>Co-founder and CTO</dd>
                <dt>Since</dt><dd>September 2025</dd>
                <dt>Team</dt><dd>Four developers</dd>
                <dt>Programme</dt><dd>New Frontiers Phase 2, Enterprise Ireland</dd>
              </dl>
            </>
          ),
        })}

        {renderWin({
          id: "recog",
          title: "Recognition",
          label: "Recognition",
          className: "recog",
          children: (
            <ul>
              {RECOGNITION.map((r) => (
                <li key={r.badge}>
                  <span className="badge" style={{ background: r.bg }} aria-hidden="true">{r.badge}</span>
                  <div><b>{r.title}</b><small>{r.text}</small></div>
                </li>
              ))}
            </ul>
          ),
        })}

        {renderWin({
          id: "photo",
          title: "hult-group-photo.jpg",
          label: "Photo",
          className: "photo",
          as: "figure",
          children: (
            <>
              <img src={hultGroupPhoto} alt="Teams at the Hult Prize event at University College Cork" />
              <figcaption>Hult Prize at University College Cork.</figcaption>
            </>
          ),
        })}

        <aside className="note"><b>Currently</b>Building Ganzy, and aiming for a 1:1 average in the winter engineering exams at UCC.</aside>
      </main>
    </div>
  );
};

export default Index;
