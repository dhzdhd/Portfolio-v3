<script lang="ts">
  import GradientHeading from '$lib/components/GradientHeading.svelte';
  import type { PageData } from './$types';
  import Giscus from '@giscus/svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<div class="container">
  <span>{data.frontmatter.date}</span>
  <h1>{data.frontmatter.title}</h1>
  <div class="hr">
    <GradientHeading alignment={'left'} />
  </div>
  <article>
    <div class="prose">
      <data.component />
    </div>
  </article>
  <div class="comments-container">
    <Giscus
      id="comments"
      repo="dhzdhd/Portfolio-v3"
      repoId="R_kgDOIRSm-A"
      category="Announcements"
      categoryId="DIC_kwDOIRSm-M4CiQdh"
      mapping="pathname"
      term="Welcome to giscus comments!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark_dimmed"
      lang="en"
      loading="lazy"
    />
  </div>
</div>

<style lang="sass">
    @use '../../../styles/vars'

    .container
        min-height: calc(100vh - 4rem)
        padding: 4rem 0rem
        display: flex
        flex-direction: column
        gap: 1rem
        max-width: 70rem
        width: min(calc(100vw - 4rem), 100%)
        margin: auto
        overflow: hidden
        text-overflow: ellipsis

        span
            color: transparentize(vars.$color-primary-dark, 0.5)
            text-align: center
            font-size: 1rem

            @media (prefers-color-scheme: dark)
                color: transparentize(vars.$color-primary-light, 0.5)

        h1
            color: vars.$color-primary-dark
            text-align: center
            font-size: 2.5rem


            @media (prefers-color-scheme: dark)
                color: vars.$color-primary-light

            @media (min-width: vars.$sm)
                font-size: 4rem

        .hr
            margin: 2rem 0rem

        article
            margin-inline: auto
            text-wrap: wrap
            width: 100%

            .prose
                padding: 0rem 0rem
                text-wrap: wrap

    :global(.prose :is(h1, h2, h3, h4, h5, h6))
        color: vars.$color-primary-dark
        margin-top: 2rem
        margin-bottom: 1rem

        @media(prefers-color-scheme: dark)
            color: vars.$color-primary-light

    :global(.prose h1)
        font-size: 2rem

    :global(.prose h2)
        font-size: 1.7rem

    :global(.prose h3)
        font-size: 1.45rem
    
    :global(.prose h4)
        font-size: 1.2rem

    :global(.prose p)
        line-height: 1.6rem
        margin-bottom: 0.3rem

    :global(.prose :is(ul, ol))
        padding: 0.5rem 1rem
        color: vars.$color-primary-dark

        @media(prefers-color-scheme: dark)
            color: vars.$color-primary-light

    :global(.prose :not(pre) :is(code))
        font-size: 1.1rem
        padding: 0.05rem 0.3rem
        border-radius: 5px
        background-color: transparentize(vars.$color-primary-light, 0.9)

    :global(.prose blockquote)
        font-style: italic
        border-radius: 0.5rem
        padding: 0.5rem

    :global(.prose hr)
        margin: 1rem 0rem

    :global(.prose table)
        margin: 1rem 0rem

    :global(.prose th)
        color: vars.$color-accent

    :global(.prose :is(table, th, td))
        border: solid 1px
        border-collapse: collapse
        padding: 0.5rem 1rem
        text-align: left

    :global(.prose a)
        color: vars.$color-accent

        &:hover
            text-decoration: none

    :global(.prose pre)
        width: min(calc(100vw - 4rem), 100%)
        overflow: hidden

    :global(.prose :is(*))
        color: transparentize(vars.$color-primary-dark, 0.2)
        font-size: 1.2rem

        @media(prefers-color-scheme: dark)
            color: transparentize(vars.$color-primary-light, 0.2)
</style>
