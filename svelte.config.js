import { mdsvex, escapeSvelte } from 'mdsvex';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';
import remarkCodeTitles from "remark-flexible-code-titles";
// import rehypePrettyCode from 'rehype-pretty-code';
// import {
//   transformerCopyButton,
//   transformerFoldableLines,
// } from '@rehype-pretty/transformers';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
  },
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx'],
      highlight: {
        highlighter: async (code, lang = 'text') => {
          const theme = 'tokyo-night';
          const highlighter = await createHighlighter({ themes: [theme] })

          await highlighter.loadLanguage(lang)
          await highlighter.loadTheme(theme)

          const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }))
          highlighter.dispose()

          return `{@html \`${html}\` }`
        }
      },
      remarkPlugins: [remarkToc, [remarkCodeTitles, { tokenForSpaceInTitle: "@", }]],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        // Rehype pretty code does not work :(
        // [rehypePrettyCode, {  
        //   keepBackground: false,
        //   transformers: [
        //     transformerCopyButton({
        //       visibility: 'always',
        //       feedbackDuration: 2_500,
        //     }),
        //     transformerFoldableLines({
        //       lines: [[1, 2]],
        //     }),
        //   ],
        // }]
      ]
    }),
    vitePreprocess(),
  ]
};

export default config;
