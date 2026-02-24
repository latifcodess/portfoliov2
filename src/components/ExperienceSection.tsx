const experiences = [
  {
    period: "2024 - Présent",
    role: "Student",
    company: "ETML",
    description:
      "Studying",
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
