<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import { isReady } from '$lib/stores/utils';
  import { onMount } from 'svelte';
  import '../styles/global.sass';
  import '../styles/vars.sass';

  onMount(() => ($isReady = true));
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<Header />
<main>
  <slot />
</main>

<style lang="sass">
    @use '../styles/vars'

    main
        width: 100%
        padding: 2rem 2rem
        background-color: vars.$color-primary-light
        display: flex
        flex-direction: column
        gap: 10rem

        @media (prefers-color-scheme: dark)
            background-color: vars.$color-primary-dark

        @media (min-width: vars.$md)
            padding: 2rem 5rem

        @media (min-width: vars.$lg)
            padding: 2rem 10rem

</style>
