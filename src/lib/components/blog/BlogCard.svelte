<script lang="ts">
  import type { BlogPostWithSlug } from '../../../routes/blog/proxy+page.server';

  interface Props {
    data: BlogPostWithSlug;
  }

  let { data }: Props = $props();
</script>

<a
  data-sveltekit-preload-data="hover"
  data-sveltekit-preload-code="eager"
  class="card"
  href={data.slug}
>
  <div class="subtitle">
    <h3>{data.date}</h3>
  </div>
  <div class="title">
    <h2>{data.title}</h2>
  </div>
  <p>{data.description}</p>
  <div class="tags">
    {#each data.tags as tag}
      <div class="tag">{tag}</div>
    {/each}
  </div>
</a>

<style lang="sass">
    @use "../../../styles/vars"
    @use "../../../styles/utils"
  
    .card
        display: flex
        flex-direction: column
        gap: 0.4rem
        border-radius: 2rem
        padding: 2rem
        text-decoration: none
        @include utils.blur-card(true)

        .title
            h2
                font-size: 2rem

        .subtitle
            color: transparentize(vars.$color-primary-dark, 0.3)
            display: flex
            justify-content: space-between
            align-items: center

        .tags
            display: inline-flex
            padding: 1rem 0rem 0rem 0rem
            gap: 1rem

            .tag
                background-color: vars.$color-tertiary
                color: vars.$color-primary-light
                padding: 0.3rem 0.7rem
                border-radius: 1rem

        p
            color: transparentize(vars.$color-primary-dark, 0.3)

        @media (prefers-color-scheme: dark)
            color: vars.$color-primary-light

            .subtitle
                color: transparentize(vars.$color-primary-light, 0.3)

            .tags
                .tag
                    background-color: vars.$color-accent
                    color: vars.$color-primary-dark
            
            p
                color: transparentize(vars.$color-primary-light, 0.3)
</style>
