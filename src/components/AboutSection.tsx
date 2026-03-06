import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import interiorImg from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Place Where <span className="text-gold-gradient">Flavors</span> Come Alive
            </h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                Clock Tower Cafe cum Restaurant is a cozy place where people come together to enjoy delicious food, refreshing drinks, and a warm dining experience.
              </p>
              <p>
                Nestled in the heart of the city, our restaurant offers a perfect blend of traditional flavors and modern culinary artistry. Every dish is crafted with love, using the freshest ingredients and authentic recipes passed down through generations.
              </p>
              <p>
                Whether you're here for a quick coffee, a family dinner, or a special celebration, Clock Tower promises an experience that lingers in your memory long after the last bite.
              </p>
            </div>
            <div className="flex gap-12 mt-8">
              {[
                { num: "5+", label: "Years of Service" },
                { num: "50+", label: "Menu Items" },
                { num: "10K+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-primary">{stat.num}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src={interiorImg}
              alt="Clock Tower Cafe Interior"
              className="rounded-sm w-full h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-card gold-border p-6 rounded-sm hidden md:block">
              <p className="font-display text-2xl font-bold text-primary">Est. 2019</p>
              <p className="text-muted-foreground text-sm">Serving with Love</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
