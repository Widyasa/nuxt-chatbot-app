<script setup lang="ts">
import ChatMessage from "~/components/ui/chat-message.vue";
import InputPrompt from "~/components/ui/input-prompt.vue";

definePageMeta({
  layout: 'home-layout',
})
</script>

<template>
  <div class="mx-[20%] mt-20">
    <div class="overflow-auto">
      <chat-message role="user" message="write me a poem about javascript" />
      <chat-message role="assistant" message="" />
    </div>
    <div class="fixed bottom-8 w-[800px]">
      <input-prompt />
    </div>
  </div>
</template>

<style scoped>

</style>