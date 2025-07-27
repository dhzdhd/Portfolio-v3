<script lang="ts">
  import Navbar from './Navbar.svelte';
</script>

<header>
  <Navbar />
</header>

<style lang="sass">
    @use '../../styles/vars'

    header
        position: fixed
        display: flex
        z-index: 50
        flex-direction: row
        padding: 0rem 5rem
        height: 4rem
        width: 100vw
        justify-content: center
        padding: 0rem 0rem
</style>
