import avatar from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-16 px-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
        <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full border-2 border-border" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Hey, i'm Latif 👋
          </h1>
          <p className="text-muted-foreground font-medium">
            Student
          </p>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        I'm a passionate developer based in Switzerland 🇨🇭, who loves creating modern and fancy web experiences. 
        At the moment i'm specialising in{" "}
        <a href="https://adonisjs.com/" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">AdonisJs</a> and{" "}
        <a href="https://vuejs.org/" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">Vue.js</a> development, 
        always searching for new challenges and techs.
      </p>
    </section>
  );
};

export default HeroSection;
