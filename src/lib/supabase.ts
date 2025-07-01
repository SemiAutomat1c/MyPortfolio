import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabase = createClientComponentClient();

// Function to create the storage bucket
export async function createBlogImagesBucket() {
  const { data, error } = await supabase.storage.createBucket('blog-images', {
    public: true,
    allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
    fileSizeLimit: 5242880, // 5MB
  });

  if (error) {
    console.error('Error creating bucket:', error);
    return false;
  }
  return true;
}

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  tags: string[];
}; 