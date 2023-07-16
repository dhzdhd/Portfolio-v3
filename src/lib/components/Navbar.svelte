<script lang="ts">
  import Icon from 'svelte-icons-pack';
  import A from 'svelte-icons-pack/ai/AiOutlineMenu';
  import { fly } from 'svelte/transition';
  import { enabled } from '../../utils';
</script>

<nav>
  <div
    transition:fly={{ x: -200 }}
    class="button"
    on:click|stopPropagation={() => ($enabled = !$enabled)}
  >
    <Icon src={A} size={'2rem'} color={'white'} />
  </div>
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

        .mobile
            position: fixed
            // margin: 0rem 2rem
            display: flex
            flex-direction: column
            border: solid 0.1rem white
            border-radius: 2rem
            left: 1rem
            padding: 2rem
            gap: 1rem
            top: 4rem

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
