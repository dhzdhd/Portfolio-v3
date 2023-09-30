<script lang="ts">
  import type { BlogPostWithSlug } from '../../../routes/blog/proxy+page.server';

  export let data: BlogPostWithSlug;
</script>

<a class="card" href={data.slug}>
  <div class="subtitle">
    <h3>{data.date}</h3>
    <div class="tags">
      {#each data.tags as tag}
        <div class="tag">{tag}</div>
      {/each}
    </div>
  </div>
  <div class="title">
    <h2>{data.title}</h2>
  </div>
  <p>{data.description}</p>
</a>

<style lang="sass">
    @use "../../../styles/vars"

    .card
        position: relative
        display: flex
        flex-direction: column
        gap: 0.4rem
        transform-style: preserve-3d
        border-radius: 2rem
        min-height: 10rem
        padding: 2rem
        background: linear-gradient(180deg,transparentize(white, 0.96) 0%,transparentize(vars.$color-tertiary, 0.9)  100%)
        color: vars.$color-primary-light
        text-decoration: none

        &:hover
            background: vars.$color-primary-dark
            cursor: pointer

        &:hover::before
            content: ""
            position: absolute
            inset: 0rem
            filter: blur(1rem)
            transform: translate3d(0px,0px,-1px)
            border-radius: inherit
            pointer-events: none
            background: linear-gradient(230deg, vars.$color-accent 0%, vars.$color-tertiary 100%)

        .title
            h2
                font-size: 2rem

        .subtitle
            color: transparentize(vars.$color-primary-light, 0.3)
            display: flex
            justify-content: space-between
            align-items: center

            h3
                display: inline-flex

            .tags
                display: inline-flex
                gap: 1rem

                .tag
                    background-color: vars.$color-accent
                    color: vars.$color-primary-dark
                    padding: 0.3rem 0.7rem
                    border-radius: 1rem

        p
            color: transparentize(vars.$color-primary-light, 0.3)
</style>
