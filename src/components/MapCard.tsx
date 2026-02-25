import { MapPin } from "lucide-react";
import avatar from "@/assets/avatar.png";

const MapCard = () => {
  return (
    <section className="pb-16 px-4 max-w-2xl mx-auto">
      <div className="relative rounded-xl overflow-hidden border border-border h-[200px]">
        <iframe
          title="Lausanne, Switzerland"
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.5500%2C46.5000%2C6.7000%2C46.5700&layer=mapnik"
          className="w-full h-full border-0 grayscale dark:invert dark:hue-rotate-180 pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />

        {/* Avatar pin centered on Lausanne */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none flex flex-col items-center">
          <img
            src={avatar}
            alt="Latif"
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
          />
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white -mt-[1px]" />
        </div>

        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-white" />
          <span className="text-white font-semibold text-sm">Lausanne 🇨🇭</span>
        </div>
      </div>
    </section>
  );
};

export default MapCard;
