<script lang="ts">
  import About from '$lib/components/sections/About.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import Experience from '$lib/components/sections/Experience.svelte';
  import Landing from '$lib/components/sections/Landing.svelte';
  import Projects from '$lib/components/sections/Projects.svelte';
  import type { Response } from './+page.server';

  interface Props {
    data: Response;
  }

  let { data }: Props = $props();
</script>

<Landing />
<About />
<Experience />
<Projects {data} />
<Contact />
