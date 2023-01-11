<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let ready = false;
	onMount(() => (ready = true));
</script>

<section>
	<div class="top-left-gradient" />
	{#key ready}
		<div in:fly={{ y: 100, duration: 1000, opacity: 0 }}>
			<h1>Hello</h1>
			<h2>I am <span>dhzdhd</span></h2>
		</div>
	{/key}
	<div class="bottom-right-gradient" />
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        height: calc(100vh - 4rem)
        max-width: 100vw
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center

        .top-left-gradient
            position: absolute
            background: linear-gradient(135deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
            filter: blur(7rem)
            height: 20rem
            width: 20rem
            top: -5rem
            left: -5rem
            border-radius: 50%

        div
            z-index: 20

            h1
                color: transparentize(vars.$color-primary-dark, 0.3)

            h2
                color: vars.$color-primary-dark
                font-size: 3rem

                span
                    background: linear-gradient(135deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
                    -webkit-background-clip: text
                    -webkit-text-fill-color: transparent

            @media (prefers-color-scheme: dark)
                h1
                    color: transparentize(vars.$color-primary-light, 0.3)

                h2
                    color: vars.$color-primary-light


        .bottom-right-gradient
            position: absolute
            background: linear-gradient(135deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
            filter: blur(5rem)
            height: 5rem
            width: 5rem
            top: 75%
            right: 0rem
            border-radius: 50%

</style>
