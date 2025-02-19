<script setup lang="ts">

import ChatNav from "~/components/ui/chat-nav.vue";
import Modal from "~/components/ui/modal.vue";
import DeleteModal from "~/components/ui/delete-modal.vue";
const visibleUpdateModal = ref(false)
const visibleDeleteModal = ref(false)
const chatStore = useChat()
onMounted(async () => {
    await chatStore.getAllChat()
})
</script>

<template>
  <div class="p-8">
    <p class="text-center w-full border-b pb-5 border-b-[#212121]">
      Logo
    </p>
    <div class=" mt-8">
      <form @submit.prevent="chatStore.createChat()">
        <button type="submit" class="btn btn-primary w-full">Add new chat</button>
      </form>
    </div>
    <div class="flex flex-col mt-9">
      <chat-nav v-for="(item, index) in chatStore.allChat"  :key="index" :id="item.id" :nav-route="`/${item.id}`" :nav-name="item.name" @update-data="visibleUpdateModal = true" @delete-data="visibleDeleteModal = true"/>
    </div>
  </div>
  <modal @close-modal="visibleUpdateModal = false" v-model:visible="visibleUpdateModal" />
  <delete-modal @close-modal="visibleDeleteModal = false" v-model:visible="visibleDeleteModal" />
</template>

<style scoped>

</style>