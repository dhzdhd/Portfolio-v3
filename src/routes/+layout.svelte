<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../styles/global.sass';
	import '../styles/vars.sass';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>

<style lang="sass">
    @use '../styles/vars'

    main
        height: 100%
        width: 100%
        padding: 2rem 5rem
        background-color: vars.$secondary-color

        @media (prefers-color-scheme: dark)
            background-color: vars.$tertiary-color
</style>
