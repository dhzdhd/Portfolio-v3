<script lang="ts">
  import { stopPropagation } from 'svelte/legacy';

  import { Icon } from 'svelte-icons-pack';
  import { AiOutlineMenu as Menu } from 'svelte-icons-pack/ai';
  import { fly } from 'svelte/transition';
  import { enabled } from '../../utils';
</script>

<nav>
  <button
    class="button"
    onclick={stopPropagation(() => ($enabled = !$enabled))}
    style="transform: rotate({$enabled ? '90deg' : '0'})"
  >
    <Icon src={Menu} size={'2rem'} color={'white'} />
  </button>
  {#if $enabled}
    <ul transition:fly={{ x: -200 }} class="mobile">
      <li>
        <a href="/#about">About</a>
      </li>
      <li>
        <a href="/#experience">Experience</a>
      </li>
      <li>
        <a href="/#projects">Projects</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
    </ul>
  {/if}
  <ul class="desktop">
    <li>
      <a href="/#about">About</a>
    </li>
    <li>
      <a href="/#experience">Experience</a>
    </li>
    <li>
      <a href="/#projects">Projects</a>
    </li>
    <li>
      <a href="/#contact">Contact</a>
    </li>
    <li>
      <a href="/blog">Blog</a>
    </li>
  </ul>
</nav>

<style lang="sass">
    @use '../../styles/vars'

    nav
        .button
            display: flex
            position: absolute
            top: 1rem
            left: 1rem
            z-index: 100
            border: none
            background-color: transparent
            transition-duration: 300ms

        .mobile
            position: fixed
            display: flex
            flex-direction: column
            border-radius: 2rem
            left: 1rem
            padding: 2rem
            gap: 1rem
            top: 5rem
            border: solid 0.1rem vars.$color-primary-light
            background-clip: padding-box
            background: linear-gradient(180deg, transparentize(white, 0.96) 0%, transparentize(vars.$color-tertiary, 0.9)  100%)
            backdrop-filter: blur(10px)

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
            .button
                display: none

            .mobile
                display: none

            .desktop
                display: flex
                flex-direction: row

</style>
