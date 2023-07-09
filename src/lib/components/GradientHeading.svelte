<script lang="ts">
  export let text: string | undefined = undefined;
  export let alignment: 'left' | 'right';
</script>

<div>
  {#if typeof text !== 'undefined'}
    {#if alignment === 'left'}
      <h2>{text}</h2>
      <span />
    {:else}
      <span />
      <h2>{text}</h2>
    {/if}
  {:else}
    <span />
  {/if}
</div>

<style lang="sass">
    @use "../../styles/vars"

    div
        display: flex
        width: 100%
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
