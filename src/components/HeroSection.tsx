import avatar from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-16 px-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
        <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full border-2 border-border" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Salut, je suis Alex 👋
          </h1>
          <p className="text-muted-foreground font-medium">
            Développeur Full Stack
          </p>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Je suis un développeur passionné basé en France 🇫🇷, qui adore créer des expériences web modernes et élégantes. 
        Actuellement, je me spécialise dans le développement{" "}
        <a href="#" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">React</a> et{" "}
        <a href="#" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">TypeScript</a>, 
        toujours à la recherche de nouveaux défis techniques.
      </p>
    </section>
  );
};

export default HeroSection;
