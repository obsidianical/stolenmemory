<template lang="pug">
header
	h1 
		a(href="https://arolsen-archives.org/en/learn-participate/initiatives-projects/stolenmemory/") #StolenMemory
	h2 Help people find their lost ancestors
	p.request.
		When reading the information below, we ask that if you feel like you know anything about a person, their family or any other related information that you contact us and send the information. Contact information can be found in the footer of this website. 
	p.notice.
		This is NOT the official website of the project #StolenMemory; this is a website developed by a group of students participating in the project. Click <a href="https://arolsen-archives.org/en/learn-participate/initiatives-projects/stolenmemory/"> this link </a> for the official website of the project and <a href="https://arolsen-archives.org/"> this link </a> for the website of the Arolsen Archives.
	#nav 
		h3 Read our research on:
		.people-container
			.navitem( v-for="p in peopleList" )
				router-link( :to="`/people/${p.id}`" ) {{ p.name }}
router-view
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { getPeople, Person } from "./ts/people_api";

let peopleList = ref<Person[]>();

onBeforeMount(async () => {
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
		text-align: center
		h1
			a
				font-size: 3rem
				font-family: $header-font, sans-serif
				color: $txt-pri
				text-decoration: none
		h2
			font-size: 2rem
			color: $txt-sec
		p
			font-family: $textbody-font
			color: $txt-sec
			width: 600px
			margin: 5rem auto
		.request
			font-size: 1.25rem
		.notice
			color: $txt-active-nav
			font-size: 0.8rem
			width: 500px
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
		color: $txt-sec
		font-family: $textbody-font
		p, a
			font-size: 1.25rem
			margin-top: 2rem

a
	color: $txt-link
	&:visited
		color: $txt-link-visited
</style>
