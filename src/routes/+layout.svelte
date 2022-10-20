<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
    import '../styles/global.sass';
    import '../styles/vars.sass';

</script>

<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<Navbar/>
<slot />

<style lang="sass">
</style>
