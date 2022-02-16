<template lang="pug">
.person 
	vue-markdown( :source="md")
</template>

<script lang="ts" setup>
import { onBeforeMount, ref, Ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import VueMarkdown from "vue-markdown-render";
import { fetchPersonMd } from "../ts/people_api";

const route = useRoute();
const md: Ref<string> = ref("");

onBeforeMount(async () => {
  md.value = await fetchPersonMd(route.params.id as string);
});
onBeforeRouteUpdate(async () => {
  md.value = await fetchPersonMd(route.params.id as string);
});
</script>

<style lang="sass"></style>
