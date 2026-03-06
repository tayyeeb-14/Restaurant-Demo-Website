import { Clock } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-12 px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold text-foreground">
                Clock Tower <span className="text-primary">Cafe</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Great food, coffee & memorable moments since 2019.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Reviews"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Near Clock Tower, Main Market Road</p>
              <p>+91 98765 43210</p>
              <p>info@clocktowercafe.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Hours</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Mon–Sat: 10 AM – 10 PM</p>
              <p>Sunday: 11 AM – 10 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Clock Tower Cafe cum Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
