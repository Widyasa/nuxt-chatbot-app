<script setup lang="ts">
const emit = defineEmits(['auto-scroll'])
const message = ref()
const chatStore = useChat()
const handleMessage = () => {
  chatStore.chat(message.value)
  emit("auto-scroll")
  message.value = null
}
</script>

<template>
  <div class="bg-primary/[6%] p-4 rounded-xl w-full">
    <textarea rows="5" v-model="message" :disabled="chatStore.isResponding" placeholder="Message to AI" class="placeholder-primary/[64%] text-primary bg-transparent w-full focus:outline-none resize-none"/>
    <div class="flex justify-end">
      <button :disabled="!message" class="btn btn-primary p-0 size-9 flex justify-center items-center" @click="handleMessage">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
        </svg>
      </button>
    </div>
  </div>

</template>

<style scoped>

</style>