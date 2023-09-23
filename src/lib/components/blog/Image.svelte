<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<img {src} {alt} />

<style lang="sass">
img
    width: 100%
    margin-bottom: 2rem
    transition-duration: 300ms
    display: flex
    max-height: 25rem
    object-fit: cover

    &:hover
        transform: scale(1.1)
</style>
