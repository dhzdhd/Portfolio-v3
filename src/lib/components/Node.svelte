<script lang="ts">
	import type { IconMetadata } from '$lib/data';

	export let iconData: IconMetadata;
	let colored = iconData.segment === 'plain';
</script>

<img
	src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{iconData.name}/{iconData.name}-{iconData.segment}.svg"
	class="node {colored ? 'colored' : ''}"
	style="--x: {iconData.x}px; --y: {iconData.y}px; --z: {iconData.z}px;"
	alt="{iconData.name} icon"
/>

<style lang="sass">
	@use '../../styles/vars'

	.node
		width: 30px
		height: 30px
		position: absolute
		animation: rotate 20s infinite linear
		transform-style: preserve-3d

		@keyframes rotate
			from
				transform: translate3d(var(--x), var(--y), var(--z)) rotate3d(0, -1, 0, 0turn)
			to
				transform: translate3d(var(--x), var(--y), var(--z)) rotate3d(0, -1, 0, 1turn)

		&:hover
			height: 200px
			width: 200px

	.colored
		// Filter applied to imitate color
		// https://codepen.io/sosuke/pen/Pjoqqp
		filter: invert(73%) sepia(12%) saturate(1561%) hue-rotate(100deg) brightness(98%) contrast(95%)

</style>
