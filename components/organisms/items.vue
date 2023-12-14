<template>
  <section>
    <article v-for="item in items">
      <NuxtLink :to="`/items/${item.id}`" @click.native="active = item.id">
        <img
          :src="`https://picsum.photos/id/${item.id}/200/300`"
          alt=""
          :class="{ active: active === item.id }"
        />
      </NuxtLink>
      <p class="title" :class="{ active: active === item.id }">タイトル</p>
    </article>
  </section>
</template>

<script setup>
const active = useState();
const items = ref([
  {
    id: 237,
  },
  {
    id: 238,
  },
  {
    id: 239,
  },
  {
    id: 240,
  },
]);
</script>

<style scoped>
img.active {
  view-transition-name: selected-item;
  contain: layout;
}
title.active {
  view-transition-name: title;
  contain: layout;
}
</style>
