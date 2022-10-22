<script lang="ts">
	import { isNavClicked } from '$lib/stores/nav';
	import { fly, slide } from 'svelte/transition';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
</script>

{#if $isNavClicked}
	<nav in:slide class="enabled">
		<ul>
			<li in:fly={{ x: 200, delay: 200 }}>
				<a on:click={() => ($isNavClicked = !$isNavClicked)} href="/">Home</a>
			</li>
			<li in:fly={{ x: -200, delay: 200 }}>
				<a on:click={() => ($isNavClicked = !$isNavClicked)} href="/">Blog</a>
			</li>
		</ul>
	</nav>
{:else}
	<button on:click={() => ($isNavClicked = !$isNavClicked)}>
		<IoIosMenu />
	</button>
{/if}

<style lang="sass">
    @use '../../styles/vars'

    nav
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center

    .enabled
        position: fixed
        height: 100vh
        width: 100vw
        background-color: vars.$primary-color

        ul
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            gap: 2rem

            li
                list-style-type: none
                width: fit-content
                padding: 1rem 2rem
                text-align: center
                background-size: 205% 200%
                background-image: linear-gradient(to right, vars.$accent-color 50%, transparent 0)
                background-position: right
                transition: 0.5s

                &:hover
                    background-position: left

                &:hover > *
                    color: vars.$secondary-color

                a
                    font-size: 3rem
                    text-decoration: none
                    color: vars.$tertiary-color

    button
        width: 5rem
        padding: 0.5rem
        color: white
        background-color: transparent
        border: none
        cursor: pointer

</style>
