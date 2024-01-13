<template>
	<div>
		<h1 class="font-bold text-2xl text-center mb-5">News App📣</h1>
		<div v-for="SingleNews in news" :key="SingleNews.id">
			<a class="text-neutral-500 hover:text-green-500 text-sm" :href="SingleNews.url">{{ SingleNews.comments_count }} #  {{ SingleNews.title }}</a>
			<span> / {{ SingleNews.time_ago }} / </span>
			<span>ID: {{ SingleNews.user }}</span>
		</div>
	</div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'

	const news = reactive([])

	// function getNews() {
	// 	fetch('https://api.hnpwa.com/v0/news.json?sorting')
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			console.log(json)
	// 			news.push(...json)
	// 		})
	// }

	async function getNews() {
		try {
			const response = await axios.get('https://api.hnpwa.com/v0/news.json?sorting')
			news.push(...response.data)
		} catch (error) {
			console.error('Error fetching news:', error)
		}
	}

	onMounted(() => {
		getNews()
	})
</script>

<style lang="scss" scoped>

</style>