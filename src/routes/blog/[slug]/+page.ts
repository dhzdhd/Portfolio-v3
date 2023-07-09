import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { MdsvexResolver } from '../+page.server';
import { slugFromPath } from '../../../utils';

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

  let match: { path?: string; resolver?: MdsvexResolver } = {};
  for (const [path, resolver] of Object.entries(modules)) {
    console.log(params.slug);

    if (slugFromPath(path) === params.slug) {
      match = { path, resolver: resolver as unknown as MdsvexResolver };
      break;
    }
  }

  const post = await match?.resolver?.();

  if (!post || !post.metadata.published) {
    console.log('fef');
    throw error(404);
  }

  return {
    component: post.default,
    frontmatter: post.metadata
  };
};
