import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { useCategories } from '../../hooks/useCategories';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export function AdminDashboard() {
  const { products, loading: productsLoading } = useProducts();
  const { categories, loading: categoriesLoading } = useCategories();
  const realCategoryCount = categories.filter((c) => c.id !== 'all').length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/admin/products">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">
                {productsLoading ? '...' : products.length}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Manage products</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/admin/categories">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">
                {categoriesLoading ? '...' : realCategoryCount}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Manage categories</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
