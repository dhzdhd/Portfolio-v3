<script lang="ts">
  interface Props {
    src: string;
    alt: string;
    position?: 'start' | 'between';
  }

  let { src, alt, position = 'start' }: Props = $props();
</script>

<div class={position}>
  <img {src} {alt} />
</div>

<style lang="sass">
.start
  margin-bottom: 2rem

.between
  margin: 2rem 0rem

div
  display: flex
  justify-content: center

  img
    width: min(calc(100vw - 4rem), 100%)
    transition-duration: 300ms
    height: 25rem
    object-fit: contain

    &:hover
        transform: scale(1.1)
</style>
