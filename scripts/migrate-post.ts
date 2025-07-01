import { migrateMdxToDb } from '../src/lib/mdx-to-db';

async function migratePost() {
  try {
    const post = await migrateMdxToDb('src/content/posts/automation-journey.mdx');
    console.log('Successfully migrated post:', post);
  } catch (error) {
    console.error('Failed to migrate post:', error);
    process.exit(1);
  }
}

migratePost(); 