<template>
	<div>
		<div>
			<h1 class="text-2xl font-bold mb-5">할일 앱🗒</h1>
			<span>
				<input class="h-7 m-1 border-2 border-solid border-gray-600 rounded" type="text" v-model="newTodo">
			</span>
			<span>
				<button class="p-1 mb-2 bg-green-500 hover:bg-green-700 text-slate-50 rounded" @click="addTodo">추가</button>
			</span>
		</div>

		<div v-for="todo in todos" :key="todo.id">
			<span @click="toggleTodo(todo)">
				<span># {{ todo.id }} / </span>
				<span class="m-2">{{ todo.title }}</span>
				<input type="checkbox" :checked="todo.completed" />
				<button class="m-1 p-1 bg-pink-500 hover:bg-pink-700 text-slate-50 rounded" @click="delTodo(todo.id)">삭제</button>
			</span>

			<span>
			</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'


const todos = reactive([])
const loginUserId = ref(1)
const newTodo = ref('')
const clearTodo = () => {
	newTodo.value = ''
}

function getTodos() {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(res => res.json())
		.then(json => {
			// todos.push(...json)
			console.log(json)
			for (let i = 0; i < json.length; i++) {
				if (json[i].userId === loginUserId.value) {
					todos.push(json[i])
				}
			}
		})
}

// 할일 추가
function addTodo() {
	if (newTodo.value === '') {
		alert('할일을 입력해주세요.')
		return
	}
	// 마지막 리스트 ID정의
	const maxId = todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
	
	const todo = {
		// id에 마지막 할일 maxId + 1로 설정해둠.
		id: maxId + 1,
		title: newTodo.value,
		completed: false,
		userId: loginUserId.value
	}
	todos.push(todo)

	// 추가후, input창 초기화
	if (newTodo) {
		clearTodo()
	}
}

// 할일 수정
function toggleTodo(item) {
	item.completed = !item.completed
}

// 할일 삭제
function delTodo(id) {
	const index = todos.findIndex(todo => todo.id === id)
	if (index !== -1) {
		todos.splice(index, 1)
	}
	console.log(todos)
}

onMounted(() => {
	getTodos()
}) 

</script>

<style lang="scss" scoped>
</style>
