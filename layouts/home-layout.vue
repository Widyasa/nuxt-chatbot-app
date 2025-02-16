<script setup lang="ts">

import Sidebar from "~/components/ui/sidebar.vue";
</script>

<template>
  <div class="bg-[#212121] text-[#ececec] h-screen">
    <div class="">
      <div class="grid grid-cols-12">
        <div class="col-span-2 p-0 bg-[#171717] h-screen">
          <Sidebar />
        </div>
        <div class="col-span-10">
          <div class="section">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>