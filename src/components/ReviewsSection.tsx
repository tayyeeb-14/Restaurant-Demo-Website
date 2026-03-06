import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Great food and cozy atmosphere. One of the best places to eat in town. The noodles are absolutely amazing!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    text: "The paneer cheese roll is to die for! Amazing quality at such affordable prices. My family loves dining here.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    text: "Best coffee in town paired with wonderful desserts. The ambience makes it perfect for evening hangouts.",
    rating: 4,
  },
  {
    name: "Sneha Gupta",
    text: "We celebrated our anniversary here and it was magical. The staff is incredibly warm and the food is divine.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="text-gold-gradient">Guests</span> Say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-6 rounded-sm gold-border card-hover"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-4 w-4 ${j < review.rating ? "fill-primary text-primary" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <p className="font-display font-semibold text-foreground">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
