<script lang="ts">
  import type { PageData } from './$types';
  import type { SvelteComponentTyped } from 'svelte/internal';

  export let data: PageData;

  type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
  $: component = data.component as unknown as C;
</script>

<!-- <article> -->
<svelte:component this={component} class="hellooo" />

<!-- </article> -->

<style lang="sass">
    :global(*)
        color: white
</style>
