<script lang="ts">
  import { AiOutlineWarning as Warning } from 'svelte-icons-pack/ai';
  import { capitalize } from '../../../utils';
  import type { IconType } from 'svelte-icons-pack';
  import { Icon } from 'svelte-icons-pack';
  import { BsQuestionCircle as Note, BsMarkerTip as Tip } from 'svelte-icons-pack/bs';
  type NoteType = 'note' | 'tip' | 'important' | 'warning' | 'caution';

  interface Props {
    type: NoteType;
    desc: string;
  }

  let { type, desc }: Props = $props();

  const iconMap: Record<NoteType, IconType> = {
    warning: Warning,
    caution: Warning,
    important: Warning,
    note: Note,
    tip: Tip
  };
</script>

<div class={`container ${type}`}>
  <div class="hr"></div>
  <div class="title">
    <div class="icon">
      <Icon size="1.8rem" src={iconMap[type]} />
    </div>
    <span>{capitalize(type)}</span>
  </div>
  <p>{desc}</p>
</div>

<style lang="sass">
  @use "../../../styles/vars"

  .container
    display: grid
    grid-template-columns: min-content auto
    grid-template-rows: min-content auto
    border: solid
    border-width: 0.1rem
    border-radius: 1rem
    border-color: vars.$color-tertiary
    color: vars.$color-tertiary

    .hr
        grid-row: span 2
        width: 3rem
        background-color: vars.$color-tertiary
        border-radius: 1rem 0rem 0rem 1rem
        border-color: inherit
        height: 100%

    .title
        width: fit-content
        display: flex
        gap: 0.5rem
        height: 2rem
        padding: 2rem 1rem
        color: inherit

        .icon
            height: 2rem
            width: 2rem
            display: flex
            align-items: center
            justify-content: center
            place-self: center

        span
            color: inherit
            font-size: 2rem
            place-self: center

    p
      padding: 0rem 1rem 1rem 1rem

  .caution
    color: vars.$color-caution
    border-color: vars.$color-caution

    &> .hr
        background-color: vars.$color-caution

  .warning
    color: vars.$color-warning
    border-color: vars.$color-warning

    &> .hr
        background-color: vars.$color-warning

  .note
    color: vars.$color-note
    border-color: vars.$color-note

    &> .hr
        background-color: vars.$color-note

  .important
    color: vars.$color-important
    border-color: vars.$color-important

    &> .hr
        background-color: vars.$color-important

  .tip
    color: vars.$color-tip
    border-color: vars.$color-tip

    &> .hr
        background-color: vars.$color-tip



</style>
