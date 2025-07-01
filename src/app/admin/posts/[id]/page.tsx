'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { BlogPost } from '@/lib/supabase';
import PostEditor from '@/components/PostEditor';

export default function EditPost({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data: { session }, error: authError } = await supabase.auth.getSession();
        if (authError) throw authError;
        if (!session) {
          setError('Not authenticated. Please log in again.');
          return;
        }

        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', params.id)
          .single();

        if (error) throw error;
        if (!data) {
          setError('Post not found');
          return;
        }

        setPost(data);
        setContent(data.content || '');
      } catch (err: any) {
        console.error('Error fetching post:', err);
        setError(err.message || 'Failed to load post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [params.id]);

  const handleContentChange = async (newContent: string) => {
    setContent(newContent);
    try {
      const { error } = await supabase
        .from('posts')
        .update({ content: newContent })
        .eq('id', params.id);

      if (error) throw error;
    } catch (err: any) {
      console.error('Error saving post:', err);
      // Optionally show an error message to the user
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-light text-black dark:text-white">Edit Post</h1>
          <button
            onClick={() => router.back()}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Back to Posts
          </button>
        </div>
        <PostEditor content={content} onChange={handleContentChange} />
      </div>
    </div>
  );
} 