<script lang="ts">
    export let title: string;
    export let url: string;
</script>

<a href={url} target="_blank" rel="noreferrer noopener">{title}</a>

<style lang="sass">
    @use "../../styles/vars"

    a
        display: inline-block
        text-decoration: none
        color: vars.$color-accent

        &::after
            content: ''
            display: block
            height: 0.1rem
            width: 0
            background-color: vars.$color-accent
            transition: width 0.5s

        &:hover::after
            width: 100%

</style>
