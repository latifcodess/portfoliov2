import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TaskFlow",
    description:
      "Application de gestion de projets avec tableaux Kanban, collaboration en temps réel et intégrations API.",
    tags: ["React", "TypeScript", "Supabase"],
    link: "#",
  },
  {
    title: "DevBlog",
    description:
      "Plateforme de blog pour développeurs avec éditeur Markdown, système de commentaires et analytics.",
    tags: ["Next.js", "MDX", "Tailwind"],
    link: "#",
  },
  {
    title: "CryptoTrack",
    description:
      "Dashboard de suivi de cryptomonnaies avec graphiques temps réel et alertes de prix personnalisées.",
    tags: ["React", "Chart.js", "WebSocket"],
    link: "#",
  },
  {
    title: "WeatherApp",
    description:
      "Application météo élégante avec géolocalisation, prévisions sur 7 jours et animations dynamiques.",
    tags: ["React", "OpenWeather API"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-6">Projets</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            className="group block rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-sm">{project.title}</h3>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
