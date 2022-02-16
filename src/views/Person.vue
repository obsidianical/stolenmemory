<template lang="pug">
.person 
	vue-markdown( :source="md")
</template>

<script lang="ts" setup>
import { onBeforeUpdate, ref } from "vue";
import { useRoute } from "vue-router";
import VueMarkdown from "vue-markdown-render";
import { fetchPersonMd } from "../ts/people_api.ts";

const route = useRoute();
const md: ref<string> = ref("");

onBeforeUpdate(async () => {
  md.value = await fetchPersonMd(route.params.id);
});
</script>

<style lang="sass"></style>
