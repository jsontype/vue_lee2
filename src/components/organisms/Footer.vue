<template>
  <div class="text-center grid">
      <div class="">
        <div class="h-[70px] rounded border-5">
          &copy; Copyright <strong><span>{{ currentYear }}</span></strong>. Made By Lee.
        </div>
      </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const currentYear = ref('')

onMounted(() => {
  const year = new Date().getFullYear();
  currentYear.value = year;
})

</script>
