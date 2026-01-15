import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ChefHat, Package, Star, MessageCircle } from 'lucide-react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Products } from './components/Products';
import { About } from './components/About';
import { Contact } from './components/Contact';
import type { CategoryType } from './types/product';
import { Toaster } from './components/ui/sonner';
import { Card, CardContent } from './components/ui/card';

export default function App() {
  const values = [
    {
      icon: Star,
      title: 'Quality First',
      description: 'We source only the finest kitchen equipment from trusted manufacturers to ensure durability and performance.'
    },
    {
      icon: ChefHat,
      title: 'Expert Guidance',
      description: 'Our team of kitchen equipment specialists provides personalized recommendations for your specific needs.'
    },
    {
      icon: Package,
      title: 'Wide Selection',
      description: 'From cookware to appliances, we offer an extensive range of products for every kitchen requirement.'
    },
    {
      icon: MessageCircle,
      title: 'Customer Support',
      description: 'Dedicated support team available to assist you with product selection and after-sales service.'
    }
  ];
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (category: CategoryType) => {
    setSelectedCategory(category);
    navigate('/products');

    setTimeout(() => {
      const el = document.getElementById('products');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentSection={location.pathname} />

      <main className="flex-1">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero onNavigate={handleNavigate} />

                <div id="categories">
                  <Categories
                    onCategorySelect={handleCategorySelect}
                    selectedCategory={selectedCategory}
                  />
                </div>

                <div id="products">
                  <Products selectedCategory={selectedCategory} />
                </div>
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl mb-4">Why Choose Us</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We pride ourselves on delivering excellence in every aspect of our service.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (  
                      <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6 space-y-4">
                          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="font-semibold">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </>
            }
          />

          {/* CATEGORIES */}
          <Route
            path="/categories"
            element={
              <Categories
                onCategorySelect={handleCategorySelect}
                selectedCategory={selectedCategory}
              />
            }
          />

          {/* PRODUCTS */}
          <Route
            path="/products"
            element={
              <div id="products">
                <Products selectedCategory={selectedCategory} />
              </div>
            }
          />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
