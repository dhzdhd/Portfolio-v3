<script lang="ts">
  interface Props {
    text?: string | undefined;
    alignment: 'left' | 'right';
  }

  let { text = undefined, alignment }: Props = $props();
</script>

<div>
  {#if typeof text !== 'undefined'}
    {#if alignment === 'left'}
      <h2>{text}</h2>
      <span></span>
    {:else}
      <span></span>
      <h2>{text}</h2>
    {/if}
  {:else}
    <span></span>
  {/if}
</div>

<style lang="sass">
    @use "../../styles/vars"

    div
        display: flex
        width: min(calc(100vw - 4rem), 100%)
        flex-direction: row
        justify-content: space-between
        align-items: center
        gap: 2rem

        h2
            color: vars.$color-primary-dark

        span
            height: 0.5rem
            flex-grow: 1
            background: linear-gradient(135deg, vars.$color-accent 0%, vars.$color-tertiary 100%)

        @media (prefers-color-scheme: dark)
            h2
                color: vars.$color-primary-light

</style>
