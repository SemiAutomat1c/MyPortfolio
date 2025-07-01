import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const fetchCache = 'force-no-store';

export const metadata: Metadata = {
  title: 'Blog Posts | Ryan Deniega',
  description: 'Blog posts and articles about web development, technology, and my journey as a developer',
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="container max-w-4xl mx-auto px-4 py-24">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Latest blog posts</h1>
        <Link 
          href="/admin/posts" 
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          Admin
        </Link>
      </div>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-sm">
            <div className="text-gray-600 dark:text-gray-400 mb-2">{new Date(post.created_at).toLocaleDateString('en-US', { 
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              <Link href={`/posts/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/posts/${post.slug}`} className="text-primary hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
} 