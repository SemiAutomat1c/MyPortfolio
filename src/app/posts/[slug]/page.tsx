import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import PostContent from '@/components/PostContent';

export const fetchCache = 'force-no-store';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Ryan Deniega`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-24">
      <article className="prose dark:prose-invert lg:prose-lg mx-auto">
        <div className="mb-8">
          <h1 className="mb-2">{post.title}</h1>
          <div className="text-gray-600 dark:text-gray-400 mb-4">
            {new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <div className="flex items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <PostContent content={post.content} />
      </article>
    </div>
  );
} 