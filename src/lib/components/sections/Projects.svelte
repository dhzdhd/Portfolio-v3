<script lang="ts">
  import Node from '$lib/components/Node.svelte';
  import { techArr, type IconMetadata } from '$lib/data';
  import ExperienceCard from '../ExperienceCard.svelte';
  import GradientHeading from '../GradientHeading.svelte';
</script>

<section id="projects">
  <GradientHeading text={'Projects'} alignment={'left'} />
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        display: flex
        flex-direction: column
        align-items: center
        gap: 2rem


</style>
