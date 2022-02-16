<template lang="pug">
footer
    .col
        h1 Contact us
        p Discord: Obsidianical#0837
        p Mail: <a href="mailto:obsidianical@gmail.com">obsidianical@gmail.com</a>
    hr
    .col
        h1 Arolsen Archives
        a( href="https://arolsen-archives.org/" ) arolsen-archives.org
        a( href="https://collections.arolsen-archives.org/" ) Online Archive
        a( href="https://arolsen-archives.org/lernen-mitwirken/initiativen-projekte/stolenmemory/" ) #StolenMemory
    hr
    .col
        h1 Website credits
        p Framework: <a href="https://vuejs.org">Vue.js</a>
        p Markdown renderer: <a href="https://github.com/cloudacy/vue-markdown-render#readme">vue-markdown-render</a>
        p Web design & development by obsidianical
</template>

<script lang="ts" setup></script>

<style lang="sass">
@import "../style/var"

footer
    background-color: $bg-sec
    padding: 1.5rem 0
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    .col
        margin: 3rem
    hr
        display: none
    h1
        color: $txt-pri
        font-size: 1.25rem
        font-family: $header-font
    p, a
        font-size: 0.8rem
        font-family: $textbody-font
    p
        color: $txt-sec
    a
        color: $txt-link
        &:visited
            color: $txt-link-visited
    @media only screen and (min-width: 320px) and (max-width: 480px)
        grid-template-columns: 1fr
        hr
            display: block
            border: 1px solid $txt-muted
            width: 75%
            border-radius: 2px
        .col
            margin: 1.5
</style>
