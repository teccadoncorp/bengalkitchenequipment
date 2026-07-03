import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { listCategories, createCategory, updateCategory } from '../../lib/api/categories';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';

interface CategoryFormValues {
  id: string;
  name: string;
  icon: string;
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function AdminCategoryForm() {
  const { id } = useParams<{ id: string }>();
  const isEdit = !!id;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    defaultValues: { id: '', name: '', icon: '' },
  });

  const name = watch('name');

  useEffect(() => {
    if (!isEdit) {
      setValue('id', slugify(name || ''));
    }
  }, [name, isEdit, setValue]);

  useEffect(() => {
    if (!id) return;
    listCategories()
      .then((categories) => {
        const category = categories.find((c) => c.id === id);
        if (category) {
          reset({ id: category.id, name: category.name, icon: category.icon });
        } else {
          toast.error('Category not found.');
        }
      })
      .catch(() => toast.error('Failed to load category.'))
      .finally(() => setLoading(false));
  }, [id, reset]);

  const onSubmit = async (values: CategoryFormValues) => {
    if (!values.id) {
      toast.error('Category slug could not be generated from the name.');
      return;
    }

    setSubmitting(true);
    try {
      if (isEdit) {
        await updateCategory(values.id, { name: values.name, icon: values.icon });
        toast.success('Category updated.');
      } else {
        await createCategory({ id: values.id, name: values.name, icon: values.icon });
        toast.success('Category created.');
      }
      navigate('/admin/categories');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to save category.');
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
        <CardTitle>{isEdit ? 'Edit Category' : 'New Category'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register('name', { required: 'Name is required' })} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="id">Slug</Label>
            <Input id="id" disabled {...register('id', { required: true })} />
            <p className="text-xs text-muted-foreground">
              Auto-generated from the name. Cannot be changed after creation.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Icon Image</Label>
            <Controller
              name="icon"
              control={control}
              render={({ field }) => (
                <ImageUploader value={field.value} onChange={field.onChange} folder="categories" />
              )}
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Category'}
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate('/admin/categories')}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
