import { Home, Briefcase, FolderOpen, Link, Github, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import avatar from "@/assets/avatar.png";

const navItems = [
  { icon: Home, label: "Accueil", href: "#hero" },
  { icon: Briefcase, label: "Expérience", href: "#experience" },
  { icon: FolderOpen, label: "Projets", href: "#projects" },
  { icon: Link, label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl mx-auto backdrop-blur-xl bg-card/70 rounded-full shadow-md border border-border/50 px-4 py-2 flex items-center justify-between">
      <a href="#hero">
        <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
      </a>
      <div className="flex items-center gap-1">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
          title={item.label}
        >
          <item.icon className="w-4 h-4" />
        </a>
      ))}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
        title="GitHub"
      >
        <Github className="w-4 h-4" />
      </a>
      <button
        onClick={() => setDark(!dark)}
        className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
        title={dark ? "Mode clair" : "Mode sombre"}
      >
        {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
