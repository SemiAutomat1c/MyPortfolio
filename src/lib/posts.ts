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

async function triggerRevalidation(paths: string[]) {
  for (const path of paths) {
    try {
      await fetch('/api/revalidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path }),
      });
    } catch (error) {
      console.error('Error revalidating path:', path, error);
    }
  }
}

export async function createPost(post: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .insert([post])
    .select()
    .single();

  if (error) {
    console.error('Error creating post:', error);
    return null;
  }

  await triggerRevalidation(['/posts', `/posts/${post.slug}`]);
  return data;
}

export async function updatePost(id: string, post: Partial<Post>): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .update(post)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating post:', error);
    return null;
  }

  await triggerRevalidation(['/posts', `/posts/${post.slug}`]);
  return data;
}

export async function deletePost(id: string, slug: string): Promise<boolean> {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting post:', error);
    return false;
  }

  await triggerRevalidation(['/posts', `/posts/${slug}`]);
  return true;
} 