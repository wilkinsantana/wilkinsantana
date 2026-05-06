import type { PageLoad } from './$types';

interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  hero?: string;
}

interface Post {
  slug: string;
  metadata: PostMeta;
}

export const load: PageLoad = async () => {
  const modules = import.meta.glob<{ metadata: PostMeta }>('/src/lib/posts/*.md', { eager: true });

  const posts: Post[] = Object.entries(modules)
    .map(([path, mod]) => ({
      slug: path.split('/').pop()!.replace('.md', ''),
      metadata: mod.metadata
    }))
    .filter((p) => p.metadata?.title)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return { posts };
};
