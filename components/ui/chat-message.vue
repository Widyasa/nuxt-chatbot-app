<script setup lang="ts">
defineProps(['role', 'message'])
</script>

<template>
  <div :class="role === 'assistant' ? 'justify-start' : 'justify-end'" class="flex">
    <div :class="role === 'user' ? 'bg-primary/[12%]' : ''" class=" text-[#ececec] p-3 rounded-full max-w-[70%]">
      <MDC tag="article" :value="message"></MDC>
    </div>
  </div>
</template>

<style scoped>

</style>