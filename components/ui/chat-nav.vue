<script setup lang="ts">
defineProps({
  navName : {require: true, type: String},
  navRoute:  {require:true, type:String}
})
const emit = defineEmits(['update-data', 'delete-data'])
</script>

<template>
  <NuxtLink :to="navRoute" class="nav-link flex justify-between items-center gap-2" active-class="active">
    {{ navName }}
    <div class="flex gap-3 items-center">
      <button @click="emit('update-data')">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9 15v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zm10.6-9.2l1.425-1.4l-1.4-1.4L18.2 4.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925L7 9.925V17h7.05L21 10.05V19q0 .825-.587 1.413T19 21z" />
        </svg>
      </button>
      <button @click="emit('delete-data')">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" />
        </svg>
      </button>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>