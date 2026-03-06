import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request sent! We'll confirm your booking shortly.");
    setForm({ name: "", phone: "", date: "", time: "", guests: "2" });
  };

  return (
    <section id="reserve" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Reservations</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Reserve Your <span className="text-gold-gradient">Table</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-light">
            Book your table in advance and we'll have everything ready for you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card p-8 md:p-10 rounded-sm gold-border space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-body">Full Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors font-body"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-body">Phone Number</label>
              <input
                type="tel"
                required
                maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors font-body"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-body">Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors font-body"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-body">Time</label>
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors font-body"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-body">Guests</label>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors font-body"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gold-gradient text-primary-foreground py-4 rounded-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity text-sm"
          >
            Reserve Now
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
