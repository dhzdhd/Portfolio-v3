<script lang="ts">
  import { isReady } from '$lib/stores/utils';
  import { fly } from 'svelte/transition';
</script>

<section id="landing">
  {#key $isReady}
    <div in:fly={{ y: 100, duration: 1000, opacity: 0 }}>
      <h1>Hello</h1>
      <h2>I am <span>dhzdhd</span></h2>
    </div>
  {/key}
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        height: 100vh
        max-width: 100vw
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center

        div
            z-index: 20

            h1
                color: transparentize(vars.$color-primary-dark, 0.3)

            h2
                color: vars.$color-primary-dark
                font-size: 3rem

                span
                    color: vars.$color-tertiary

            @media (prefers-color-scheme: dark)
                h1
                    color: transparentize(vars.$color-primary-light, 0.3)

                h2
                    color: vars.$color-primary-light

                    span
                        color: vars.$color-accent
</style>
