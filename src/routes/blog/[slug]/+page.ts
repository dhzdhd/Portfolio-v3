import type { BlogPost } from '../+page.server';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`../../../posts/${params.slug}.svx`);

    return {
      component: post.default,
      frontmatter: post.metadata as BlogPost
    };
  } catch (e) {
    console.log(e);

    throw error(404, `Could not find ${params.slug}`);
  }
};
