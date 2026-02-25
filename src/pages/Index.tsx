import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MapCard from "@/components/MapCard";
import GallerySection from "@/components/GallerySection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import DiscordSection from "@/components/DiscordSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MapCard />
        <GallerySection />
        <ExperienceSection />
        <ProjectsSection />
        <DiscordSection />
        <ContactSection />
      </main>
      <footer className="text-center py-8 text-xs text-muted-foreground">
        © 2026 Latif Krasniqi. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
