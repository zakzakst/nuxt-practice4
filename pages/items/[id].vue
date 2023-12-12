<template>
  <section>
    <img :src="`https://picsum.photos/id/${route.params.id}/200/300`" alt="" />
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>
h1 {
  view-transition-name: header;
}
img {
  view-transition-name: selected-item;
}
</style>

<style>
::view-transition-old(header),
::view-transition-new(header) {
  width: auto;
}
</style>
