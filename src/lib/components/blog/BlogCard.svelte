<script lang="ts">
</script>

<div class="card">
  <div class="sh">iefje</div>
</div>

<style lang="sass">
    @use "../../../styles/vars"

    .card
        position: relative
        transform-style: preserve-3d
        border-radius: 2rem
        min-height: 10rem
        padding: 2rem
        background: linear-gradient(180deg,transparentize(white, 0.96) 0%,transparentize(vars.$color-tertiary, 0.9)  100%)

        &:hover
          background: vars.$color-primary-dark

        &:hover::before
            content: ""
            position: absolute
            inset: 0rem
            background: linear-gradient(320deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
            filter: blur(1rem)
            transform: translate3d(0px,0px,-1px)
            border-radius: inherit
            pointer-events: none
</style>
