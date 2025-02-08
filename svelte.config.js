import { mdsvex } from 'mdsvex';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
  },
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx'],
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrettyCode]
    }),
    vitePreprocess(),
  ]
};

export default config;
