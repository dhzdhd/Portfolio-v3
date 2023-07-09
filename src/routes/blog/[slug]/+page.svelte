<script lang="ts">
  import GradientHeading from '$lib/components/GradientHeading.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="container">
  <span>{data.frontmatter.date}</span>
  <h1>{data.frontmatter.title}</h1>
  <div class="hr">
    <GradientHeading alignment={'left'} />
  </div>
  <article>
    <div class="prose">
      <svelte:component this={data.component} />
    </div>
  </article>
</div>

<style lang="sass">
    @use '../../../styles/vars'

    .container
        min-height: 100vh
        padding: 4rem 0rem
        display: flex
        flex-direction: column
        gap: 1rem
        max-width: 70rem
        margin: auto

        span
            color: transparentize(vars.$color-primary-dark, 0.5)
            text-align: center
            font-size: 1rem

            @media (prefers-color-scheme: dark)
                color: transparentize(vars.$color-primary-light, 0.5)

        h1
            color: vars.$color-primary-dark
            text-align: center
            font-size: 4rem

            @media (prefers-color-scheme: dark)
                color: vars.$color-primary-light

        .hr
            margin: 2rem 0rem

        article
            margin-inline: auto

            .prose
                padding: 0rem 0rem

    :global(.prose :is(h1, h2, h3, h4, h5, h6))
        color: vars.$color-primary-dark
        margin-top: 2rem
        margin-bottom: 1rem

        @media(prefers-color-scheme: dark)
            color: vars.$color-primary-light

    :global(.prose h1)
        font-size: 2rem

    :global(.prose h2)
        font-size: 1.6rem

    :global(.prose h3)
        font-size: 1.2rem

    :global(.prose :is(ul, ol))
        padding: 0.5rem 1rem
        color: vars.$color-primary-dark

        @media(prefers-color-scheme: dark)
            color: vars.$color-primary-light

    :global(.prose :is(p, a))
        color: transparentize(vars.$color-primary-dark, 0.2)
        font-size: 1.2rem

        @media(prefers-color-scheme: dark)
            color: transparentize(vars.$color-primary-light, 0.2)

    :global(.prose :not(pre) :is(code))
        font-size: 1.2rem
        padding: 0.1rem 0.3rem
        border-radius: 5px
        background-color: transparentize(vars.$color-primary-light, 0.9)

    // :global(.prose :is(pre))
    //     padding: 2rem 1rem
    //     border-radius: 0.5rem
    //     tab-size: 2
    //     font-family: reset

    :global(.prose hr)
        margin: 1rem 0rem
</style>
