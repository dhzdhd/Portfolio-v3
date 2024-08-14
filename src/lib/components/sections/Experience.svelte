<script lang="ts">
  import ExperienceCard from '../ExperienceCard.svelte';
  import GradientHeading from '../GradientHeading.svelte';
</script>

<section id="experience">
  <GradientHeading text={'Experience'} alignment={'right'} />
  <div class="exp-card">
    <ExperienceCard title={'Languages'} type={'language'} />
    <ExperienceCard title={'Frameworks'} type={'framework'} />
  </div>
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        display: flex
        flex-direction: column
        padding-top: 5rem
        align-items: center
        gap: 2rem

        .exp-card
            width: 100%
            display: flex
            flex-direction: column
            gap: 2rem

            @media (min-width: vars.$md)
              flex-direction: row
</style>
