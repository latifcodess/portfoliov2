import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.062 14.062 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const links = [
  { icon: Mail, label: "Email", href: "mailto:contact@latif.codes" },
  { icon: Github, label: "GitHub", href: "https://github.com/latifcodess" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/latif-krasniqi-34089a3a9/" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/latifcodes" },
  { icon: DiscordIcon, label: "Discord", href: "https://discord.com/users/584393278812848151" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="pb-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Contact</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Interested in collaborating or just want to chat? Feel free to reach out !
      </p>
      <div className="flex gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            <link.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
