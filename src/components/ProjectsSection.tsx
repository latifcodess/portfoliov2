import React, { useState, useEffect } from "react";
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
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Remplace par ton pseudo GitHub et ton tag choisi
  const GITHUB_USERNAME = "latifcodess";
  const TARGET_TOPIC = "portfolio"; 

  useEffect(() => {
const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:${TARGET_TOPIC}&sort=updated`
        );
        const data = await response.json();
        
        // On récupère les détails des langages pour chaque repo en parallèle
        const reposWithLanguages = await Promise.all(
          (data.items || []).map(async (repo) => {
            const langResponse = await fetch(repo.languages_url);
            const langData = await langResponse.json();
            // langData est un objet style { "JavaScript": 1234, "CSS": 500 }
            // On ne récupère que les noms (les clés de l'objet)
            const allLanguages = Object.keys(langData);

            return {
              title: repo.name,
              description: repo.description || "No description provided",
              tags: allLanguages, // <--- Ici on a maintenant TOUS les langages
              link: repo.html_url,
            };
          })
        );

        setRepos(reposWithLanguages);
      } catch (error) {
        console.error("Erreur GitHub API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  if (loading) {
    return <section className="pb-16 px-4 max-w-2xl mx-auto text-center">Chargement...</section>;
  }

  return (
    <section id="projects" className="pb-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-6">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {repos.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-sm capitalize">{project.title.replace(/-/g, ' ')}</h3>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium"
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