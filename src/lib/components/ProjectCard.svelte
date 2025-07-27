<script lang="ts">
  import { Icon } from 'svelte-icons-pack';
  import type { RepoModel } from '../../routes/proxy+page.server';
  import { VscRepoForked as Fork } from 'svelte-icons-pack/vsc';
  import { VscStarEmpty as Star } from 'svelte-icons-pack/vsc';
  import { fly } from 'svelte/transition';

  interface Props {
    item: RepoModel;
  }

  let { item }: Props = $props();
</script>

<a transition:fly={{ y: 200, duration: 300 }} class="card" href={item.url} target="_blank">
  <div class="top">
    {#if item.isFork}
      <Icon src={Fork} size="16" />
    {/if}
    <span>{item.name}</span>
  </div>
  <p>{item.description ?? 'No description'}</p>
  <div class="bottom left">
    <span>{item.language ?? ''}</span>
    <div class="bottom-container center">
      <Icon src={Fork} size="16" />
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
        max-width: 100%
        height: 14rem
        padding: 0rem 2rem
        border-radius: 2rem      
        color: vars.$color-primary-dark
        transition-duration: 300ms
        text-decoration: none
        @include utils.blur-card(true)

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

            .center
                justify-self: center

            .right
                justify-self: right

        @media (prefers-color-scheme: dark)
            color: vars.$color-primary-light
</style>
