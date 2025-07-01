'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface PostEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const PostEditor = ({ content, onChange }: PostEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert focus:outline-none max-w-none',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const handleImageUpload = async (file: File) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      // Insert image using markdown syntax
      const imageMarkdown = `![${file.name}](${publicUrl})`;
      editor?.chain().focus().insertContent(imageMarkdown).run();
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const toolbar = [
    {
      icon: 'format_bold',
      action: () => {
        if (!editor) return;
        editor.chain().focus().toggleBold().run();
      },
      isActive: () => editor?.isActive('bold'),
    },
    {
      icon: 'format_italic',
      action: () => {
        if (!editor) return;
        editor.chain().focus().toggleItalic().run();
      },
      isActive: () => editor?.isActive('italic'),
    },
    {
      icon: 'format_list_bulleted',
      action: () => {
        if (!editor) return;
        editor.chain().focus().toggleBulletList().run();
      },
      isActive: () => editor?.isActive('bulletList'),
    },
    {
      icon: 'format_list_numbered',
      action: () => {
        if (!editor) return;
        editor.chain().focus().toggleOrderedList().run();
      },
      isActive: () => editor?.isActive('orderedList'),
    },
    {
      icon: 'code',
      action: () => {
        if (!editor) return;
        editor.chain().focus().toggleCodeBlock().run();
      },
      isActive: () => editor?.isActive('codeBlock'),
    },
  ];

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
      <div className="border-b border-gray-200 dark:border-gray-800 p-3 flex items-center gap-2">
        {toolbar.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={item.action}
            className={`p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors ${
              item.isActive?.() ? 'text-black dark:text-white' : ''
            }`}
          >
            <span className="material-icons text-[20px]">{item.icon}</span>
          </button>
        ))}
        <button 
          type="button"
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
              const file = (e.target as HTMLInputElement).files?.[0];
              if (file) handleImageUpload(file);
            };
            input.click();
          }}
        >
          <span className="material-icons text-[20px]">image</span>
        </button>
      </div>

      <EditorContent 
        editor={editor} 
        className="p-6 min-h-[400px] focus:outline-none prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none prose-headings:font-light prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-headings:text-black dark:prose-headings:text-white" 
      />
    </div>
  );
};

export default PostEditor; 