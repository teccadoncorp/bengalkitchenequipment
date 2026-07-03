import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useCategories } from '../../hooks/useCategories';
import { getProduct, createProduct, updateProduct } from '../../lib/api/products';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

interface ProductFormValues {
  name: string;
  category: string;
  description: string;
  image: string;
  featuresText: string;
  specificationsText: string;
}

function featuresToText(features: string[]) {
  return features.join('\n');
}

function textToFeatures(text: string) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function specificationsToText(specifications: { [key: string]: string }) {
  return Object.entries(specifications)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
}

function textToSpecifications(text: string) {
  const result: { [key: string]: string } = {};
  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const separatorIndex = trimmed.indexOf(':');
    if (separatorIndex === -1) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (key) result[key] = value;
  }
  return result;
}

export function AdminProductForm() {
  const { id } = useParams<{ id: string }>();
  const isEdit = !!id;
  const navigate = useNavigate();
  const { categories } = useCategories();
  const realCategories = categories.filter((c) => c.id !== 'all');
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>({
    defaultValues: {
      name: '',
      category: '',
      description: '',
      image: '',
      featuresText: '',
      specificationsText: '',
    },
  });

  useEffect(() => {
    if (!id) return;
    getProduct(Number(id))
      .then((product) => {
        reset({
          name: product.name,
          category: product.category,
          description: product.description,
          image: product.image,
          featuresText: featuresToText(product.features),
          specificationsText: specificationsToText(product.specifications),
        });
      })
      .catch(() => toast.error('Failed to load product.'))
      .finally(() => setLoading(false));
  }, [id, reset]);

  const onSubmit = async (values: ProductFormValues) => {
    setSubmitting(true);
    const payload = {
      name: values.name,
      category: values.category,
      description: values.description,
      image: values.image,
      features: textToFeatures(values.featuresText),
      specifications: textToSpecifications(values.specificationsText),
    };

    try {
      if (isEdit) {
        await updateProduct(Number(id), payload);
        toast.success('Product updated.');
      } else {
        await createProduct(payload);
        toast.success('Product created.');
      }
      navigate('/admin/products');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to save product.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <p className="text-muted-foreground">Loading...</p>;
  }

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>{isEdit ? 'Edit Product' : 'New Product'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register('name', { required: 'Name is required' })} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Controller
              name="category"
              control={control}
              rules={{ required: 'Category is required' }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {realCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && (
              <p className="text-sm text-destructive">{errors.category.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={3}
              {...register('description', { required: 'Description is required' })}
            />
            {errors.description && (
              <p className="text-sm text-destructive">{errors.description.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Image</Label>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <ImageUploader value={field.value} onChange={field.onChange} folder="products" />
              )}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="featuresText">Features (one per line)</Label>
            <Textarea id="featuresText" rows={5} {...register('featuresText')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specificationsText">
              Specifications (one per line, "Key: Value")
            </Label>
            <Textarea
              id="specificationsText"
              rows={5}
              placeholder="Material: Stainless Steel"
              {...register('specificationsText')}
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Product'}
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate('/admin/products')}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
