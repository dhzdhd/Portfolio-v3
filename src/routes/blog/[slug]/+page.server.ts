import type { BlogPost } from '../+page.server';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);

    return {
      component: post.default,
      frontmatter: post.metadata as BlogPost
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
};
