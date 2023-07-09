import type { PageServerLoad } from '../$types';
import { slugFromPath } from '../../utils';

export interface MdsvexFile {
  default: import('svelte/internal').SvelteComponent;
  metadata: Record<string, string>;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  description: string;
  date: string;
  published: boolean;
}

export type MdsvexResolver = () => Promise<MdsvexFile>;

export const load: PageServerLoad = async () => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

  const postPromises = Object.entries(modules).map(([path, resolver]) =>
    resolver().then(
      (post) =>
        ({
          slug: '/blog/' + slugFromPath(path),
          ...(post as unknown as MdsvexFile).metadata
        } as BlogPost)
    )
  );

  const posts = await Promise.all(postPromises);

  return { posts };
};
