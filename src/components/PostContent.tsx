'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose dark:prose-invert lg:prose-lg prose-img:rounded-lg prose-img:mx-auto prose-headings:font-light prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-headings:text-black dark:prose-headings:text-white">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              {...props}
              className="rounded-lg mx-auto"
              alt={props.alt || ''}
              loading="lazy"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 