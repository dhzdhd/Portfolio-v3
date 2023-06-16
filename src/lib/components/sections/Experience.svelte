<script lang="ts">
  import Node from '$lib/components/Node.svelte';
  import { techArr, type IconMetadata } from '$lib/data';
  import ExperienceCard from '../ExperienceCard.svelte';
  import GradientHeading from '../GradientHeading.svelte';

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
  <GradientHeading text={'Experience'} alignment={'right'} />
  <div class="expcard">
    <ExperienceCard title={'Languages'} />
    <ExperienceCard title={'Frameworks'} />
  </div>
  <div class="container">
    {#each nodes as node}
      <Node iconData={node} />
    {/each}
  </div>
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        display: flex
        flex-direction: column
        align-items: center
        gap: 2rem

        .expcard
            width: 100%
            display: flex
            gap: 2rem

        .container
            display: flex
            justify-content: center
            align-items: center
            margin: 5rem 0rem
            width: 200px
            height: 200px
            perspective: 5000px
            animation: rotate 20s infinite linear
            transform-style: preserve-3d

            @keyframes rotate
                from
                    transform: rotateY(0)
                to
                    transform: rotateY(1turn)
</style>
