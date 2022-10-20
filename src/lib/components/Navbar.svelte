<script lang="ts">
	import { isNavClicked } from "$lib/stores/nav";
	import { fly } from "svelte/transition";

</script>

{#if $isNavClicked}
    <nav class="enabled">
        <ul>
            <li in:fly>
                <a href="/">Home</a>
            </li>
            <li in:fly>
                <a href="/">Blog</a>
            </li>
        </ul>
    </nav>
{:else}
    <nav class="disabled"></nav>
{/if}

<style lang="sass">
    @use '../../styles/vars'

    nav
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center

    .enabled
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        height: 100vh
        background-color: vars.$primary-color
        gap: 2rem

        li
            list-style-type: none
            width: fit-content
            padding: 1rem 2rem
            text-align: center
            background-size: 200% 200%
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
</style>
