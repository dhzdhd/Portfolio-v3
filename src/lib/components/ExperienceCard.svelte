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
        gap: 1.8rem
        background: rgba(255, 255, 255, 0.009)
        backdrop-filter: blur(3px)
        -webkit-backdrop-filter: blur(3px)
        border: 1px solid rgba(255, 255, 255, 0.2)
        border-radius: 2rem
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3)
        color: vars.$color-primary-dark

        h3
            font-size: vars.$font-h3

        .content
            width: 100%
            display: flex
            flex-direction: row
            justify-content: space-between

            span
                font-size: vars.$font-para
                text-transform: capitalize

            img
                width: 20px
                height: 20px

        @media (prefers-color-scheme: dark)
            color: vars.$color-primary-light
</style>
