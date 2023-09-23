<script lang="ts">
  import BlogCard from '$lib/components/blog/BlogCard.svelte';

  export let data;
</script>

<section>
  {#each data.posts as item}
    <BlogCard data={item} />
  {/each}
</section>

<style lang="sass">
    section
        height: 100vh
        padding: 4rem 2rem
</style>
