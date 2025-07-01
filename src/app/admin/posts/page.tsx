'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { BlogPost, createBlogImagesBucket } from '@/lib/supabase';

// Loading component
function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white"></div>
    </div>
  );
}

// Posts table component
function PostsTable({ posts, onTogglePublish, onDelete }: { 
  posts: BlogPost[], 
  onTogglePublish: (post: BlogPost) => Promise<void>,
  onDelete: (id: string) => Promise<void>
}) {
  return (
    <div className="bg-white dark:bg-[#1a1b1e] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
      {posts.length === 0 ? (
        <div className="p-6 text-center text-gray-600 dark:text-gray-400">
          No posts found. Create your first post!
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="text-left text-gray-600 dark:text-gray-400 text-sm font-normal px-6 py-3">TITLE</th>
              <th className="text-left text-gray-600 dark:text-gray-400 text-sm font-normal px-6 py-3">STATUS</th>
              <th className="text-left text-gray-600 dark:text-gray-400 text-sm font-normal px-6 py-3">DATE</th>
              <th className="text-right text-gray-600 dark:text-gray-400 text-sm font-normal px-6 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-gray-200 dark:border-gray-800">
                <td className="px-6 py-4">
                  <div className="text-black dark:text-white">{post.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{post.excerpt}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    post.published 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                      : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                  }`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </td>
                <td className="px-6 py-4 text-right space-x-4">
                  <Link href={`/admin/posts/${post.id}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    Edit
                  </Link>
                  <button
                    onClick={() => onTogglePublish(post)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    {post.published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button
                    onClick={() => onDelete(post.id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default function AdminPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Initialize bucket and fetch posts
    const init = async () => {
      try {
        // Check if we're authenticated first
        const { data: { session }, error: authError } = await supabase.auth.getSession();
        if (authError) throw authError;
        if (!session) {
          setError('Not authenticated. Please log in again.');
          return;
        }

        // Try to create bucket
        const bucketResult = await createBlogImagesBucket();
        if (!bucketResult && retryCount < 3) {
          // If bucket creation fails, increment retry count and try again
          setRetryCount(prev => prev + 1);
          return;
        }

        await fetchPosts();
      } catch (err: any) {
        console.error('Initialization error:', err);
        setError(err.message || 'Failed to initialize. Please try refreshing the page.');
      }
    };
    
    init();
  }, [retryCount]);

  async function fetchPosts() {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      console.error('Error fetching posts:', error);
      setError(error.message || 'Failed to load posts. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function togglePublish(post: BlogPost) {
    try {
      const { error } = await supabase
        .from('posts')
        .update({ published: !post.published })
        .eq('id', post.id);

      if (error) throw error;
      await fetchPosts();
    } catch (error: any) {
      console.error('Error toggling publish status:', error);
      setError(error.message || 'Failed to update post status. Please try again.');
    }
  }

  async function deletePost(id: string) {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchPosts();
    } catch (error: any) {
      console.error('Error deleting post:', error);
      setError(error.message || 'Failed to delete post. Please try again.');
    }
  }

  const handleRetry = () => {
    setError(null);
    setRetryCount(0);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-light text-black dark:text-white">Posts</h1>
          <Link
            href="/admin/posts/new"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Post
          </Link>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
              <button
                onClick={handleRetry}
                className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        <Suspense fallback={<LoadingState />}>
          {loading ? (
            <LoadingState />
          ) : (
            <PostsTable 
              posts={posts} 
              onTogglePublish={togglePublish}
              onDelete={deletePost}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
} 