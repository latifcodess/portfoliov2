import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:contact@latif.codes" },
  { icon: Github, label: "GitHub", href: "https://github.com/latifcodess" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/latif-krasniqi-34089a3a9/" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/latifcodes" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="pb-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Contact</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Envie de collaborer ou simplement discuter ? N'hésitez pas à me contacter !
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
