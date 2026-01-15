import { Card, CardContent } from './ui/card';
import type { CategoryType } from '../types/product';
import { categories }  from '../data/products';
interface CategoriesProps {
  onCategorySelect: (category:any) => void;
  selectedCategory: CategoryType;
}

export function Categories({ onCategorySelect, selectedCategory }: CategoriesProps) {


  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Browse by{' '}
            <span className="text-[#24C0FF]">
              Category
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of kitchen equipment organized by category.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <Card
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-xl transition-all duration-300
                  hover:shadow-xl
                  ${isSelected ? 'ring-2 ring-orange-600 shadow-lg' : ''}
                `}
              >
                {/* Full Image */}
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center
                    bg-black/60 transition-opacity duration-300

                    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                  `}
                >
                  {/* Title */}
                  <h3
                    className={`
                      text-white font-semibold tracking-wide text-center px-3

                      /* Mobile → bottom center */
                      absolute bottom-4 left-1/2 -translate-x-1/2 text-sm

                      /* Desktop → center on hover */
                      sm:static sm:translate-x-0 sm:text-base
                    `}
                  >
                    {category.name}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
