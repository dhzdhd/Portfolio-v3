<script lang="ts">
  import type { BlogPost } from '../../../routes/blog/proxy+page.server';

  export let data: BlogPost;
</script>

<a class="card" href={data.slug}>
  <div class="title">
    <span>{data.title}</span>
  </div>
  <div class="subtitle">
    <span>{data.date}</span>
    <span />
    <!--tags-->
  </div>
  <p>{data.description}</p>
</a>

<style lang="sass">
    @use "../../../styles/vars"

    .card
        position: relative
        display: flex
        flex-direction: column
        gap: 0.3rem
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
            font-size: 2rem

        .subtitle
            color: transparentize(vars.$color-primary-light, 0.3)
</style>
