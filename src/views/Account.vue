<template>
  <div class="font-mono font-bold text-center">
    <div>
      <h1 class="text-indigo-700 mb-5">ACCOUNT</h1>
    </div>
    <div class="flex h-screen bg-indigo-700">
      <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
      <header>
        <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-dragon.png" />
      </header>   
      <form @submit.prevent="submitForm">
        <div>
          <label class="block mb-2 text-indigo-500" for="username">Username</label>
          <input v-model="username" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username">
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Password</label>
          <input v-model="password" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password">
        </div>
        <div>          
          <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Submit">
        </div>       
      </form>  
      <footer>
        <a class="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
        <a class="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
      </footer>   
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const submitForm = () => {
  console.log('Username:', username.value);
  console.log('Password:', password.value);
};
</script>

<style lang="scss" scoped>
</style>
