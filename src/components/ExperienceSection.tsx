const experiences = [
  {
    period: "2023 - Présent",
    role: "Lead Développeur Full Stack",
    company: "TechCorp",
    description:
      "Direction technique d'une équipe de 5 développeurs. Développement d'applications web performantes avec React, Node.js et PostgreSQL.",
  },
  {
    period: "2021 - 2023",
    role: "Développeur Frontend",
    company: "WebAgency",
    description:
      "Création d'interfaces utilisateur modernes et responsive. Mise en place de design systems et optimisation des performances.",
  },
  {
    period: "2020 - 2021",
    role: "Développeur Junior",
    company: "StartupLab",
    description:
      "Développement de features front et back sur des projets variés. Première expérience avec les architectures microservices.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="pb-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-6">Expérience</h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-6 border-l-2 border-border">
            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
            <p className="text-xs font-medium text-muted-foreground mb-1">{exp.period}</p>
            <h3 className="font-semibold text-sm">{exp.role}</h3>
            <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
