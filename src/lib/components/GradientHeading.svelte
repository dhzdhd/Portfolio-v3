<script lang="ts">
  interface Props {
    text?: string | undefined;
    alignment: 'left' | 'right';
  }

  let { text = undefined, alignment }: Props = $props();
</script>

<div>
  {#if typeof text !== 'undefined'}
    <h2>{text}</h2>
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
            font-size: vars.$font-h2
            color: vars.$color-primary-dark

            &:hover
                color: vars.$color-tertiary

        @media (prefers-color-scheme: dark)
            h2
                color: vars.$color-primary-light

                &:hover
                    color: vars.$color-accent

</style>
