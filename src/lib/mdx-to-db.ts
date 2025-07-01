import { supabase } from './supabase';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function migrateMdxToDb(filePath: string) {
  try {
    // Read the MDX file
    const fullPath = path.join(process.cwd(), filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse frontmatter and content
    const { data, content } = matter(fileContents);
    
    // Create the post object
    const post = {
      title: data.title,
      slug: filePath.split('/').pop()?.replace('.mdx', '') || '',
      content: content,
      excerpt: data.excerpt,
      tags: data.tags,
      published: true,
      created_at: new Date(data.date).toISOString(),
      updated_at: new Date().toISOString()
    };

    // Insert into Supabase
    const { data: insertedPost, error } = await supabase
      .from('posts')
      .insert([post])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return insertedPost;
  } catch (error) {
    console.error('Error migrating MDX to DB:', error);
    throw error;
  }
} 