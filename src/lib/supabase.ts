import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

// Create a strongly typed Supabase client
export const supabase = createClientComponentClient<Database>({
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

// Function to create or get the storage bucket with better error handling
export async function createBlogImagesBucket() {
  try {
    // First check if bucket exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    
    if (listError) {
      if (listError.message.includes('storage not enabled')) {
        console.error('Supabase Storage is not enabled for this project');
        return false;
      }
      console.error('Error listing buckets:', listError);
      return false;
    }

    const bucketExists = buckets?.some(bucket => bucket.name === 'blog-images');
    
    if (!bucketExists) {
      const { error: createError } = await supabase.storage.createBucket('blog-images', {
        public: true,
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        fileSizeLimit: 5242880, // 5MB
      });

      if (createError) {
        if (createError.message.includes('duplicate key value')) {
          // Bucket already exists but wasn't listed (possible race condition)
          return true;
        }
        console.error('Error creating bucket:', createError);
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('Error managing bucket:', error);
    return false;
  }
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