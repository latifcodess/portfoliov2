import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const DiscordSection = () => {
  const [presence, setPresence] = useState(null);
  const DISCORD_ID = "584393278812848151";

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(
          `https://api.lanyard.rest/v1/users/${DISCORD_ID}`,
        );
        const { data } = await response.json();
        setPresence(data);
      } catch (err) {
        console.error("Lanyard error:", err);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, [DISCORD_ID]);

  const user = presence?.discord_user;
  const clanTag = presence?.discord_user?.primary_guild?.tag;
  const displayName = user?.global_name || user?.username || "Chargement...";
  const username = user?.username ? `@${user.username}` : "";

  const statusMap = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  };
  const statusColor = presence?.discord_status ? statusMap[presence.discord_status] : "bg-gray-500";

  const getActivityText = () => {
    if (!presence) return "Chargement...";
    if (presence.listening_to_spotify) return `Écoute ${presence.spotify.track}`;
    
    // On ignore le type 4 (Custom Status) pour trouver le vrai jeu/logiciel
    const realActivity = presence.activities.find((a) => a.type !== 4);
    if (realActivity) {
      const name = realActivity.name === "Visual Studio Code" ? "VS Code" : realActivity.name;
      return `Sur ${name}`;
    }

    const customStatus = presence.activities.find((a) => a.type === 4);
    return customStatus?.state || "Actuellement inactif";
  };

  return (
    <section className="pb-16 px-4 max-w-2xl mx-auto font-sans">
      <h2 className="text-lg font-semibold mb-6">Discord</h2>
      
      {/* Modification ici pour matcher exactement le style des projets */}
      <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow cursor-default">
        
        {/* Avatar avec point de statut */}
        <div className="relative shrink-0">
          {user?.avatar ? (
            <img
              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`}
              alt={displayName}
              className="w-12 h-12 rounded-full border border-border"
            />
          ) : (
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white">
              <MessageCircle className="w-6 h-6" />
            </div>
          )}
          <span
            className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-card ${statusColor}`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-sm text-foreground leading-tight">
              {displayName}
            </h3>

            {clanTag && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-secondary text-secondary-foreground border border-border tracking-wider">
                {clanTag}
              </span>
            )}

            <span className="text-xs text-muted-foreground opacity-70">
              {username}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
            <p className="truncate text-xs opacity-90">{getActivityText()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;