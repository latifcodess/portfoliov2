import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const images = [
  { src: gallery1, alt: "Mon setup", className: "row-span-2" },
  { src: gallery2, alt: "Cerisiers en fleur", className: "" },
  { src: gallery3, alt: "Lac en montagne", className: "row-span-2" },
  { src: gallery4, alt: "Skyline", className: "" },
  { src: gallery5, alt: "Coffee shop", className: "" },
];

const GallerySection = () => {
  return (
    <section className="pb-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Galerie</h2>
      <div className="grid grid-cols-3 gap-3 auto-rows-[140px]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`rounded-xl overflow-hidden ${img.className}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-primary p-5">
        <p className="text-primary-foreground font-medium text-sm italic">
          "Créer un produit que les gens recommanderont à leurs amis."
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
