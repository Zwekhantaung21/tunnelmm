import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'oi7n5rup',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: 'skXF5uyioLwpzXS03RNJ08FceQtS344aJyxAn5bFyeGkcqctSbK1dERg0qZwfQlbwtgyimdQvZITtY0z7zAbHpN4x8QZziN4l85YMpx08MRPkIxY36kaxln8DX8CmRLz7K5vMv7Z9bXg7wl6djQAmuIFExUFmJlznaoEzqCats3QmmTt1VTP',
});
