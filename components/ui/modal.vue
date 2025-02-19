<script setup lang="ts">
const chatStore = useChat()
const emit = defineEmits(['close-modal'])
const updateData = async () => {
  await chatStore.updateChat(chatStore.chat.name)
  emit('close-modal')
}
</script>

<template>
  <Dialog modal header="Update Message" class="w-[600px] capitalize" :draggable=false>
    <div class="flex flex-col">
      <p class="text-primary">Message</p>
      <form action="" @submit.prevent="updateData" class="w-full">
        <input type="text"  class="input-text mt-2 w-full" v-model="chatStore.chat.name" placeholder="input chat name">
        <div class="flex justify-end mt-8">
          <button type="submit" class="btn btn-primary ">Save Change</button>
        </div>
      </form>
    </div>
  </Dialog>
</template>

<style scoped>

</style>