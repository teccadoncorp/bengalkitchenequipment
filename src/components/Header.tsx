import { useState } from 'react';
import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export function Header({ onNavigate, currentSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: '', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'categories', label: 'Categories' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info - hidden on mobile */}
        <div className="hidden md:flex items-center justify-end gap-4 py-2 border-b">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+91 8777265780</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>info@bengalkitchen.com</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div
              className="cursor-pointer flex items-center gap-3"
              onClick={() => handleNavClick('')}
            >
              {/* Logo Image */}
              <img
                src="/logo_sq.png" // replace with your image path
                alt="Bengal Kitchen Logo"
                className="w-10 h-10 object-contain rounded"
              />

              {/* Logo Text */}
              <div>
                <h1 className="text-2xl font-bold  text-[#24C0FF]">
                  Bengal Kitchen
                </h1>
                <p className="text-xs text-muted-foreground">
                  Premium Kitchen Equipment
                </p>
              </div>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-colors hover:text-primary ${
                  currentSection === item.id
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation - Right side drawer */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-3 text-left">
                      {/* Logo Image */}
                      <img
                        src="/logo_sq.png" // replace with your logo path
                        alt="Bengal Kitchen Logo"
                        className="w-10 h-10 object-contain rounded"
                      />

                      {/* Text */}
                      <div>
                        <h2 className="text-xl font-bold  text-[#24C0FF]">
                          Bengal Kitchen
                        </h2>
                        <p className="text-xs text-muted-foreground font-normal mt-1">
                          Premium Kitchen Equipment
                        </p>
                      </div>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left px-4 py-3 rounded-lg transition-colors ${
                        currentSection === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  {/* Contact info in mobile menu */}
                  <div className="mt-8 pt-8 border-t space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <span>+91 9775414426</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <span>info@bengalkitchen.com</span>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
