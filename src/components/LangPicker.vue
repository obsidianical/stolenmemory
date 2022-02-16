<template lang="pug">
#lang-picker 
    span.lp-label Language:
    button( @click="setLanguage('de')" title="Deutsch/German" ) DE
    button( @click="setLanguage('en')" title="English" ) EN
    button( @click="setLanguage('pl')" title="Polish" disabled ) PL
</template>

<script lang="ts" setup>
import { setLanguage } from "../ts/lang";
</script>

<style lang="sass">
@import "../style/var"

#lang-picker
    position: fixed
    top: 2vh
    left: 2vh
    *
        font-size: 1.1rem
        color: $txt-active-nav
    span
        font-family: $header-font
    button
        border: none
        background-color: #00000000
        padding: 10px
        cursor: pointer
        &:hover
            color: $txt-sec
        &:disabled
            color: $txt-disabled
            cursor: not-allowed
    @media only screen and (min-width: 320px) and (max-width: 480px)
        width: 100%
        top: 0
        left: 0
        padding: 0.4rem
        background-color: #1d20218f
        backdrop-filter: blur(2rem)
        @supports not (backdrop-filter: blur)
            background-color: #1d2021ef
</style>
