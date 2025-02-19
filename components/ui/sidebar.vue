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
    <NuxtLink to="/" class="flex gap-3 items-center">
      <img src="https://otakotaku.com/asset/img/character/2023/10/himmel-651c32dd35013p.jpg" alt="" class="size-[40px] rounded-full aspect-square object-cover">
      <p class="">Himmel Chatbot</p>
    </NuxtLink>
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