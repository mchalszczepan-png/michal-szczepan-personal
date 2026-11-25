import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SiteHud from "@/components/SiteHud";
import "@/styles/contact.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    document.title = "Page not found: Michal Szczepan";
  }, []);

  return (
    <div className="pg-contact">
      <SiteHud world="home" />
      <main className="stage" id="stage">
        <div className="console">
          <div className="console-top">
            <span className="brand">MS-1 HANDHELD <i>P1</i></span>
            <span className="pw">POWER <span className="led" /></span>
          </div>
          <div className="screen">
            <div className="scr-bar"><span>Michal Szczepan</span><span className="blink">Not found</span><span>Cork, Ireland</span></div>
            <div className="scr-body">
              <p className="kicker">Error</p>
              <h1 className="nf-code">404</h1>
              <p className="nf-title">Page not found</p>
              <Link to="/" className="go">▶ Return to Home</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
