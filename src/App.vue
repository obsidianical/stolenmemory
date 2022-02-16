<template lang="pug">
header
  LangPicker
  h1 
    a(
      href="https://arolsen-archives.org/en/learn-participate/initiatives-projects/stolenmemory/"
    ) #StolenMemory
  h2 {{ langData["sub-heading"] }}
  p.request {{ langData.request }}
  p.notice( v-html="langData.notice")
  #nav 
    h3 {{ langData["read-research"] }}
    .people-container
      .navitem(v-for="p in peopleList")
          router-link(:to="`/people/${p.id}`") {{ p.name }}
router-view
Footer
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { getPeople, Person } from "./ts/people_api";
import { langInit, langData } from "./ts/lang";

import LangPicker from "./components/LangPicker.vue";
import Footer from "./components/Footer.vue";

let peopleList = ref<Person[]>();

onBeforeMount(async () => {
  langInit();
  peopleList.value = await getPeople();
});
</script>

<style lang="sass">
@import "style/var"

h1, h2, h3, h4, h5, h6
    font-family: $header-font, sans-serif

html, body
    margin: 0
    padding: 0
    background-color: $bg-pri

*
    box-sizing: border-box

#app
    header
        background-color: $bg-sec
        padding: 75px
        @media only screen and (min-width: 320px) and (max-width: 480px)
            padding: 3rem 1rem
        text-align: center
        h1
            a
                font-size: 3rem
                font-family: $header-font, sans-serif
                color: $txt-pri
                text-decoration: none
                @media only screen and (min-width: 320px) and (max-width: 480px)
                    font-size: 2rem
        h2
            font-size: 2rem
            color: $txt-sec
            @media only screen and (min-width: 320px) and (max-width: 480px)
                font-size: 1.5rem
        p
            font-family: $textbody-font
            color: $txt-sec
            width: 600px
            margin: 5rem auto
            @media only screen and (min-width: 320px) and (max-width: 480px)
                width: unset
                margin: 6rem 0
                text-align: left
        .request
            font-size: 1.25rem
        .notice
            color: $txt-active-nav
            font-size: 0.8rem
            width: 500px
            @media only screen and (min-width: 320px) and (max-width: 480px)
                width: unset
                margin: 13rem 0 5rem 0
        #nav
            margin-top: 6rem
            h3
                color: $txt-sec
                text-align: center
                font-size: 2rem
                margin-bottom: 0.5rem
            .people-container
                display: flex
                justify-content: center
                flex-wrap: wrap
                .navitem
                    margin: 0.75rem
                    a
                        font-size: 1.4rem
                        color: $txt-pri
                        font-family: $header-font
                        text-decoration: none
                        .active
                            color: $txt-active-nav
    .person
        width: 750px
        margin: 5rem auto
        h1, h2, h3, h4, h5, h6
            color: $txt-pri
        p, a
            color: $txt-sec
            font-family: $textbody-font
            font-size: 1.1rem
            margin-top: 2rem
        @media only screen and (min-width: 320px) and (max-width: 480px)
            width: unset
            margin: 3.5rem 1.5rem
            img
                width: 100%

a
    color: $txt-link
    &:visited
        color: $txt-link-visited
</style>
