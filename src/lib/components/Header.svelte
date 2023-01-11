<script lang="ts">
	import Navbar from './Navbar.svelte';
</script>

<header>
	<div />
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
        background-color: transparentize(vars.$color-primary-dark, 0.98)
        backdrop-filter: blur(10px)

        @media (prefers-color-scheme: dark)
            background-color: transparentize(vars.$color-primary-light, 0.98)

</style>
