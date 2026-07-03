import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useCategories } from '../../hooks/useCategories';
import { deleteCategory } from '../../lib/api/categories';
import { Button } from '../../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../components/ui/alert-dialog';
import { Pencil, Trash2, Plus } from 'lucide-react';

const FK_VIOLATION_CODE = '23503';

export function AdminCategoryList() {
  const { categories, loading, error, refetch } = useCategories();
  const realCategories = categories.filter((c) => c.id !== 'all');

  const handleDelete = async (id: string, name: string) => {
    try {
      await deleteCategory(id);
      toast.success('Category deleted.');
      refetch();
    } catch (err) {
      const code = (err as { code?: string })?.code;
      if (code === FK_VIOLATION_CODE) {
        toast.error(`Cannot delete "${name}" — some products still use this category.`);
      } else {
        toast.error(err instanceof Error ? err.message : 'Failed to delete category.');
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <Button asChild>
          <Link to="/admin/categories/new">
            <Plus className="mr-2 h-4 w-4" />
            New Category
          </Link>
        </Button>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : error ? (
        <p className="text-destructive">Failed to load categories.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Icon</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {realCategories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="h-12 w-12 object-cover rounded"
                  />
                </TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell className="text-muted-foreground">{category.id}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link to={`/admin/categories/${category.id}/edit`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete "{category.name}"?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This cannot be undone. Categories still used by products can't be
                          deleted.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(category.id, category.name)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
