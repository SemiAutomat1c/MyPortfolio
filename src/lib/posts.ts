import { supabase } from './supabase';

export type Post = {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
};

export async function getAllPosts(includeUnpublished = false): Promise<Post[]> {
  const query = supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (!includeUnpublished) {
    query.eq('published', true);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data || [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !data) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data;
} 