import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/button';
import { Upload } from 'lucide-react';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const BUCKET = 'product-images';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  folder: 'products' | 'categories';
}

function isManagedStorageUrl(url: string) {
  return url.includes(`/storage/v1/object/public/${BUCKET}/`);
}

function pathFromPublicUrl(url: string) {
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const index = url.indexOf(marker);
  return index === -1 ? null : url.slice(index + marker.length);
}

export function ImageUploader({ value, onChange, folder }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    if (file.size > MAX_FILE_SIZE_BYTES) {
      toast.error('Image must be 5MB or smaller.');
      return;
    }

    setUploading(true);
    const previousUrl = value;
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const path = `${folder}/${crypto.randomUUID()}-${sanitizedName}`;

    const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, file);

    if (uploadError) {
      setUploading(false);
      toast.error(`Upload failed: ${uploadError.message}`);
      return;
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    onChange(data.publicUrl);
    setUploading(false);

    if (previousUrl && isManagedStorageUrl(previousUrl)) {
      const oldPath = pathFromPublicUrl(previousUrl);
      if (oldPath) {
        supabase.storage
          .from(BUCKET)
          .remove([oldPath])
          .catch((err) => console.warn('Failed to clean up old image:', err));
      }
    }
  };

  return (
    <div className="space-y-3">
      {value && (
        <img
          src={value}
          alt="Preview"
          className="w-full max-w-xs h-40 object-cover rounded-md border"
        />
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <Button
        type="button"
        variant="outline"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
      >
        <Upload className="mr-2 h-4 w-4" />
        {uploading ? 'Uploading...' : value ? 'Replace Image' : 'Upload Image'}
      </Button>
    </div>
  );
}
