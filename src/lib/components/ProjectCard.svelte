<script lang="ts">
  import Icon from 'svelte-icons-pack';
  import type { RepoModel } from '../../routes/proxy+page.server';
  import VscRepoForked from 'svelte-icons-pack/vsc/VscRepoForked';
  import Star from 'svelte-icons-pack/vsc/VscStarEmpty';

  export let item: RepoModel;
</script>

<a class="card" href={item.url} target="_blank">
  <div class="top">
    {#if item.isFork}
      <Icon src={VscRepoForked} size="16" />
    {/if}
    <span>{item.name}</span>
  </div>
  <p>{item.description}</p>
  <div class="bottom">
    <div class="bottom-container">
      <Icon src={VscRepoForked} size="16" />
      <span>{item.forks}</span>
    </div>
    <div class="bottom-container">
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
        padding: 1rem 2rem
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

        .bottom
            display: flex
            justify-content: space-between
            .bottom-container
                display: flex
                align-items: center
                gap: 0.5rem

        &:hover
            background: linear-gradient(320deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
            transform: scale(1.02)


</style>
