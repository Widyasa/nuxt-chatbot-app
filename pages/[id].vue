<script setup lang="ts">
import ChatMessage from "~/components/ui/chat-message.vue";
import InputPrompt from "~/components/ui/input-prompt.vue";
definePageMeta({
  layout: 'home-layout',
})
const chatStore = useChat()
await chatStore.getMessagesByChat()
const scrollOverFlow = () => {
  const overflow = document.getElementById("overflow")
  overflow?.scrollTo(0, overflow.scrollHeight,);
}
</script>

<template>
  <div class="relative">
    <div id="overflow" class="overflow-auto overflow-chat h-[70vh] relative pt-20">
      <div class="flex justify-center section pb-[50vh]">
        <div class="mx-auto w-[850px]">
          <div class="" v-for="(item, index) in chatStore.chats" :key="index">
            <chat-message role="user" :message="item.question" />
            <chat-message role="assistant" :message="item.answer" />
          </div>
          <chat-message role="user" v-if="chatStore.messages" :message="chatStore.messages" />
          <div v-if="chatStore.isLoading" class="loader"></div>
          <chat-message role="assistant" v-if="chatStore.answer" :message="chatStore.answer" />
        </div>
      </div>
    </div>
    <div class="mt-2 w-full">
      <div class="w-full">
        <div class="w-[800px] mx-auto">
          <input-prompt @auto-scroll="scrollOverFlow"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>