<script lang="ts">
  import GradientHeading from '../GradientHeading.svelte';
</script>

<section id="contact">
  <GradientHeading text={'Contact'} alignment={'right'} />
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        display: flex
        flex-direction: column
        padding-top: 5rem
        align-items: center
        gap: 2rem
</style>
