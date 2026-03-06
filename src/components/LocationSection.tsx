import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Find Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gold-gradient">Location</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <iframe
              title="Clock Tower Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5!2d80.94!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
              className="w-full h-[400px] rounded-sm gold-border"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground font-light">
                  Near Clock Tower, Main Market Road<br />
                  City Center, India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground font-light">+91 98765 43210</p>
                <p className="text-muted-foreground font-light">+91 91234 56789</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Opening Hours</h3>
                <p className="text-muted-foreground font-light">Monday – Saturday: 10:00 AM – 10:00 PM</p>
                <p className="text-muted-foreground font-light">Sunday: 11:00 AM – 10:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
