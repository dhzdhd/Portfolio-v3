<script lang="ts"></script>

<section>
    <div class="top-left-gradient"></div>
    <div>
        <h1>Hello</h1>
        <h2>I am <span>dhzdhd</span></h2>
    </div>
    <div class="bottom-right-gradient"></div>
</section>

<style lang="sass">
    @use '../../../styles/vars'

    section
        height: 100%
        max-width: 100vw
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center

        .top-left-gradient
            position: absolute
            background: linear-gradient(135deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
            filter: blur(3rem)
            height: 20rem
            width: 20rem
            top: -5rem
            left: -10rem
            border-radius: 50%

        div

            h1
                color: transparentize(vars.$color-primary-light, 0.3)
            h2
                color: vars.$color-primary-light
                font-size: 3rem

                span
                    background: linear-gradient(135deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
                    -webkit-background-clip: text
                    -webkit-text-fill-color: transparent


        .bottom-right-gradient
            position: absolute
            background: linear-gradient(135deg, vars.$color-accent 0%, vars.$color-tertiary 100%)
            filter: blur(3rem)
            height: 5rem
            width: 5rem
            top: 75%
            right: 0rem
            border-radius: 50%

</style>
