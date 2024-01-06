<template>
	<div>
		<div class="font-extralight text-center w-4/12 mx-auto p-10 bg-my-color1">
			<h1 class="font-bold mb-5">카운트 앱</h1>
			<h1 class="font-bold text-slate-50">Counter: {{ counter }}</h1>
			<div class="">
				<button class="m-2 text-slate-50 bg-gray-400 rounded-full w-7 h-7 font-bold" @click="increase">+</button>
				<button class="font-bold" @click="reset">Reset</button>
				<button class="m-2 bg-indigo-400 rounded-full w-7 h-7" @click="decrease">➖</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

function increase() {
	counter.value++
}

function decrease() {
	counter.value--
}

function reset() {
	counter.value = 0
}

</script>

<style lang="scss" scoped>

</style>