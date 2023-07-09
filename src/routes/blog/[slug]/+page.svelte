<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<article>
  <div class="prose">
    <svelte:component this={data.component} />
  </div>
</article>

<style lang="sass">
    article
        margin-inline: auto
        min-height: 100vh

    :global(.prose :is(h1, h2, h3, h4, h5, h6))
        color: white
        margin-top: 2rem
        margin-bottom: 0.5rem

    :global(.prose :is(ul, ol))
        padding-left: 0.5rem

    :global(.prose pre)
        padding: 1rem
        border-radius: 0.5rem
        tab-size: 2
        font-family: reset

</style>
