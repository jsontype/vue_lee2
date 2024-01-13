<template>
	<div>
		<div>
			<h1 class="text-2xl font-bold mb-5">할일 앱🗒</h1>
			<span>
				<input class="h-7 m-1 border-2 border-solid border-gray-600 rounded" type="text" v-model="newTodo">
			</span>
			<span>
				<button class="p-1 m-1 bg-green-500 hover:bg-green-700 text-slate-50 rounded" @click="addTodo">추가</button>
			</span>
			<!-- 일괄삭제 기능 추가 -->
			<span>
				<button class="p-1 mb-2 bg-red-400 hover:bg-red-500	text-slate-50 rounded" @click="delSelected">일괄삭제</button>
			</span>
		</div>

		<div v-for="todo in todos" :key="todo.id">
			<span @click="toggleTodo(todo)">
				<span># {{ todo.id }} / </span>
				<span class="mr-1" :class="{ 'text-red-600': todo.completed && isChecked(todo.id), 'line-through': todo.completed && isChecked(todo.id) }">{{ todo.title }}</span>
				<!-- 항목체크 -->
				<input class="m-1 p-1" type="checkbox" @change="toggleChecked(todo.id)" />
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

// 항목 체크
const checkedTodos = ref([])
const isChecked = (id) => checkedTodos.value.includes(id);
const toggleChecked = (id) => {
	if(isChecked(id)) {
		checkedTodos.value = checkedTodos.value.filter((todoId) => todoId !== id)
	} else {
		checkedTodos.value.push(id)
	}
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

// 체크된 항목 삭제
function delSelected(id) {
  if (checkedTodos.value.length === 0) {
    alert('선택된 항목이 없습니다.');
    return;
  }

  checkedTodos.value.forEach(id => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  });
  checkedTodos.value = [];
}

</script>

<style lang="scss" scoped>
</style>
