<script lang="ts">
  import { OrbitControls, PerspectiveCamera, AmbientLight, DirectionalLight } from '@threlte/core';
  import { GLTF } from '@threlte/extras';
  import { spring } from 'svelte/motion';

  const scale = spring(3);
</script>

<PerspectiveCamera position={{ x: -6, y: 2, z: 3 }} fov={25}>
  <OrbitControls
    autoRotate
    enableDamping
    enablePan={false}
    enableRotate={false}
    enableZoom={false}
  />
</PerspectiveCamera>

<AmbientLight />
<DirectionalLight shadow position={{ x: 30, y: 20, z: 0 }} />
<GLTF
  scale={$scale}
  on:pointerenter={() => ($scale = 5)}
  on:pointerleave={() => ($scale = 3)}
  url={'src/lib/assets/3d/macbook2k.glb'}
/>
