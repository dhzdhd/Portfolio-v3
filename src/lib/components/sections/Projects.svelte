<script lang="ts">
  import type { Response } from '../../../routes/+page.server';
  import GradientHeading from '../GradientHeading.svelte';
  import ProjectCard from '../ProjectCard.svelte';

  export let data: Response;
</script>

<section id="projects">
  <GradientHeading text={'Projects'} alignment={'left'} />
  <div class="project-grid">
    {#each data.highlighted as item}
      <ProjectCard {item} />
    {/each}
  </div>
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        display: flex
        flex-direction: column
        align-items: center
        gap: 2rem

        .project-grid
            display: grid
            width: 100%
            grid-template-columns: repeat(1, 1fr)
            gap: 1rem

            @media (min-width: vars.$md)
                grid-template-columns: repeat(2, 1fr)

            @media (min-width: vars.$xl)
                grid-template-columns: repeat(3, 1fr)
</style>
