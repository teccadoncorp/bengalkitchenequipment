import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
                        src="/logo.png" // replace with your logo path
                        alt="Bengal Kitchen Logo"
                        className="w-50  object-contain rounded"
                      />
            <p className="text-sm text-muted-foreground">
              Your trusted partner for premium kitchen equipment and solutions. Quality products for professional and home kitchens.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#categories" className="hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#cookware" className="hover:text-primary transition-colors">Cookware</a></li>
              <li><a href="#appliances" className="hover:text-primary transition-colors">Appliances</a></li>
              <li><a href="#gas-stoves" className="hover:text-primary transition-colors">Gas Stoves</a></li>
              <li><a href="#utensils" className="hover:text-primary transition-colors">Utensils</a></li>
              <li><a href="#mixers" className="hover:text-primary transition-colors">Mixers & Grinders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>+91 8777265780</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>info@bengalkitchen.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>West Bengal, India</span>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/918777265780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Bengal Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
