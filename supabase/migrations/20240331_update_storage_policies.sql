-- Drop existing storage policies
DROP POLICY IF EXISTS \
Authenticated
users
can
manage
buckets\ ON storage.buckets;
DROP POLICY IF EXISTS \Authenticated
users
can
manage
objects\ ON storage.objects;

-- Policy for authenticated users to manage buckets
CREATE POLICY \Authenticated
users
can
manage
buckets\
ON storage.buckets
FOR ALL
TO authenticated
USING (true);

-- Policy for authenticated users to manage objects
CREATE POLICY \Authenticated
users
can
manage
objects\
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'blog-images')
WITH CHECK (bucket_id = 'blog-images');
