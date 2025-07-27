<script>
  import { page } from '$app/state';
  import GradientHeading from '$lib/components/GradientHeading.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import Experience from '$lib/components/sections/Experience.svelte';
  import Landing from '$lib/components/sections/Landing.svelte';
</script>

{#if page.status === 404}
  <div>
    <h1>{page.status}</h1>
    <h2>{page.error?.message ?? 'Not Found'}</h2>
  </div>
{:else}
  <Landing />
  <About />
  <Experience />
  <section id="projects">
    <GradientHeading text={'Projects'} alignment={'left'} />
    <div>
      <h1>{page.status}</h1>
      <h2>Failed to load projects</h2>
    </div>
  </section>
  <Contact />
{/if}

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
            color: vars.$color-tertiary  

            @media (prefers-color-scheme: dark)
                color: vars.$color-accent

        h2
            font-size: 2rem
            color: vars.$color-primary-dark

            @media (prefers-color-scheme: dark)
                color: vars.$color-primary-light

</style>
