<script lang="ts">
  interface Props {
    title: string;
    url: string;
  }

  let { title, url }: Props = $props();
</script>

<a href={url} target="_blank" rel="noreferrer noopener">{title}</a>

<style lang="sass">
    @use "../../styles/vars"

    a
        display: inline-block
        text-decoration: none
        color: vars.$color-tertiary

        &::after
            content: ''
            display: block
            height: 0.1rem
            width: 0
            background-color: vars.$color-tertiary
            transition: width 0.5s

        &:hover::after
            width: 100%

    @media (prefers-color-scheme: dark)
        a
            color: vars.$color-accent

            &::after
                background-color: vars.$color-accent

</style>
