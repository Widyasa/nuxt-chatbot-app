<script setup lang="ts">

</script>

<template>
  <Dialog modal header="Update Message" class="w-[600px] capitalize" :draggable=false>
    <div class="flex flex-col">
      <p class="text-primary">Message</p>
      <input type="text" class="input-text mt-2" value="tes" placeholder="tes">
      <div class="flex justify-end mt-8">
        <button class="btn btn-primary ">Save Change</button>
      </div>
    </div>
  </Dialog>
</template>

<style scoped>

</style>