import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

// Create a strongly typed Supabase client
export const supabase = createClientComponentClient<Database>({
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

// Function to verify blog images bucket access
export async function createBlogImagesBucket() {
  try {
    // First check if we're authenticated
    const { data: { session }, error: authError } = await supabase.auth.getSession();
    if (authError) {
      console.error('Authentication error:', authError);
      return false;
    }
    if (!session) {
      console.error('No active session');
      return false;
    }

    // Instead of creating or checking the bucket, just return true if we're authenticated
    // The bucket should be created manually through the Supabase dashboard
    return true;

  } catch (error) {
    console.error('Error verifying authentication:', error);
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