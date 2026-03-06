import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ShoppingBag } from "lucide-react";

const OrderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Quick Order</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Order <span className="text-gold-gradient">Online</span>
          </h2>
          <p className="text-muted-foreground font-light mb-10 max-w-xl mx-auto">
            Can't visit us? No worries! Order your favorite dishes and we'll deliver the Clock Tower experience to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 rounded-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity text-sm"
            >
              <Phone className="h-5 w-5" /> Call Restaurant
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-3 border border-primary text-primary px-8 py-4 rounded-sm font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
            >
              <ShoppingBag className="h-5 w-5" /> Order Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderSection;
