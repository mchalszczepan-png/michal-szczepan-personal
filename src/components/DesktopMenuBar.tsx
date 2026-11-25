import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import "@/styles/desktop-menubar.css";

const NAV = [
  { to: "/work", label: "Work" },
  { to: "/quests", label: "Projects" },
  { to: "/sketchbook", label: "Sketchbook" },
  { to: "/contact", label: "Contact" },
];

const useDublinClock = () => {
  const format = () =>
    new Date().toLocaleTimeString("en-IE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Dublin" });
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 30000);
    return () => window.clearInterval(id);
  }, []);
  return time;
};

type DesktopMenuBarProps = {
  /** On phones, swap the name for a "Home" back button (used on inner pages). */
  backHome?: boolean;
};

/**
 * Top menu bar of the desk pages. Colours come from the page wrapper's tokens
 * (--paper, --paper-2, --ink, --ink-2, --line), set by .pg-home and .pg-contact.
 */
const DesktopMenuBar = ({ backHome = false }: DesktopMenuBarProps) => {
  const time = useDublinClock();
  return (
    <header className={`desk-menubar${backHome ? " has-back" : ""}`}>
      {backHome && (
        <Link className="back" to="/">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Home
        </Link>
      )}
      <Link className="brand" to="/">
        <img src={profilePhoto} alt="" />
        Michal Szczepan
      </Link>
      <nav aria-label="Main">
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to}>{n.label}</NavLink>
        ))}
      </nav>
      <div className="right">
        <span className="city">Cork, Ireland</span>
        <span aria-label={`Time in Cork ${time}`}>{time}</span>
      </div>
    </header>
  );
};

export default DesktopMenuBar;
