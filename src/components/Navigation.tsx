import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border w-full">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
        <Link to="/" className="text-lg sm:text-xl font-bold text-foreground no-underline hover:text-primary mr-6">
          MS
        </Link>
        <div className="flex gap-4 items-center">
          <Link 
            to="/" 
            className={`no-underline hover:text-primary ${isActive("/") ? "text-primary font-semibold" : "text-foreground"}`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`no-underline hover:text-primary ${isActive("/projects") ? "text-primary font-semibold" : "text-foreground"}`}
          >
            Projects
          </Link>
          <Link 
            to="/experience" 
            className={`no-underline hover:text-primary ${isActive("/experience") ? "text-primary font-semibold" : "text-foreground"}`}
          >
            Experience
          </Link>
          <Link 
            to="/contact" 
            className={`no-underline hover:text-primary ${isActive("/contact") ? "text-primary font-semibold" : "text-foreground"}`}
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;