import { Home, Briefcase, FolderOpen, Link, Github } from "lucide-react";
import avatar from "@/assets/avatar.png";

const navItems = [
  { icon: Home, label: "Accueil", href: "#hero" },
  { icon: Briefcase, label: "Expérience", href: "#experience" },
  { icon: FolderOpen, label: "Projets", href: "#projects" },
  { icon: Link, label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-card rounded-full shadow-md border border-border px-2 py-2 flex items-center gap-1">
      <a href="#hero" className="mr-2">
        <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
      </a>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          title={item.label}
        >
          <item.icon className="w-4 h-4" />
        </a>
      ))}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        title="GitHub"
      >
        <Github className="w-4 h-4" />
      </a>
    </nav>
  );
};

export default Navbar;
