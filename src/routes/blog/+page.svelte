<script lang="ts">
  import BlogCard from '$lib/components/blog/BlogCard.svelte';
  import type { BlogPostWithSlug } from './+page.server.js';

  let { data } = $props();

  const comparator = (date1: string, date2: string): number => {
    const [day1, month1, year1] = date1.split('-').map(Number);
    const [day2, month2, year2] = date2.split('-').map(Number);

    const d1 = new Date(year1, month1 - 1, day1);
    const d2 = new Date(year2, month2 - 1, day2);

    if (d1 < d2) return 1;
    if (d1 > d2) return -1;
    return 0;
  };

  const sortPosts = (posts: BlogPostWithSlug[]): BlogPostWithSlug[] => {
    return posts.filter((x) => x.published).toSorted((x, y) => comparator(x.date, y.date));
  };

  let posts = $state(sortPosts(data.posts));
  let search = $state('');

  const filter = () => {
    if (search.trim() === '') {
      posts = data.posts;
    } else {
      posts = data.posts.filter((e) => e.title.includes(search));
    }
  };
</script>

<section>
  <input
    bind:value={search}
    oninput={filter}
    type="search"
    name="search"
    id="search"
    placeholder="Search"
  />
  <div>
    {#if posts.length === 0}
      <h2>No posts found!</h2>
    {:else}
      {#each posts as item}
        <BlogCard data={item} />
      {/each}
    {/if}
  </div>
</section>

<style lang="sass">
    @use '../../styles/vars'

    section
        height: 100vh
        padding: 4rem 2rem

        div
          display: flex
          flex-direction: column
          gap: 1rem

          h2
              font-size: 3rem
              text-align: center
              background: linear-gradient(135deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
              -webkit-background-clip: text
              -webkit-text-fill-color: transparent

        input
            height: 3rem
            width: 100%
            margin-bottom: 2rem
            background: linear-gradient(180deg,transparentize(white, 0.96) 0%,transparentize(vars.$color-tertiary, 0.9)  100%)
            border: solid 0.1rem
            border-color: transparent
            outline: none
            border-radius: 2rem
            font-size: 1.5rem
            padding: 0rem 1rem
            color: vars.$color-primary-light

            &:focus
              border-color: vars.$color-tertiary
</style>
