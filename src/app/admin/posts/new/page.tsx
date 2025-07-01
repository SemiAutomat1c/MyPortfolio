'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import PostEditor from '@/components/PostEditor';
import debounce from 'lodash/debounce';

// Function to convert HTML content to MDX compatible format
const processContent = (content: string): string => {
  return content
    // Fix img tags
    .replace(/<img([^>]*)>/g, (match, attributes) => {
      // Extract src and alt from attributes
      const src = attributes.match(/src="([^"]*)"/)?.[1] || '';
      const alt = attributes.match(/alt="([^"]*)"/)?.[1] || '';
      return `![${alt}](${src})`;
    })
    // Convert other HTML tags to markdown
    .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<h1>(.*?)<\/h1>/g, '# $1\n')
    .replace(/<h2>(.*?)<\/h2>/g, '## $1\n')
    .replace(/<h3>(.*?)<\/h3>/g, '### $1\n')
    .replace(/<ul>(.*?)<\/ul>/g, '$1\n')
    .replace(/<li>(.*?)<\/li>/g, '- $1\n')
    .replace(/<code>(.*?)<\/code>/g, '`$1`')
    .replace(/<pre><code>(.*?)<\/code><\/pre>/g, '```\n$1\n```')
    .trim();
};

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [slug, setSlug] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCheckingSlug, setIsCheckingSlug] = useState(false);
  const router = useRouter();

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const checkSlugExists = async (slug: string): Promise<boolean> => {
    try {
      const { count } = await supabase
        .from('posts')
        .select('*', { count: 'exact', head: true })
        .eq('slug', slug);
      
      return count !== null && count > 0;
    } catch (error) {
      console.error('Error checking slug:', error);
      return false;
    }
  };

  // Debounced version of slug checking
  const debouncedCheckSlug = useCallback(
    debounce(async (baseSlug: string) => {
      if (!baseSlug) return;
      
      setIsCheckingSlug(true);
      try {
        let finalSlug = baseSlug;
        let counter = 1;
        let exists = await checkSlugExists(finalSlug);
        
        while (exists && counter < 100) { // Limit to prevent infinite loops
          finalSlug = `${baseSlug}-${counter}`;
          exists = await checkSlugExists(finalSlug);
          counter++;
        }
        
        setSlug(finalSlug);
      } catch (error) {
        console.error('Error in slug check:', error);
      } finally {
        setIsCheckingSlug(false);
      }
    }, 500),
    []
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    if (newTitle) {
      const baseSlug = generateSlug(newTitle);
      setSlug(baseSlug); // Set initial slug immediately
      debouncedCheckSlug(baseSlug); // Check uniqueness after delay
    } else {
      setSlug('');
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSlug = generateSlug(e.target.value);
    setSlug(newSlug);
    debouncedCheckSlug(newSlug);
  };

  const handleSubmit = async (e: React.FormEvent, isDraft: boolean = true) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate inputs
      if (!title) throw new Error('Title is required');
      if (!content) throw new Error('Content is required');
      if (!excerpt) throw new Error('Excerpt is required');
      if (!slug) throw new Error('Slug is required');

      // Final slug check before submission
      const exists = await checkSlugExists(slug);
      if (exists) {
        throw new Error('This URL slug is already taken. Please choose a different one.');
      }

      const processedContent = processContent(content);

      const { data, error } = await supabase
        .from('posts')
        .insert([
          {
            title,
            content: processedContent,
            excerpt,
            slug,
            published: !isDraft,
            tags: [],
          },
        ])
        .select()
        .single();

      if (error) throw error;

      router.push('/admin/posts');
    } catch (error: any) {
      console.error('Error creating post:', error);
      setError(error.message || 'Failed to create post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedCheckSlug.cancel();
    };
  }, [debouncedCheckSlug]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-light text-black dark:text-white">New Post</h1>
      </div>

      <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-8">
        <div>
          <label htmlFor="title" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 block w-full border-0 border-b border-gray-200 dark:border-gray-800 focus:border-gray-900 dark:focus:border-gray-100 focus:ring-0 bg-transparent text-black dark:text-white text-lg pb-2"
            required
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
            URL Slug
          </label>
          <div className="relative">
            <input
              type="text"
              id="slug"
              value={slug}
              onChange={handleSlugChange}
              className="mt-1 block w-full border-0 border-b border-gray-200 dark:border-gray-800 focus:border-gray-900 dark:focus:border-gray-100 focus:ring-0 bg-transparent text-black dark:text-white pb-2"
              required
            />
            {isCheckingSlug && (
              <p className="mt-1 text-sm text-blue-500 dark:text-blue-400">
                Checking availability...
              </p>
            )}
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              This will be the URL of your post. It must be unique.
            </p>
          </div>
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            className="mt-1 block w-full border border-gray-200 dark:border-gray-800 focus:border-gray-900 dark:focus:border-gray-100 focus:ring-0 bg-transparent text-black dark:text-white p-4 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
            Content
          </label>
          <PostEditor content={content} onChange={setContent} />
        </div>

        {error && (
          <div className="border border-red-200 dark:border-red-800 p-4 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          </div>
        )}

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="submit"
            disabled={loading || isCheckingSlug}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors disabled:opacity-50"
          >
            Save as Draft
          </button>
          <button
            type="button"
            disabled={loading || isCheckingSlug}
            onClick={(e) => handleSubmit(e, false)}
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors disabled:opacity-50"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
} 