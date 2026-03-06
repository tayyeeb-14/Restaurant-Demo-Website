import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import rollsImg from "@/assets/food-rolls.jpg";
import noodlesImg from "@/assets/food-noodles.jpg";
import paneerImg from "@/assets/food-paneer-roll.jpg";
import coffeeImg from "@/assets/food-coffee.jpg";

const rollStation = [
  { name: "Veg Roll", price: "₹60", desc: "Fresh vegetables wrapped in crispy paratha" },
  { name: "Egg Roll", price: "₹60", desc: "Classic egg roll with tangy sauce" },
  { name: "Paneer Roll", price: "₹80", desc: "Spiced paneer in a warm wrap" },
  { name: "Paneer Cheese Roll", price: "₹100", desc: "Double cheese paneer delight" },
  { name: "Double Egg Roll", price: "₹80", desc: "Extra egg, extra flavor" },
  { name: "Chicken Roll", price: "₹80", desc: "Juicy chicken kathi roll" },
  { name: "Egg Chicken Katti Roll", price: "₹100", desc: "Best of both worlds" },
];

const noodleStation = [
  { name: "Egg Noodles", price: "₹80", desc: "Classic stir-fried egg noodles" },
  { name: "Egg Schezwan Noodles", price: "₹90", desc: "Fiery schezwan style noodles" },
  { name: "Chicken Singapore Noodles", price: "₹90", desc: "Aromatic Singapore flavors" },
  { name: "Hong Kong Chicken Noodles", price: "₹100", desc: "Bold Hong Kong style" },
  { name: "Triple Chicken Noodles", price: "₹120", desc: "Triple the chicken, triple the taste" },
];

const featured = [
  { img: rollsImg, name: "Chicken Roll", price: "₹80", desc: "Our signature kathi roll with tender chicken" },
  { img: noodlesImg, name: "Schezwan Noodles", price: "₹90", desc: "Fiery noodles tossed in authentic schezwan" },
  { img: paneerImg, name: "Paneer Cheese Roll", price: "₹100", desc: "Loaded with cottage cheese and melted cheese" },
  { img: coffeeImg, name: "Cappuccino", price: "₹60", desc: "Rich espresso with perfectly steamed milk" },
];

const SignatureDishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Our Specialties</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Signature <span className="text-gold-gradient">Dishes</span>
          </h2>
        </motion.div>

        {/* Featured cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {featured.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background rounded-sm overflow-hidden gold-border card-hover group"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                  <span className="text-primary font-semibold font-body">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Menu lists */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary" />
              Roll Station
            </h3>
            <div className="space-y-4">
              {rollStation.map((item) => (
                <div key={item.name} className="flex justify-between items-center border-b border-border pb-4 group">
                  <div>
                    <h4 className="font-body font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                    <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
                  </div>
                  <span className="text-primary font-semibold font-body whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary" />
              Noodles Station
            </h3>
            <div className="space-y-4">
              {noodleStation.map((item) => (
                <div key={item.name} className="flex justify-between items-center border-b border-border pb-4 group">
                  <div>
                    <h4 className="font-body font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                    <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
                  </div>
                  <span className="text-primary font-semibold font-body whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
