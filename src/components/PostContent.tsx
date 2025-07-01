'use client';

import { useEffect, useRef } from 'react';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = content;
    }
  }, [content]);

  return (
    <div 
      ref={contentRef}
      className="prose dark:prose-invert lg:prose-lg prose-img:rounded-lg prose-img:mx-auto prose-headings:font-light prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-headings:text-black dark:prose-headings:text-white"
    />
  );
} 