import type { PageLoad } from './$types';
import projects from '$lib/data/projects.json';

export const load: PageLoad = () => {
  return { projects };
};
