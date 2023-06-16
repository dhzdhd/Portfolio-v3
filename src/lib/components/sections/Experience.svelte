<script lang="ts">
  import Node from '$lib/components/Node.svelte';
  import { techArr, type IconMetadata } from '$lib/data';

  const radius = 150;
  const nodes: Array<IconMetadata> = techArr;
  const nodeCount = techArr.length;

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < nodeCount; i++) {
    const y = (1 - (i / (nodeCount - 1)) * 2) * radius; // Distribute nodes along the y-axis from -radius to radius
    const latitude = Math.asin(y / radius); // Latitude angle
    const longitude = goldenAngle * i; // Longitude angle

    const x = Math.cos(longitude) * Math.cos(latitude) * radius;
    const z = Math.sin(longitude) * Math.cos(latitude) * radius;
    techArr[i] = { ...techArr[i], x: x, y: y, z: z };
  }
</script>

<section id="experience">
  <div class="container">
    {#each nodes as node}
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
