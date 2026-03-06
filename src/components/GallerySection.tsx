import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import rollsImg from "@/assets/food-rolls.jpg";
import noodlesImg from "@/assets/food-noodles.jpg";
import coffeeImg from "@/assets/food-coffee.jpg";
import dessertImg from "@/assets/food-dessert.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import diningImg from "@/assets/gallery-dining.jpg";
import paneerImg from "@/assets/food-paneer-roll.jpg";

const images = [
  { src: interiorImg, alt: "Restaurant ambience", span: "md:col-span-2 md:row-span-2" },
  { src: noodlesImg, alt: "Schezwan noodles", span: "" },
  { src: coffeeImg, alt: "Cappuccino", span: "" },
  { src: diningImg, alt: "Fine dining setup", span: "md:col-span-2" },
  { src: rollsImg, alt: "Chicken rolls", span: "" },
  { src: dessertImg, alt: "Chocolate dessert", span: "" },
  { src: paneerImg, alt: "Paneer roll", span: "" },
  { src: heroBg, alt: "Restaurant evening", span: "md:col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Visual Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gold-gradient">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`overflow-hidden rounded-sm group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
