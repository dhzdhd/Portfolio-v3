<script lang="ts">
  import BlogCard from '$lib/components/blog/BlogCard.svelte';

  export let data;

  let posts = data.posts;
  let search = '';

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
    on:input={filter}
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
