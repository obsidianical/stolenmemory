<template lang="pug">
header
	h1 #StolenMemory
	h2 Help people find their lost ancestors
#nav 
	.navitem( v-for="p in peopleList" )
		router-link( :to="`/people/${p.id}`" ) {{ p.name }}
router-view
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { getPeople, Person } from "./ts/people_api.ts";

let peopleList: ref<Person[]> = ref([]);

onBeforeMount(async () => {
  peopleList.value = await getPeople();
});
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
