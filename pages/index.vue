<script setup lang="ts">
import ChatMessage from "~/components/ui/chat-message.vue";
import InputPrompt from "~/components/ui/input-prompt.vue";

definePageMeta({
  layout: 'home-layout',
})
const chatStore = useChat()
</script>

<template>
  <div class="mt-20">
    <div class="absolute  z-10 mx-[20%]">
      <div class="fixed bottom-8 w-[800px]">
        <input-prompt />
      </div>
    </div>
    <div class="overflow-auto max-h-[660px] relative">
      <div class="flex justify-center section">
        <div class="mx-[20%] w-[850px]">
          <div class="" v-for="(item, index) in chatStore.chats" :key="index">
            <chat-message role="user" :message="item.question" />
            <chat-message role="assistant" :message="item.response" />
          </div>
          <chat-message role="user" v-if="chatStore.messages" :message="chatStore.messages" />
          <chat-message role="assistant" v-if="chatStore.response" :message="chatStore.response" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>