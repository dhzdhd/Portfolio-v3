<script>
  import { page } from '$app/stores';
  import GradientHeading from '$lib/components/GradientHeading.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import Experience from '$lib/components/sections/Experience.svelte';
  import Landing from '$lib/components/sections/Landing.svelte';
  import Projects from '$lib/components/sections/Projects.svelte';
</script>

<Landing />
<About />
<Experience />
<section id="projects">
  <GradientHeading text={'Projects'} alignment={'left'} />
  <div>
    <h1>{$page.status}</h1>
    <h2>{$page.error?.message ?? 'Unknown error occurred'}</h2>
  </div>
</section>
<Contact />

<style lang="sass">
    @use '../styles/vars'

    div
        height: 100%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center

        h1
            font-size: 5rem
            background: linear-gradient(135deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
            -webkit-background-clip: text
            -webkit-text-fill-color: transparent

        h2
            font-size: 2rem
            color: vars.$color-primary-dark

            @media (prefers-color-scheme: dark)
                color: vars.$color-primary-light

</style>
