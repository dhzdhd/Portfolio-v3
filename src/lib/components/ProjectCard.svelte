<script lang="ts">
  import Icon from 'svelte-icons-pack';
  import type { RepoModel } from '../../routes/proxy+page.server';
  import VscRepoForked from 'svelte-icons-pack/vsc/VscRepoForked';
  import Star from 'svelte-icons-pack/vsc/VscStarEmpty';
  import { fly } from 'svelte/transition';

  export let item: RepoModel;
</script>

<a transition:fly={{ y: 200, duration: 300 }} class="card" href={item.url} target="_blank">
  <div class="top">
    {#if item.isFork}
      <Icon src={VscRepoForked} size="16" />
    {/if}
    <span>{item.name}</span>
  </div>
  <p>{item.description ?? 'No description'}</p>
  <div class="bottom left">
    <span>{item.language ?? ''}</span>
    <div class="bottom-container center">
      <Icon src={VscRepoForked} size="16" />
      <span>{item.forks}</span>
    </div>
    <div class="bottom-container right">
      <Icon src={Star} size="16" />
      <span>{item.stars}</span>
    </div>
  </div>
</a>

<style lang="sass">
    @use "../../styles/vars"
    @use "../../styles/utils"

    .card
        display: grid
        grid-template-rows: repeat(3, 1fr)
        width: 100%
        height: 14rem
        padding: 0rem 2rem
        border-radius: 2rem
        background: linear-gradient(180deg, transparentize(white, 0.96) 0%, transparentize(vars.$color-tertiary, 0.9)  100%)
        color: white
        transition-duration: 300ms
        text-decoration: none

        .top
            display: flex
            align-items: center
            gap: 0.5rem
            font-size: 1.2rem

            span
                max-width: 50vw
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis

        p
            max-lines: 2
            text-overflow: ellipsis

        .bottom
            display: grid
            grid-template-columns: repeat(3, 1fr)
            align-items: center

            .bottom-container
                display: flex
                align-items: center
                gap: 0.5rem

            .left
                justify-self: start

            .center
                justify-self: center

            .right
                justify-self: right

        &:hover
            background: linear-gradient(320deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
            transform: scale(1.02)
</style>
