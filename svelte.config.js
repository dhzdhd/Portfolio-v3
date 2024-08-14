import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx']
    }),
    preprocess()
  ],
};

export default config;
