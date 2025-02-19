<script setup lang="ts">
defineProps(['role', 'message'])
</script>

<template>
  <div v-if="role === 'assistant'" class="justify-start flex w-full">
    <div class="p-3 w-full">
      <MDC tag="article" class="markdown-body" :value="message"></MDC>
    </div>
  </div>
  <div v-if="role === 'user'" class="flex justify-end">
    <div class="bg-primary/[12%] text-[#ececec] p-3 rounded-full">
      <p>{{message}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>