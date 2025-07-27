<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import { isReady } from '$lib/stores/utils';
  import { onMount } from 'svelte';
  import '../styles/global.sass';
  import '../styles/vars.sass';
  import { enabled } from '../utils';
  import { fade } from 'svelte/transition';
  import { page } from '$app/state';
  import { onNavigate } from '$app/navigation';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  onMount(() => ($isReady = true));

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  let mainElement: any;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    mainElement.style.backgroundPosition = `${-scrollY * 0.05}px ${-scrollY * 0.05}px`;
  };

  let isBlogRoute = $derived(page.route.id?.startsWith('/blog/'));
</script>

<svelte:window onscroll={handleScroll} />

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<svelte:body onclick={() => ($enabled = false)} />

<Header />
<main transition:fade bind:this={mainElement} class:blog-posts={isBlogRoute}>
  {@render children?.()}
</main>

<style lang="sass">
    @use '../styles/vars'

    main
        width: 100%
        min-height: 100%
        padding: 2rem 2rem
        background-color: vars.$color-primary-light
        background-image: url("/topography.svg")
        background-repeat: repeat
        background-size: auto
        animation: slide 2000s linear infinite
        display: flex
        flex-direction: column
        justify-content: center
        gap: 5rem
        view-transition-name: main

        &.blog-posts
            background-image: none
            animation: none

        @media (prefers-color-scheme: dark)
            background-color: vars.$color-primary-dark

        @media (min-width: vars.$md)
            padding: 2rem 5rem

        @media (min-width: vars.$lg)
            padding: 2rem 10rem

    @keyframes slide
        0%
            background-position: 0 0
        100%
            background-position: -1000rem -1000rem
</style>
