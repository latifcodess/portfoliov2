import { MessageCircle } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="pb-16 px-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(235,86%,65%)] text-white shrink-0">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">Discord</h3>
          <p className="text-sm text-muted-foreground">
            Retrouvez-moi sur Discord : <span className="font-medium text-foreground">halaltif</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
