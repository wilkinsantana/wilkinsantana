import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  hero?: string;
}

export const prerender = true;

export function entries() {
  const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });
  return Object.keys(modules).map((path) => ({
    slug: path.split('/').pop()!.replace('.md', '')
  }));
}

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob<{ default: ComponentType; metadata: PostMeta }>(
    '/src/lib/posts/*.md'
  );

  const loader = modules[`/src/lib/posts/${params.slug}.md`];
  if (!loader) throw error(404, `Post "${params.slug}" not found`);

  const post = await loader();

  return {
    content: post.default,
    metadata: post.metadata
  };
};
