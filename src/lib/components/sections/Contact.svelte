<script lang="ts">
  import { Icon } from 'svelte-icons-pack';
  import GradientHeading from '../GradientHeading.svelte';
  import { VscGithub as GitHub } from 'svelte-icons-pack/vsc';
  import { BsInstagram as Instagram } from 'svelte-icons-pack/bs';
  import { BsDiscord as Discord } from 'svelte-icons-pack/bs';

  interface ContactInfo {
    name: string;
    url: string;
    icon: any;
  }

  const contactArr: ContactInfo[] = [
    { name: 'github', url: 'https://github.com/dhzdhd', icon: GitHub },
    { name: 'instagram', url: 'https://www.instagram.com/dhzdhd_/', icon: Instagram },
    { name: 'discord', url: 'https://discordapp.com/users/670237058052390933', icon: Discord }
  ];
</script>

<section id="contact">
  <GradientHeading text={'Contact'} alignment={'right'} />
  <div class="container">
    {#each contactArr as item}
      <div class="card">
        <a href={item.url} target="_blank" aria-label={item.name}>
          <Icon src={item.icon} size="36px" />
        </a>
      </div>
    {/each}
  </div>
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        display: flex
        flex-direction: column
        padding: 5rem 0rem
        align-items: center
        gap: 2rem

        .container
            display: grid
            grid-template-columns: repeat(3, 1fr)
            gap: 3rem

            .card
                transition-duration: 300ms

                a
                    color: vars.$color-primary-dark

                    @media (prefers-color-scheme: dark)
                        color: vars.$color-primary-light

                &:hover
                    transform: translateY(-0.5rem)

</style>
