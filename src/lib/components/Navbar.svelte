<script lang="ts">
  import { stopPropagation } from 'svelte/legacy';

  import { Icon } from 'svelte-icons-pack';
  import { AiOutlineMenu as Menu } from 'svelte-icons-pack/ai';
  import { fly } from 'svelte/transition';
  import { enabled } from '../../utils';

  let scrollY = $state(0);
  let isAtTop = $derived(scrollY < 5);

  const handleScroll = () => {
    scrollY = window.scrollY;
  };

  const links: { text: string; link: string }[] = [
    { text: 'About', link: '/#about' },
    { text: 'Experience', link: '/#experience' },
    { text: 'Projects', link: '/#projects' },
    { text: 'Contact', link: '/#contact' },
    { text: 'Blog', link: '/blog' }
  ];
</script>

<svelte:window onscroll={handleScroll} />

<nav class:blur-header={!isAtTop}>
  <button
    class="menu"
    onclick={stopPropagation(() => ($enabled = !$enabled))}
    style="transform: rotate({$enabled ? '90deg' : '0'})"
  >
    <Icon src={Menu} size={'1.8rem'} color={'white'} />
  </button>
  {#if $enabled}
    <ul transition:fly={{ x: -200 }} class="mobile">
      {#each links as item}
        <li>
          <a href={item.link}>{item.text}</a>
        </li>
      {/each}
    </ul>
  {/if}
  <ul class="desktop">
    {#each links as item}
      <li>
        <a href={item.link}>{item.text}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="sass">
    @use '../../styles/vars'
    @use '../../styles/utils'

    nav
        padding: 0rem 2rem
        margin-top: 1rem
        border-radius: 2rem
        position: relative

        &.blur-header::before
            display: none
            content: ""
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            backdrop-filter: blur(100px)
            border-radius: 2rem
            z-index: -1

        .menu
            display: flex
            position: fixed
            top: 1rem
            left: 1rem
            z-index: 100
            border: none
            background-color: transparent
            transition-duration: 300ms
            backdrop-filter: blur(100px)
            border-radius: 0.5rem
            padding: 0.4rem

        .mobile
            position: fixed
            display: flex
            flex-direction: column
            border-radius: 2rem
            left: 1rem
            padding: 1rem
            gap: 1rem
            top: 5rem
            @include utils.blur-card(false, 100px, 1rem)

        .desktop
            display: none
            flex-direction: row
            justify-content: right
            align-items: center
            gap: 2rem
            width: 100%
            height: 100%

        .mobile, .desktop
            li
                list-style: none
                width: fit-content

                a
                    text-decoration: none
                    color: vars.$color-primary-dark

                    &:hover
                        color: vars.$color-tertiary

                @media (prefers-color-scheme: dark)
                    a
                        color: vars.$color-primary-light

                        &:hover
                            color: vars.$color-accent

        @media (min-width: vars.$md)
            &.blur-header::before
                display: flex

            .menu
                display: none

            .mobile
                display: none

            .desktop
                display: flex
</style>
