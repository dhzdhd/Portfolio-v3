import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  kit: {
    adapter: adapter()
  },
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx'],
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    }),
    preprocess()
  ]
};

export default config;
