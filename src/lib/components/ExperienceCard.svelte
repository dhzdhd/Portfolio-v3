<script lang="ts">
  import { expArr, type ExperienceType } from '$lib/data';

  interface Props {
    title: string;
    type: ExperienceType;
  }

  let { title, type }: Props = $props();
</script>

<div class="card">
  <h3>{title}</h3>
  {#each expArr.filter((val) => val.type === type) as item}
    <div class="content">
      <span>{item.name}</span>
      <img src={item.icon} alt={item.name} />
    </div>
  {/each}
</div>

<style lang="sass">
    @use "../../styles/vars"
    @use "../../styles/utils"

    .card
        display: flex
        flex-direction: column
        width: 100%
        padding: 2rem 2rem
        gap: 2rem
        border-radius: 2rem
        background: linear-gradient(180deg,transparentize(white, 0.96) 0%,transparentize(vars.$color-tertiary, 0.9)  100%)
        color: vars.$color-primary-dark

        h3
            font-size: 1.2rem

        .content
            width: 100%
            display: flex
            flex-direction: row
            justify-content: space-between
            gap: 2rem

            span
                font-size: 1rem
                text-transform: capitalize

            img
                width: 20px
                height: 20px

        @media (prefers-color-scheme: dark)
            color: vars.$color-primary-light
</style>
