<script lang="ts">
</script>

<div class="card" />

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
        background: linear-gradient(180deg, transparentize(white, 0.96) 0%, transparentize(vars.$color-tertiary, 0.9)  100%)
        color: white

        &:hover
            background: linear-gradient(320deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
</style>
