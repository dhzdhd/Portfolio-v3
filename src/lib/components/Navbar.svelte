<script lang="ts">
	import { isNavClicked } from '$lib/stores/nav';
	import { fly, slide } from 'svelte/transition';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
</script>

<nav>
    <!-- <IoIosMenu></IoIosMenu> -->

    <ul>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#experience">Experience</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
    </ul>
</nav>

<style lang="sass">
    @use '../../styles/vars'

    nav
        ul
            display: flex
            flex-direction: row
            justify-content: right
            align-items: center
            gap: 2rem
            width: 100%
            height: 100%

            li
                list-style: none
                width: fit-content

                a
                    text-decoration: none
                    color: vars.$color-primary-light

                    &:hover
                        color: vars.$color-accent

</style>
