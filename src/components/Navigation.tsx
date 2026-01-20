import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          MS
        </Link>
        <div className="flex gap-2 items-center">
          <Button 
            variant={isActive("/") ? "default" : "ghost"} 
            asChild
          >
            <Link to="/">Home</Link>
          </Button>
          <Button 
            variant={isActive("/projects") ? "default" : "ghost"} 
            asChild
          >
            <Link to="/projects">Projects</Link>
          </Button>
          <Button 
            variant={isActive("/experience") ? "default" : "ghost"} 
            asChild
          >
            <Link to="/experience">Experience</Link>
          </Button>
          <Button 
            variant={isActive("/contact") ? "default" : "ghost"} 
            asChild
          >
            <Link to="/contact">Contact</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
