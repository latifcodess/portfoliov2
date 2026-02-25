import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const DISCORD_ID = "584393278812848151";

const DiscordSection = () => {
  const [presence, setPresence] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("wss://api.lanyard.rest/socket");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.op === 1) {
        socket.send(
          JSON.stringify({
            op: 2,
            d: { subscribe_to_id: DISCORD_ID },
          }),
        );
      }
      if (data.op === 0) {
        setPresence(data.d);
      }
    };

    return () => socket.close();
  }, []);

  const user = presence?.discord_user;
  const statusMap = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  };
  const statusColor = presence?.discord_status
    ? statusMap[presence.discord_status]
    : "bg-gray-500";

  // On cherche l'activité principale (Jeu ou VS Code)
  const activity = presence?.activities?.find((a) => a.type === 0);

  return (
    <section id="discord" className="pb-16 px-4 max-w-2xl mx-auto font-sans">
      <h2 className="text-lg font-semibold mb-6">Discord</h2>

      <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow cursor-default">
        {/* Avatar avec indicateur de statut */}
        <div className="relative shrink-0">
          {user?.avatar ? (
            <img
              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`}
              alt="Avatar"
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
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-sm text-foreground leading-tight">
              {user?.global_name || user?.username || "Loading..."}
            </h3>
            <span className="text-xs text-muted-foreground opacity-70">
              {user?.username ? `@${user.username}` : ""}
            </span>
          </div>

          <div className="mt-1">
            {activity ? (
              <div className="flex items-center gap-3 mt-2 py-1">
                {/* Logo plus petit et discret */}
                <div className="relative shrink-0 w-10 h-10">
                  {activity.assets?.large_image ? (
                    <img
                      src={
                        activity.assets.large_image.startsWith("mp:external")
                          ? activity.assets.large_image.replace(
                              /mp:external\/.*\/https\//,
                              "https://",
                            )
                          : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`
                      }
                      className="w-full h-full object-cover rounded-md border border-border/50"
                      alt="Activity Icon"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted rounded-md flex items-center justify-center border border-border/50">
                      <MessageCircle className="w-4 h-4 text-muted-foreground/50" />
                    </div>
                  )}
                </div>

                {/* Texte compact */}
                <div className="flex flex-col min-w-0">
                  <p className="text-[12px] font-medium text-foreground truncate leading-none">
                    {activity.name === "Visual Studio Code" ||
                    activity.name === "Code"
                      ? "VS Code"
                      : activity.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate leading-tight mt-0.5">
                    {activity.details || activity.state || "Active"}
                  </p>
                </div>
              </div>
            ) : (
              /* Statut simple si rien ne tourne */
              <p className="text-[11px] text-muted-foreground mt-1 truncate opacity-80">
                {presence?.activities.find((a) => a.type === 4)?.state ||
                  "Currently offline"}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
