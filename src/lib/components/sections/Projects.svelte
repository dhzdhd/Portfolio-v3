<script lang="ts">
  import Node from '$lib/components/Node.svelte';
  import { techArr, type IconMetadata } from '$lib/data';
  import ExperienceCard from '../ExperienceCard.svelte';
  import GradientHeading from '../GradientHeading.svelte';
  import ProjectCard from '../ProjectCard.svelte';
</script>

<section id="projects">
  <GradientHeading text={'Projects'} alignment={'left'} />
  <div class="project-grid">
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
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
            grid-template-columns: repeat(2, 1fr)
            gap: 1rem
</style>
