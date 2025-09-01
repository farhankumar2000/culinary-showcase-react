import { Link } from 'react-router-dom';
import { Utensils, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-primary" />
              <span className="text-2xl font-display font-bold">Bella Vista</span>
            </Link>
            <p className="text-accent-foreground/80 leading-relaxed">
              Experience fine dining like never before. We bring authentic flavors and exceptional service to create unforgettable moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-accent-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-accent-foreground/80">info@bellavista.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-accent-foreground/80">
                  123 Gourmet Street,<br />
                  Fine Dining District,<br />
                  Mumbai 400001
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div className="text-accent-foreground/80">
                  <div>Mon - Thu: 6:00 PM - 11:00 PM</div>
                  <div>Fri - Sun: 12:00 PM - 11:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            © 2024 Bella Vista Restaurant. All rights reserved. Crafted with passion for exceptional dining.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;