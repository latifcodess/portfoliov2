import { MapPin } from "lucide-react";
import avatar from "@/assets/avatar.png";

const MapCard = () => {
  return (
<section className="pb-16 px-4 max-w-2xl mx-auto">
      {/* On utilise aspect-video ou aspect-[2/1] pour garder un ratio constant */}
      <div className="relative rounded-xl overflow-hidden border border-border aspect-video sm:h-[200px] w-full">
        <iframe
          title="Lausanne, Switzerland"
          // J'ai légèrement ajusté les coordonnées pour stabiliser le centre
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.5550%2C46.4950%2C6.7050%2C46.5650&layer=mapnik"
          className="absolute inset-0 w-[150%] h-[150%] -left-[25%] -top-[25%] border-0 grayscale dark:invert dark:hue-rotate-180 pointer-events-none"
          loading="lazy"
        />
        
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Conteneur de l'avatar : centré parfaitement dans le parent */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="flex flex-col items-center -translate-y-5"> 
            {/* Le translate-y-5 permet de compenser la pointe du pin pour que ce soit le BAS du pin qui touche le centre */}
            <img
              src={avatar}
              alt="Latif"
              className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
            />
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white -mt-[1px]" />
          </div>
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
