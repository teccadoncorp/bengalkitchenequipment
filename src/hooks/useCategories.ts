import { useCallback, useEffect, useState } from 'react';
import { listCategories } from '../lib/api/categories';
import type { Category } from '../types/product';

const ALL_CATEGORY: Category = {
  id: 'all',
  name: 'All Products',
  icon: '/product/product-1.jpg',
};

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await listCategories();
      setCategories([ALL_CATEGORY, ...data]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load categories'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { categories, loading, error, refetch };
}
