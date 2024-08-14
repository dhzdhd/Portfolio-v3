<script lang="ts">
  import { Icon } from 'svelte-icons-pack';
  import type { Response } from '../../../routes/+page.server';
  import GradientHeading from '../GradientHeading.svelte';
  import ProjectCard from '../ProjectCard.svelte';
  import { FiArrowDown as Down } from 'svelte-icons-pack/fi';
  import { spin } from '../../../utils';

  export let data: Response;
  let isVisible = false;
</script>

<section id="projects">
  <GradientHeading text={'Projects'} alignment={'left'} />
  <div class="project-grid">
    {#each data.highlighted as item}
      <ProjectCard {item} />
    {/each}
  </div>
  <button
    transition:spin|local={{ duration: 200, amount: 180, type: 'elasticOut' }}
    aria-label="Show more projects"
    on:click={() => (isVisible = !isVisible)}
    style="transform: rotate({isVisible ? '180deg' : '0'})"
  >
    <Icon src={Down} size="50px" />
  </button>
  <!-- FIXME Broken css due to content, not card -->
  {#if isVisible}
    <div class="project-grid">
      {#each data.repos as item}
        <ProjectCard {item} />
      {/each}
    </div>
  {/if}
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        display: flex
        flex-direction: column
        padding-top: 5rem
        max-width: 100vw
        align-items: center
        gap: 2rem

        .project-grid
            display: grid
            grid-template-columns: repeat(1, 1fr)
            gap: 1rem

            @media (min-width: vars.$md)
                grid-template-columns: repeat(2, 1fr)

            @media (min-width: vars.$xl)
                grid-template-columns: repeat(3, 1fr)

        button
            background-color: transparent
            outline: none
            border: none
            width: 50px
            height: 50px
            border-radius: 100%
            color: vars.$color-primary-dark
            font-weight: bold
            transition-duration: 300ms
            cursor: pointer

            &:hover
                background: linear-gradient(320deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
                color: vars.$color-primary-light

            @media (prefers-color-scheme: dark)
                color: vars.$color-primary-light
</style>
