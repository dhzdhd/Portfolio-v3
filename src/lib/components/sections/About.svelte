<script lang="ts">
  import GradientHeading from '../GradientHeading.svelte';
  import Link from '../Link.svelte';
</script>

<section id="about">
  <GradientHeading text={'About Me'} alignment={'left'} />
  <div>
    <p>
      Hello! My name is dhzdhd and I enjoy developing software. I mainly do web and app development
      and have been dabbling in language development and ML. I also love learning new programming
      languages and am currently enjoying Haskell. I love open source software and make it a point
      to upload all my work to
      <Link title="Github" url="https://github.com/dhzdhd" />
      .
    </p>
  </div>
</section>

<style lang="sass">
    @use "../../../styles/vars"

    section
        display: flex
        flex-direction: column
        padding-top: 5rem
        gap: 2rem

        div
            display: flex
            flex-direction: column
            gap: 0.5rem

            p
                color: vars.$color-primary-dark

            @media (prefers-color-scheme: dark)
                p
                    color: transparentize(vars.$color-primary-light, 0.3)
</style>
