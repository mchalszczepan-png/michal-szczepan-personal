// Shared console HUD, rendered at the top of every page. The `world` prop
// only picks the colour/typography skin; the active nav item comes from the
// current route.
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "@/styles/site-hud.css";

export type World = "home" | "work" | "quests" | "sketch";

const BASE = [
  "..............",
  "....HHHHHH....",
  "...HHHHHHHH...",
  "...HHHHHHHH...",
  "...HSSSSSSH...",
  "...HSESSESH...",
  "....SSSSSS....",
  "....SSMMSS....",
  ".....SSSS.....",
  "..TTTTTTTTTT..",
  ".TTTTTTTTTTTT.",
  ".TTTTTTTTTTTT.",
  ".TTTTTTTTTTTT.",
  ".TTTTTTTTTTTT.",
];
const WORK = [
  "..............", "..............", "....KKKKKK....", "...K......K...", "..KC......CK..", "..KC......CK..", "..KC......CK..",
  "..K.......KKK.", "..............", "..............", "..............", "..............", "..............", "..............",
];
const QUESTS = [
  "......RR......", "....RRRRRR....", "..GGGGGGGGGG..", "..............", "..............", "..............", "..............",
  "..............", "..............", "..............", "..............", "..............", "..............", "..............",
];
const SKETCH = [
  "..............", "..............", "..............", "...........Y..", "...........Y..", "...........Y..", "...........D..",
  "..............", "..............", "..............", "..............", "..............", "..............", "..............",
];

const Rects = ({ map }: { map: string[] }) => (
  <>
    {map.flatMap((row, y) =>
      row.split("").map((c, x) =>
        c === "." ? null : <rect key={`${x}-${y}`} className={c} x={x} y={y} width="1.02" height="1.02" />,
      ),
    )}
  </>
);

const Avatar = () => (
  <svg className="px" viewBox="0 0 14 14" aria-hidden="true">
    <Rects map={BASE} />
    <g className="a-work"><Rects map={WORK} /></g>
    <g className="a-quests"><Rects map={QUESTS} /></g>
    <g className="a-sketch"><Rects map={SKETCH} /></g>
  </svg>
);

const Icon = ({ d, evenodd }: { d: string; evenodd?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={d} fillRule={evenodd ? "evenodd" : undefined} />
  </svg>
);

const ICONS = {
  home: "M4 5h16v11H4zM6 7v7h12V7zM8 18h3v2H8zm8 0h-3v2h3z",
  work: "M7 4h10v2h3v2h-3v3h3v2h-3v3h3v2h-3v2H7v-2H4v-2h3v-3H4v-2h3V8H4V6h3zm2 4v8h6V8z",
  quests: "M19 2h3v3L10 17l-3-3zM5 15l4 4-1.500 1.500-1.500-1.500L4 21l-2-2 2-2-1.500-1.500z",
  sketch: "M17 3l4 4L8 20H4v-4zM15.600 6.400L6 16v2h2l9.600-9.600z",
};

const NAV = [
  { to: "/", label: "Home", short: "Home", icon: ICONS.home, evenodd: true },
  { to: "/work", label: "Work", short: "Work", icon: ICONS.work, evenodd: true },
  { to: "/quests", label: "Side Quests", short: "Quests", icon: ICONS.quests },
  { to: "/sketchbook", label: "Sketchbook", short: "Sketch", icon: ICONS.sketch, evenodd: true },
];

const SiteHud = ({ world }: { world: World }) => {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let b = 0;
    const a = requestAnimationFrame(() => {
      b = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(a);
      cancelAnimationFrame(b);
    };
  }, []);

  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  return (
    <header className={`site-hud${ready ? " is-ready" : ""}`} data-world={world}>
      <div className="hud-in">
        <div className="hud-avatar" aria-hidden="true"><Avatar /></div>
        <div className="hud-id">
          <b className="hud-name">Michal Szczepan</b>
          <span className="hud-class">Co-founder &amp; CTO · Cork, Ireland</span>
        </div>
        <div className="hud-xp">
          <div className="hud-xp-top"><span>XP</span><span>BE EEE · UCC '25–'29</span></div>
          <div className="bar" role="img" aria-label="Degree progress: BE Electrical and Electronic Engineering, UCC, 2025 to 2029"><i /></div>
        </div>
        <div className="hud-quest">
          <span>Current quest</span>
          <b>Ganzy</b>
          <Link className="hud-contact" to="/contact" aria-current={path === "/contact" ? "page" : undefined}>Contact</Link>
        </div>
        <nav className="hud-nav" aria-label="Worlds">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} aria-current={path === n.to ? "page" : undefined} aria-label={n.label}>
              <Icon d={n.icon} evenodd={n.evenodd} />
              <span className="nl-full" aria-hidden="true">{n.label}</span>
              <span className="nl-short" aria-hidden="true">{n.short}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHud;
