<script lang="ts">
	import Header from '$lib/components/Header.svelte';
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
    @use '../styles/utils'

    main
        // height: 100%
        width: 100%
        padding: 2rem 2rem
        background-color: vars.$color-primary-light

        @media (prefers-color-scheme: dark)
            background-color: vars.$color-primary-dark
</style>
