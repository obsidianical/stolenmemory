<template lang="pug">
.person 
	vue-markdown( :source="currentPersonMd")
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUpdate, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import VueMarkdown from "vue-markdown-render";
import { fetchPersonMd, currentPersonMd } from "../ts/people_api";

const route = useRoute();

onBeforeMount(async () => {
  await fetchPersonMd(route.params.id as string);
});
onBeforeUpdate(async () => {
  await fetchPersonMd(route.params.id as string);
});
</script>

<style lang="sass"></style>
