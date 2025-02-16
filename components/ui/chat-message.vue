<script setup lang="ts">
defineProps(['role', 'message'])
</script>

<template>
  <div :class="role === 'assistant' ? 'justify-start' : 'justify-end'" class="flex">
    <div :class="role === 'user' ? 'bg-primary/[12%]' : ''" class=" text-[#ececec] p-4 rounded-full max-w-[70%]">
      <p class="text-sm">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>