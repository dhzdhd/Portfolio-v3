<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import { techArr, type IconMetadata } from '$lib/data';

	const radius = 200;
	const nodes: Array<IconMetadata> = techArr;

	for (let i in techArr) {
		const angle1 = Math.random() * Math.PI * 2;
		const angle2 = Math.random() * Math.PI * 2;
		const x = radius * Math.sin(angle1) * Math.cos(angle2) * 0.8;
		const y = radius * Math.sin(angle1) * Math.sin(angle2) * 0.8;
		const z = radius * Math.cos(angle1) * 0.8;
		techArr[i] = { ...techArr[i], x: x, y: y, z: z };
	}
</script>

<section id="experience">
	<div class="container">
		{#each nodes as node (node.x)}
			<Node iconData={node} />
		{/each}
	</div>
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        height: 100vh
        max-width: 100vw
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center

        .container
            display: flex
            justify-content: center
            background-color: red
            width: 0px
            height: 0px
            position: relative
            perspective: 1000px
            animation: rotate 20s infinite linear
            transform-style: preserve-3d

            @keyframes rotate
                from
                    transform: rotateY(0)
                to
                    transform: rotateY(1turn)
</style>
