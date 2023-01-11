<script lang="ts">
	export let text: string;
	export let alignment: 'left' | 'right';
</script>

<div>
	<h2>{text}</h2>
</div>

<style lang="sass">
    @use "../../styles/vars"

    div
        display: flex

        h2
            color: vars.$color-primary-light


</style>
