<script setup lang="ts">

</script>

<template>
  <Dialog modal header="Delete Message" class="w-[600px] capitalize" :draggable=false>
    <p class="normal-case">
      Confirm Deletion of messages: Are you sure you want to delete this messages permanently? If you are sure, please click the delete button, otherwise you can cancel by clicking the cross above
    </p>
    <div class="flex justify-end gap-2 w-full mt-3">
      <button class="btn btn-primary">Delete Messages</button>
    </div>
  </Dialog>
</template>

<style scoped>

</style>