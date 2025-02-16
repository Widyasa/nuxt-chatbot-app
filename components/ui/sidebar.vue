<script setup lang="ts">

import ChatNav from "~/components/ui/chat-nav.vue";
import Modal from "~/components/ui/modal.vue";
import DeleteModal from "~/components/ui/delete-modal.vue";
const visibleUpdateModal = ref(false)
const visibleDeleteModal = ref(false)
</script>

<template>
  <div class="p-8">
    <p class="text-center w-full border-b pb-5 border-b-[#212121]">
      Logo
    </p>
    <div class=" mt-8">
      <button class="btn btn-primary w-full">Add new chat</button>
    </div>
    <div class="flex flex-col mt-9">
      <chat-nav nav-route="/" nav-name="Home" @update-data="visibleUpdateModal = true" @delete-data="visibleDeleteModal = true"/>
      <chat-nav nav-route="/chat/1" nav-name="Home 2" @update-data="visibleUpdateModal = true" @delete-data="visibleDeleteModal = true"/>
      <chat-nav nav-route="/chat/2" nav-name="Home 3" @update-data="visibleUpdateModal = true" @delete-data="visibleDeleteModal = true"/>
    </div>
  </div>
  <modal v-model:visible="visibleUpdateModal" />
  <delete-modal v-model:visible="visibleDeleteModal" />
</template>

<style scoped>

</style>