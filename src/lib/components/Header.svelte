<script lang="ts">
  import Navbar from './Navbar.svelte';
</script>

<header>
  <div></div>
  <Navbar />
</header>

<style lang="sass">
    @use '../../styles/vars'

    header
        position: fixed
        display: flex
        z-index: 50
        flex-direction: row
        justify-content: space-between
        padding: 0rem 5rem
        height: 4rem
        width: 100vw

        @media (prefers-color-scheme: dark)
            padding: 0rem 0rem
            justify-content: center
</style>
