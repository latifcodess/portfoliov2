import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

type GalleryItem =
  | { type: "image"; src: string; alt: string; className: string }
  | { type: "quote"; text: string; className: string };

const items: GalleryItem[] = [
  { type: "image", src: gallery1, alt: "Mon setup", className: "row-span-2" },
  { type: "image", src: gallery2, alt: "Cerisiers en fleur", className: "" },
  { type: "image", src: gallery3, alt: "Lac en montagne", className: "row-span-2" },
  { type: "image", src: gallery4, alt: "Skyline", className: "" },
  { type: "quote", text: "Créer un produit que les gens recommanderont à leurs amis.", className: "" },
];

const GallerySection = () => {
  return (
    <section className="pb-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Galerie</h2>
      <div className="grid grid-cols-3 gap-3 auto-rows-[140px]">
        {items.map((item, i) =>
          item.type === "image" ? (
            <div key={i} className={`rounded-xl overflow-hidden ${item.className}`}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ) : (
            <div key={i} className={`rounded-xl bg-primary flex items-center p-4 ${item.className}`}>
              <p className="text-primary-foreground font-medium text-sm italic">
                "{item.text}"
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default GallerySection;
